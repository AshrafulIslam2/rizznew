"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { PortfolioShowcaseItem } from "@/lib/portfolio-showcase-data";
import { SHOWCASE_ENABLED_ROUTES } from "@/lib/portfolio-showcase-data";

export function RoutePortfolioShowcase() {
  const pathname = usePathname();
  const [showcaseProducts, setShowcaseProducts] = useState<PortfolioShowcaseItem[]>([]);

  useEffect(() => {
    if (!pathname || !SHOWCASE_ENABLED_ROUTES.has(pathname)) {
      setShowcaseProducts([]);
      return;
    }

    let isCancelled = false;

    async function loadShowcase() {
      try {
        const res = await fetch(`/api/showcase?pathname=${encodeURIComponent(pathname)}`, {
          method: "GET",
          cache: "no-store"
        });
        if (!res.ok) {
          throw new Error("Failed to load showcase data");
        }
        const data = (await res.json()) as { items?: PortfolioShowcaseItem[] };
        if (!isCancelled) {
          setShowcaseProducts(data.items ?? []);
        }
      } catch {
        if (!isCancelled) {
          setShowcaseProducts([]);
        }
      }
    }

    loadShowcase();

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  if (!pathname || !SHOWCASE_ENABLED_ROUTES.has(pathname) || showcaseProducts.length === 0) {
    return null;
  }

  return (
    <section className="border-y border-[var(--hairline-accent)] bg-[#05070d] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#ccb98e]">Showcase</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Featured Product Lines</h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#8f8468] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#e0d2ad] no-underline transition hover:bg-[#8f8468]/10"
          >
            View Portfolio
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {showcaseProducts.map((item) => (
            <article key={item.title} className="overflow-hidden border border-[var(--hairline-accent)] bg-[#0a0d15]">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="space-y-3 p-5">
                <h3 className="text-2xl font-semibold text-[#f4eee1]">{item.title}</h3>
                <p className="text-base leading-relaxed text-[#adb2bd]">{item.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
