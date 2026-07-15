import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, fetchAllProducts, pickRelatedProducts, PRODUCTS, type Product, type ProductVariant, type ProductVideo } from "@/lib/products";
import { ProductActions, ImageGallery } from "@/components/product-actions";
import { VisitorCounter } from "@/components/visitor-counter";
import { PixelViewContent } from "@/components/pixel-events";

type Props = { params: Promise<{ slug: string }>; searchParams?: Promise<{ lang?: string }> };

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : {};
  const lang = sp.lang === "bn" ? "bn" : "en";

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rizzleather.com";
  const canonical = `/brand/catalog/${slug}`;
  const hreflang = {
    canonical,
    languages: {
      "en": `${baseUrl}/brand/catalog/${slug}`,
      "bn": `${baseUrl}/brand/catalog/${slug}?lang=bn`,
      "x-default": `${baseUrl}/brand/catalog/${slug}`,
    },
  };

  const p = getProductBySlug(slug);
  if (p) {
    return {
      title: `${p.name} — ${p.material} | RIZZ`,
      description: p.description.slice(0, 155),
      alternates: hreflang,
      openGraph: {
        title: p.name,
        description: p.description.slice(0, 155),
        images: [{ url: p.images[0] }],
        type: "website",
      },
    };
  }

  const apiProduct = await fetchProductBySlugFromApi(slug) as Record<string, unknown> | null;
  if (!apiProduct) return { title: "Product | RIZZ" };

  // Find Bangla translation if available
  const translations = (apiProduct.translations as { lang_code: string; name?: string; short_description?: string; description?: string; seo_title?: string; seo_description?: string }[] | undefined) ?? [];
  const bnTranslation = translations.find((t) => t.lang_code === "bn");

  const name = apiProduct.name as string;
  const material = (apiProduct.material as string) || "Genuine Leather";
  const fallbackDescription = `${name} — handcrafted ${material.toLowerCase()} from RIZZ Leather, Chittagong, Bangladesh. Genuine leather. Cash on Delivery nationwide.`;
  const image = (apiProduct.media as { media_url: string }[] | undefined)?.[0]?.media_url;

  // Use Bangla content if lang=bn and translation exists, otherwise English
  const title = lang === "bn" && bnTranslation
    ? (bnTranslation.seo_title || `${bnTranslation.name} | RIZZ Leather`)
    : ((apiProduct.meta_title as string) || `${name} — ${material} | RIZZ`);

  const description = lang === "bn" && bnTranslation
    ? (bnTranslation.seo_description || bnTranslation.short_description || fallbackDescription).slice(0, 160)
    : ((apiProduct.meta_description as string) || (apiProduct.short_description as string) || fallbackDescription).slice(0, 160);

  const ogLocale = lang === "bn" ? "bn_BD" : "en_US";

  return {
    title,
    description,
    alternates: hreflang,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : undefined,
      type: "website",
      locale: ogLocale,
    },
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

