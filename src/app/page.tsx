import type { Metadata } from "next";
import Link from "next/link";
import { getApiProductCardPrice } from "@/lib/products";
import { getSeoOverride, buildMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/business";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("home");
  return buildMetadata({
    path: "/",
    defaultTitle: "RIZZ — Luxury Leather Footwear & Accessories | Bangladesh",
    defaultDescription: "Artisan leather footwear and accessories handcrafted in Chittagong, Bangladesh. Genuine leather loafers, sandals, belts, and wallets. Cash on Delivery nationwide.",
    defaultImage: "/assets/images/rizz-slide-crocodile-leather-sandal.jpg",
    override,
  });
}

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";

async function getSection(key: string): Promise<Record<string, any> | null> {
  try {
    const res = await fetch(`${API}/homepage/${key}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || Object.keys(data).length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

async function getFeaturedProducts() {
  try {
    const res = await fetch(`${API}/products`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    return data.filter((p: Record<string, unknown>) => p.is_featured || p.is_published).slice(0, 4);
  } catch {
    return null;
  }
}

async function getCategories() {
  try {
    const res = await fetch(`${API}/categories`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

async function getActiveCampaigns() {
  try {
    const res = await fetch(`${API}/campaigns/active`, { next: { revalidate: 30 } });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function campaignBadge(c: Record<string, unknown>): string {
  if (c.discount_type === "PERCENT") return `${c.discount_value}% OFF`;
  if (c.discount_type === "FIXED") return `৳${c.discount_value} OFF`;
  if (c.discount_type === "BOGO") return `BUY ${c.buy_qty} GET ${c.get_qty} FREE`;
  if (c.free_shipping) return "FREE DELIVERY";
  if (c.free_gift_product_id) return "FREE GIFT";
  return "OFFER";
}

// ── Fallback static data ──────────────────────────────────────────────────────

const fallbackArrivals = [
  { name: "The Onyx Loafer", material: "Full-Grain Calfskin", price: "৳ 5,800", badge: "New", href: "/brand/catalog?category=Men%27s%20Loafers", image: "/assets/images/rizz_crodile_slide_sandals/rizz-crocodile-slide-leather-sandal-5.jpg" },
  { name: "Cognac Mule", material: "Premium Suede", price: "৳ 4,200", badge: "Bestseller", href: "/brand/catalog?category=Men%27s%20Sandals", image: "/assets/images/rizz_crodile_slide_sandals/rizz-crocodile-slide-leather-sandal-7.jpg" },
  { name: "Signature Slide", material: "Vegetable-Tanned Leather", price: "৳ 3,500", badge: null, href: "/brand/catalog?category=Men%27s%20Sandals", image: "/assets/images/rizz_master_color_sandals/rizz-master-color-quilted-leather-sandal-1.jpg" },
  { name: "The Classic Bifold", material: "Italian Veg-Tan", price: "৳ 2,800", badge: "New", href: "/brand/catalog?category=Men%27s%20Wallets", image: "/assets/images/rizz_double_bockles-sandals/rizz-double-buckle-leather-sandal-3.jpg" }
];

const fallbackCategories = [
  { label: "Loafers", sub: "The Signature Collection", href: "/brand/catalog?category=Men%27s%20Loafers", image: "/assets/images/rizz_master_color_sandals/rizz-master-color-quilted-leather-sandal-1.jpg", span: "lg:col-span-6 lg:row-span-2" },
  { label: "Sandals", sub: "Open Luxury", href: "/brand/catalog?category=Men%27s%20Sandals", image: "/assets/images/rizz_simple_sandals/rizz-simple-leather-thong-sandal-1.jpg", span: "lg:col-span-3" },
  { label: "Belts", sub: "The Finishing Detail", href: "/brand/catalog?category=Men%27s%20Belts", image: "/assets/images/rizz_cholate_sandals/rizz-cholate-h-strap-leather-sandal-1.jpg", span: "lg:col-span-3" },
  { label: "Wallets", sub: "Everyday Refinement", href: "/brand/catalog?category=Men%27s%20Wallets", image: "/assets/images/rizz_dubai_sandals/rizz-dubai-arabic-leather-sandal-4.jpg", span: "lg:col-span-3" },
  { label: "Half Loafers", sub: "Modern Classic", href: "/brand/catalog?category=Half%20Loafers", image: "/assets/images/rizz_simple_sandals/rizz-simple-leather-thong-sandal-2.jpg", span: "lg:col-span-3" }
];

/**
 * Homepage FAQ. Rendered visibly AND emitted as FAQPage schema, from this one
 * array — Google requires the structured data to match on-page content, so
 * they must never be written out separately.
 */
const HOME_FAQ = [
  {
    question: "Do you deliver outside Chittagong?",
    answer:
      "Yes. We deliver to every district in Bangladesh. Orders inside Chattogram city usually arrive in 1-2 days, and the rest of the country in 2-4 days.",
  },
  {
    question: "Is Cash on Delivery available?",
    answer:
      "Yes. Cash on Delivery is available nationwide — you pay the courier when the parcel reaches you, so nothing is paid up front. You can also pay in advance by bKash or Nagad if you prefer.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Inside Chattogram city, 1-2 working days. Anywhere else in Bangladesh, 2-4 working days. We send a confirmation call before dispatch.",
  },
  {
    question: "Can I exchange a product if the size does not fit?",
    answer:
      "Yes. You can exchange an unused product in its original condition within 7 days of delivery. Bring or send the invoice with the product. Items bought on sale are not exchangeable.",
  },
  {
    question: "Is the leather genuine?",
    answer:
      "Yes. Every RIZZ product is made from genuine leather — full-grain calfskin, premium suede, or vegetable-tanned hide — cut and stitched by hand in our own Chattogram workshop.",
  },
  {
    question: "Can I visit your shop?",
    answer:
      `Yes. Our showroom is at ${BUSINESS.streetAddress}, ${BUSINESS.addressLocality} ${BUSINESS.postalCode}. Call ${BUSINESS.telephoneDisplay} before visiting to confirm stock and opening hours.`,
  },
];

const fallbackMaterials = [
  { label: "Full-Grain Calfskin", desc: "The pinnacle of leather. Natural texture, unmatched durability." },
  { label: "Premium Suede", desc: "Velvety nap, rich depth. For the discerning touch." },
  { label: "Vegetable-Tanned", desc: "Traditional bark-tanning. Ages into a personal patina." },
  { label: "Crocodile-Emboss", desc: "Exotic texture, refined character. A statement in restraint." }
];

const fallbackBrandBar = ["Genuine Leather", "Hand-Stitched", "COD Nationwide", "Ships Worldwide", "Free Returns"];

// ─────────────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  const [hero, brandbar, editorial, materialsSection, quote, cta, apiProducts, apiCategories, campaigns] =
    await Promise.all([
      getSection("hero"),
      getSection("brandbar"),
      getSection("editorial"),
      getSection("materials"),
      getSection("quote"),
      getSection("cta"),
      getFeaturedProducts(),
      getCategories(),
      getActiveCampaigns(),
    ]);

  // Hero data
  const heroImage = hero?.image || "/assets/images/rizz-slide-crocodile-leather-sandal.jpg";
  const heroHeadline: string = hero?.headline || "Crafted for\nthose who know.";
  const heroSubtext: string = hero?.subtext || "Artisan leather footwear and accessories.\nEach piece made by hand. None made in haste.";
  const heroCtaPrimary = { label: hero?.cta_primary_label || "Shop the Collection", href: hero?.cta_primary_href || "/brand/catalog" };
  const heroCtaSecondary = { label: hero?.cta_secondary_label || "New Arrivals", href: hero?.cta_secondary_href || "/brand/catalog?sort=new" };
  const heroLocation = hero?.location_tag || "Chittagong · Bangladesh";

  // Brand bar
  const brandBadges: string[] = (
    (brandbar?.items && Array.isArray(brandbar.items) && brandbar.items.length > 0) ? brandbar.items :
    (brandbar?.badges && Array.isArray(brandbar.badges) && brandbar.badges.length > 0) ? brandbar.badges :
    fallbackBrandBar
  );

  // New arrivals from API or fallback
  const newArrivals = apiProducts
    ? apiProducts.map((p: Record<string, unknown>) => {
        const images = (p.media as {media_url: string}[] | undefined)?.map(m => m.media_url)
          ?? (p.images as {image_url: string}[] | undefined)?.map(i => i.image_url)
          ?? [];
        const cardPrice = getApiProductCardPrice(p as { price?: number; variants?: { price: number; sale_price?: number | null }[] });
        return {
          name: p.name as string,
          material: (p.material as string) || "Genuine Leather",
          price: cardPrice > 0 ? `৳ ${cardPrice.toLocaleString("en-US")}` : "Contact for Price",
          badge: (p.tags as string[] | undefined)?.includes("new") ? "New"
            : (p.tags as string[] | undefined)?.includes("bestseller") ? "Bestseller"
            : p.is_featured ? "Bestseller" : null,
          href: `/brand/catalog/${p.slug}`,
          image: images[0] || "/assets/images/rizz_crodile_slide_sandals/rizz-crocodile-slide-leather-sandal-5.jpg"
        };
      })
    : fallbackArrivals;

  // Editorial banner
  const editorialImage = editorial?.image || "/assets/images/rizz_crodile_slide_sandals/rizz-crocodile-slide-leather-sandal-7.jpg";
  const editorialTag = editorial?.tag || "The Signature";
  const editorialHeadline: string = editorial?.headline || "Made for men\nof distinction.";
  const editorialBody = editorial?.body || "Every Rizz piece begins as a single hide — selected, cut, and shaped by craftsmen who have spent decades understanding leather.";
  const editorialBtn = { label: editorial?.button_label || "Our Craft", href: editorial?.button_href || "/factory-quality" };

  // Categories — use API categories with fallback images if available
  const displayCategories = (apiCategories && apiCategories.length > 0)
    ? (apiCategories as Record<string, unknown>[]).slice(0, 5).map((cat, i) => ({
        label: cat.name as string,
        sub: (cat.description as string | undefined) || "Explore Collection",
        href: `/brand/catalog?category=${encodeURIComponent(cat.slug as string)}`,
        image: (cat.thumbnail_image as string | undefined) || fallbackCategories[i % fallbackCategories.length]?.image || "/assets/images/rizz_master_color_sandals/rizz-master-color-quilted-leather-sandal-1.jpg",
        span: fallbackCategories[i % fallbackCategories.length]?.span || "lg:col-span-3"
      }))
    : fallbackCategories;

  // Materials section
  const materials: {label: string; desc: string}[] =
    (materialsSection?.items && Array.isArray(materialsSection.items) && materialsSection.items.length > 0)
      ? materialsSection.items
      : fallbackMaterials;

  // Quote section
  const quoteText: string = quote?.text || "Luxury is not about the price.\nIt is about how something makes you feel every time you wear it.";
  const quoteAttribution = quote?.attribution || "— Rizz Atelier, Chittagong";

  // CTA section
  const ctaImage = cta?.image || "/assets/images/rizz_double_bockles-sandals/rizz-double-buckle-leather-sandal-2.jpg";
  const ctaTag = cta?.tag || "Exclusive Access";
  const ctaHeadline = cta?.headline || "The full collection awaits.";
  const ctaPrimary = { label: cta?.cta_primary_label || "Shop Now", href: cta?.cta_primary_href || "/brand/catalog" };
  const ctaSecondary = { label: cta?.cta_secondary_label || "Enquire", href: cta?.cta_secondary_href || "/contact" };

  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Hero shot as a real <img>. Eager + high priority because it is the
            Largest Contentful Paint element — a lazy hero would hurt Core Web
            Vitals, which is itself a ranking signal. */}
        <img
          src={heroImage}
          alt="Handcrafted RIZZ leather sandals made in Chattogram, Bangladesh"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#080808]" />

        <div className="relative flex min-h-[92vh] flex-col items-center justify-center px-5 pb-20 pt-16 text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">{heroLocation}</p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] text-[var(--cream)] sm:text-6xl lg:text-8xl">
            {heroHeadline.split("\n").map((line, i) => (
              <span key={i}>{line}{i < heroHeadline.split("\n").length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-loose text-[#9a9690] sm:text-base">
            {heroSubtext.split("\n").map((line: string, i: number) => (
              <span key={i}>{line}{i < heroSubtext.split("\n").length - 1 && <br />}</span>
            ))}
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link href={heroCtaPrimary.href} className="btn-primary w-full sm:w-auto">{heroCtaPrimary.label}</Link>
            <Link href={heroCtaSecondary.href} className="btn-ghost w-full sm:w-auto">{heroCtaSecondary.label}</Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--text)]">Scroll</span>
          <div className="h-8 w-px bg-[var(--gold-dim)]" />
        </div>
      </section>

      {/* ── Brand Bar ───────────────────────────────────────── */}
      <div className="border-y border-[var(--hairline)] bg-[var(--bg)] py-4">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 text-[9px] uppercase tracking-[0.35em] text-[var(--muted)]">
          {brandBadges.flatMap((badge: string, i: number) => [
            ...(i > 0 ? [<span key={`dot-${i}`} className="opacity-30">·</span>] : []),
            <span key={`badge-${i}`}>{badge}</span>
          ])}
        </div>
      </div>

      {/* ── Campaigns ─────────────────────────────────────────── */}
      {campaigns.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="mb-10">
            <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Limited Time</p>
            <h2 className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl">Active Campaigns</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {campaigns.map((c: Record<string, unknown>) => (
              <Link
                key={c.id as string}
                href={`/brand/catalog${(c.product_ids as string[])?.length ? `?campaign=${c.id}` : ""}`}
                className="group relative block overflow-hidden no-underline"
              >
                <div
                  className="h-[220px] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04] sm:h-[260px]"
                  style={{ backgroundImage: `url('${(c.image_url as string) || "/assets/images/rizz_crodile_slide_sandals/rizz-crocodile-slide-leather-sandal-5.jpg"}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <span className="absolute left-4 top-4 bg-[var(--gold)] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0a0806]">
                  {campaignBadge(c)}
                </span>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-2xl text-[var(--cream)]">{(c.headline as string) || (c.name as string)}</h3>
                  {(c.body as string) && <p className="mt-1 text-xs text-[#cfcac3]">{c.body as string}</p>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── New Arrivals ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Just In</p>
            <h2 className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl lg:text-5xl">New Arrivals</h2>
          </div>
          <Link href="/brand/catalog?sort=new" className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] hover:text-[var(--gold-light)] transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {newArrivals.map((item, i) => (
            <Link key={`arrival-${i}`} href={item.href} className="group block no-underline">
              <div className="relative overflow-hidden bg-[var(--surface)]">
                {/* A real <img> rather than a CSS background: Google Images
                    cannot index background-image, and a screen reader has
                    nothing to announce. object-cover reproduces the previous
                    bg-cover framing exactly. */}
                <img
                  src={item.image}
                  alt={`${item.name} in ${item.material} — handcrafted leather by RIZZ Leather, Chattogram`}
                  loading="lazy"
                  decoding="async"
                  className="h-[340px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04] sm:h-[380px] lg:h-[420px]"
                />
                {item.badge && (
                  <span className="absolute left-4 top-4 bg-[var(--gold)] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0a0806]">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-serif text-lg text-[var(--cream)]">{item.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{item.material}</p>
                <p className="mt-2 text-sm font-medium tracking-wide text-[var(--gold-light)]">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Editorial Banner ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="h-[60vh] min-h-[400px] bg-cover bg-center sm:h-[70vh]" style={{ backgroundImage: `url('${editorialImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 sm:px-16 lg:px-24">
            <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">{editorialTag}</p>
            <h2 className="mt-4 max-w-md text-3xl leading-tight text-[var(--cream)] sm:text-5xl lg:text-6xl">
              {editorialHeadline.split("\n").map((line: string, i: number) => (
                <span key={i}>{line}{i < editorialHeadline.split("\n").length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#8a8580]">{editorialBody}</p>
            <Link href={editorialBtn.href} className="btn-outline mt-8 inline-flex">{editorialBtn.label}</Link>
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 text-center">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Explore</p>
          <h2 className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl lg:text-5xl">Collections</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {displayCategories.map((cat, i) => (
            <Link key={`cat-${i}`} href={cat.href} className={`group relative overflow-hidden ${cat.span} ${i === 0 ? "min-h-[400px] sm:min-h-[500px] lg:min-h-[560px]" : "min-h-[200px] sm:min-h-[240px]"}`}>
              {/* Indexable <img> instead of a background layer — same visual
                  result, but Google Images and screen readers can read it. */}
              <img
                src={cat.image}
                alt={`${cat.label} — ${cat.sub}. Handcrafted leather ${String(cat.label).toLowerCase()} by RIZZ Leather, Chattogram`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
              <div className="absolute bottom-5 left-5">
                <p className="font-serif text-xl text-[var(--cream)] sm:text-2xl lg:text-3xl">{cat.label}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[var(--gold-dim)]">{cat.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Materials ────────────────────────────────────────── */}
      <section className="border-y border-[var(--hairline)] bg-[var(--surface)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Substance</p>
            <h2 className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl">The Leather We Choose</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-loose text-[var(--muted)]">
              Sourced from the finest tanneries. Every hide is chosen for grain, weight, and how it ages over years of wear.
            </p>
          </div>
          <div className="grid gap-px border border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m, i) => (
              <div key={`mat-${i}`} className="bg-[var(--surface)] px-7 py-8 hover:bg-[var(--surface-soft)] transition-colors">
                <div className="mb-4 h-px w-8 bg-[var(--gold-dim)]" />
                <h3 className="font-serif text-lg text-[var(--cream)]">{m.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/materials" className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">
              Explore All Materials →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Full-width Quote ─────────────────────────────────── */}
      <section className="py-24 text-center lg:py-36">
        <div className="mx-auto max-w-3xl px-5">
          <p className="font-serif text-2xl leading-relaxed text-[var(--cream)] sm:text-3xl lg:text-4xl">
            &ldquo;{quoteText.split("\n").map((line: string, i: number) => (
              <span key={i}>{line}{i < quoteText.split("\n").length - 1 && <br />}</span>
            ))}&rdquo;
          </p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-[var(--gold-dim)]">{quoteAttribution}</p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {/* Answers the long-tail questions Bangladeshi shoppers actually type
          ("do they deliver outside Chittagong", "is cash on delivery
          available"). Paired with FAQPage schema below so Google and AI answer
          engines have something concrete to quote. The visible copy and the
          schema come from the same HOME_FAQ array — Google penalises schema
          that does not match what a visitor can see on the page. */}
      <section className="border-t border-[var(--hairline)] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Good to Know</p>
            <h2 className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl">Frequently Asked Questions</h2>
          </div>

          <dl className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
            {HOME_FAQ.map((faq, i) => (
              <div key={`faq-${i}`} className="py-6">
                <dt className="font-serif text-lg text-[var(--cream)] sm:text-xl">{faq.question}</dt>
                <dd className="mt-3 text-sm leading-loose text-[var(--muted)]">{faq.answer}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-center text-xs leading-loose text-[var(--muted)]">
            Still have a question?{" "}
            <Link href="/contact" className="text-[var(--gold-dim)] transition-colors hover:text-[var(--gold-light)]">
              Contact us
            </Link>{" "}
            or call{" "}
            <a href={`tel:${BUSINESS.telephone}`} className="text-[var(--gold-dim)] transition-colors hover:text-[var(--gold-light)]">
              {BUSINESS.telephoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQ.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-[var(--hairline)]">
        <div className="h-[50vh] min-h-[360px] bg-cover bg-[center_30%]" style={{ backgroundImage: `url('${ctaImage}')` }} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">{ctaTag}</p>
          <h2 className="mt-4 max-w-xl text-3xl text-[var(--cream)] sm:text-4xl lg:text-5xl">{ctaHeadline}</h2>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link href={ctaPrimary.href} className="btn-primary w-full sm:w-auto">{ctaPrimary.label}</Link>
            <Link href={ctaSecondary.href} className="btn-ghost w-full sm:w-auto">{ctaSecondary.label}</Link>
          </div>
        </div>
      </section>

    </main>
  );
}
