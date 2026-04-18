import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Mens Sandals Factory in Chittagong | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a mens sandals factory in Chittagong (Bakolia), Bangladesh. We make workwear, dress, and wide-fit men's sandals for wholesale buyers. MOQ starts from 12 pairs and Oxford starts from 120+ pairs. Ready stock dispatch is 3-4 days and made-to-order lead time is 15-30 days. OEM, private label, and wholesale supply include Dhaka and export buyers.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/mens-sandals-factory-chittagong`;

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
    q: "Where is your men's sandals factory located?",
    a: "Our factory is in Bakolia, Chittagong, Bangladesh. We supply Dhaka buyers from this factory base."
  },
  {
    q: "What men's sandal styles do you make?",
    a: "We make workwear, dress, comfort, and wide-fit men's sandal lines based on your target market and design brief."
  },
  {
    q: "What is the MOQ for men's sandals?",
    a: "Sandals MOQ starts from 12 pairs. Oxford MOQ starts from 120+ pairs."
  },
  {
    q: "Can you build a men's size run for retail?",
    a: "Yes. We can plan size grading and pair ratios for men's retail programs and repeat wholesale orders."
  },
  {
    q: "Do you support private label branding?",
    a: "Yes. We support OEM/private label with logo embossing, printing, and packaging options."
  },
  {
    q: "What materials do you use for men's sandals?",
    a: "We produce PU leather and leather options, with material selection matched to your target market and budget."
  },
  {
    q: "How long is lead time for made-to-order?",
    a: "Made-to-order production typically takes 15-30 days. Exact lead time depends on design and quantity."
  },
  {
    q: "Can we request sample development first?",
    a: "Yes. Sampling is available before bulk production for OEM and repeat models."
  },
  {
    q: "Do you ship to Dhaka and export markets?",
    a: "Yes. We supply wholesale orders to Dhaka and can support export-focused orders for USA, Europe, and the Middle East."
  },
  {
    q: "Can you handle repeat men's best-seller production?",
    a: "Yes. We can repeat proven styles with consistent fit, finish, and packaging for ongoing replenishment programs."
  }
];

const productLines = [
  {
    title: "Workwear men's sandals",
    points: [
      "Built for retailers serving daily-use and practical buyers",
      "Durable finishing and straightforward color options",
      "Good fit for fast-moving wholesale replenishment"
    ],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Dress and office sandals",
    points: [
      "Clean profiles for menswear and occasion channels",
      "Branding-friendly for private label collections",
      "Can be matched to formal retail displays"
    ],
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Wide-fit comfort sandals",
    points: [
      "Designed for comfort-led wholesale programs",
      "Useful for repeat customers who need stable sizing",
      "Can be adjusted by material and sole preference"
    ],
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80"
  }
];

const productionSteps = [
  "Share the men's style direction, target price band, and size mix.",
  "Choose workwear, dress, or comfort-led models and confirm branding needs.",
  "Review samples or reference photos before production approval.",
  "Move into bulk production, QC, packing, and dispatch planning."
];

export default function MensSandalsFactoryChittagongPage() {
  return (
    <main>
      <LandingStructuredData
        path="/mens-sandals-factory-chittagong"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Mens Sandals Factory in Chittagong", item: "/mens-sandals-factory-chittagong" }
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

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Chittagong Factory</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
            Mens Sandals Factory in Chittagong
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
            Rizz Leather is a Chittagong factory for men's sandals, offering workwear, dress, and comfort-led product lines for wholesale buyers.
            Sandals MOQ starts from 12 pairs, and we also supply Dhaka buyers from our Bakolia base.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#get-quote" className="btn-primary">
              Get Factory Price
            </Link>
            <Link href="#moq" className="btn-outline">
              MOQ Details
            </Link>
            <Link href="#faq" className="btn-outline">
              FAQ
            </Link>
          </div>
        </div>
      </section>

      <section id="moq" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">MOQ and Production Snapshot</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Sandals</h3>
              <p className="mt-3 text-[#adb2bd]">Starts from 12 pairs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Oxford</h3>
              <p className="mt-3 text-[#adb2bd]">Starts from 120+ pairs.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Loafers</h3>
              <p className="mt-3 text-[#adb2bd]">Loafers MOQ is finalized after style review and material selection.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Products</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Men's Sandal Lines We Manufacture</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              Built around men's buying patterns, fit expectations, and channel-specific merchandising needs.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {productLines.map((item) => (
              <article key={item.title} className="overflow-hidden border border-[var(--hairline-accent)] bg-[#080b13]/80">
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl font-semibold text-[#f4eee1]">{item.title}</h3>
                  <ul className="space-y-2 text-base text-[#adb2bd]">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Production Approach for Men's Buyers</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Fit Planning</h3>
              <p className="mt-3 text-[#adb2bd]">Men's size runs, wider fits, and repeat order ratios planned around your channel.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Branding</h3>
              <p className="mt-3 text-[#adb2bd]">Logo embossing, logo printing, and packaging updates for your men's brand line.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Wholesale Refill</h3>
              <p className="mt-3 text-[#adb2bd]">Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days for reorders.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="process" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Men's Order Flow</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Men's orders are usually driven by fit, durability, and replenishment speed. We keep the process practical so buyers can move from
                sample to bulk without losing the style brief.
              </p>
            </article>
            <div className="grid gap-4 sm:grid-cols-2">
              {productionSteps.map((step, index) => (
                <article key={step} className="surface-panel rounded-2xl border p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#cdbb8f]">Step {index + 1}</p>
                  <p className="mt-3 text-base leading-relaxed text-[#d8dde5]">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">FAQ: Mens Sandals Factory in Chittagong</h2>
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
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Get Mens Sandals Factory Price and Catalog</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Send product type, target sizes, quantity, and branding needs for a quick quote.</p>
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
