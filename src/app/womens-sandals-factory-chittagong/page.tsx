import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Womens Sandals Factory in Chittagong | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a womens sandals factory in Chittagong (Bakolia), Bangladesh. We make fashion-led, lightweight, and comfort-focused women's sandals for wholesale buyers. MOQ starts from 12 pairs and Oxford starts from 120+ pairs. Ready stock dispatch is 3-4 days and made-to-order lead time is 15-30 days. OEM, private label, and wholesale supply cover Dhaka and nationwide buyers.";

export async function generateMetadata(): Promise<Metadata> {
  const url = `${getBaseUrl()}/womens-sandals-factory-chittagong`;

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
    q: "Where is your women's sandals factory?",
    a: "Our factory is in Bakolia, Chittagong, Bangladesh, and we supply nationwide including Dhaka buyers."
  },
  {
    q: "What women's sandal styles do you make?",
    a: "We make fashion-led sandals, comfort sandals, and lightweight casual styles for retail and wholesale programs."
  },
  {
    q: "What is your MOQ for women's sandals?",
    a: "Sandals MOQ starts from 12 pairs. Oxford production starts from 120+ pairs."
  },
  {
    q: "Can you build a women's color range for retail?",
    a: "Yes. We can plan colorways and finishing options around your retail assortment and target customer profile."
  },
  {
    q: "Can you do private label and brand customization?",
    a: "Yes. We provide OEM/private label support with logo embossing, printing, and packaging options."
  },
  {
    q: "How fast is dispatch for ready stock?",
    a: "Ready stock dispatch is typically 3-4 days, subject to design and size availability."
  },
  {
    q: "What materials are available?",
    a: "We produce PU leather and leather categories with options based on budget, finish, and target market."
  },
  {
    q: "Can we request samples before order confirmation?",
    a: "Yes. Sampling can be arranged for private label and new design production plans."
  },
  {
    q: "What is made-to-order lead time?",
    a: "Made-to-order lead time is typically 15-30 days depending on complexity and order size."
  },
  {
    q: "Do you support export markets?",
    a: "Yes. We can support export-focused supply for buyers targeting USA, Europe, and Middle East markets."
  }
];

const productLines = [
  {
    title: "Fashion-led women's sandals",
    points: [
      "Designed for retail collections that need a stronger visual identity",
      "Suitable for seasonal drops and curated assortments",
      "Can be adapted to your preferred heel or sole profile"
    ],
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lightweight everyday sandals",
    points: [
      "Comfort-first styles for daily wear and fast-moving shelves",
      "Simple finishing options that work across mass retail",
      "Useful for repeat wholesale replenishment"
    ],
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Comfort and wide-fit sandals",
    points: [
      "Built for buyers who need softer fit feedback from customers",
      "Can be tuned for material feel and strap coverage",
      "Works well for brand owners seeking a comfort-led line"
    ],
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
  }
];

const productionSteps = [
  "Share the women's style direction, color palette, and target retail price band.",
  "Select fashion-led, comfort-led, or lightweight construction options.",
  "Review sample details, fit notes, and branding placements.",
  "Approve bulk production, QC, and final packing for dispatch."
];

export default function WomensSandalsFactoryChittagongPage() {
  return (
    <main>
      <LandingStructuredData
        path="/womens-sandals-factory-chittagong"
        title={pageTitle}
        faqs={faqs}
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Womens Sandals Factory in Chittagong", item: "/womens-sandals-factory-chittagong" }
        ]}
      />

      <section className="relative overflow-hidden border-b border-[var(--hairline-accent)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514126128186-e02c9bbef3b9?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[#050507]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/88" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Rizz Leather | Women Category Manufacturing</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
            Womens Sandals Factory in Chittagong
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#c0c5cf] sm:text-lg lg:text-2xl">
            Rizz Leather manufactures women's sandals in Chittagong with fashion-led, lightweight, and comfort-focused options for Bangladesh buyers.
            Sandals MOQ starts from 12 pairs, and we serve Dhaka buyers from our Bakolia factory base.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#get-quote" className="btn-primary">
              Get Factory Quote
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
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">MOQ and Lead Time</h2>
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
              <p className="mt-3 text-[#adb2bd]">Loafers MOQ is confirmed after final design and material plan approval.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Products</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Women's Sandal Lines We Manufacture</h2>
            </div>
            <p className="max-w-xl text-base text-[#adb2bd] sm:text-right sm:text-lg">
              A product mix built for fashion-led retail, everyday volume, and comfort-first repeat buying.
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
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Production Approach for Women's Buyers</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Style Direction</h3>
              <p className="mt-3 text-[#adb2bd]">Women's silhouettes, colorways, and seasonal direction planned around your assortment.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Branding</h3>
              <p className="mt-3 text-[#adb2bd]">Logo, box, and packaging customization under your own women's brand.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Wholesale Refill</h3>
              <p className="mt-3 text-[#adb2bd]">Ready stock dispatch in 3-4 days and made-to-order in 15-30 days for repeat orders.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="process" className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <article className="surface-panel rounded-2xl border p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Women's Order Flow</h2>
              <p className="mt-4 text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Women's programs usually need more attention on color, silhouette, and comfort balance. We keep the process focused on those
                decisions before bulk production.
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
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">FAQ: Womens Sandals Factory in Chittagong</h2>
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
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Get Womens Sandals Price and Catalog</h2>
              <p className="mt-4 text-base text-[#adb2bd]">Send style, size range, quantity, and branding details for fast pricing.</p>
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
