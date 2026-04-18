import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { getBaseUrl } from "@/lib/seo";
import { LandingStructuredData } from "@/components/landing-structured-data";

const pageTitle = "Mens Sandals Factory in Chittagong | MOQ 12 Pairs | Rizz";
const pageDescription =
  "Rizz Leather is a mens sandals factory in Chittagong (Bakolia), Bangladesh. Sandals MOQ starts from 12 pairs and Oxford starts from 120+ pairs. Ready stock dispatch 3-4 days and made-to-order lead time 15-30 days. OEM, private label, and wholesale supply including Dhaka buyers.";

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
    q: "What is the MOQ for men's sandals?",
    a: "Sandals MOQ starts from 12 pairs. Oxford MOQ starts from 120+ pairs."
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
    q: "Can you support different men's size ranges and styles?",
    a: "Yes. We can plan size breakdown and style variants based on your retail profile and order plan."
  }
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
            Rizz Leather is a Chittagong factory for men's sandals, offering OEM/private label, wholesale supply, and low-MOQ production.
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
              <p className="mt-3 text-[#adb2bd]">MOQ placeholder: to be confirmed by style and material.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">OEM, Private Label, and Wholesale Services</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">OEM</h3>
              <p className="mt-3 text-[#adb2bd]">New design development and repeat SKU production for men's category buyers.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Private Label</h3>
              <p className="mt-3 text-[#adb2bd]">Logo embossing, logo printing, and packaging updates for your own brand.</p>
            </article>
            <article className="surface-panel rounded-2xl border p-6">
              <h3 className="text-2xl font-semibold text-[#f4eee1]">Wholesale</h3>
              <p className="mt-3 text-[#adb2bd]">Ready stock dispatch in 3-4 days and made-to-order lead time 15-30 days.</p>
            </article>
          </div>
          <p className="mt-6 text-base text-[#adb2bd]">
            Related page:{" "}
            <Link href="/sandals-factory-chittagong" className="font-semibold">
              Sandals Factory in Chittagong
            </Link>
            .
          </p>
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
