import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Leather Sandals Manufacturer in Bangladesh | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a leather sandals manufacturer in Bangladesh (Chittagong). MOQ 12 pairs. Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days. Leather sandals for men and women. Wholesale, OEM and private label with logo embossing and printing.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/leather-sandals-manufacturer-bangladesh`;

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
  { label: "Factory", value: "Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh" }
];

const productLines = [
  {
    title: "Men's leather sandals",
    description: "Everyday and formal-style options depending on the approved design direction.",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Women's leather sandals",
    description: "Casual and fashion-led silhouettes with size and color options based on buyer requirements.",
    image: "https://images.unsplash.com/photo-1514126128186-e02c9bbef3b9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Private label leather sandals",
    description: "Custom production with your own brand name, logo placement, and packaging preferences.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
  }
];

const wholesaleModes = [
  {
    title: "Ready stock wholesale",
    points: [
      "Selected designs and sizes available for quicker supply",
      "Typical dispatch in 3-4 days after confirmation",
      "Ideal for retailers, wholesalers, and resellers"
    ]
  },
  {
    title: "Made-to-order production",
    points: [
      "Custom design, colorway, and finishing options",
      "Typical lead time of 15-30 days depending on complexity",
      "Suitable for brand owners and bulk buyers"
    ]
  }
];

const qualityChecks = [
  "Leather selection based on requirement and availability",
  "Stitching, attachment, and finishing inspection",
  "Size consistency and pairing checks before packing",
  "Packaging verification before dispatch"
];

const orderSteps = [
  "Send your design, sizes, quantity, and branding requirement.",
  "Get a quotation with price, lead time, and dispatch planning.",
  "Approve sample for custom or private label orders if needed.",
  "Production begins, then QC and packing are completed.",
  "Delivery is arranged across Bangladesh or for export buyers."
];

const faqs = [
  {
    q: "What is your MOQ for leather sandals?",
    a: "Our MOQ is 12 pairs for both ready stock and made-to-order leather sandals."
  },
  {
    q: "Do you manufacture leather sandals for men and women?",
    a: "Yes. We manufacture leather sandals for both men and women."
  },
  {
    q: "Do you offer OEM/private label with logo?",
    a: "Yes. We offer OEM and private label production with logo embossing and logo printing."
  },
  {
    q: "Do you supply wholesale leather sandals to Dhaka?",
    a: "Yes. We supply wholesale leather sandals across Bangladesh, including Dhaka."
  },
  {
    q: "What is your ready stock dispatch time?",
    a: "Ready stock orders typically dispatch in 3-4 days, subject to availability."
  },
  {
    q: "What is your made-to-order lead time?",
    a: "Made-to-order production typically takes 15-30 days depending on design and order details."
  },
  {
    q: "Do you support Oxford production too?",
    a: "Yes. Oxford MOQ starts from 120+ pairs. Leather sandals MOQ starts from 12 pairs."
  },
  {
    q: "Can you include logo, branded box, and packaging for private label?",
    a: "Yes. We can support logo, box branding, and packaging specifications for OEM/private label programs."
  },
  {
    q: "Can we request sample development first?",
    a: "Yes. Sampling can be arranged before bulk production for custom and private label requirements."
  }
];

export default function LeatherSandalsManufacturerBangladeshPage() {
  return (
    <main>
      <LandingStructuredData
        path="/leather-sandals-manufacturer-bangladesh"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Leather Sandals Manufacturer in Bangladesh", item: "/leather-sandals-manufacturer-bangladesh" }
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Chittagong Factory</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Leather Sandals Manufacturer in Bangladesh
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Rizz Leather is a Bangladesh-based leather sandals manufacturer for wholesale buyers, retailers, and brand owners who need consistent
              quality, flexible quantities, and reliable delivery planning.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#get-quote" className="btn-primary">
                Get Wholesale Price
              </Link>
              <Link href="#oem-private-label" className="btn-outline">
                Private Label / OEM
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

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Overview</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">
                  Leather Sandals Manufacturing for Wholesale Buyers and Brands
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Buyers searching for a leather sandals factory in Bangladesh typically want a supplier who can handle both ready stock wholesale and
                custom production. At Rizz Leather, we support wholesale supply, made-to-order manufacturing, and OEM/private label branding.
              </p>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Our manufacturing base is in Chittagong, and we can arrange wholesale supply across Bangladesh including Dhaka.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Wholesale supply for retailers and distributors",
                "Made-to-order manufacturing from your own reference or design",
                "OEM and private label with logo embossing and printing",
                "Flexible planning for Bangladesh and export buyers"
              ].map((item) => (
                <article key={item} className="surface-panel rounded-2xl border p-5">
                  <p className="text-base leading-relaxed text-[#e9dcc0]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="moq" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Sandals</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Leather sandals MOQ starts from 12 pairs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Oxford</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Oxford MOQ starts from 120+ pairs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Loafers</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Loafers MOQ placeholder: to be confirmed based on style and material scope.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Products</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Sandals We Produce</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              Men&apos;s, women&apos;s, and private label styles built for wholesale distribution and repeat ordering.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {productLines.map((item) => (
              <article key={item.title} className="overflow-hidden border border-[var(--hairline-accent)] bg-[#080b13]/80">
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl font-semibold text-[#f4eee1]">{item.title}</h3>
                  <p className="text-base leading-relaxed text-[#adb2bd]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {wholesaleModes.map((mode) => (
              <article key={mode.title} className="surface-panel rounded-2xl border p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Wholesale</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">{mode.title}</h2>
                <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                  {mode.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Materials</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Materials and Quality Control</h2>
            </div>
            <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              Leather sandals quality depends on material choice, cutting consistency, finishing, and comfort. We follow a practical QC routine to
              maintain consistency for wholesale buyers.
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
                title: "Leather options",
                desc: "Leather selection based on buyer requirement, availability, and target market."
              },
              {
                title: "Color and finish",
                desc: "Color and finish options tailored to your brand and retail positioning."
              },
              {
                title: "Sole and comfort",
                desc: "Sole patterns and comfort options based on the approved design."
              },
              {
                title: "QC checklist",
                desc: "Finishing, pairing, symmetry, and packaging checks before dispatch."
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

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Location</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Factory Location and Delivery Across Bangladesh</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Factory address: Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh. We supply wholesale leather sandals across Bangladesh,
                including Dhaka.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Looking for a leather sandals factory in Dhaka? Our manufacturing is in Chittagong, and we can arrange wholesale delivery to Dhaka.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/sandals-manufacturer-bangladesh" className="btn-outline">
                  View Sandals Overview
                </Link>
                <Link href="/contact" className="btn-primary">
                  Contact the Factory
                </Link>
              </div>
            </article>

            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Order Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">How to Order Leather Sandals from Rizz Leather</h2>
              <ol className="mt-5 space-y-4 text-base leading-relaxed text-[#d8dde5] sm:text-lg">
                {orderSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-sm text-[#cdbb8f]">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      <section id="oem-private-label" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 rounded-3xl border border-[var(--hairline-accent)] bg-[#080b13]/90 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">OEM and Private Label</p>
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Your Brand Name, Logo Embossing, and Printing Options</h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you want to sell leather sandals under your own brand, Rizz Leather supports OEM and private label manufacturing. You can send
                a new design or choose an existing design and request changes to match your brand style.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`https://wa.me/${CONTACT.whatsappNumber}`} className="btn-whatsapp">
                  WhatsApp Us
                </Link>
                <Link href="/wholesale/apply" className="btn-outline">
                  Wholesale Apply
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
                  <dt className="text-[#cdbb8f]">MOQ</dt>
                  <dd className="text-right">12 pairs</dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[var(--hairline-accent)] pb-3">
                  <dt className="text-[#cdbb8f]">Ready stock</dt>
                  <dd className="text-right">3-4 days</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#cdbb8f]">Made-to-order</dt>
                  <dd className="text-right">15-30 days</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Sandals Manufacturer Bangladesh</h2>
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
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Get Wholesale Price and Sample Support</h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Share your requirement to get a fast quotation: product type, men or women, sizes, quantity, and logo needs. We respond with pricing,
                lead time, and the next production step.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={`https://wa.me/${CONTACT.whatsappNumber}`} className="btn-whatsapp">
                  WhatsApp Us
                </Link>
                <Link href="/wholesale/apply" className="btn-outline">
                  Apply for Wholesale
                </Link>
              </div>
            </div>

            <div className="surface-panel rounded-2xl border p-5 sm:p-6">
              <dl className="space-y-4 text-sm text-[#d8dde5]">
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