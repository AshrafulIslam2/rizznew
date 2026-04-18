import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Leather Sandals Manufacturer in Chittagong | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a leather sandals manufacturer in Chittagong (Bakolia). MOQ 12 pairs. Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days. Leather sandals for men and women. Wholesale, OEM and private label with logo embossing and printing. Supply across Bangladesh including Dhaka.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/leather-sandals-manufacturer-chittagong`;

  return {
    title: pageTitle,
    description: pageDescription,
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

const productGroups = [
  {
    title: "Men's leather sandals",
    points: [
      "Everyday leather sandals with retail-ready finishing",
      "Wholesale supply for shop owners and distributors",
      "Size run planning based on your target market"
    ],
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Women's leather sandals",
    points: [
      "Casual leather sandals based on design",
      "Fashion-focused variations based on specification",
      "Wholesale supply for retailers and resellers"
    ],
    image: "https://images.unsplash.com/photo-1514126128186-e02c9bbef3b9?auto=format&fit=crop&w=1200&q=80"
  }
];

const qualityChecks = [
  "Finishing and attachment inspection",
  "Pair matching and symmetry check",
  "Size consistency check",
  "Packaging check before dispatch"
];

const faqs = [
  {
    q: "Where are you located in Chittagong?",
    a: "Our address is Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh."
  },
  {
    q: "What is your MOQ for leather sandals?",
    a: "MOQ is 12 pairs."
  },
  {
    q: "Do you have ready stock?",
    a: "Yes. Ready stock dispatch is typically 3-4 days, subject to availability."
  },
  {
    q: "Do you accept made-to-order production?",
    a: "Yes. Typical lead time is 15-30 days."
  },
  {
    q: "Do you manufacture leather sandals for men and women?",
    a: "Yes. We manufacture leather sandals for both men and women."
  },
  {
    q: "Do you offer private label and OEM?",
    a: "Yes. We offer OEM/private label with logo embossing and logo printing."
  }
];

export default function LeatherSandalsManufacturerChittagongPage() {
  return (
    <main>
      <LandingStructuredData
        path="/leather-sandals-manufacturer-chittagong"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Leather Sandals Manufacturer in Chittagong", item: "/leather-sandals-manufacturer-chittagong" }
        ]}
      />
      <section className="relative overflow-hidden border-b border-[var(--hairline-accent)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506629905607-d405b7d8a4a9?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[#050507]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/88" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:py-24">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Manufacturer in Bakolia, Chittagong</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Leather Sandals Manufacturer in Chittagong
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Rizz Leather is a leather sandals manufacturer in Chittagong, located in Bakolia. We manufacture leather sandals for men and women for
              wholesale buyers, retailers, and brand owners who need consistent finishing and dependable delivery planning.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#get-quote" className="btn-primary">
                Get Price and Catalog
              </Link>
              <Link href="#wholesale" className="btn-outline">
                Wholesale Options
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
                  Chittagong Based Leather Sandals Manufacturing
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you are searching for a leather sandals manufacturer in Chittagong, you likely want a supplier who can support wholesale supply and
                custom requirements for brands. Rizz Leather provides factory-backed manufacturing in Bakolia, Chittagong, with options for ready stock
                and made-to-order production.
              </p>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                From our Chittagong base, we also supply wholesale leather sandals across Bangladesh, including Dhaka.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Factory-backed leather sandal manufacturing",
                "Men's and women's product support",
                "Ready stock plus made-to-order options",
                "Wholesale supply across Bangladesh"
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
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Sandals We Manufacture</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              Built for retail and wholesale distribution with size-run and finishing flexibility.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {productGroups.map((group) => (
              <article key={group.title} className="overflow-hidden border border-[var(--hairline-accent)] bg-[#080b13]/80">
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${group.image}')` }} />
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl font-semibold text-[#f4eee1]">{group.title}</h3>
                  <ul className="space-y-2 text-base text-[#adb2bd]">
                    {group.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-base text-[#adb2bd] sm:text-lg">
            Bangladesh leather hub page: {" "}
            <Link href="/leather-sandals-manufacturer-bangladesh" className="font-semibold">
              Leather Sandals Manufacturer in Bangladesh
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="wholesale" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Ready Stock</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Ready Stock (3-4 Days)</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                We maintain ready stock for selected leather sandals designs and sizes to support fast wholesale supply. Typical dispatch is 3-4 days
                after confirmation, subject to availability.
              </p>
              <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                <li>MOQ: 12 pairs</li>
                <li>Best for quick replenishment and regular wholesale buying</li>
              </ul>
            </article>

            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Made-to-Order</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Made-to-Order (15-30 Days)</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you need a specific style, finishing, or sizing breakdown, we support made-to-order manufacturing. Typical lead time is 15-30 days
                depending on order details.
              </p>
              <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                <li>MOQ: 12 pairs</li>
                <li>Modify an existing design or develop a new style from reference</li>
              </ul>
            </article>
          </div>

          <p className="mt-8 text-base text-[#adb2bd] sm:text-lg">
            Wholesale leather page: {" "}
            <Link href="/leather-sandals-wholesaler-bangladesh" className="font-semibold">
              Leather Sandals Wholesaler in Bangladesh
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="materials-quality" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Materials and QC</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Materials and Quality Control</h2>
            </div>
            <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              We focus on consistent output for wholesale buyers through practical checks on finishing, sizing, and packaging. Leather selection and
              finishing can be adjusted based on your market requirements.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {qualityChecks.map((item) => (
                <article key={item} className="rounded-2xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-5">
                  <p className="text-base leading-relaxed text-[#d8dde5]">{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Leather selection",
                desc: "Based on buyer requirement and material availability."
              },
              {
                title: "Color and finish",
                desc: "Aligned with your target market and product strategy."
              },
              {
                title: "Sole options",
                desc: "Selected based on design intent and comfort needs."
              },
              {
                title: "Packaging controls",
                desc: "Checked before dispatch in every batch."
              }
            ].map((item) => (
              <article key={item.title} className="surface-panel rounded-2xl border p-5">
                <h3 className="text-2xl font-semibold text-[#f4eee1]">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#adb2bd]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oem-private-label" className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">OEM / Private Label</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM and Private Label Leather Sandals</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              Rizz Leather supports OEM and private label manufacturing so you can sell leather sandals under your own brand name. You can share your
              new design or select an existing design and request modifications.
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
                <h3 className="text-xl font-semibold text-[#f4eee1]">Fast Quote Inputs</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#d8dde5]">
                  <li>Design reference</li>
                  <li>Men or women category</li>
                  <li>Sizes and total pairs</li>
                  <li>Ready stock or made-to-order</li>
                  <li>Logo embossing or printing requirement</li>
                </ul>
              </article>
            </div>
            <p className="mt-6 text-base text-[#adb2bd] sm:text-lg">
              Factory location page: {" "}
              <Link href="/leather-sandals-factory-chittagong" className="font-semibold">
                Leather Sandals Factory in Chittagong
              </Link>
              .
            </p>
          </article>

          <article id="delivery" className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Delivery</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Delivery Across Bangladesh, Including Dhaka</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              Our manufacturing base is in Bakolia, Chittagong. We supply wholesale leather sandals across Bangladesh, including Dhaka.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              For Dhaka-focused wholesale ordering, use our wholesale channel below.
            </p>
            <Link href="/wholesale" className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.12em] no-underline">
              Dhaka and Nationwide Wholesale
            </Link>
          </article>
        </div>
      </section>

      <section id="faq" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Sandals Manufacturer in Chittagong</h2>
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
                Send your requirement for men or women categories, sizes, total pairs, ready stock or made-to-order preference, and logo details.
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