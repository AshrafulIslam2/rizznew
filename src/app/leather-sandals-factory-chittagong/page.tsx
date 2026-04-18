import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Leather Sandals Factory in Chittagong | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a leather sandals factory in Chittagong (Bakolia). MOQ 12 pairs. Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days. Leather sandals for men and women. Wholesale, OEM and private label with logo embossing and printing. Supply across Bangladesh including Dhaka.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/leather-sandals-factory-chittagong`;

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

const productGroups = [
  {
    title: "Men's leather sandals",
    points: [
      "Everyday wear leather sandals",
      "Retail and wholesale supply for shop owners and distributors",
      "Size-run planning for your target customers"
    ],
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Women's leather sandals",
    points: [
      "Casual leather sandals based on design",
      "Fashion-focused variations for market positioning",
      "Wholesale supply for retailers and resellers"
    ],
    image: "https://images.unsplash.com/photo-1514126128186-e02c9bbef3b9?auto=format&fit=crop&w=1200&q=80"
  }
];

const qualityChecks = [
  "Finishing and attachment inspection",
  "Pair matching and symmetry check",
  "Size consistency and fitting check",
  "Packaging check before dispatch"
];

const quoteChecklist = [
  "Design photos or reference",
  "Men's or women's target category",
  "Sizes and quantity",
  "Branding requirement: embossing or printing",
  "Ready stock or made-to-order"
];

const faqs = [
  {
    q: "Are you a leather sandals factory in Chittagong?",
    a: "Yes. Our factory is located in Bakolia, Chittagong-4203, Bangladesh."
  },
  {
    q: "What is your MOQ?",
    a: "Our MOQ is 12 pairs."
  },
  {
    q: "Do you manufacture leather sandals for men and women?",
    a: "Yes. We manufacture leather sandals for both men and women."
  },
  {
    q: "Do you have ready stock?",
    a: "Yes. Ready stock dispatch is typically 3-4 days, subject to availability."
  },
  {
    q: "Do you accept made-to-order leather sandals?",
    a: "Yes. Made-to-order lead time is typically 15-30 days."
  },
  {
    q: "Do you supply wholesale leather sandals to Dhaka?",
    a: "Yes. We supply wholesale orders to Dhaka from our Chittagong base."
  },
  {
    q: "Do you offer OEM/private label with logo?",
    a: "Yes. We offer OEM/private label with logo embossing and logo printing."
  },
  {
    q: "What is your MOQ for Oxford shoes?",
    a: "Oxford MOQ starts from 120+ pairs. Leather sandals MOQ starts from 12 pairs."
  },
  {
    q: "Can you provide sample support and private label packaging?",
    a: "Yes. We support sampling, branded box, and private label packaging options before bulk confirmation."
  },
  {
    q: "Do you supply export buyers in USA, Europe, and the Middle East?",
    a: "Yes. Export-focused orders can be planned based on destination, specs, and compliance needs."
  }
];

export default function LeatherSandalsFactoryChittagongPage() {
  return (
    <main>
      <LandingStructuredData
        path="/leather-sandals-factory-chittagong"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Leather Sandals Factory in Chittagong", item: "/leather-sandals-factory-chittagong" }
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Bakolia, Chittagong Factory</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              Leather Sandals Factory in Chittagong
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
              Rizz Leather is a leather sandals factory in Chittagong, located in Bakolia. We manufacture leather sandals for men and women for
              wholesale buyers, retailers, and brand owners who need factory-direct support and consistent finishing.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#get-quote" className="btn-primary">
                Get Factory Price
              </Link>
              <Link href="#ready-stock" className="btn-outline">
                Ready Stock
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

      <section id="intro" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Factory-Direct</p>
                <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">
                  Factory-Direct Leather Sandals Manufacturing in Bakolia, Chittagong
                </h2>
              </div>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Buyers searching for a leather sandals factory in Chittagong usually want a production partner that can supply wholesale quantities
                and also support custom requirements. At Rizz Leather, we combine factory-backed manufacturing with wholesale supply.
              </p>
              <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                You can source ready stock for fast dispatch or place made-to-order production based on your design.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                "Factory-backed leather sandal production",
                "Men's and women's categories",
                "Ready stock and made-to-order options",
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
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Sandals We Manufacture</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              Retail-ready finishing with flexibility in size planning and design preferences.
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
            For a Bangladesh-wide leather manufacturing overview, visit{" "}
            <Link href="/leather-sandals-manufacturer-bangladesh" className="font-semibold">
              Leather Sandals Manufacturer in Bangladesh
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="ready-stock" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Ready Stock</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Ready Stock Leather Sandals (3-4 Days)</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              We keep ready stock for selected leather sandals designs and sizes to support fast wholesale supply. Typical dispatch time is 3-4 days
              after confirmation, subject to stock availability.
            </p>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              <li>MOQ: 12 pairs</li>
              <li>Best for quick replenishment and regular wholesale supply</li>
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
              If you need a specific style, color, or finishing, we support made-to-order production. Typical lead time is 15-30 days depending on
              design complexity and order details.
            </p>
            <ul className="mt-5 space-y-3 text-base text-[#d8dde5]">
              <li>MOQ: 12 pairs</li>
              <li>Modify an existing design or produce from your new design or reference</li>
            </ul>
          </article>
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
              <p className="mt-4 text-base text-[#adb2bd]">Oxford MOQ starts from 120+ pairs for production planning.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">MOQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1]">Loafers</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Loafers MOQ placeholder: to be confirmed according to selected model.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="materials-quality" className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Materials and QC</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Materials and Quality Control</h2>
            </div>
            <p className="text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              Quality depends on material selection, cutting consistency, finishing, and comfort. We follow a practical QC routine to maintain
              consistent output for wholesale buyers.
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
                desc: "Selection based on buyer requirement and material availability."
              },
              {
                title: "Color and finish",
                desc: "Color and finish options aligned with your market needs."
              },
              {
                title: "Sole and comfort",
                desc: "Sole pattern and comfort options based on approved design."
              },
              {
                title: "Batch control",
                desc: "Practical QC checks before every dispatch batch."
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

      <section id="oem-private-label" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">OEM / Private Label</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM and Private Label Leather Sandals</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              Rizz Leather supports OEM and private label manufacturing for buyers who want to sell under their own brand name. You can share your new
              design or select an existing style and request modifications.
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
                <h3 className="text-xl font-semibold text-[#f4eee1]">Fast Quote Requirements</h3>
                <ul className="mt-3 space-y-2 text-sm text-[#d8dde5]">
                  {quoteChecklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </article>

          <article id="location-delivery" className="surface-panel rounded-2xl border p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Location and Delivery</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Factory Address and Supply to Dhaka</h2>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              Factory address: Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh. We supply wholesale leather sandals across Bangladesh,
              including Dhaka.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
              Looking for a leather sandals factory in Dhaka? Our factory is in Chittagong, and we arrange wholesale delivery to Dhaka.
            </p>
            <Link href="/wholesale" className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.12em] no-underline">
              Dhaka and Nationwide Wholesale
            </Link>
          </article>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Leather Sandals Factory in Chittagong</h2>
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
                For a fast quotation, send design reference, men or women category, sizes, total pairs, and logo requirement.
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
                  <dt className="text-[#cdbb8f]">Factory</dt>
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