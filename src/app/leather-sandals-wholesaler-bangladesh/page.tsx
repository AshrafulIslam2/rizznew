import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Leather Sandals Wholesaler in Bangladesh | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a leather sandals wholesaler in Bangladesh (Chittagong). MOQ 12 pairs. Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days. Leather sandals wholesale for men and women. Supply across Bangladesh including Dhaka. OEM/private label with logo embossing and printing.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/leather-sandals-wholesaler-bangladesh`;

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
  { label: "Wholesale MOQ", value: "12 pairs" },
  { label: "Ready stock dispatch", value: "3-4 days" },
  { label: "Made-to-order lead time", value: "15-30 days" },
  { label: "OEM / Private label", value: "Logo embossing and printing" },
  { label: "Base location", value: "Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh" }
];

const categories = [
  {
    title: "Men's leather sandals wholesale",
    description: "Retail-ready leather sandals with design variation and size-run planning.",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Women's leather sandals wholesale",
    description: "Casual and fashion-focused options based on design and target market.",
    image: "https://images.unsplash.com/photo-1514126128186-e02c9bbef3b9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Private label leather sandals",
    description: "Wholesale leather sourcing with brand customization for repeat SKUs.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
  }
];

const whyUs = [
  "Low MOQ: 12 pairs",
  "Ready stock dispatch in 3-4 days where available",
  "Made-to-order lead time of 15-30 days",
  "Men's and women's categories",
  "Branding support with logo embossing and printing",
  "Factory-backed supply from Chittagong, Bakolia"
];

const quoteChecklist = [
  "Design photo or reference",
  "Men's or women's target category",
  "Size range and quantity",
  "Branding requirement: embossing or printing",
  "Ready stock or made-to-order preference"
];

const orderSteps = [
  "Send your requirement: men or women, sizes, quantity, ready stock or made-to-order, and branding needs.",
  "Receive quotation with wholesale price, dispatch/lead time, and availability.",
  "Confirm order and finalize delivery method.",
  "Dispatch or production starts: 3-4 days for ready stock, 15-30 days for made-to-order.",
  "Delivery across Bangladesh including Dhaka, with export-focused shipment support as applicable."
];

const faqs = [
  {
    q: "What is your wholesale MOQ for leather sandals?",
    a: "Our MOQ is 12 pairs."
  },
  {
    q: "Do you have ready stock for leather sandals wholesale?",
    a: "Yes. We keep ready stock for selected designs and sizes. Typical dispatch is 3-4 days, subject to availability."
  },
  {
    q: "Do you accept made-to-order leather sandals wholesale?",
    a: "Yes. We accept made-to-order wholesale with a typical lead time of 15-30 days."
  },
  {
    q: "Do you supply men's and women's leather sandals?",
    a: "Yes. We supply leather sandals for both men and women."
  },
  {
    q: "Do you supply wholesale leather sandals to Dhaka?",
    a: "Yes. We supply wholesale leather sandals to Dhaka from our Chittagong base."
  },
  {
    q: "Do you offer OEM/private label for wholesalers?",
    a: "Yes. We offer OEM/private label with logo embossing and logo printing."
  }
];

export default function LeatherSandalsWholesalerBangladeshPage() {
  return (
    <main>
      <LandingStructuredData
        path="/leather-sandals-wholesaler-bangladesh"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Leather Sandals Wholesaler in Bangladesh", item: "/leather-sandals-wholesaler-bangladesh" }
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Leather Sandals Wholesale from Chittagong</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Leather Sandals Wholesaler in Bangladesh
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Rizz Leather supplies retailers, shop owners, and wholesalers with leather sandals for men and women. We support ready stock wholesale
              and made-to-order supply from our Chittagong base.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#get-quote" className="btn-primary">
                Get Wholesale Price
              </Link>
              <Link href="#ready-stock" className="btn-outline">
                Ready Stock
              </Link>
              <Link href="#made-to-order" className="btn-outline">
                Made-to-Order
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
                  Wholesale Leather Sandals Supply Across Bangladesh
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you are looking for a reliable wholesale leather sandals supplier in Bangladesh, you need consistent finishing, stable sizing, and
                a supplier who can support both fast dispatch and repeatable production. Rizz Leather supplies leather sandals wholesale across
                Bangladesh and can arrange delivery to major areas including Dhaka.
              </p>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                We are based in Chittagong, Bakolia, giving you factory-backed supply with wholesale ordering flexibility.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Leather-only wholesale focus for men and women",
                "Ready stock and made-to-order workflows",
                "Nationwide delivery including Dhaka",
                "Factory-backed supply from Chittagong"
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
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Sandals Wholesale (Men and Women)</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              Ready stock where available, plus made-to-order for market-specific requirements.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {categories.map((item) => (
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
            Need PU leather and leather combined sourcing? {" "}
            <Link href="/sandals-wholesaler-bangladesh" className="font-semibold">
              Sandals Wholesaler in Bangladesh
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="ready-stock" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Ready Stock</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Ready Stock Leather Sandals Wholesale (3-4 Days)</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              For retailers and wholesalers who need fast supply, we offer ready stock wholesale for selected leather sandals designs and size runs.
              Typical dispatch time is 3-4 days after order confirmation, subject to stock availability.
            </p>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              <li>MOQ: 12 pairs</li>
              <li>Best for quick replenishment and regular wholesale supply</li>
              <li>Mixed pairs and design options may be possible depending on stock</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="made-to-order" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Made-to-Order</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Made-to-Order Leather Sandals (15-30 Days)</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              If you need a specific design, finishing, or sizing breakdown, we support made-to-order leather sandals production for wholesale buyers.
              Typical lead time is 15-30 days depending on design and order details.
            </p>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              <li>MOQ: 12 pairs</li>
              <li>Modify an existing design or produce from a new design</li>
              <li>Ideal for consistent repeat SKUs and exclusive lines</li>
            </ul>
            <p className="mt-5 text-base text-[#adb2bd]">
              Manufacturing overview: {" "}
              <Link href="/leather-sandals-manufacturer-bangladesh" className="font-semibold">
                Leather Sandals Manufacturer in Bangladesh
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <section id="oem-private-label" className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">OEM / Private Label</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM and Private Label for Wholesalers</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              If you want to sell under your own brand name, we support OEM/private label ordering for leather sandals. You can share your new design
              or request modifications from an existing style.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className="rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                <h3 className="text-xl font-semibold text-[#f4eee1]">Branding Services</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#d8dde5]">
                  <li>Logo embossing depending on design and material</li>
                  <li>Logo printing</li>
                </ul>
              </article>
              <article className="rounded-xl border border-[var(--hairline-accent)] bg-[#080b13]/80 p-4">
                <h3 className="text-xl font-semibold text-[#f4eee1]">Quick Quote Checklist</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#d8dde5]">
                  {quoteChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </article>

          <article id="location-delivery" className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Delivery</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Dhaka and Nationwide Delivery from Chittagong</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              We are based in Chittagong and supply wholesale leather sandals across Bangladesh. If you are looking for a leather sandals wholesaler in
              Dhaka, we can arrange wholesale supply and delivery to Dhaka.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              Looking for a leather sandals factory in Dhaka? Our manufacturing base is in Chittagong, and we deliver wholesale orders to Dhaka.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/wholesale" className="btn-outline">
                Dhaka and Nationwide Wholesale
              </Link>
              <Link href="/sandals-factory-chittagong" className="btn-outline">
                Factory Location Details
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="why-us" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Why Rizz</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">
              Why Choose Rizz Leather for Leather Sandals Wholesale?
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <article key={item} className="surface-panel rounded-2xl border p-5">
                <p className="text-base leading-relaxed text-[#d8dde5]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="order-process" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Order Process</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">How to Place a Wholesale Order</h2>
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

      <section id="faq" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Sandals Wholesaler Bangladesh</h2>
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
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Get Leather Sandals Wholesale Price and Catalog</h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For a fast quotation, send men or women category, sizes, total pairs, ready stock or made-to-order preference, and logo requirement.
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
                  <dt className="text-[#cdbb8f]">Wholesaler</dt>
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
                  <dt className="text-[#cdbb8f]">Base address</dt>
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