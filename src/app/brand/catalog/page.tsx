import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PRICE_RANGES, fetchAllProducts } from "@/lib/products";
import { CatalogFilters, PaginationBar } from "@/components/catalog-client";
import { getSeoOverride, buildMetadata } from "@/lib/seo";

type CategoryData = {
  slug: string;
  name: string;
  page_intro?: string;
  extra_faq?: { q: string; a: string }[];
};

async function fetchCategories(): Promise<CategoryData[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3040/api';
    const res = await fetch(`${apiUrl}/categories`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .filter((c: any) => c.is_active)
      .map((c: any) => ({
        slug: c.slug,
        name: c.name,
        page_intro: c.page_intro ?? undefined,
        extra_faq: Array.isArray(c.extra_faq) ? c.extra_faq : [],
      }));
  } catch {
    return [];
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("catalog");
  return buildMetadata({
    path: "/brand/catalog",
    defaultTitle: "Shop All — Luxury Leather Footwear & Accessories | RIZZ",
    defaultDescription:
      "Browse the full RIZZ collection — handcrafted loafers, sandals, belts, and wallets. Genuine leather. Filter by category, price, and size. COD available across Bangladesh.",
    override,
  });
}

const PAGE_SIZE = 8;

type Props = {
  searchParams: Promise<Record<string, string | undefined>>;
};

function fmt(n: number) {
  return `৳ ${n.toLocaleString("en-US")}`;
}

const faqItems = [
  {
    q: "Do you offer Cash on Delivery (COD)?",
    a: "Yes. COD is available for all orders across Bangladesh. You pay upon delivery — no advance payment required."
  },
  {
    q: "How long does delivery take?",
    a: "Inside Dhaka: 1–2 business days. Outside Dhaka: 2–4 business days. We dispatch same or next business day."
  },
  {
    q: "What sizes are available?",
    a: "Footwear is available in EU sizes 39–45 (some styles up to 45). Belts come in S, M, L, XL. Wallets are one size. Exact availability is shown per product."
  },
  {
    q: "Can I exchange or return?",
    a: "Yes. We accept returns within 7 days of delivery for unworn items in original condition. Exchange is free for the first time. See our Return Policy for details."
  },
  {
    q: "Is the leather genuine?",
    a: "Every Rizz product uses genuine leather — full-grain, vegetable-tanned, suede, or embossed calfskin depending on the piece. No bonded or synthetic leather, ever."
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We ship to USA, Europe, and the Middle East. Contact us via WhatsApp for international rates and timelines."
  }
];

export default async function CatalogPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = params.category ?? "all";
  const priceLabel = params.price ?? "";
  const sort = params.sort ?? "featured";
  const size = params.size ?? "";
  const page = Math.max(1, Number(params.page ?? "1"));

  const [allProducts, categories] = await Promise.all([
    fetchAllProducts(),
    fetchCategories(),
  ]);

  const catData = category !== "all"
    ? categories.find((c) => c.slug === category) ?? null
    : null;

  const h1 = catData
    ? `${catData.name} — Handcrafted in Chittagong, Bangladesh`
    : "Shop All";

  const allFaqItems = [
    ...faqItems,
    ...(catData?.extra_faq ?? []),
  ];

  // Filter
  let filtered = [...allProducts];

  if (category !== "all") {
    filtered = filtered.filter((p) => p.categorySlug === category);
  }

  if (priceLabel) {
    const range = PRICE_RANGES.find((r) => r.label === priceLabel);
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price <= range.max);
    }
  }

  if (size) {
    filtered = filtered.filter((p) => p.sizes.includes(size));
  }

  // Sort
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "new") filtered.sort((a, b) => (a.badge === "New" ? -1 : b.badge === "New" ? 1 : 0));

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: catData ? `RIZZ ${catData.name} — ${h1}` : "RIZZ Leather — Shop All",
    description: catData?.page_intro?.slice(0, 160) ?? "Luxury handcrafted leather footwear and accessories from Chittagong, Bangladesh.",
    url: catData ? `https://rizzleather.com/brand/catalog?category=${catData.slug}` : "https://rizzleather.com/brand/catalog",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rizzleather.com" },
        { "@type": "ListItem", position: 2, name: "Shop", item: "https://rizzleather.com/brand/catalog" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        {/* Hero */}
        <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-14 text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">
            {catData ? catData.name : "The Collection"}
          </p>
          <h1 className="mt-3 font-serif text-4xl text-[var(--cream)] sm:text-5xl lg:text-6xl">{h1}</h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Every piece handcrafted in Chittagong, Bangladesh. Genuine leather. COD across the country.
          </p>
          {/* Breadcrumb */}
          <nav className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--text)] transition-colors">Home</Link>
            <span className="opacity-40">›</span>
            {catData ? (
              <>
                <Link href="/brand/catalog" className="hover:text-[var(--text)] transition-colors">Shop</Link>
                <span className="opacity-40">›</span>
                <span className="text-[var(--gold-dim)]">{catData.name}</span>
              </>
            ) : (
              <span className="text-[var(--gold-dim)]">Shop</span>
            )}
          </nav>
        </section>

        {/* Category intro text */}
        {catData?.page_intro && (
          <section className="mx-auto max-w-3xl px-5 py-10 lg:px-8">
            <p className="text-sm leading-loose text-[var(--muted)] whitespace-pre-line">{catData.page_intro}</p>
          </section>
        )}

        {/* Filters + Grid */}
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">
              {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </p>
          </div>

          <Suspense>
            <CatalogFilters
              activeCategory={category}
              activePrice={priceLabel}
              activeSort={sort}
              activeSize={size}
              categories={categories}
            />
          </Suspense>

          {paginated.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-[var(--muted)]">No products match your filters.</p>
              <Link href="/brand/catalog" className="mt-4 inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">
                Clear filters →
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {paginated.map((product, idx) => (
                <Link key={`p-${idx}-${product.slug}`} href={`/brand/catalog/${product.slug}`} className="group block no-underline">
                  <div className="relative overflow-hidden bg-[var(--surface)]">
                    <div
                      className="h-[300px] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04] sm:h-[340px]"
                      style={{ backgroundImage: `url('${product.images[0]}')` }}
                    />
                    {product.badge && (
                      <span className={`absolute left-3 top-3 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] ${
                        product.badge === "Sale" ? "bg-[#7a1a1a] text-[#ffd0d0]" :
                        product.badge === "Bestseller" ? "bg-[var(--gold)] text-[#0a0806]" :
                        "bg-[var(--surface)] border border-[var(--hairline)] text-[var(--gold-light)]"
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[var(--gold-dim)]">{product.collection}</p>
                    <h2 className="font-serif text-lg text-[var(--cream)]">{product.name}</h2>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{product.material}</p>
                    <div className="flex items-center gap-3 pt-1">
                      <span className="text-sm font-medium text-[var(--gold-light)]">{fmt(product.price)}</span>
                      {product.oldPrice && (
                        <span className="text-xs text-[var(--muted)] line-through">{fmt(product.oldPrice)}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <Suspense>
            <PaginationBar page={page} totalPages={totalPages} />
          </Suspense>
        </section>

        {/* FAQ — AEO */}
        <section className="border-t border-[var(--hairline)] bg-[var(--surface)] py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Support</p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--cream)] sm:text-4xl">Frequently Asked Questions</h2>
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: allFaqItems.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a }
                  }))
                })
              }}
            />
            <div className="space-y-2">
              {allFaqItems.map((item) => (
                <details key={item.q} className="group border border-[var(--border)] bg-[var(--bg)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4">
                    <span className="pr-4 text-sm font-medium text-[var(--cream)]">{item.q}</span>
                    <span className="shrink-0 text-[var(--gold-dim)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="border-t border-[var(--border)] px-6 py-4 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
