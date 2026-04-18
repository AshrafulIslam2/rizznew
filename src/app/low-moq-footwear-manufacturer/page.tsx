import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Low MOQ Footwear Manufacturer in Bangladesh | Sandals 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a low MOQ footwear manufacturer in Chittagong, Bangladesh. Sandals MOQ starts from 12 pairs and Oxford starts from 120+ pairs. OEM/private label and wholesale support with ready stock dispatch in 3-4 days and made-to-order in 15-30 days.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/low-moq-footwear-manufacturer`;

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

const faqs = [
  {
    q: "What does low MOQ mean for your factory?",
    a: "For sandals, low MOQ starts from 12 pairs. For Oxford, MOQ starts from 120+ pairs."
  },
  {
    q: "Are you located in Dhaka?",
    a: "No. Our factory is in Chittagong, and we serve Dhaka buyers through wholesale supply and delivery planning."
  },
  {
    q: "Do you support OEM and private label with low quantity?",
    a: "Yes. OEM/private label is available for low-MOQ sandal programs, including logo and packaging customization."
  },
  {
    q: "Can small retailers order ready stock?",
    a: "Yes. Ready stock dispatch is typically 3-4 days, subject to stock and size availability."
  },
  {
    q: "What is made-to-order lead time?",
    a: "Made-to-order lead time is usually 15-30 days depending on design, material, and quantity."
  },
  {
    q: "Do you offer sample development?",
    a: "Yes. Sampling can be arranged before bulk production for new designs and private label buyers."
  },
  {
    q: "What materials can I choose?",
    a: "We can produce PU leather and leather sandals, with materials selected by target market and budget."
  },
  {
    q: "Do you handle export orders?",
    a: "Yes. We can support export-focused buyers for USA, Europe, and Middle East markets based on order requirements."
  },
  {
    q: "Can you support men's and women's product lines together?",
    a: "Yes. We can build mixed men and women assortments with size planning for your channel."
  }
];

export default function LowMoqFootwearManufacturerPage() {
  return (
    <main>
      <LandingStructuredData
        path="/low-moq-footwear-manufacturer"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Low MOQ Footwear Manufacturer", item: "/low-moq-footwear-manufacturer" }
        ]}
      />

      <section className="relative overflow-hidden border-b border-[var(--hairline-accent)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[#050507]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/88" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Low Quantity Manufacturing</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
            Low MOQ Footwear Manufacturer in Bangladesh
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
            Rizz Leather manufactures from Chittagong with low-MOQ footwear options, including OEM/private label and wholesale support.
            Sandals MOQ starts from 12 pairs, and Oxford starts from 120+ pairs, with Dhaka buyer service from our Chittagong base.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#moq" className="btn-primary">
              View MOQ
            </Link>
            <Link href="#services" className="btn-outline">
              Services
            </Link>
            <Link href="#faq" className="btn-outline">
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <section id="quick-answer" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Quick Answer</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Low MOQ Footwear Factory in Bangladesh</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                If you need low quantity footwear manufacturing, Rizz Leather produces in Bakolia, Chittagong with sandals MOQ from 12 pairs and
                Oxford MOQ from 120+ pairs. We support OEM/private label, wholesale supply, and Dhaka buyer delivery from our Chittagong base.
              </p>
            </article>
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Who We Are</p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-[#d8dde5]">
                <li>Factory base: Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh</li>
                <li>Serving: Bangladesh wholesale buyers, including Dhaka retailers and resellers</li>
                <li>Model: OEM, private label, and ready stock or made-to-order supply</li>
                <li>Markets: Bangladesh plus export-focused projects for USA, Europe, and Middle East</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/sandals-factory-chittagong" className="btn-outline">
                  Sandals Factory Page
                </Link>
                <Link href="/leather-sandals-manufacturer-bangladesh" className="btn-outline">
                  Leather Manufacturer Page
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="moq" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">MOQ by Category</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Sandals MOQ</h3>
              <p className="mt-3 text-[#adb2bd]">Starts from 12 pairs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Oxford MOQ</h3>
              <p className="mt-3 text-[#adb2bd]">Starts from 120+ pairs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Loafers MOQ</h3>
              <p className="mt-3 text-[#adb2bd]">Loafers MOQ is confirmed after final design review and material brief.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM, Private Label, and Wholesale Support</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">OEM</h3>
              <p className="mt-3 text-[#adb2bd]">Low quantity development for emerging brands and test collections.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Private Label</h3>
              <p className="mt-3 text-[#adb2bd]">Logo, packaging, and presentation options under your own brand.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Wholesale</h3>
              <p className="mt-3 text-[#adb2bd]">Fast ready-stock fulfillment and scalable made-to-order production cycles.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="order-examples" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Order Examples</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Typical Low-MOQ Production Scenarios</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Retail Pilot Batch</h3>
              <p className="mt-3 text-[#adb2bd]">Order type: mixed sandals, 24-60 pairs. Outcome: low-risk retail testing with quick replenishment planning.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Private Label Launch</h3>
              <p className="mt-3 text-[#adb2bd]">Order type: branded sandals, logo and packaging. Outcome: launch-ready SKU set with repeat order roadmap.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Scale-Up Batch</h3>
              <p className="mt-3 text-[#adb2bd]">Order type: larger repeat quantities after validation. Outcome: stable lead-time planning for seasonal demand.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">FAQ: Low MOQ Footwear Manufacturer</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((item) => (
              <details key={item.q} className="surface-panel rounded-2xl border p-5">
                <summary className="cursor-pointer list-none text-xl font-semibold text-[#f4eee1]">{item.q}</summary>
                <p className="mt-3 text-base leading-relaxed text-[#adb2bd]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="get-quote" className="border-t border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 rounded-3xl border border-[var(--hairline-accent)] bg-[#080b13]/90 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Get Low MOQ Quote and Catalog</h2>
              <p className="mt-4 text-base text-[#adb2bd]">
                Share category, quantity, size set, and branding targets for a practical low-MOQ production quote.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={`https://wa.me/${CONTACT.whatsappNumber}`} className="btn-whatsapp">
                  WhatsApp {CONTACT.whatsappDisplay}
                </Link>
                <Link href={`mailto:${CONTACT.email}`} className="btn-outline">
                  Email {CONTACT.email}
                </Link>
              </div>
            </div>
            <article className="surface-panel rounded-2xl border p-5 text-sm text-[#d8dde5]">
              <p>Factory: Rizz Leather (Brand: Rizz)</p>
              <p className="mt-2">Address: Sayed Sha Road, Bakolia, Chittagong-4203, Bangladesh</p>
              <p className="mt-2">MOQ: Sandals 12 pairs | Oxford 120+ pairs</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
