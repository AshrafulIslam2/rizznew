import type { Metadata } from "next";
import Link from "next/link";
import { getSeoOverride, buildMetadata, getBaseUrl } from "@/lib/seo";
import { CatalogDownloadButton } from "@/components/catalog-download-button";
import { MarqueeGallery } from "@/components/marquee-gallery";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";

type Stat = { label: string; value: string };
type Capability = { title: string; body: string };
type Faq = { question: string; answer: string };

type ManufacturingData = {
  hero_video_url: string;
  hero_image: string;
  hero_tag: string;
  hero_headline: string;
  hero_subtext: string;
  stats: Stat[];
  about_heading: string;
  about_body: string;
  gallery_images: string[];
  product_categories: string[];
  capabilities: Capability[];
  certifications: Capability[];
  factory_address: string;
  factory_city: string;
  whatsapp_number: string;
  phone_number: string;
  email: string;
  catalog_pdf_url: string;
  faqs: Faq[];
  meta_title: string;
  meta_description: string;
};

async function getManufacturingData(): Promise<ManufacturingData | null> {
  try {
    const res = await fetch(`${API}/homepage/manufacturing`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || Object.keys(data).length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

const FALLBACK: ManufacturingData = {
  hero_video_url: "",
  hero_image: "/assets/images/rizz-slide-crocodile-leather-sandal.jpg",
  hero_tag: "Manufacturing & Wholesale",
  hero_headline: "Bangladesh's Trusted Leather Footwear & Goods Manufacturer",
  hero_subtext: "RIZZ Leather designs and manufactures loafers, derby shoes, oxfords, penny loafers, sandals, and formal leather footwear for brands across Bangladesh and internationally — private label, OEM, and bulk wholesale, from our own factory in Chittagong.",
  stats: [
    { label: "Brands Supported", value: "500+" },
    { label: "Pairs Manufactured", value: "50,000+" },
    { label: "Years of Craftsmanship", value: "12+" },
    { label: "Countries Served", value: "15+" },
  ],
  about_heading: "Who We Are",
  about_body: "RIZZ Leather is a full-service leather footwear and goods manufacturer based in Chittagong, Bangladesh — one of the world's leading leather-producing regions. We design and produce loafers, derby shoes, oxfords, penny loafers, sandals, belts, and wallets for local and international brands, handling everything from material sourcing and pattern-making to private-label branding and export-ready packaging.",
  gallery_images: [],
  product_categories: ["Loafers", "Derby Shoes", "Oxfords", "Penny Loafers", "Sandals", "Formal Leather Shoes", "Belts", "Wallets"],
  capabilities: [
    { title: "Private Label & OEM", body: "Full custom branding — your logo, your packaging, your specifications, manufactured to your standard." },
    { title: "Bulk Wholesale", body: "Production runs scaled to your order size, with consistent quality across every batch." },
    { title: "Export-Ready", body: "Documentation, packaging, and logistics support for shipping to international markets." },
    { title: "Material Sourcing", body: "Full-grain, vegetable-tanned, suede, and embossed leathers sourced and quality-checked in-house." },
  ],
  certifications: [],
  factory_address: "Chittagong, Bangladesh",
  factory_city: "Chittagong",
  whatsapp_number: "",
  phone_number: "",
  email: "",
  catalog_pdf_url: "",
  faqs: [
    { question: "Who is the best leather shoe manufacturer in Bangladesh?", answer: "RIZZ Leather is a Chittagong-based leather footwear manufacturer supporting 500+ brands across Bangladesh and internationally, producing loafers, derby shoes, oxfords, penny loafers, and sandals for private label and wholesale buyers." },
    { question: "Does RIZZ offer private label / OEM manufacturing for shoes?", answer: "Yes. RIZZ manufactures loafers, derby shoes, oxfords, and sandals under your own brand — including custom packaging, branding, and export documentation — for both Dhaka and international buyers." },
    { question: "Where is RIZZ's factory located?", answer: "Our factory is located in Chittagong, Bangladesh, with sourcing and client support available in Dhaka." },
  ],
  meta_title: "Leather Shoe Manufacturer in Bangladesh — Loafers, Oxfords, Sandals | RIZZ",
  meta_description: "RIZZ Leather is a Chittagong, Bangladesh-based manufacturer of loafers, derby shoes, oxfords, penny loafers, and sandals — private label, OEM, and wholesale for brands in Dhaka and internationally.",
};

export async function generateMetadata(): Promise<Metadata> {
  const [override, data] = await Promise.all([getSeoOverride("manufacturing"), getManufacturingData()]);
  const merged = { ...FALLBACK, ...data };
  return buildMetadata({
    path: "/manufacturing",
    defaultTitle: merged.meta_title,
    defaultDescription: merged.meta_description,
    defaultImage: merged.hero_image,
    override,
  });
}

export default async function ManufacturingPage() {
  const data = { ...FALLBACK, ...(await getManufacturingData()) };
  const baseUrl = getBaseUrl();

  const waLink = data.whatsapp_number
    ? `https://wa.me/${data.whatsapp_number.replace(/[^\d]/g, "")}?text=${encodeURIComponent("Hi RIZZ Leather, I'm interested in your manufacturing / wholesale services.")}`
    : null;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/manufacturing#business`,
        name: "RIZZ Leather — Manufacturing & Wholesale",
        description: data.meta_description,
        url: `${baseUrl}/manufacturing`,
        image: data.hero_image,
        address: {
          "@type": "PostalAddress",
          streetAddress: data.factory_address,
          addressLocality: data.factory_city,
          addressCountry: "BD",
        },
        ...(data.phone_number ? { telephone: data.phone_number } : {}),
        ...(data.email ? { email: data.email } : {}),
        areaServed: ["Bangladesh", "Dhaka", "Chittagong", "International"],
        makesOffer: data.product_categories.map((c) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: c },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {data.hero_video_url ? (
          <video
            autoPlay muted loop playsInline
            poster={data.hero_image}
            className="h-[64vh] min-h-[440px] w-full object-cover"
          >
            <source src={data.hero_video_url} type="video/mp4" />
          </video>
        ) : (
          <div className="h-[64vh] min-h-[440px] bg-cover bg-center" style={{ backgroundImage: `url('${data.hero_image}')` }} />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 sm:px-12 lg:px-20 max-w-3xl">
            <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">{data.hero_tag}</p>
            <h1 className="mt-4 font-serif text-3xl leading-tight text-[var(--cream)] sm:text-5xl lg:text-6xl">{data.hero_headline}</h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">{data.hero_subtext}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {waLink && (
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp Us</a>
              )}
              {data.phone_number && (
                <a href={`tel:${data.phone_number}`} className="btn-ghost">Call Now</a>
              )}
              <CatalogDownloadButton catalogUrl={data.catalog_pdf_url} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:grid-cols-4 lg:px-8">
          {data.stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-3xl text-[var(--gold-light)] sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">{data.factory_city}, Bangladesh</p>
        <h2 className="mt-3 font-serif text-3xl text-[var(--cream)] sm:text-4xl">{data.about_heading}</h2>
        <p className="mt-6 text-sm leading-loose text-[var(--muted)]">{data.about_body}</p>
      </section>

      {/* Gallery */}
      {data.gallery_images.length > 0 && (
        <section className="border-y border-[var(--hairline)] bg-[var(--surface)] py-14">
          <div className="mb-6 px-5 lg:px-8">
            <p className="mx-auto max-w-7xl text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Inside the Factory</p>
          </div>
          <MarqueeGallery images={data.gallery_images} />
        </section>
      )}

      {/* What we manufacture */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">In Bangladesh — Dhaka &amp; Chittagong</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--cream)] sm:text-4xl">What We Manufacture</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            From our Chittagong factory, RIZZ produces the full range of men&apos;s leather footwear and goods — for private label, OEM, and wholesale buyers across Bangladesh and internationally.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {data.product_categories.map((c) => (
              <Link
                key={c}
                href={`/brand/catalog?category=${encodeURIComponent(c.toLowerCase().replace(/\s+/g, "-"))}`}
                className="rounded-full border border-[var(--border)] px-5 py-2 text-xs uppercase tracking-[0.15em] text-[var(--cream)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold-light)]"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-[var(--hairline)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-serif text-3xl text-[var(--cream)] sm:text-4xl">Manufacturing Capabilities</h2>
          <div className="mt-8 grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {data.capabilities.map((c, i) => (
              <div key={i} className="bg-[var(--surface)] p-7">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-lg text-[var(--cream)]">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="font-serif text-2xl text-[var(--cream)]">Certifications &amp; Quality</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {data.certifications.map((c, i) => (
                <div key={i} className="border border-[var(--border)] p-5">
                  <p className="font-serif text-base text-[var(--cream)]">{c.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Factory address + contact */}
      <section className="border-y border-[var(--hairline)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-2xl text-[var(--cream)]">Visit Our Factory</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{data.factory_address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.factory_address)}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-4 inline-block text-[10px] uppercase tracking-[0.3em] text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors"
            >
              Get Directions →
            </a>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-[var(--cream)]">Talk to Us</h2>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              {data.phone_number && <a href={`tel:${data.phone_number}`} className="text-[var(--muted)] hover:text-[var(--gold-light)]">{data.phone_number}</a>}
              {data.email && <a href={`mailto:${data.email}`} className="text-[var(--muted)] hover:text-[var(--gold-light)]">{data.email}</a>}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {waLink && <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">WhatsApp</a>}
              {data.phone_number && <a href={`tel:${data.phone_number}`} className="btn-ghost">Call</a>}
              {data.email && <a href={`mailto:${data.email}`} className="btn-ghost">Email</a>}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <h2 className="font-serif text-3xl text-[var(--cream)] text-center sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-0 border-t border-[var(--hairline)]">
            {data.faqs.map((f, i) => (
              <details key={i} className="group border-b border-[var(--hairline)]">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium text-[var(--cream)]">
                  {f.question}
                  <span className="text-[var(--gold-dim)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-[var(--muted)]">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--hairline)] py-16 text-center lg:py-20">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="font-serif text-3xl text-[var(--cream)] sm:text-4xl">Let&apos;s manufacture together.</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">Private label, OEM, or bulk wholesale — get in touch and we&apos;ll get back to you within 24 hours.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {waLink && <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">WhatsApp Us</a>}
            <CatalogDownloadButton catalogUrl={data.catalog_pdf_url} />
          </div>
        </div>
      </section>
    </main>
  );
}
