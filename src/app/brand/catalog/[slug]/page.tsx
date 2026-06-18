import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, getReviews, PRODUCTS, type Product } from "@/lib/products";
import { ProductActions, ImageGallery } from "@/components/product-actions";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Product | RIZZ" };
  return {
    title: `${p.name} — ${p.material} | RIZZ`,
    description: `${p.description.slice(0, 155)}`,
    openGraph: {
      title: p.name,
      description: p.description.slice(0, 155),
      images: [{ url: p.images[0] }]
    }
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i <= rating ? "var(--gold)" : "none"} stroke="var(--gold-dim)" strokeWidth="1">
          <polygon points="6,1 7.5,4.5 11,4.5 8.5,7 9.5,11 6,8.5 2.5,11 3.5,7 1,4.5 4.5,4.5" />
        </svg>
      ))}
    </span>
  );
}

const fmt = (n: number) => `৳ ${n.toLocaleString("en-US")}`;

async function fetchProductBySlugFromApi(slug: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3040/api';
    const res = await fetch(`${apiUrl}/products`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data)) return null;
    const found = (data as Record<string, unknown>[]).find((p) => p.slug === slug);
    return found ?? null;
  } catch {
    return null;
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  // Try API first, fall back to hardcoded
  const apiProduct = await fetchProductBySlugFromApi(slug) as Record<string, unknown> | null;
  const product = getProductBySlug(slug) ?? (apiProduct ? {
    slug: apiProduct.slug,
    name: apiProduct.name,
    material: apiProduct.material ?? '',
    category: (apiProduct.category as Record<string, unknown> | null)?.name ?? 'Loafers',
    price: apiProduct.price ?? (apiProduct.variants as {price: number}[] | undefined)?.[0]?.price ?? 0,
    oldPrice: apiProduct.compare_at_price ?? null,
    badge: null,
    sizes: (apiProduct.variants as {attributes?: {size?: string}}[] | undefined)?.map((v) => v.attributes?.size).filter(Boolean) ?? [],
    colors: [],
    images: (apiProduct.media as {media_url: string}[] | undefined)?.map((m) => m.media_url) ?? (apiProduct.images as {image_url: string}[] | undefined)?.map((i) => i.image_url) ?? [],
    description: apiProduct.description ?? apiProduct.short_description ?? '',
    specs: '',
    craftsmanship: '',
    collection: '',
  } as unknown as Product : null);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 4);
  const reviews = getReviews(slug);
  const avgRating = Math.round(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: { "@type": "Brand", name: "RIZZ" },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "RIZZ Leather" }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1
    }
  };

  const faqItems = [
    { q: "What is the return policy?", a: "We accept returns within 7 days of delivery for unworn items in original condition. See our Returns page for full details." },
    { q: "How do I care for this leather?", a: "Use a soft dry cloth after each wear. Apply a leather conditioner every 3–4 months. Keep away from direct sunlight when storing." },
    { q: "Is COD available for this product?", a: "Yes. Cash on Delivery is available for all products across Bangladesh. You pay when your order arrives." },
    { q: "How long does delivery take?", a: "Inside Dhaka: 1–2 business days. Outside Dhaka: 2–4 business days." }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        {/* Breadcrumb */}
        <nav className="border-b border-[var(--hairline)] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-2">
            <Link href="/" className="hover:text-[var(--text)] transition-colors">Home</Link>
            <span className="opacity-40">›</span>
            <Link href="/brand/catalog" className="hover:text-[var(--text)] transition-colors">Shop</Link>
            <span className="opacity-40">›</span>
            <Link href={`/brand/catalog?category=${encodeURIComponent(product.category)}`} className="hover:text-[var(--text)] transition-colors">{product.category}</Link>
            <span className="opacity-40">›</span>
            <span className="text-[var(--gold-dim)]">{product.name}</span>
          </div>
        </nav>

        {/* Product */}
        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <ImageGallery images={product.images} name={product.name} />

            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--gold-dim)]">{product.collection}</p>
              <h1 className="mt-2 font-serif text-4xl leading-tight text-[var(--cream)] sm:text-5xl">{product.name}</h1>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{product.material}</p>

              {/* Rating summary */}
              <div className="mt-3 flex items-center gap-2">
                <StarRating rating={avgRating} />
                <span className="text-[10px] text-[var(--muted)]">({reviews.length} reviews)</span>
              </div>

              <div className="my-6 border-t border-[var(--hairline)]" />

              <ProductActions product={product} />

              {/* Accordion */}
              <div className="mt-8 space-y-0 border-t border-[var(--hairline)]">
                {[
                  { title: "Description", body: product.description },
                  { title: "Specs & Dimensions", body: product.specs },
                  { title: "Craftsmanship & Materials", body: product.craftsmanship },
                  { title: "Shipping & Returns", body: "COD delivery in 2–4 business days across Bangladesh. Returns accepted within 7 days of delivery for unworn items. International shipping available via WhatsApp." }
                ].map((item) => (
                  <details key={item.title} className="group border-b border-[var(--hairline)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--cream)]">
                      {item.title}
                      <span className="text-[var(--gold-dim)] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="pb-4 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="border-t border-[var(--hairline)] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Verified Buyers</p>
                <h2 className="mt-2 font-serif text-3xl text-[var(--cream)] sm:text-4xl">Customer Reviews</h2>
              </div>
              <div className="flex items-center gap-3">
                <StarRating rating={avgRating} />
                <span className="text-sm text-[var(--muted)]">{avgRating}.0 out of 5 · {reviews.length} reviews</span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <article key={i} className="border border-[var(--border)] bg-[var(--surface)] p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-[var(--cream)]">{review.name}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{review.date}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{review.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended */}
        <section className="border-t border-[var(--hairline)] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10">
              <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">You May Also Like</p>
              <h2 className="mt-2 font-serif text-3xl text-[var(--cream)] sm:text-4xl">Recommended</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/brand/catalog/${p.slug}`} className="group block no-underline">
                  <div className="relative overflow-hidden bg-[var(--surface)]">
                    <div
                      className="h-[260px] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url('${p.images[0]}')` }}
                    />
                    {p.badge && (
                      <span className={`absolute left-3 top-3 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                        p.badge === "Bestseller" ? "bg-[var(--gold)] text-[#0a0806]" : "bg-[var(--surface)] border border-[var(--hairline)] text-[var(--gold-light)]"
                      }`}>{p.badge}</span>
                    )}
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="font-serif text-base text-[var(--cream)]">{p.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{p.material}</p>
                    <p className="text-sm text-[var(--gold-light)]">{fmt(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[var(--hairline)] bg-[var(--surface)] py-14">
          <div className="mx-auto max-w-2xl px-5 lg:px-8">
            <h2 className="mb-8 font-serif text-2xl text-[var(--cream)] sm:text-3xl">Product FAQs</h2>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a }
                  }))
                })
              }}
            />
            <div className="space-y-2">
              {faqItems.map((item) => (
                <details key={item.q} className="group border border-[var(--border)] bg-[var(--bg)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4">
                    <span className="pr-4 text-sm font-medium text-[var(--cream)]">{item.q}</span>
                    <span className="shrink-0 text-[var(--gold-dim)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="border-t border-[var(--border)] px-5 py-4 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
