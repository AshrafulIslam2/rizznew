import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale | Rizz Leather",
  description: "Premium wholesale leather supply program with application onboarding and dedicated B2B support.",
  openGraph: {
    title: "Wholesale | Rizz Leather",
    description: "Premium wholesale leather supply program with application onboarding and dedicated B2B support."
  }
};

export default function WholesalePage() {
  const collections = [
    {
      title: "Jackets & Outerwear",
      desc: "Full-grain calfskin and lambskin. Classic silhouettes designed for longevity.",
      moq: "MOQ: 50 Units",
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Bags & Luggage",
      desc: "Vegetable-tanned weekender bags, briefcases, and totes with solid brass hardware.",
      moq: "MOQ: 30 Units",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Small Leather Goods",
      desc: "Precision-stitched wallets, cardholders, and belts. Perfect for corporate gifting.",
      moq: "MOQ: 100 Units",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const journey = [
    { title: "Inquiry", desc: "Submit your wholesale application outlining brand details and volume needs." },
    { title: "Verification", desc: "Our B2B team reviews your application within 24-48 business hours." },
    { title: "Quote & MOQ", desc: "Receive a detailed pricing tier sheet and minimum order requirements." },
    { title: "Sampling", desc: "Request material swatches or full product samples for quality assurance." },
    { title: "Production", desc: "Upon deposit, bulk manufacturing commences with quality checks." },
    { title: "Delivery", desc: "Final QA, balance payment, and global logistics coordination." }
  ];

  const faqGroups = [
    {
      heading: "MOQ & Pricing",
      items: [
        {
          q: "What is the Minimum Order Quantity (MOQ)?",
          a: "Standard MOQ is 50 units per style/colorway for inline products. Custom hardware or special leather sourcing starts from 100+ units."
        },
        {
          q: "How are wholesale pricing tiers structured?",
          a: "Pricing scales by quantity and category. Final tiers are shared after account verification and category selection."
        }
      ]
    },
    {
      heading: "Lead Times",
      items: [{ q: "What is standard production lead time?", a: "Typical lead time is 4-6 weeks after sample approval and deposit confirmation." }]
    },
    {
      heading: "Customization & White Label",
      items: [{ q: "Do you offer white-label or co-branded options?", a: "Yes. Embossing, foil stamping, branded linings, and custom packaging are available." }]
    }
  ];

  const policyHighlights = [
    { title: "Data Usage", desc: "Application data is strictly used for B2B vetting and account setup." },
    { title: "Retention", desc: "Approved accounts retain business data for active partnership duration." },
    { title: "Verification", desc: "Tax IDs and business licenses are verified through compliance partners." },
    { title: "Sampling", desc: "Sample requests are subject to strict non-resale clauses and payment terms." }
  ];

  return (
    <main>
      <section className="border-y border-[var(--hairline-accent)] bg-[#03050c]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <h1 className="text-5xl font-medium leading-[1.03] text-[#f4eee1] sm:text-6xl lg:text-8xl">
            Premium
            <span className="block italic text-[#d2c49f]">Leather</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-xl text-[#ddd2b8] sm:text-4xl">Uncompromising Quality for Bulk Orders.</p>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#adb2bd] sm:text-2xl">
            Source world-class, sustainably tanned leather goods for your brand with exceptional durability and dedicated B2B support.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/wholesale/apply"
              className="inline-flex min-h-[52px] w-full max-w-[280px] items-center justify-center border border-[#d4ccb9] bg-[#d8ccad] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#11131a] no-underline hover:bg-[#cabf9f]"
            >
              Apply for Wholesale →
            </Link>
            <Link
              href="https://wa.me/8801712345678"
              className="inline-flex min-h-[52px] w-full max-w-[280px] items-center justify-center border border-[var(--hairline-accent)] bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#ece2c8] no-underline hover:bg-white/5"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden border border-[#151c2d] bg-[#070c16]">
            <div
              className="aspect-[16/8] bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1900&q=80')" }}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl lg:text-6xl">Mastercrafted Collections</h2>
            <p className="mt-3 text-lg text-[#aeb4bf] sm:text-2xl">Explore our wholesale-ready categories.</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {collections.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-md border border-[#171f30] bg-[#070b15]">
                <div className="aspect-[5/4] bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="space-y-4 p-6 sm:p-7">
                  <h3 className="text-3xl font-medium text-[#ece4d1]">{item.title}</h3>
                  <p className="text-base leading-relaxed text-[#aeb4bf]">{item.desc}</p>
                  <div className="flex items-center justify-between pt-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.13em] text-[#ccb98d]">{item.moq}</p>
                    <span className="text-[#8f96a3]">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl">The Procurement Journey</h2>
              <p className="mt-3 max-w-2xl text-lg text-[#aeb4bf]">A streamlined process designed to move from concept to delivery with precision.</p>
            </div>
            <Link href="/policies/terms" className="text-sm font-semibold uppercase tracking-[0.15em] text-[#d4c59e] no-underline hover:text-[#ebe1ca]">
              View Full Terms
            </Link>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute left-0 right-0 top-8 h-px bg-[var(--hairline-accent)]" />
            <div className="grid grid-cols-6 gap-5">
              {journey.map((step, index) => (
                <article key={step.title} className="flex flex-col items-center text-center">
                  <span
                    className={`relative mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm ${
                      index < 3 ? "border-[#d4c59e] bg-[#0a0f18] text-[#d9c89f]" : "border-[#2a3344] bg-[#070b15] text-[#63708a]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-5 min-h-[88px] text-[2.4rem] font-medium leading-[1.05] text-[#e8deca]">{step.title}</h3>
                  <p className="mt-2 min-h-[120px] text-[1.08rem] leading-relaxed text-[#9ea6b4]">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {journey.map((step, index) => (
              <article key={step.title} className="rounded-md border border-[#1a2232] bg-[#070b15] p-5">
                <p className="text-xs uppercase tracking-[0.15em] text-[#c8ba95]">Step {index + 1}</p>
                <h3 className="mt-2 text-2xl font-medium text-[#e8deca]">{step.title}</h3>
                <p className="mt-2 text-base text-[#9ea6b4]">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.35fr]">
          <div className="space-y-6">
            <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl">Wholesale Standards</h2>
            <div className="space-y-5">
              {[
                {
                  title: "Flexible MOQ Ranges",
                  desc: "Starting at just 30 units for select categories, scaling up to 5,000+ units for enterprise partners."
                },
                {
                  title: "Reliable Lead Times",
                  desc: "Standard cycles range from 4-6 weeks after sample approval. Expedited options available for repeat partners."
                },
                {
                  title: "Ethical Sourcing",
                  desc: "WG-certified leathers and traceable origins, ensuring sustainability and quality consistency."
                }
              ].map((item) => (
                <article key={item.title} className="rounded-md border border-[#1a2130] bg-[#070b15] p-5">
                  <h3 className="text-2xl font-medium text-[#ebdfc4]">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#aeb4bf]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl">Frequently Asked</h2>
            <div className="mt-5 space-y-4">
              {faqGroups.map((group) => (
                <div key={group.heading} className="rounded-md border border-[#1a2130] bg-[#070b15] p-5">
                  <h3 className="text-3xl font-medium text-[#d9c89f]">{group.heading}</h3>
                  <div className="mt-4 space-y-3">
                    {group.items.map((item, i) => (
                      <details key={item.q} open={i === 0} className="border-b border-[#1a2130] pb-3 last:border-b-0">
                        <summary className="cursor-pointer text-xl font-medium text-[#e8deca]">{item.q}</summary>
                        <p className="mt-2 text-base leading-relaxed text-[#aeb4bf]">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
            <article className="rounded-md border border-[#1a2130] bg-[#070b15] p-6 sm:p-8">
              <h2 className="text-5xl font-medium leading-tight text-[#f4eee1] sm:text-6xl">
                Direct B2B
                <span className="block text-[#d2c49f]">Support Hub</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#aeb4bf]">
                Connect instantly with our wholesale team via WhatsApp for faster responses on orders, applications, and custom inquiries.
              </p>
              <Link
                href="https://wa.me/8801712345678"
                className="mt-7 inline-flex min-h-[52px] items-center justify-center border border-[#27ce6c] bg-[#27ce6c] px-8 text-base font-semibold text-[#07100a] no-underline hover:bg-[#1fbb5f]"
              >
                Open WhatsApp Chat
              </Link>
              <div className="mt-8 grid gap-4 border-t border-[#1a2130] pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.1em] text-[#c9b98f]">Response Time</p>
                  <p className="mt-1 text-base text-[#7bf1a8]">Typically under 15 mins</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.1em] text-[#c9b98f]">Business Hours</p>
                  <p className="mt-1 text-base text-[#aeb4bf]">Mon-Fri, 9AM - 6PM EST</p>
                </div>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Wholesale Application",
                "Bulk Order Inquiry",
                "Order Status",
                "Custom Sourcing"
              ].map((title) => (
                <article key={title} className="rounded-md border border-[#1a2130] bg-[#070b15] p-5">
                  <h3 className="text-2xl font-medium text-[#ece2cb]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#9ea6b4]">Tap to pre-fill your WhatsApp message with template details.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl">Check Application Status</h2>
            <p className="mt-3 max-w-xl text-base text-[#adb2bd]">Already applied? Enter your application reference ID to quickly pull up status.</p>
            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                placeholder="e.g. RIZZ-APP-2024"
                className="h-12 flex-1 border border-[#1e2636] bg-[#070b15] px-4 text-base text-white outline-none placeholder:text-[#6b7485]"
              />
              <button type="button" className="h-12 border border-[#d4ccb9] bg-[#d8ccad] px-7 text-base font-semibold text-[#11131a]">
                Verify ID
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl">Alternative Contact</h2>
            <p className="mt-3 max-w-xl text-base text-[#adb2bd]">Prefer email? Fill the form below. Allow 24-48 hours for response.</p>
            <form className="mt-6 grid gap-3 sm:grid-cols-2">
              <input className="h-12 border border-[#1e2636] bg-[#070b15] px-4 text-base text-white outline-none" placeholder="Full Name" />
              <input className="h-12 border border-[#1e2636] bg-[#070b15] px-4 text-base text-white outline-none" placeholder="Work Email" />
              <input className="h-12 border border-[#1e2636] bg-[#070b15] px-4 text-base text-white outline-none sm:col-span-2" placeholder="Company Name" />
              <textarea className="min-h-[120px] border border-[#1e2636] bg-[#070b15] px-4 py-3 text-base text-white outline-none sm:col-span-2" placeholder="How can we help you?" />
              <button type="button" className="h-12 border border-[var(--hairline-accent)] px-6 text-base font-semibold text-[#ece2cb] sm:col-span-2 sm:w-fit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.35fr]">
          <article className="space-y-4 rounded-md border border-[#1a2130] bg-[#070b15] p-6">
            <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl">Corporate Headquarters</h2>
            <div className="space-y-3 text-base text-[#aeb4bf]">
              <p className="text-xl font-medium text-[#ece2cb]">New York Showroom</p>
              <p>125 Leather District, Suite 400</p>
              <p>New York, NY 10013</p>
              <p>By appointment only for Tier 2+ partners.</p>
              <p className="pt-2 text-[#d4c59e]">wholesale@rizzleather.com</p>
            </div>
          </article>
          <div className="overflow-hidden border border-[#1a2130] bg-[#070b15]">
            <div
              className="aspect-[16/9] bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80')" }}
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-5xl font-medium text-[#f4eee1] sm:text-6xl lg:text-7xl">Privacy & Terms</h2>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[#cabd97]">Effective: October 2024 • Version 2.1</p>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-[#adb2bd]">
              Transparent policies for B2B wholesale partners covering application data, verification processes, and supply agreements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {policyHighlights.map((item) => (
              <article key={item.title} className="rounded-md border border-[#1a2130] bg-[#070b15] p-5">
                <h3 className="text-2xl font-medium text-[#ece2cb]">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-[#aeb4bf]">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="rounded-md border border-[#1a2130] bg-[#070b15] p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-[#cabd97]">Contents</p>
              <ul className="mt-4 space-y-3 text-base text-[#aeb4bf]">
                <li>1. Information Collection</li>
                <li>2. Document Retention</li>
                <li>3. Verification Steps</li>
                <li>4. Sampling & Production Terms</li>
                <li>5. Liability & Compliance</li>
              </ul>
            </aside>
            <article className="space-y-8 rounded-md border border-[#1a2130] bg-[#070b15] p-6 sm:p-8">
              <div>
                <h3 className="text-4xl font-medium text-[#f4eee1]">1. Information Collection for Wholesale Applicants</h3>
                <p className="mt-3 text-base leading-relaxed text-[#adb2bd]">
                  We collect legal business identity, tax documentation, and primary account contacts to verify entities and assess B2B eligibility.
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-medium text-[#f4eee1]">2. Document Retention</h3>
                <p className="mt-3 text-base leading-relaxed text-[#adb2bd]">
                  Approved account documents are retained for partnership compliance requirements. Declined or incomplete applications are purged
                  after review windows expire.
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-medium text-[#f4eee1]">3. Verification Steps</h3>
                <p className="mt-3 text-base leading-relaxed text-[#adb2bd]">
                  Verification includes registry checks, tax document review, market validation, and final account manager approval.
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-medium text-[#f4eee1]">4. Terms for Sampling & Production</h3>
                <p className="mt-3 text-base leading-relaxed text-[#adb2bd]">
                  Samples are strictly for evaluation. Bulk production starts after deposit confirmation and follows approved lead-time windows.
                </p>
                <div className="mt-4 border-l-2 border-[#bcae84] bg-[#0a101b] px-4 py-3 text-sm italic text-[#b8bec9]">
                  Note: bespoke colorways and custom tooling may require separate contracts and higher minimum quantities.
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
