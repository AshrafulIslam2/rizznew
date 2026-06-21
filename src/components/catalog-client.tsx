"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { PRICE_RANGES, SORT_OPTIONS } from "@/lib/products";

type Props = {
  activeCategory: string;
  activePrice: string;
  activeSort: string;
  activeSize: string;
  categories: { slug: string; name: string }[];
};

export function CatalogFilters({ activeCategory, activePrice, activeSort, activeSize, categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const set = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "" || value === "all") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      params.delete("page");
      router.push(`/brand/catalog?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const clear = () => router.push("/brand/catalog", { scroll: false });

  const hasFilter = activeCategory !== "all" || activePrice !== "" || activeSort !== "featured" || activeSize !== "";

  const allSizes = ["39", "40", "41", "42", "43", "44", "45", 'S (28–30")', 'M (32–34")', 'L (36–38")', 'XL (40–42")', "One Size"];

  return (
    <div className="mb-8">
      {/* Sort + Clear row */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Sort:</span>
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => set("sort", opt.value)}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] border transition-colors ${
                activeSort === opt.value
                  ? "border-[var(--gold-dim)] text-[var(--gold-light)] bg-[var(--gold-tint)]"
                  : "border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)] hover:text-[var(--text)]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {hasFilter && (
          <button
            type="button"
            onClick={clear}
            className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors"
          >
            Clear All ×
          </button>
        )}
      </div>

      {/* Category filters */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => set("category", "all")}
          className={`px-5 py-2 text-[10px] uppercase tracking-[0.22em] border transition-colors ${
            activeCategory === "all"
              ? "border-[var(--gold)] text-[var(--gold-light)] bg-[var(--gold-tint)]"
              : "border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)]"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => set("category", cat.slug)}
            className={`px-5 py-2 text-[10px] uppercase tracking-[0.22em] border transition-colors ${
              activeCategory === cat.slug
                ? "border-[var(--gold)] text-[var(--gold-light)] bg-[var(--gold-tint)]"
                : "border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Price + Size row */}
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Price:</span>
          {PRICE_RANGES.map((r, i) => (
            <button
              key={i}
              type="button"
              onClick={() => set("price", r.label)}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-[0.14em] border transition-colors ${
                activePrice === r.label
                  ? "border-[var(--gold-dim)] text-[var(--gold-light)] bg-[var(--gold-tint)]"
                  : "border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)]"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Size:</span>
          {allSizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => set("size", activeSize === s ? "" : s)}
              className={`px-3 py-1.5 text-[10px] border transition-colors ${
                activeSize === s
                  ? "border-[var(--gold-dim)] text-[var(--gold-light)] bg-[var(--gold-tint)]"
                  : "border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PaginationBar({ page, totalPages }: { page: number; totalPages: number }) {
  const searchParams = useSearchParams();

  const href = (p: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    return `/brand/catalog?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-14 flex items-center justify-center gap-2">
      {page > 1 && (
        <Link
          href={href(page - 1)}
          className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] border border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)] hover:text-[var(--text)] transition-colors"
        >
          ← Prev
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Link
          key={p}
          href={href(p)}
          className={`h-9 w-9 flex items-center justify-center text-[11px] border transition-colors ${
            p === page
              ? "border-[var(--gold)] text-[var(--gold-light)] bg-[var(--gold-tint)]"
              : "border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)]"
          }`}
        >
          {p}
        </Link>
      ))}
      {page < totalPages && (
        <Link
          href={href(page + 1)}
          className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] border border-[var(--border-soft)] text-[var(--muted)] hover:border-[var(--gold-dim)] hover:text-[var(--text)] transition-colors"
        >
          Next →
        </Link>
      )}
    </div>
  );
}
