import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About RIZZ — Artisan Leather from Chittagong",
  description:
    "RIZZ is a luxury leather brand founded in Chittagong, Bangladesh. We make handcrafted footwear and accessories using genuine leather, sold directly with COD across the country.",
  openGraph: {
    title: "About RIZZ",
    description: "Artisan leather footwear and accessories, handcrafted in Chittagong, Bangladesh."
  }
};

const values = [
  {
    title: "Genuine Leather. Always.",
    body: "Every single piece we make uses real leather — full-grain, vegetable-tanned, suede, or embossed calfskin. No bonded leather, no PU, no compromise."
  },
  {
    title: "Made by Hand.",
    body: "Our craftsmen cut, stitch, and finish each piece individually. There are no shortcuts in how we work — machine stitching is used only where it adds structural strength."
  },
  {
    title: "Direct to You.",
    body: "We sell directly to the customer, with no middlemen. That means better pricing, honest communication, and a relationship we can stand behind."
  },
  {
    title: "Made to Last.",
    body: "A Rizz loafer or wallet is not a seasonal purchase. Properly cared for, our pieces improve with age. We back that with a one-year craftsmanship warranty."
  }
];

const timeline = [
  { year: "2018", event: "Founded in a small workshop in Chittagong's leather district." },
  { year: "2020", event: "Launched our first retail collection — 3 styles, 80 pairs. Sold out in 6 weeks." },
  { year: "2022", event: "Expanded to full footwear, belts, and wallets. Began COD delivery nationwide." },
  { year: "2024", event: "Started international shipping to UAE, UK, and USA." },
  { year: "2025", event: "Launched the RIZZ digital store. The full collection, available everywhere." }
];

const faqItems = [
  { q: "Where are RIZZ products made?", a: "All RIZZ products are handcrafted in Chittagong, Bangladesh — in our own workshop by our own craftsmen." },
  { q: "Is the leather genuine?", a: "Yes. We use only genuine leather — full-grain, vegetable-tanned, suede, or embossed calfskin. No synthetic or bonded leather." },
  { q: "Do you offer a warranty?", a: "Yes. All products come with a one-year craftsmanship warranty covering stitching, hardware, and structural defects." },
  { q: "Can I visit the workshop?", a: "We welcome visits by appointment. Contact us via WhatsApp or email to arrange a visit to our Chittagong atelier." }
];

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RIZZ Leather",
    description: "Luxury artisan leather footwear and accessories handcrafted in Chittagong, Bangladesh.",
    foundingDate: "2018",
    foundingLocation: "Chittagong, Bangladesh",
    url: "https://rizzleather.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801750514197",
      contactType: "customer service"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="h-[50vh] min-h-[380px] bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/rizz_master_color_sandals/image01.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 sm:px-16 lg:px-24">
              <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">Our Story</p>
              <h1 className="mt-4 max-w-md font-serif text-4xl leading-tight text-[var(--cream)] sm:text-5xl lg:text-6xl">
                Built on leather.<br />Built to last.
              </h1>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Chittagong, Bangladesh</p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--cream)] sm:text-4xl">Where it begins</h2>
          <div className="mt-6 space-y-5 text-sm leading-loose text-[var(--muted)]">
            <p>
              RIZZ was founded in 2018 in a workshop in Chittagong's leather district — the same streets where Bangladeshi leather has been cut, stitched, and exported for over a century. We started with one question: why couldn't the people who make luxury leather goods also sell them directly, at honest prices?
            </p>
            <p>
              Most of the world's high-end leather goods pass through many hands before they reach a customer. Each hand adds a margin. The craftsman who made the piece sees very little of what the customer pays. We wanted to change that — for our customers and for our craftsmen.
            </p>
            <p>
              We sell directly. We make everything ourselves. We stand behind every piece with a one-year warranty. When something goes wrong, you talk to us — not an anonymous support system.
            </p>
            <p>
              Today, RIZZ makes footwear, belts, and wallets from genuine leather, with Cash on Delivery across Bangladesh and international shipping to Europe, USA, and the Middle East.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="border-y border-[var(--hairline)] bg-[var(--surface)] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">What we believe</p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--cream)] sm:text-4xl">Our Principles</h2>
            </div>
            <div className="grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="bg-[var(--surface)] p-7">
                  <div className="mb-4 h-px w-8 bg-[var(--gold-dim)]" />
                  <h3 className="font-serif text-xl text-[var(--cream)]">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-10">
            <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">History</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--cream)] sm:text-4xl">The Journey</h2>
          </div>
          <div className="relative space-y-8 pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-[var(--hairline)]">
            {timeline.map((item) => (
              <div key={item.year} className="relative">
                <span className="absolute -left-[25px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-[var(--gold-dim)] bg-[var(--bg)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                </span>
                <p className="text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">{item.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial image */}
        <section className="relative overflow-hidden">
          <div
            className="h-[45vh] min-h-[300px] bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/rizz_double_bockles-sandals/image02.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-5">
            <div>
              <p className="font-serif text-2xl text-[var(--cream)] sm:text-3xl lg:text-4xl">
                &ldquo;Every pair that leaves our workshop<br />carries a piece of Chittagong with it.&rdquo;
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[var(--gold-dim)]">— The Rizz Atelier</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center lg:py-20">
          <div className="mx-auto max-w-xl px-5">
            <h2 className="font-serif text-3xl text-[var(--cream)] sm:text-4xl">Start here.</h2>
            <p className="mt-3 text-sm text-[var(--muted)]">Browse the full collection. COD available. Free returns within 7 days.</p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/brand/catalog" className="btn-primary w-full sm:w-auto">Shop the Collection</Link>
              <Link href="/contact" className="btn-ghost w-full sm:w-auto">Contact Us</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[var(--hairline)] bg-[var(--surface)] py-14">
          <div className="mx-auto max-w-2xl px-5 lg:px-8">
            <h2 className="mb-8 font-serif text-2xl text-[var(--cream)] sm:text-3xl">About RIZZ — FAQs</h2>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: { "@type": "Answer", text: item.a }
                  }))
                })
              }}
            />
            <div className="space-y-2">
              {faqItems.map((item) => (
                <details key={item.q} className="group border border-[var(--border)] bg-[var(--bg)]">
                  <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4">
                    <span className="pr-4 text-sm font-medium text-[var(--cream)]">{item.q}</span>
                    <span className="shrink-0 text-[var(--gold-dim)] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="border-t border-[var(--border)] px-5 py-4 text-sm leading-relaxed text-[var(--muted)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
