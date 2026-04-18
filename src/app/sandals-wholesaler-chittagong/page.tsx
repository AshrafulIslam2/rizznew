import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Sandals Wholesaler in Chittagong | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a sandals wholesaler in Chittagong (Bakolia). MOQ 12 pairs. Ready stock dispatch 3-4 days and made-to-order lead time 15-30 days. PU leather and leather sandals for men and women. Wholesale, OEM and private label with logo embossing and printing.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/sandals-wholesaler-chittagong`;

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
  { label: "Branding options", value: "Logo embossing and printing" },
  { label: "Base address", value: "Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh" }
];

const categories = [
  "PU leather sandals wholesale (men's and women's)",
  "Leather sandals wholesale (men's and women's)",
  "Slides (available on request depending on design)",
  "Flip-flops (available on request depending on design)"
];

const faqs = [
  {
    q: "Where are you located in Chittagong?",
    a: "We are based in Bakolia, Chittagong-4203."
  },
  {
    q: "What is your MOQ?",
    a: "MOQ is 12 pairs."
  },
  {
    q: "Do you have ready stock?",
    a: "Yes. Ready stock dispatch is typically 3-4 days, subject to availability."
  },
  {
    q: "Do you accept made-to-order supply?",
    a: "Yes. Made-to-order lead time is typically 15-30 days."
  },
  {
    q: "Do you supply PU leather and leather sandals?",
    a: "Yes. We supply both PU leather sandals and leather sandals."
  },
  {
    q: "Do you offer OEM/private label?",
    a: "Yes. We offer OEM/private label with logo embossing and logo printing."
  }
];

export default function SandalsWholesalerChittagongPage() {
  return (
    <main>
      <LandingStructuredData
        path="/sandals-wholesaler-chittagong"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Sandals Wholesaler in Chittagong", item: "/sandals-wholesaler-chittagong" }
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Chittagong Wholesale Supply</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Sandals Wholesaler in Chittagong
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Rizz Leather is a sandals wholesaler in Chittagong, supplying wholesale sandals for retailers, shop owners, and resellers in
              Chittagong and across Bangladesh. We supply PU leather sandals and leather sandals for men and women with ready stock and made-to-order
              options.
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
                  Wholesale Sandals Supply in Chittagong
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you are searching for a wholesale sandals supplier in Chittagong, you likely need fast dispatch, stable sizing, and consistent
                finishing for repeat orders. Rizz Leather supplies wholesale sandals from Bakolia, Chittagong, and supports both ready stock and
                production orders.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Wholesale supply from Bakolia, Chittagong",
                "Ready stock and made-to-order options",
                "PU leather and leather categories",
                "OEM and private label support"
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
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals We Supply Wholesale</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              Core product categories with request-based design extensions.
            </p>
          </div>

          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <ul className="grid gap-3 text-base text-[#d8dde5] sm:grid-cols-2">
              {categories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <p className="mt-8 text-base text-[#adb2bd] sm:text-lg">
            Leather-only wholesale page:{" "}
            <Link href="/leather-sandals-wholesaler-bangladesh" className="font-semibold">
              Leather Sandals Wholesaler in Bangladesh
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="ready-stock" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Ready Stock</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Ready Stock Wholesale (3-4 Days)</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              For fast supply, we offer ready stock wholesale for selected designs and size runs, subject to availability. Typical dispatch time is
              3-4 days after confirmation.
            </p>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              <li>MOQ: 12 pairs</li>
              <li>Best for shop replenishment and quick wholesale buying</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="made-to-order" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Made-to-Order</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Made-to-Order Wholesale Supply (15-30 Days)</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              If you need specific designs, colors, or stable repeat SKUs, we support made-to-order manufacturing for wholesale buyers. Typical lead
              time is 15-30 days.
            </p>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              <li>MOQ: 12 pairs</li>
              <li>Modify existing designs or produce based on your reference</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="oem-private-label" className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">OEM / Private Label</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM and Private Label for Wholesale Buyers</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              If you want to sell sandals under your own brand, we support OEM/private label manufacturing with logo embossing and logo printing.
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
                <h3 className="text-xl font-semibold text-[#f4eee1]">Factory Page</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#d8dde5]">See production details and capacity in Chittagong.</p>
                <Link href="/sandals-factory-chittagong" className="mt-4 inline-flex text-sm font-semibold text-[#f4eee1] underline underline-offset-4">
                  Sandals Factory in Chittagong
                </Link>
              </article>
            </div>
          </article>

          <article id="related" className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Related Pages</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Explore Related Wholesale Pages</h2>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              <li>
                <Link href="/sandals-wholesaler-bangladesh" className="font-semibold">
                  Sandals Wholesaler in Bangladesh
                </Link>
              </li>
              <li>
                <Link href="/sandals-manufacturer-chittagong" className="font-semibold">
                  Sandals Manufacturer in Chittagong
                </Link>
              </li>
              <li>
                <Link href="/sandals-factory-chittagong" className="font-semibold">
                  Sandals Factory in Chittagong
                </Link>
              </li>
              <li>
                <Link href="/sandals-wholesaler-dhaka" className="font-semibold">
                  Sandals Wholesaler in Dhaka
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section id="faq" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals Wholesaler in Chittagong</h2>
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
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Get Wholesale Price and Catalog</h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For a fast quotation, send product material, category, sizes, total pairs, ready stock or made-to-order preference, and branding
                requirements.
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
                  <dt className="text-[#cdbb8f]">Supplier</dt>
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