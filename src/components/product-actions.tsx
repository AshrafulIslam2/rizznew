"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import type { Product, ProductVideo } from "@/lib/products";
import { cldUrl, imgProps, W_DETAIL } from "@/lib/image";

/**
 * The colour the customer has picked, shared between the two halves of the
 * product page.
 *
 * The gallery and the size/colour picker are siblings under a server
 * component, so neither can hold the other's state. A context is the smallest
 * thing that lets picking "Black" swap the photographs without turning the
 * whole page into one giant client component.
 */
const SelectedColorContext = createContext<{
  color: string | null;
  setColor: (c: string | null) => void;
}>({ color: null, setColor: () => {} });

export function ProductColorProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<string | null>(null);
  return (
    <SelectedColorContext.Provider value={{ color, setColor }}>
      {children}
    </SelectedColorContext.Provider>
  );
}

export function useSelectedColor() {
  return useContext(SelectedColorContext);
}

export function ProductActions({ product }: { product: Product }) {
  const { addItem, count } = useCart();
  const router = useRouter();

  const MAX_QTY = 5;
  const variants = product.variants ?? [];

  // Default to first IN-STOCK variant (cheapest among in-stock), otherwise cheapest overall.
  const inStockVariants = variants.filter((v) => v.stock > 0);
  const cheapestInStock = inStockVariants.length
    ? inStockVariants.reduce((min, v) => ((v.salePrice ?? v.price) < (min.salePrice ?? min.price) ? v : min))
    : null;
  const cheapestVariant = cheapestInStock ?? (variants.length
    ? variants.reduce((min, v) => ((v.salePrice ?? v.price) < (min.salePrice ?? min.price) ? v : min))
    : null);

  const [selectedSize, setSelectedSize] = useState<string | null>(cheapestVariant?.size || null);
  const [selectedColor, setSelectedColor] = useState(
    (cheapestVariant && product.colors.find((c) => c.label === cheapestVariant.color))
      ?? product.colors[0]
      ?? { label: "", hex: "#8B7355" }
  );
  const [qty, setQty] = useState(1);

  // Publish the colour so the gallery can follow it.
  const { setColor: publishColor } = useSelectedColor();
  useEffect(() => {
    publishColor(selectedColor.label || null);
    // publishColor is a stable setState wrapper; only the label should re-run this.
  }, [selectedColor.label]); // eslint-disable-line react-hooks/exhaustive-deps
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  // All sizes/colors for a given color/size (combination exists).
  const sizesForColor = (color: string) => variants.filter((v) => v.color === color).map((v) => v.size);
  const colorsForSize = (size: string) => variants.filter((v) => v.size === size).map((v) => v.color);

  // Stock-aware: is this size in stock for the currently selected color?
  const isSizeInStock = (size: string) =>
    variants.some((v) => v.size === size && (selectedColor.label ? v.color === selectedColor.label : true) && v.stock > 0);

  // Stock-aware: is this color in stock for the currently selected size?
  const isColorInStock = (color: string) =>
    variants.some((v) => v.color === color && (selectedSize ? v.size === selectedSize : true) && v.stock > 0);

  function handleSelectSize(size: string) {
    if (!isSizeInStock(size)) return; // block click on out-of-stock size
    setError(false);
    const available = colorsForSize(size);
    if (available.length > 0 && !available.includes(selectedColor.label)) {
      // Switch to first in-stock color for this size, else any color
      const nextLabel = available.find((cl) =>
        variants.some((v) => v.size === size && v.color === cl && v.stock > 0)
      ) ?? available[0];
      const nextColor = product.colors.find((c) => c.label === nextLabel);
      if (nextColor) setSelectedColor(nextColor);
    }
    setSelectedSize(size);
    setQty(1);
  }

  function handleSelectColor(c: { label: string; hex: string }) {
    if (!isColorInStock(c.label) && variants.some((v) => v.color === c.label)) {
      // Color exists but all out of stock — still allow selection to show OOS state
    }
    const available = sizesForColor(c.label);
    if (available.length > 0 && selectedSize && !available.includes(selectedSize)) {
      // Switch to first in-stock size for this color, else any size
      const nextSize = available.find((s) =>
        variants.some((v) => v.size === s && v.color === c.label && v.stock > 0)
      ) ?? available[0];
      setSelectedSize(nextSize);
    }
    setSelectedColor(c);
    setQty(1);
  }

  const currentVariant =
    variants.find((v) => v.size === selectedSize && v.color === selectedColor.label)
    ?? cheapestVariant;

  const isOutOfStock = variants.length > 0 && (currentVariant == null || currentVariant.stock <= 0);

  const displayPrice = currentVariant ? (currentVariant.salePrice ?? currentVariant.price) : product.price;
  const displayOldPrice = currentVariant?.salePrice ? currentVariant.price : (product.oldPrice && product.oldPrice > displayPrice ? product.oldPrice : null);

  function handleAdd() {
    if (isOutOfStock) return;
    if (product.sizes.length > 0 && !selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: displayPrice,
      size: selectedSize ?? "",
      color: selectedColor.label,
      quantity: qty,
      image: product.images[0]
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    if (isOutOfStock) return;
    if (product.sizes.length > 0 && !selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: displayPrice,
      size: selectedSize ?? "",
      color: selectedColor.label,
      quantity: qty,
      image: product.images[0]
    });
    router.push("/brand/cart");
  }

  const fmt = (n: number) => `৳ ${n.toLocaleString("en-US")}`;

  return (
    <div className="space-y-6">
      {/* Price */}
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="font-serif text-4xl text-[var(--cream)]">{fmt(displayPrice)}</span>
        {displayOldPrice && (
          <>
            <span className="text-base text-[var(--muted)] line-through">{fmt(displayOldPrice)}</span>
            <span className="border border-[var(--gold-dim)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
              Save {fmt(displayOldPrice - displayPrice)}
            </span>
          </>
        )}
      </div>

      {/* Stock */}
      {currentVariant && currentVariant.stock <= 0 ? (
        <p className="flex items-center gap-2 text-sm text-red-400">
          <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
          Out of stock
        </p>
      ) : (
        <p className="flex items-center gap-2 text-sm text-emerald-400">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          In stock — ready to dispatch
        </p>
      )}

      {/* Color */}
      {product.colors.length > 0 && (
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
            Colour: <span className="text-[var(--text)]">{selectedColor.label}</span>
          </p>
          <div className="flex gap-3">
            {product.colors.map((c) => {
              const isAvailable = !selectedSize || colorsForSize(selectedSize).includes(c.label);
              return (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => handleSelectColor(c)}
                  title={c.label}
                  className={`h-8 w-8 rounded-full border-2 transition-all ${
                    selectedColor.label === c.label
                      ? "border-[var(--gold)] scale-110"
                      : "border-[var(--border-soft)] hover:border-[var(--gold-dim)]"
                  } ${!isAvailable ? "opacity-30" : ""}`}
                  style={{ backgroundColor: c.hex }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Size */}
      {product.sizes.length > 0 && (
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
              Size {selectedSize ? <span className="text-[var(--text)]">— {selectedSize}</span> : null}
            </p>
            <button type="button" className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">
              Size Guide
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => {
              const combinationExists = !selectedColor.label || sizesForColor(selectedColor.label).includes(s);
              const inStock = isSizeInStock(s);
              const isDisabled = !combinationExists || !inStock;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSelectSize(s)}
                  disabled={isDisabled}
                  title={isDisabled ? "Out of stock" : undefined}
                  className={`relative min-w-[48px] border px-3 py-2 text-[10px] uppercase tracking-[0.18em] transition-all ${
                    selectedSize === s
                      ? "border-[var(--gold)] text-[var(--gold-light)] bg-[var(--gold-tint)]"
                      : isDisabled
                      ? "cursor-not-allowed border-[var(--border-soft)] text-[var(--muted)] opacity-35"
                      : "border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)] hover:text-[var(--text)]"
                  }`}
                >
                  {s}
                  {isDisabled && (
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <span className="absolute h-px w-[70%] rotate-[-35deg] bg-[var(--muted)] opacity-40" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {error && (
            <p className="mt-2 text-xs text-red-400">Please select a size before adding to cart.</p>
          )}
        </div>
      )}

      {/* Quantity */}
      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
          Quantity{" "}
          <span className="normal-case tracking-normal text-[var(--muted)] opacity-60">(max {MAX_QTY})</span>
        </p>
        <div className="inline-flex items-center border border-[var(--border-soft)]">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            disabled={qty <= 1}
            className="h-11 w-11 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors text-lg disabled:opacity-30 disabled:cursor-not-allowed"
          >
            −
          </button>
          <span className="w-12 text-center text-sm text-[var(--cream)]">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(MAX_QTY, q + 1))}
            disabled={qty >= MAX_QTY}
            className="h-11 w-11 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors text-lg disabled:opacity-30 disabled:cursor-not-allowed"
          >
            +
          </button>
        </div>
        {qty >= MAX_QTY && (
          <p className="mt-2 text-xs text-[var(--muted)]">Maximum {MAX_QTY} per order. Contact us for bulk orders.</p>
        )}
      </div>

      {/* COD badge */}
      <div className="border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
        <p className="text-sm font-medium text-[var(--cream)]">Cash on Delivery — Bangladesh</p>
        <p className="mt-0.5 text-xs text-[var(--muted)]">Pay when your order arrives. No advance needed. Delivery in 2–4 days.</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAdd}
          disabled={isOutOfStock}
          className={`flex-1 btn-outline transition-all ${
            isOutOfStock
              ? "cursor-not-allowed opacity-40"
              : added
              ? "border-emerald-500 text-emerald-400"
              : ""
          }`}
        >
          {isOutOfStock ? "Out of Stock" : added ? "Added ✓" : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={isOutOfStock}
          className={`flex-1 btn-primary ${isOutOfStock ? "cursor-not-allowed opacity-40" : ""}`}
        >
          {isOutOfStock ? "Unavailable" : "Buy Now"}
        </button>
      </div>

      <a
        href={`https://wa.me/8801750514197?text=Hi, I'm interested in ${encodeURIComponent(product.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border border-[#1f6947] py-3 text-[10px] uppercase tracking-[0.25em] text-[#25d366] hover:bg-[#0d1f16] transition-colors no-underline"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp — Order via Chat
      </a>
    </div>
  );
}

type GalleryItem =
  | { type: "image"; url: string }
  | { type: "video"; url: string; embedUrl: string; thumbnail: string; title: string };

/**
 * Which photographs to show, in order, for the colour on screen.
 *
 * Pure and exported so the ORDER can be tested, because the order is what was
 * broken — and broken invisibly. The right photograph was in the gallery the
 * whole time; it just was never the one on display.
 *
 * THE BUG THIS FIXES
 *
 *   The old filter kept a colour's own photo AND every untagged photo, in
 *   whatever order the database returned them. Generic shots get uploaded
 *   first, so an untagged one sat at index 0 — and the main view jumps to
 *   index 0 whenever the colour changes. Picking Cognac therefore swapped the
 *   thumbnail strip correctly and left the big photograph on the generic shot.
 *   From the customer's side the colour picker appeared to do nothing.
 *
 * THE RULE
 *
 *   Photos tagged with the chosen colour come first, so the main view lands on
 *   one. Untagged photos follow as supporting shots — sole, close-up,
 *   packaging. A photo tagged with a DIFFERENT colour is never shown.
 */
export function galleryImagesFor(
  media: Array<{ url: string; color: string | null }> | undefined,
  images: string[],
  color: string | null,
): string[] {
  if (!media || media.length === 0) return images;

  const tagged = media.filter((m) => m.color);
  if (tagged.length === 0) return images; // nothing tagged yet
  if (!color) return media.map((m) => m.url); // no colour chosen yet

  // Tags are written from a dropdown of the variant colours, so they should
  // match exactly; trim and case-fold anyway, since "Cognac " costing a sale
  // would be an absurd way to lose one.
  const key = (c: string | null | undefined) => String(c ?? "").trim().toLowerCase();
  const want = key(color);

  const thisColour = media.filter((m) => m.color && key(m.color) === want);
  const untagged = media.filter((m) => !m.color);

  if (thisColour.length > 0) return [...thisColour, ...untagged].map((m) => m.url);

  // This colourway has not been photographed yet. The generic shots are
  // honest; another colour's photo would be a lie to the customer.
  if (untagged.length > 0) return untagged.map((m) => m.url);

  // Every photo belongs to some other colour. A blank product page is worse
  // than an imperfect one, so fall back to the whole set.
  return media.map((m) => m.url);
}

export function ImageGallery({
  images, videos = [], name, media,
}: {
  images: string[];
  videos?: ProductVideo[];
  name: string;
  /** Images with their colourway, when the product has any tagged. */
  media?: Array<{ url: string; color: string | null }>;
}) {
  const { color } = useSelectedColor();

  const shownImages = galleryImagesFor(media, images, color);

  const items: GalleryItem[] = [
    ...shownImages.map((url): GalleryItem => ({ type: "image", url })),
    ...videos.map((v): GalleryItem => ({ type: "video", url: v.url, embedUrl: v.embedUrl, thumbnail: v.thumbnail, title: v.title })),
  ];

  const [active, setActive] = useState(0);

  // Switching colour changes the set, so go back to its first photo rather
  // than leaving the viewer on index 3 of a shorter list.
  //
  // Done during render rather than in an effect on purpose. An effect runs
  // AFTER the browser has painted, so for one frame the new colour's list is
  // shown at the OLD index — a visible flick to the wrong photograph before it
  // corrects itself. Adjusting state during render, guarded by the comparison,
  // re-renders before anything reaches the screen.
  const [colorShown, setColorShown] = useState(color);
  if (color !== colorShown) {
    setColorShown(color);
    setActive(0);
  }

  const current = items[Math.min(active, Math.max(0, items.length - 1))];

  return (
    <div className="grid gap-3 sm:grid-cols-[80px_1fr] xl:sticky xl:top-24">
      {/* Thumbnails */}
      <div className="order-2 flex gap-2 overflow-x-auto pb-1 sm:order-1 sm:flex-col sm:overflow-visible">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`relative shrink-0 overflow-hidden border transition-all ${
              active === i ? "border-[var(--gold)]" : "border-[var(--border-soft)] hover:border-[var(--gold-dim)]"
            }`}
          >
            {/* The worst offender before this change: a thumbnail is at most
                80px wide, and it was downloading the same ~2.5 MB original as
                the main photograph — five of them, on every product page. One
                fixed 160px file covers it even on a 2× screen. */}
            <img
              src={cldUrl(item.type === "video" ? item.thumbnail : item.url, 160)}
              alt=""
              aria-hidden="true"
              decoding="async"
              className="h-16 w-14 object-cover object-center sm:h-[72px] sm:w-full"
            />
            {item.type === "video" && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Main media */}
      <div className="order-1 overflow-hidden bg-[var(--surface)] sm:order-2">
        {current?.type === "video" ? (
          <div className="aspect-[4/5]">
            <iframe
              src={current.embedUrl}
              title={current.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          /* The product page's LCP element, so it loads eagerly at high
             priority. aspect-[4/5] on the <img> itself reserves the box before
             the bytes arrive, so nothing below it jumps. */
          <img
            {...imgProps(
              current?.url ?? "",
              W_DETAIL,
              "(min-width: 1280px) 600px, (min-width: 1024px) 46vw, (min-width: 640px) calc(100vw - 132px), 100vw",
            )}
            alt={name}
            fetchPriority="high"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-center transition-all duration-300"
          />
        )}
      </div>
    </div>
  );
}
