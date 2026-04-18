import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";

const pageTitle = "Sandals Manufacturer for Dhaka | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Need a sandals manufacturer for Dhaka? Rizz Leather manufactures in Chittagong (Bakolia) and supplies wholesale sandals to Dhaka. MOQ 12 pairs. Ready stock dispatch 3-4 days, made-to-order 15-30 days. PU leather and leather sandals for men and women. OEM/private label with logo embossing and printing.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/sandals-manufacturer-dhaka`;

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
  { label: "Manufacturing base", value: "Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh" }
];

const categories = [
  "PU leather sandals (men's and women's)",
  "Leather sandals (men's and women's)",
  "Slides (available on request depending on design)",
  "Flip-flops (available on request depending on design)"
];

const whyUs = [
  "Low MOQ: 12 pairs",
  "Fast dispatch: 3-4 days for ready stock (subject to availability)",
  "Made-to-order support: 15-30 days lead time",
  "PU leather and leather options for different customer segments",
  "OEM/private label with logo embossing and printing",
  "Factory-backed supply from Chittagong"
];

const faqs = [
  {
    q: "Are you located in Dhaka?",
    a: "Our factory is located in Chittagong, Bakolia. We supply wholesale sandals to Dhaka."
  },
  {
    q: "What is your MOQ for Dhaka orders?",
    a: "MOQ is 12 pairs."
  },
  {
    q: "Do you supply ready stock to Dhaka?",
    a: "Yes, subject to availability. Typical dispatch is 3-4 days."
  },
  {
    q: "Do you accept made-to-order manufacturing for Dhaka buyers?",
    a: "Yes. Typical lead time is 15-30 days."
  },
  {
    q: "Do you supply PU leather and leather sandals for Dhaka?",
    a: "Yes. We supply both PU leather sandals and leather sandals."
  },
  {
    q: "Do you offer OEM/private label for Dhaka brands?",
    a: "Yes. We offer OEM/private label with logo embossing and logo printing."
  }
];

export default function SandalsManufacturerDhakaPage() {
  return (
    <main>
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Manufacturer Supply for Dhaka from Chittagong</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Sandals Manufacturer for Dhaka
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Looking for a sandals manufacturer in Dhaka? Rizz Leather manufactures sandals in Chittagong, Bakolia and supplies wholesale sandals to
              Dhaka. We produce PU leather sandals and leather sandals for men and women with ready stock, made-to-order, and private label support.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#get-quote" className="btn-primary">
                Get Dhaka Price and Catalog
              </Link>
              <Link href="/sandals-wholesaler-dhaka" className="btn-outline">
                Sandals Wholesaler in Dhaka
              </Link>
              <Link href="/sandals-factory-chittagong" className="btn-outline">
                Factory in Chittagong
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

      <section id="truth" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Clear Information</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Factory Location and Dhaka Supply</h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For clarity, our manufacturing facility is located in Chittagong, Bakolia, not inside Dhaka. We arrange wholesale supply and delivery
                to Dhaka for retailers, shop owners, wholesalers, and brand buyers.
              </p>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                This model helps Dhaka buyers get factory-backed pricing and consistent production while ordering for Dhaka delivery.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Manufacturing base in Chittagong, Bakolia",
                "Wholesale delivery support for Dhaka",
                "Ready stock and made-to-order routes",
                "Factory-backed timelines and pricing"
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
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals We Manufacture for Dhaka Buyers</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">Core categories for wholesale buyers with request-based extensions.</p>
          </div>

          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <ul className="grid gap-3 text-base text-[#d8dde5] sm:grid-cols-2">
              {categories.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <p className="mt-8 text-base text-[#adb2bd] sm:text-lg">
            Leather-only Dhaka page:{" "}
            <Link href="/leather-sandals-wholesaler-dhaka" className="font-semibold">
              Leather Sandals Wholesaler in Dhaka
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="ready-stock" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Ready Stock</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Ready Stock for Dhaka (3-4 Days)</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              For fast delivery planning, Dhaka buyers can order from ready stock, subject to availability. Typical dispatch is 3-4 days after order
              confirmation.
            </p>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              <li>MOQ: 12 pairs</li>
              <li>Best for quick replenishment for shops and wholesalers</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="made-to-order" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Made-to-Order</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Made-to-Order Manufacturing for Dhaka (15-30 Days)</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              If you need specific design direction, finishing, or stable repeat SKU planning for Dhaka, we support made-to-order production with a
              typical lead time of 15-30 days.
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
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM and Private Label Sandals for Dhaka Brands</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              If you want to sell sandals under your own brand in Dhaka, we support OEM/private label manufacturing. Share logo and branding
              requirements, and we will confirm options by design and material.
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
                <h3 className="text-xl font-semibold text-[#f4eee1]">Hub Page</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#d8dde5]">Bangladesh-wide manufacturing overview and capabilities.</p>
                <Link href="/sandals-manufacturer-bangladesh" className="mt-4 inline-flex text-sm font-semibold text-[#f4eee1] underline underline-offset-4">
                  Sandals Manufacturer in Bangladesh
                </Link>
              </article>
            </div>
          </article>

          <article id="why-us" className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Why Us</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Why Dhaka Buyers Choose Rizz Leather</h2>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              {whyUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="faq" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Sandals Manufacturer Dhaka</h2>
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
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Get Dhaka Price, Catalog, and OEM Support</h2>
              <p className="max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                For a fast quotation, send material choice, men or women segment, sizes, total pairs, ready stock or made-to-order preference, and
                logo requirement.
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
                  <dt className="text-[#cdbb8f]">Manufacturing base</dt>
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