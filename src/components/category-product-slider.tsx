"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { HomeProductCard } from "@/lib/home-product-sections";
import { imgProps, W_CARD } from "@/lib/image";

type Props = { name: string; href: string; products: HomeProductCard[]; total: number };

export function CategoryProductSlider({ name, href, products, total }: Props) {
  const id = useId();
  const track = useRef<HTMLDivElement>(null);
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      setCanPrevious(element.scrollLeft > 2);
      setCanNext(element.scrollLeft + element.clientWidth < element.scrollWidth - 2);
    };
    update();
    element.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => { element.removeEventListener("scroll", update); observer.disconnect(); };
  }, [products]);

  const slide = (direction: number) => {
    const element = track.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 24;
    const step = (card?.offsetWidth || element.clientWidth) + gap;
    element.scrollBy({ left: direction * step, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  return (
    <section aria-labelledby={`${id}-heading`} className="border-t border-[var(--hairline)] py-12 lg:py-16" data-category-slider>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">Latest in the collection</p>
          <h2 id={`${id}-heading`} className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl">{name}</h2>
          <p className="mt-2 text-xs text-[var(--muted)]">{total} {total === 1 ? "product" : "products"}</p>
        </div>
        <div className="flex items-center gap-5">
          <Link href={href} className="text-[10px] uppercase tracking-[0.25em] hover:text-[var(--gold-light)]" aria-label={`See all ${name} products`}>See More →</Link>
          <div className="flex gap-2">
            <button type="button" aria-label={`Previous ${name} products`} aria-controls={`${id}-track`} disabled={!canPrevious} onClick={() => slide(-1)} className="tap-target border border-[var(--hairline)] text-[var(--cream)] transition-colors hover:border-[var(--gold)] disabled:cursor-default disabled:opacity-25">←</button>
            <button type="button" aria-label={`Next ${name} products`} aria-controls={`${id}-track`} disabled={!canNext} onClick={() => slide(1)} className="tap-target border border-[var(--hairline)] text-[var(--cream)] transition-colors hover:border-[var(--gold)] disabled:cursor-default disabled:opacity-25">→</button>
          </div>
        </div>
      </div>
      <div ref={track} id={`${id}-track`} role="region" aria-label={`${name} product slider`} tabIndex={0} className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-5 outline-offset-4 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--gold)]" style={{ scrollbarWidth: "thin", scrollbarColor: "var(--gold-dim) var(--surface)" }}>
        {products.map(product => (
          <Link key={product.slug} href={product.href} className="group block w-[78%] flex-none snap-start no-underline min-[480px]:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface)]">
              {product.image ? (
                <img {...imgProps(product.image, W_CARD, "(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 78vw")} alt={product.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              ) : <div className="flex h-full items-center justify-center text-xs text-[var(--muted)]">Image coming soon</div>}
              {product.badge && <span className="absolute left-3 top-3 bg-[var(--gold)] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#0a0806]">{product.badge}</span>}
            </div>
            <h3 className="mt-4 font-serif text-lg text-[var(--cream)]">{product.name}</h3>
            {product.material && <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{product.material}</p>}
            <p className="mt-2 text-sm tracking-wide text-[var(--gold-light)]">{product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
