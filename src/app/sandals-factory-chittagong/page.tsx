import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Sandals Factory in Chittagong, Bangladesh | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a sandals factory in Chittagong (Bakolia). MOQ 12 pairs. Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days. PU leather and leather sandals for men and women. Wholesale, OEM and private label with logo embossing and printing.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/sandals-factory-chittagong`;

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
  { label: "Factory address", value: "Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh" }
];

const productCategories = [
  {
    title: "PU leather sandals",
    description: "Men's and women's PU leather sandals for wholesale stock and repeat retail supply.",
    image: "https://images.unsplash.com/photo-1514126128186-e02c9bbef3b9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Leather sandals",
    description: "Leather options for buyers who need a premium position with durable finishing.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Slides and flip-flops",
    description: "Produced on request depending on design, sole requirements, and seasonal demand.",
    image: "https://images.unsplash.com/photo-1506629905607-d405b7d8a4a9?auto=format&fit=crop&w=1200&q=80"
  }
];

const qualityChecks = [
  "Finishing and attachment inspection",
  "Pair matching and symmetry check",
  "Size and fitting consistency check",
  "Packaging check before dispatch"
];

const customizations = [
  "Design development from reference image or sample",
  "Color and material selection",
  "Size range and quantity breakdown",
  "Finishing preferences for your target market"
];

const orderSteps = [
  "Share your requirement: design photo, men or women, sizes, quantity, material, and logo needs.",
  "Receive quotation with factory/wholesale price, dispatch plan, and lead time.",
  "Sampling (optional) for private label and made-to-order styles.",
  "Production starts: 15-30 days for made-to-order, 3-4 days dispatch for available ready stock.",
  "QC, packing, and final confirmation before release.",
  "Delivery within Bangladesh or export shipment for eligible buyers."
];

const faqs = [
  {
    q: "Are you a sandals factory in Chittagong?",
    a: "Yes. Rizz Leather is located in Bakolia, Chittagong-4203, Bangladesh."
  },
  {
    q: "What is your MOQ?",
    a: "Our MOQ is 12 pairs."
  },
  {
    q: "Do you supply wholesale sandals from Chittagong to Dhaka?",
    a: "Yes. We supply wholesale sandals to Dhaka and other cities from our Chittagong factory base."
  },
  {
    q: "Do you manufacture PU leather and leather sandals?",
    a: "Yes. We manufacture both PU leather sandals and leather sandals based on buyer requirements."
  },
  {
    q: "Do you produce sandals for men and women?",
    a: "Yes. We produce sandals for both men and women."
  },
  {
    q: "What is your ready stock dispatch time?",
    a: "Ready stock orders typically dispatch in 3-4 days, subject to availability."
  },
  {
    q: "What is your made-to-order lead time?",
    a: "Made-to-order lead time is typically 15-30 days."
  },
  {
    q: "Do you offer OEM/private label with logo?",
    a: "Yes. We offer OEM/private label with logo embossing and logo printing."
  },
  {
    q: "What is your MOQ for Oxford production?",
    a: "Oxford MOQ starts from 120+ pairs. Sandals MOQ starts from 12 pairs."
  },
  {
    q: "Can you provide branded packaging and box options?",
    a: "Yes. We support branded box and packaging options for OEM/private label programs."
  }
];

export default function SandalsFactoryChittagongPage() {
  return (
    <main>
      <LandingStructuredData
        path="/sandals-factory-chittagong"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Sandals Factory in Chittagong", item: "/sandals-factory-chittagong" }
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Bakolia, Chittagong Factory</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Sandals Factory in Chittagong, Bangladesh
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Rizz Leather is a sandals factory in Chittagong, located in Bakolia. We manufacture PU leather sandals and leather sandals for men and
              women, supporting wholesale supply, ready stock dispatch, and made-to-order manufacturing.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#get-quote" className="btn-primary">
                Get Factory Price
              </Link>
              <Link href="#products" className="btn-outline">
                Products
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

      <section id="quick-answer" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Quick Answer</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Sandals Factory in Chittagong for Bangladesh Buyers</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Rizz Leather manufactures from Bakolia, Chittagong and supplies wholesale buyers across Bangladesh, including Dhaka.
                We support OEM/private label, ready stock dispatch in 3-4 days, and made-to-order production in 15-30 days.
              </p>
            </article>
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Trust Signals</p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-[#d8dde5]">
                <li>Factory address: Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh</li>
                <li>MOQ: Sandals from 12 pairs, Oxford from 120+ pairs</li>
                <li>Client types: retailers, wholesalers, brand owners, and resellers</li>
                <li>Export-focused supply support for USA, Europe, and Middle East projects</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/low-moq-footwear-manufacturer" className="btn-outline">
                  Low MOQ Page
                </Link>
                <Link href="/leather-sandals-manufacturer-bangladesh" className="btn-outline">
                  Leather Manufacturer Page
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Factory-Direct</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">
                  Factory-Direct Sandals Manufacturing in Chattogram
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Buyers searching for a sandals factory in Chittagong usually want direct production support, stable quality, and clear delivery
                planning. At Rizz Leather, we combine factory-backed manufacturing with wholesale supply so you can source sandals for retail,
                distribution, or your own brand.
              </p>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                We supply across Bangladesh and support Dhaka wholesalers and retailers from our Chittagong factory base.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Factory-backed production in Bakolia, Chittagong",
                "Ready stock and made-to-order workflows",
                "OEM and private label with logo options",
                "Wholesale delivery across Bangladesh"
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
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals We Manufacture at Our Factory</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              PU leather and leather categories for men's and women's wholesale demand.
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
            For leather-focused sourcing, visit{" "}
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
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Wholesale Supply</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Ready Stock Dispatch (3-4 Days)</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For fast wholesale supply, we keep ready stock for selected designs and size runs. Typical dispatch time is 3-4 days after
                confirmation, subject to stock availability.
              </p>
              <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                <li>MOQ: 12 pairs</li>
                <li>Suitable for retailers, wholesalers, shop owners, and resellers</li>
              </ul>
            </article>

            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Manufacturing</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Made-to-Order Production (15-30 Days)</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you need a specific design, color, sizing breakdown, or finishing, we also support made-to-order production. Lead time is typically
                15-30 days depending on design complexity and order details.
              </p>
              <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                <li>MOQ: 12 pairs</li>
                <li>Modify an existing design or develop a new design</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="moq" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Sandals</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Sandals manufacturing starts from 12 pairs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Oxford</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Oxford manufacturing starts from 120+ pairs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Loafers</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Loafers MOQ is confirmed after sample review and material alignment.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="materials-quality" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Materials and QC</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Materials and Quality Control at Our Factory</h2>
            </div>
            <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              We manufacture sandals using PU leather and leather based on buyer requirements. Our focus is consistent finishing and comfort for repeat
              wholesale orders.
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
                title: "PU leather",
                desc: "Textures and color options based on current availability."
              },
              {
                title: "Leather",
                desc: "Leather options selected based on buyer specification."
              },
              {
                title: "Sole options",
                desc: "Grip and comfort tuned to the product design."
              },
              {
                title: "Packing standard",
                desc: "Final packaging checks completed before dispatch."
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">OEM / Private Label</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM and Private Label from Our Chittagong Factory</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Rizz Leather supports OEM and private label manufacturing for buyers who want to sell under their own brand. You can share a new
                design or select an existing design and request modifications.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <article className="rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                  <h3 className="text-xl font-semibold text-[#f4eee1]">Branding Services</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[#d8dde5]">
                    <li>Logo embossing on leather or PU parts depending on design</li>
                    <li>Logo printing as per requirement</li>
                  </ul>
                </article>
                <article className="rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                  <h3 className="text-xl font-semibold text-[#f4eee1]">Customization</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[#d8dde5]">
                    {customizations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
              <p className="mt-6 text-base text-[#adb2bd] sm:text-lg">
                For a broader Bangladesh sourcing overview, visit{" "}
                <Link href="/sandals-manufacturer-bangladesh" className="font-semibold">
                  Sandals Manufacturer in Bangladesh
                </Link>
                .
              </p>
            </article>

            <article id="location" className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Location</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Factory Location: Bakolia, Chittagong</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Address: Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh. Contact us for availability, wholesale pricing, and production planning.
              </p>
              <h3 className="mt-6 text-2xl font-semibold text-[#f4eee1]">Supply to Dhaka</h3>
              <p className="mt-3 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Looking for a sandals factory in Dhaka? Our manufacturing is based in Chittagong, and we arrange wholesale supply and delivery to
                Dhaka and other cities.
              </p>
              <Link href="/wholesale" className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.12em] no-underline">
                Explore Wholesale in Dhaka and Nationwide
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="order-process" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">How to Order from Our Sandals Factory</h2>
            <ol className="mt-8 space-y-4 text-base leading-relaxed text-[#d8dde5] sm:text-lg">
              {orderSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-sm text-[#cdbb8f]">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals Factory in Chittagong</h2>
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
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Get Factory Price, Catalog, and OEM Support</h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For a fast quotation, share product type, men or women target, sizes, quantity, and logo requirement. We will provide wholesale
                pricing and production planning.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`https://wa.me/${CONTACT.whatsappNumber}`} className="btn-whatsapp">
                  WhatsApp {CONTACT.whatsappDisplay}
                </Link>
                <Link href="mailto:rizzleatherbd@gmail.com" className="btn-outline">
                  Email Us
                </Link>
              </div>
            </div>

            <div className="surface-panel rounded-2xl border p-5 sm:p-6">
              <dl className="space-y-4 text-sm text-[#d8dde5]">
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">Factory</dt>
                  <dd className="text-right">Rizz Leather (Brand: Rizz)</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">Address</dt>
                  <dd className="text-right">Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">MOQ</dt>
                  <dd className="text-right">12 pairs</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">Ready stock dispatch</dt>
                  <dd className="text-right">3-4 days</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#cdbb8f]">Made-to-order lead time</dt>
                  <dd className="text-right">15-30 days</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}