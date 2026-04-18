import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Sandals Manufacturer in Chittagong | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a sandals manufacturer in Chittagong (Bakolia). MOQ 12 pairs. Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days. PU leather and leather sandals for men and women. Wholesale, OEM and private label with logo embossing and printing. Supply across Bangladesh including Dhaka.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/sandals-manufacturer-chittagong`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
      languages: {
        en: url
      }
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: "Rizz Leather",
      type: "website"
    }
  };
}

const highlights = [
  { label: "MOQ", value: "12 pairs" },
  { label: "Ready stock dispatch", value: "3-4 days" },
  { label: "Made-to-order lead time", value: "15-30 days" },
  { label: "Branding", value: "Logo embossing and printing" },
  { label: "Address", value: "Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh" }
];

const productCategories = [
  {
    title: "PU leather sandals",
    description: "Men's and women's categories for wholesale stock and repeat supply.",
    image: "https://images.unsplash.com/photo-1514126128186-e02c9bbef3b9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Leather sandals",
    description: "Leather builds for wholesale buyers who need consistent finishing.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Slides and flip-flops",
    description: "Available on request depending on design and seasonal demand.",
    image: "https://images.unsplash.com/photo-1506629905607-d405b7d8a4a9?auto=format&fit=crop&w=1200&q=80"
  }
];

const faqs = [
  {
    q: "Where is your manufacturing base located?",
    a: "Our address is Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh."
  },
  {
    q: "What is your MOQ?",
    a: "MOQ is 12 pairs."
  },
  {
    q: "What is your ready stock dispatch time?",
    a: "Ready stock dispatch is typically 3-4 days, subject to availability."
  },
  {
    q: "What is your made-to-order lead time?",
    a: "Made-to-order lead time is typically 15-30 days."
  },
  {
    q: "Do you manufacture PU leather and leather sandals?",
    a: "Yes. We manufacture both PU leather sandals and leather sandals."
  },
  {
    q: "Do you supply to Dhaka?",
    a: "Yes. We supply wholesale sandals to Dhaka and other cities across Bangladesh."
  },
  {
    q: "Do you offer OEM/private label?",
    a: "Yes. We offer OEM/private label with logo embossing and logo printing."
  },
  {
    q: "Do you also manufacture Oxford shoes?",
    a: "Yes. Oxford production starts from 120+ pairs, while sandals start from 12 pairs."
  },
  {
    q: "Can you support branded box and packaging?",
    a: "Yes. We can support private label packaging and branded box requests based on the order plan."
  },
  {
    q: "Can we order samples before bulk?",
    a: "Yes. Sampling can be arranged before full production for OEM and repeat models."
  }
];

export default function SandalsManufacturerChittagongPage() {
  return (
    <main>
      <LandingStructuredData
        path="/sandals-manufacturer-chittagong"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Sandals Manufacturer in Chittagong", item: "/sandals-manufacturer-chittagong" }
        ]}
      />
      <section className="relative overflow-hidden border-b border-[var(--hairline-accent)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[#050507]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/88" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:py-24">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Manufacturer in Bakolia, Chittagong</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Sandals Manufacturer in Chittagong
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Rizz Leather is a sandals manufacturer in Chittagong, located in Bakolia. We manufacture PU leather sandals and leather sandals for men
              and women, supplying wholesale buyers, shop owners, and brand owners with factory-backed production.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#get-quote" className="btn-primary">
                Get Price and Catalog
              </Link>
              <Link href="#products" className="btn-outline">
                Products
              </Link>
              <Link href="#oem-private-label" className="btn-outline">
                OEM / Private Label
              </Link>
              <Link href="#faq" className="btn-outline">
                FAQ
              </Link>
            </div>
          </div>

          <aside className="surface-panel rounded-2xl border p-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#cdbb8f]">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold text-[#f4eee1]">{item.value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="overview" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Overview</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">
                  Chittagong Based Sandals Manufacturing
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Buyers searching for a sandals manufacturer in Chittagong often want direct production support, consistent finishing, and reliable
                timelines. Rizz Leather manufactures in Bakolia, Chittagong, and supplies wholesale sandals across Bangladesh including Dhaka.
              </p>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                We support ready stock wholesale for faster delivery and made-to-order manufacturing for custom requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Factory-backed production in Chittagong",
                "PU leather and leather category support",
                "Ready stock and made-to-order workflows",
                "Wholesale supply across Dhaka and nationwide"
              ].map((item) => (
                <article key={item} className="surface-panel rounded-2xl border p-5">
                  <p className="text-base leading-relaxed text-[#e9dcc0]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Products</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals We Manufacture</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              PU leather and leather categories for men and women with wholesale-ready consistency.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {productCategories.map((item) => (
              <article key={item.title} className="overflow-hidden border border-[var(--hairline-accent)] bg-[#080b13]/80">
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl font-semibold text-[#f4eee1]">{item.title}</h3>
                  <p className="text-base leading-relaxed text-[#adb2bd]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-base text-[#adb2bd] sm:text-lg">
            Leather-only manufacturer page:{" "}
            <Link href="/leather-sandals-manufacturer-chittagong" className="font-semibold">
              Leather Sandals Manufacturer in Chittagong
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="supply-options" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Ready Stock</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Ready Stock (3-4 Days)</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                We keep ready stock for selected designs and size runs to support quick wholesale supply. Typical dispatch is 3-4 days after order
                confirmation, subject to availability.
              </p>
              <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                <li>MOQ: 12 pairs</li>
                <li>Best for retail shops, wholesalers, and resellers</li>
              </ul>
            </article>

            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Made-to-Order</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Made-to-Order Manufacturing (15-30 Days)</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For custom design requirements, colors, or finishing preferences, we accept made-to-order production. Typical lead time is 15-30 days
                depending on the order.
              </p>
              <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                <li>MOQ: 12 pairs</li>
                <li>Modify an existing design or produce a new design from reference</li>
              </ul>
            </article>
          </div>

          <p className="mt-8 text-base text-[#adb2bd] sm:text-lg">
            Factory page:{" "}
            <Link href="/sandals-factory-chittagong" className="font-semibold">
              Sandals Factory in Chittagong
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="moq" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Sandals</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Sandals MOQ starts from 12 pairs for wholesale and OEM buyers.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Oxford</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Oxford MOQ starts from 120+ pairs depending on upper and sole specification.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Loafers</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Loafers MOQ is confirmed once design and materials are finalized.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="oem-private-label" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">OEM / Private Label</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM and Private Label Sandals</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              If you want to sell sandals under your own brand, we support OEM/private label manufacturing. You can send your new design or choose an
              existing style and request modifications.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                <h3 className="text-xl font-semibold text-[#f4eee1]">Branding Services</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#d8dde5]">
                  <li>Logo embossing</li>
                  <li>Logo printing</li>
                </ul>
              </article>
              <article className="rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                <h3 className="text-xl font-semibold text-[#f4eee1]">Quote Inputs</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#d8dde5]">
                  <li>Product type: PU leather or leather</li>
                  <li>Men or women category</li>
                  <li>Sizes and total pairs</li>
                  <li>Logo embossing or printing requirement</li>
                </ul>
              </article>
            </div>
            <p className="mt-6 text-base text-[#adb2bd] sm:text-lg">
              Bangladesh hub page:{" "}
              <Link href="/sandals-manufacturer-bangladesh" className="font-semibold">
                Sandals Manufacturer in Bangladesh
              </Link>
              .
            </p>
          </article>

          <article id="delivery" className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Delivery</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Delivery Across Bangladesh, Including Dhaka</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              We are based in Chittagong and supply wholesale orders across Bangladesh.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/wholesale" className="btn-outline">
                Dhaka Wholesale Ordering
              </Link>
              <Link href="/sandals-factory-chittagong" className="btn-outline">
                Chittagong Factory Page
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals Manufacturer in Chittagong</h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <details key={item.q} className="surface-panel rounded-2xl border p-5">
                <summary className="cursor-pointer list-none text-xl font-semibold text-[#f4eee1]">{item.q}</summary>
                <p className="mt-3 text-base leading-relaxed text-[#adb2bd]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="get-quote" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 rounded-3xl border border-[var(--hairline-accent)] bg-[#080b13]/90 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Get Quote</p>
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Get Price, Catalog, and OEM Support</h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For a fast quotation, send product type, men or women category, sizes, total pairs, and logo requirement.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`https://wa.me/${CONTACT.whatsappNumber}`} className="btn-whatsapp">
                  WhatsApp {CONTACT.whatsappDisplay}
                </Link>
                <Link href={`mailto:${CONTACT.email}`} className="btn-outline">
                  Email {CONTACT.email}
                </Link>
              </div>
            </div>

            <div className="surface-panel rounded-2xl border p-5 sm:p-6">
              <dl className="space-y-4 text-sm text-[#d8dde5]">
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">Manufacturer</dt>
                  <dd className="text-right">Rizz Leather (Brand: Rizz)</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">MOQ</dt>
                  <dd className="text-right">12 pairs</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">Ready stock dispatch</dt>
                  <dd className="text-right">3-4 days</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">Made-to-order lead time</dt>
                  <dd className="text-right">15-30 days</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#cdbb8f]">Address</dt>
                  <dd className="text-right">Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}