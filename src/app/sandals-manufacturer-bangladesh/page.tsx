import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Sandals Manufacturer in Bangladesh | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a sandals manufacturer in Bangladesh (Chittagong). MOQ 12 pairs. Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days. PU leather and leather sandals for men and women. Wholesale, OEM and private label with logo embossing and printing.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/sandals-manufacturer-bangladesh`;

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

const stats = [
  { label: "MOQ", value: "12 pairs" },
  { label: "Ready stock dispatch", value: "3-4 days" },
  { label: "Made-to-order lead time", value: "15-30 days" },
  { label: "Factory location", value: "Chittagong, Bangladesh" }
];

const products = [
  {
    title: "PU leather sandals",
    description: "Retail-friendly options in multiple finishes and colorways for men and women.",
    image: "https://images.unsplash.com/photo-1514126128186-e02c9bbef3b9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Leather sandals",
    description: "Leather builds for buyers who want a more premium hand-feel and stronger brand story.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Slides and flip-flops",
    description: "Available on request depending on design, outsole, and seasonal assortment planning.",
    image: "https://images.unsplash.com/photo-1506629905607-d405b7d8a4a9?auto=format&fit=crop&w=1200&q=80"
  }
];

const capabilities = [
  "Wholesale supply for retailers, shop owners, and resellers",
  "OEM and private label production under your own brand name",
  "Logo embossing and logo printing options",
  "Batch QC, pairing checks, and packaging verification before dispatch"
];

const qualityPoints = [
  "Material selection based on buyer requirement",
  "Stitching, attachment, and finishing inspection",
  "Size and fitting consistency checks",
  "Packaging review before delivery"
];

const orderSteps = [
  "Send your design reference, quantity, size range, and branding requirement.",
  "Receive quotation with lead time, price, and dispatch plan.",
  "Approve sample if you are ordering a made-to-order or private label style.",
  "Production starts, followed by QC and packing.",
  "Dispatch or delivery is arranged for Bangladesh or export buyers."
];

const faqs = [
  {
    q: "What is your MOQ for sandals?",
    a: "Our MOQ is 12 pairs for ready stock wholesale and made-to-order manufacturing."
  },
  {
    q: "Do you make PU leather sandals and leather sandals?",
    a: "Yes. We manufacture both PU leather sandals and leather sandals based on buyer requirements."
  },
  {
    q: "Do you produce sandals for men and women?",
    a: "Yes. We supply sandals for both men and women."
  },
  {
    q: "Do you supply wholesale sandals to Dhaka?",
    a: "Yes. We supply wholesale sandals across Bangladesh, including Dhaka."
  },
  {
    q: "Can you add our logo?",
    a: "Yes. We offer logo embossing and logo printing depending on the material and design."
  },
  {
    q: "Do you work with export buyers?",
    a: "We can work with export-focused buyers based on requirements for the USA, EU, and Middle East."
  },
  {
    q: "Do you also produce Oxford shoes with low MOQ?",
    a: "Yes, we support Oxford production from 120+ pairs. For sandals, MOQ starts from 12 pairs."
  },
  {
    q: "Can you provide custom packaging and branded box options?",
    a: "Yes. We can support private label needs such as logo placement, box branding, and packaging details based on your order scope."
  },
  {
    q: "Can we request sampling before full production?",
    a: "Yes. Sampling can be arranged for made-to-order and OEM programs before bulk confirmation."
  }
];

export default function SandalsManufacturerBangladeshPage() {
  return (
    <main>
      <LandingStructuredData
        path="/sandals-manufacturer-bangladesh"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Sandals Manufacturer in Bangladesh", item: "/sandals-manufacturer-bangladesh" }
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
        <div className="absolute inset-0 bg-[#050507]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Chittagong Factory</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Sandals Manufacturer in Bangladesh
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Rizz Leather is a Bangladesh-based sandals manufacturer and wholesale supplier for ready stock and made-to-order production.
              We produce PU leather sandals and leather sandals for men and women with flexible MOQ and branding support.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#get-quote" className="btn-primary">
                Get Wholesale Price
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
              {stats.map((item) => (
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Overview</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">
                  Bangladesh Sandals Manufacturing for Wholesale, OEM and Private Label
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you are looking for a reliable sandals manufacturer in Bangladesh to support your retail or wholesale business, we can help with
                competitive pricing, consistent finishing, and flexible order options. We are based in Chittagong and can arrange delivery across
                Bangladesh, including Dhaka.
              </p>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Buyers can choose ready stock for faster replenishment or made-to-order production for custom colors, sizes, and branding.
                Export-focused orders can also be supported based on the target market requirements.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {capabilities.map((item) => (
                <article key={item} className="surface-panel rounded-2xl border p-5">
                  <p className="text-base leading-relaxed text-[#e9dcc0]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Products</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals We Manufacture</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              A focused range for wholesale buyers, with production options that can be tailored to the design brief.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {products.map((item) => (
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

      <section id="wholesale" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Wholesale</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Ready Stock Wholesale</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For retailers and wholesalers who need faster supply, we offer ready stock for selected designs and sizes. Typical dispatch time is
                3-4 days after order confirmation, subject to availability.
              </p>
              <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                <li>MOQ: 12 pairs</li>
                <li>Suitable for retailers, wholesalers, shop owners, and resellers</li>
                <li>Best for quick replenishment and repeat orders</li>
              </ul>
            </article>

            <article id="oem-private-label" className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">OEM</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Made-to-Order and Private Label</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you want a specific design, colorway, sizing breakdown, or finishing, we can produce sandals under your own brand. Typical lead
                time is 15-30 days depending on design complexity, material availability, and order quantity.
              </p>
              <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
                <li>MOQ: 12 pairs</li>
                <li>Modify an existing design or develop a new one</li>
                <li>Logo embossing and logo printing available</li>
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
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Sandals MOQ</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Sandals production starts from 12 pairs for wholesale and OEM programs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Oxford MOQ</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Oxford production starts from 120+ pairs based on style and material planning.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Loafers MOQ</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Loafers MOQ: to be confirmed based on pattern, construction, and material requirement.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Materials</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Materials and Quality Control</h2>
            </div>
            <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              We manufacture sandals using PU leather and leather based on the buyer&apos;s requirement. The focus is consistent finishing, comfort,
              and a clean production standard that supports repeat wholesale orders.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {qualityPoints.map((item) => (
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
                desc: "Multiple textures and colors where available, suited to commercial wholesale buyers."
              },
              {
                title: "Leather",
                desc: "Leather options for men and women based on the approved specification."
              },
              {
                title: "Sole options",
                desc: "Anti-slip patterns and cushioning options where applicable to the design."
              },
              {
                title: "Batch QC",
                desc: "Finishing, pairing, size, and packaging checks are completed before dispatch."
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
                Factory location: Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh. We supply wholesale sandals across Bangladesh, including
                Dhaka, and can coordinate delivery for domestic buyers.
              </p>
              <div className="mt-6 rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-[#cdbb8f]">Factory address</p>
                <p className="mt-2 text-base leading-relaxed text-[#d8dde5]">
                  Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/wholesale" className="btn-outline">
                  View Wholesale Program
                </Link>
                <Link href="/contact" className="btn-primary">
                  Contact the Factory
                </Link>
              </div>
            </article>

            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Order Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">How to Order from Rizz Leather</h2>
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

      <section id="faq" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals Manufacturer in Bangladesh</h2>
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
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Get Wholesale Price, Catalog and Sample Support</h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Share your requirement for a fast quotation: product type, men or women, sizes, quantity, and logo needs. We respond with pricing,
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
    </main>
  );
}