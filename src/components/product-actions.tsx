"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export function ProductActions({ product }: { product: Product }) {
  const { addItem, count } = useCart();
  const router = useRouter();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0] ?? { label: "Default", hex: "#8B7355" });
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);

  function handleAdd() {
    if (!selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor.label,
      quantity: qty,
      image: product.images[0]
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    if (!selectedSize) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
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
        <span className="font-serif text-4xl text-[var(--cream)]">{fmt(product.price)}</span>
        {product.oldPrice && (
          <>
            <span className="text-base text-[var(--muted)] line-through">{fmt(product.oldPrice)}</span>
            <span className="border border-[var(--gold-dim)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
              Save {fmt(product.oldPrice - product.price)}
            </span>
          </>
        )}
      </div>

      {/* Stock */}
      <p className="flex items-center gap-2 text-sm text-emerald-400">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
        In stock — ready to dispatch
      </p>

      {/* Color */}
      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
          Colour: <span className="text-[var(--text)]">{selectedColor.label}</span>
        </p>
        <div className="flex gap-3">
          {product.colors.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => setSelectedColor(c)}
              title={c.label}
              className={`h-8 w-8 rounded-full border-2 transition-all ${
                selectedColor.label === c.label
                  ? "border-[var(--gold)] scale-110"
                  : "border-[var(--border-soft)] hover:border-[var(--gold-dim)]"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
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
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => { setSelectedSize(s); setError(false); }}
              className={`min-w-[48px] border px-3 py-2 text-[10px] uppercase tracking-[0.18em] transition-all ${
                selectedSize === s
                  ? "border-[var(--gold)] text-[var(--gold-light)] bg-[var(--gold-tint)]"
                  : "border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)] hover:text-[var(--text)]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        {error && (
          <p className="mt-2 text-xs text-red-400">Please select a size before adding to cart.</p>
        )}
      </div>

      {/* Quantity */}
      <div>
        <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Quantity</p>
        <div className="inline-flex items-center border border-[var(--border-soft)]">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-11 w-11 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors text-lg"
          >
            −
          </button>
          <span className="w-12 text-center text-sm text-[var(--cream)]">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => q + 1)}
            className="h-11 w-11 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors text-lg"
          >
            +
          </button>
        </div>
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
          className={`flex-1 btn-outline transition-all ${added ? "border-emerald-500 text-emerald-400" : ""}`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 btn-primary"
        >
          Buy Now
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

export function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-3 sm:grid-cols-[80px_1fr] xl:sticky xl:top-24">
      {/* Thumbnails */}
      <div className="order-2 flex gap-2 overflow-x-auto pb-1 sm:order-1 sm:flex-col sm:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className={`shrink-0 overflow-hidden border transition-all ${
              active === i ? "border-[var(--gold)]" : "border-[var(--border-soft)] hover:border-[var(--gold-dim)]"
            }`}
          >
            <div
              className="h-16 w-14 bg-cover bg-center sm:h-[72px] sm:w-full"
              style={{ backgroundImage: `url('${img}')` }}
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="order-1 overflow-hidden bg-[var(--surface)] sm:order-2">
        <div
          className="aspect-[4/5] bg-cover bg-center transition-all duration-300"
          style={{ backgroundImage: `url('${images[active]}')` }}
          role="img"
          aria-label={name}
        />
      </div>
    </div>
  );
}