function toYoutubeEmbed(url: string): { embedUrl: string; thumbnail: string } | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/);
  if (!match) return null;
  const id = match[1];
  return { embedUrl: `https://www.youtube.com/embed/${id}`, thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg` };
}

const COLOR_HEX_MAP: Record<string, string> = {
  tan: "#C19A6B",
  black: "#1a1a1a",
  brown: "#5C4033",
  cognac: "#9A463D",
  burgundy: "#5E2129",
  navy: "#1B2A4A",
  tobacco: "#5A3A22",
  olive: "#4B5320",
  grey: "#808080",
  gray: "#808080",
  white: "#F0EDE8",
};

async function fetchProductBySlugFromApi(slug: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3040/api';
    const listRes = await fetch(`${apiUrl}/products`, { next: { revalidate: 60 } });
    if (!listRes.ok) return null;
    const list = await listRes.json();
    if (!Array.isArray(list)) return null;
    const found = (list as Record<string, unknown>[]).find((p) => p.slug === slug);
    if (!found?.id) return null;
    // List endpoint omits variants/media/faqs — fetch the full record by id.
    const detailRes = await fetch(`${apiUrl}/products/${found.id}`, { next: { revalidate: 60 } });
    if (!detailRes.ok) return found;
    return await detailRes.json();
  } catch {
    return null;
  }
}

export default async function ProductDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : {};
  const lang = sp.lang === "bn" ? "bn" : "en";

  // Try API first, fall back to hardcoded
  const apiProduct = await fetchProductBySlugFromApi(slug) as Record<string, unknown> | null;

  let product: Product | null = getProductBySlug(slug) ?? null;

  if (!product && apiProduct) {
    const rawVariants = (apiProduct.variants as Record<string, unknown>[] | undefined) ?? [];
    const variants: ProductVariant[] = rawVariants.map((v) => {
      const attrs = (v.attributes as { size?: string; color?: string } | null) ?? {};
      return {
        sku: v.sku as string,
        size: attrs.size ?? "",
        color: attrs.color ?? "",
        price: Number(v.price ?? 0),
        salePrice: v.sale_price != null ? Number(v.sale_price) : null,
        stock: Number(v.stock_qty ?? 0),
      };
    });

    const sizes = Array.from(new Set(variants.map((v) => v.size).filter(Boolean)));
    const colorLabels = Array.from(new Set(variants.map((v) => v.color).filter(Boolean)));
    const colors = colorLabels.map((label) => ({
      label,
      hex: COLOR_HEX_MAP[label.toLowerCase()] ?? "#8B7355",
    }));

    const cheapestVariant = variants.length
      ? variants.reduce((min, v) => ((v.salePrice ?? v.price) < (min.salePrice ?? min.price) ? v : min))
      : null;

    const basePrice = Number(apiProduct.price ?? 0);
    const price = cheapestVariant ? (cheapestVariant.salePrice ?? cheapestVariant.price) : basePrice;
    const compareAt = Number(apiProduct.compare_at_price ?? 0);
    const oldPrice = cheapestVariant?.salePrice
      ? cheapestVariant.price
      : (compareAt > price ? compareAt : null);

    product = {
      id: apiProduct.id as string,
      slug: apiProduct.slug as string,
      name: apiProduct.name as string,
      material: (apiProduct.material as string) ?? "",
      category: ((apiProduct.category as Record<string, unknown> | null)?.name as string) ?? "Uncategorized",
      categorySlug: ((apiProduct.category as Record<string, unknown> | null)?.slug as string) ?? "",
      price,
      oldPrice,
      badge: null,
      sizes,
      colors,
      images: (() => {
        const media = apiProduct.media as { media_url: string; media_type?: string }[] | undefined;
        if (media && media.length > 0) {
          const imgs = media.filter((m) => m.media_type !== "VIDEO").map((m) => m.media_url);
          if (imgs.length > 0) return imgs;
        }
        return (apiProduct.images as { image_url: string }[] | undefined)?.map((i) => i.image_url) ?? [];
      })(),
      description: (apiProduct.description as string) ?? (apiProduct.short_description as string) ?? "",
      specs: (apiProduct.specs as string) ?? "",
      craftsmanship: (apiProduct.craftsmanship as string) ?? "",
      collection: "",
      variants,
      videos: ((apiProduct.media as { media_url: string; media_type?: string; title?: string | null }[] | undefined) ?? [])
        .filter((m) => m.media_type === "VIDEO")
        .map((m) => {
          const yt = toYoutubeEmbed(m.media_url);
          return {
            url: m.media_url,
            embedUrl: yt?.embedUrl ?? m.media_url,
            thumbnail: yt?.thumbnail ?? "",
            title: m.title ?? "Product video",
          } as ProductVideo;
        }),
    };

    if (lang === "bn") {
      const translations = (apiProduct.translations as { lang_code: string; name?: string; short_description?: string; description?: string }[] | undefined) ?? [];
      const bnTranslation = translations.find((t) => t.lang_code === "bn");
      if (bnTranslation) {
        product.name = bnTranslation.name || product.name;
        product.description = bnTranslation.description || bnTranslation.short_description || product.description;
      }
    }
  }

  if (!product) notFound();

  const allProducts = await fetchAllProducts();
  const related = pickRelatedProducts(allProducts, product, 4);

  const reviews = ((apiProduct?.reviews as Record<string, unknown>[] | undefined) ?? [])
    .filter((r) => r.status === "active")
    .map((r) => ({
      name: r.customer_name as string,
      date: new Date(r.created_at as string).toLocaleDateString("en-US", { month: "long", year: "numeric" }).toUpperCase(),
      rating: (r.rating as number) ?? 5,
      body: (r.comment as string) ?? "",
      image: r.customer_image_url as string | undefined,
    }));
  const avgRating = reviews.length > 0 ? Math.round(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) : 0;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    material: product.material,
    category: product.category,
    brand: { "@type": "Brand", name: "RIZZ" },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
      areaServed: { "@type": "Country", name: "Bangladesh" },
      seller: { "@type": "Organization", name: "RIZZ Leather" }
    },
    ...(reviews.length > 0 ? {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avgRating,
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1
      }
    } : {})
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Shop", item: "/brand/catalog" },
      { "@type": "ListItem", position: 3, name: product.category, item: `/brand/catalog?category=${product.categorySlug ?? ""}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `/brand/catalog/${product.slug}` }
    ]
  };

  const allApiFaqs = (apiProduct?.faqs as { question: string; answer: string; lang_code?: string }[] | undefined) ?? [];
  const apiFaqs = allApiFaqs.filter((f) => (f.lang_code ?? "en") === lang);
  const apiFaqsFallback = apiFaqs.length > 0 ? apiFaqs : allApiFaqs.filter((f) => (f.lang_code ?? "en") === "en");
  const faqItems = apiFaqsFallback.length > 0
    ? apiFaqsFallback.map((f) => ({ q: f.question, a: f.answer }))
    : [
        { q: "What is the return policy?", a: "We accept returns within 7 days of delivery for unworn items in original condition. See our Returns page for full details." },
        { q: "How do I care for this leather?", a: "Use a soft dry cloth after each wear. Apply a leather conditioner every 3–4 months. Keep away from direct sunlight when storing." },
        { q: "Is COD available for this product?", a: "Yes. Cash on Delivery is available for all products across Bangladesh. You pay when your order arrives." },
        { q: "How long does delivery take?", a: "Inside Dhaka: 1–2 business days. Outside Dhaka: 2–4 business days." }
      ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PixelViewContent name={product.name} price={product.price} slug={product.slug} category={product.category} />
      <main>
        {/* Breadcrumb */}
        <nav className="border-b border-[var(--hairline)] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)] lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center gap-2">
            <Link href="/" className="hover:text-[var(--text)] transition-colors">Home</Link>
            <span className="opacity-40">›</span>
            <Link href="/brand/catalog" className="hover:text-[var(--text)] transition-colors">Shop</Link>
            <span className="opacity-40">›</span>
            <Link href={`/brand/catalog?category=${product.categorySlug ?? ""}`} className="hover:text-[var(--text)] transition-colors">{product.category}</Link>
            <span className="opacity-40">›</span>
            <span className="text-[var(--gold-dim)]">{product.name}</span>
          </div>
        </nav>

        {/* Product */}
        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <ImageGallery images={product.images} videos={product.videos ?? []} name={product.name} />

            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--gold-dim)]">{product.collection}</p>
              <h1 className="mt-2 font-serif text-4xl leading-tight text-[var(--cream)] sm:text-5xl">{product.name}</h1>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{product.material}</p>

              {/* Rating summary — only when there are real reviews */}
              {reviews.length > 0 && (
                <div className="mt-3 flex items-center gap-2">
                  <StarRating rating={avgRating} />
                  <span className="text-[10px] text-[var(--muted)]">({reviews.length} reviews)</span>
                </div>
              )}

              <div className="mt-3">
                <VisitorCounter productId={product.id ?? product.slug} />
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
                ].filter((item) => item.body && item.body.trim()).map((item) => (
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

        {/* Reviews — only rendered when the product has real reviews in the admin */}
        {reviews.length > 0 && (
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
                      <div className="flex items-center gap-3">
                        {review.image && (
                          <img src={review.image} alt={review.name} className="h-9 w-9 rounded-full object-cover" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-[var(--cream)]">{review.name}</p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{review.date}</p>
                        </div>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">{review.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

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
                    acceptedAnswer: { "@type": "Answer", text: item.a },
                  })),
                }) }}
            />
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details key={i} className="group rounded-xl border border-[var(--border)] bg-[var(--bg)] open:border-[var(--gold-dim)]">
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-[var(--text)] list-none">
                    <span>{item.q}</span>
                    <svg className="ml-4 shrink-0 transition-transform group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </summary>
                  <div className="border-t border-[var(--hairline)] px-5 py-4 text-sm text-[var(--muted)] leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
