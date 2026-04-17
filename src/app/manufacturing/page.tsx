import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing (OEM) | Rizz Leather",
  description: "OEM/private label leather manufacturing with production planning and quality assurance.",
  openGraph: {
    title: "Manufacturing (OEM) | Rizz Leather",
    description: "OEM/private label leather manufacturing with production planning and quality assurance."
  }
};

export default function ManufacturingPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-y border-[var(--hairline-accent)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=2200&q=80')" }}
        />
        <div className="absolute inset-0 bg-[#050507]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:py-20">
          <div className="space-y-6">
            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-[#f4eee1] sm:text-5xl lg:text-7xl">
              OEM & PRIVATE LABEL MFG.
            </h1>
            <p className="text-lg text-[#b8bec9] sm:text-2xl">/ Premium Leather Goods / MOQ from 50 pcs</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/manufacturing/quote"
                className="inline-flex min-h-[50px] items-center justify-center rounded-lg border border-[var(--hairline-accent)] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#e9dcc0] no-underline hover:bg-white/5"
              >
                Start Inquiry
              </Link>
              <div className="space-y-1 text-base text-[#c3c8d1]">
                <p>✓ Chittagong Factory</p>
                <p>✓ Global Export</p>
              </div>
            </div>
          </div>

          <div className="border border-[var(--hairline-accent)] bg-[#090d16]/95 p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#d9cca3]">
              <span className="rounded-full border border-[var(--hairline-accent)] px-3 py-1">Quick Quote</span>
              <span className="rounded-full border border-[var(--hairline-accent)] px-3 py-1">B2B</span>
            </div>
            <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl">Request an Estimate</h2>
            <p className="mt-2 text-sm text-[#b8bec9] sm:text-base">Fill details for a rapid response from our production team.</p>
            <form action="/manufacturing/quote" className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-xs uppercase tracking-[0.12em] text-[#bdc2cc]">
                  <span>Category</span>
                  <input
                    name="category"
                    defaultValue="Men's Sandals"
                    className="h-11 w-full border border-[var(--hairline-accent)] bg-[#060910] px-3 text-sm text-white outline-none"
                  />
                </label>
                <label className="space-y-2 text-xs uppercase tracking-[0.12em] text-[#bdc2cc]">
                  <span>Quantity</span>
                  <input name="quantity" defaultValue="Min 50" className="h-11 w-full border border-[var(--hairline-accent)] bg-[#060910] px-3 text-sm text-white outline-none" />
                </label>
              </div>
              <label className="space-y-2 text-xs uppercase tracking-[0.12em] text-[#bdc2cc]">
                <span>WhatsApp (Required)</span>
                <input
                  name="whatsapp"
                  defaultValue="+1234 567 8900"
                  className="h-11 w-full border border-[var(--hairline-accent)] bg-[#060910] px-3 text-sm text-white outline-none"
                />
              </label>
              <label className="space-y-2 text-xs uppercase tracking-[0.12em] text-[#bdc2cc]">
                <span>Email</span>
                <input name="email" defaultValue="you@company.com" className="h-11 w-full border border-[var(--hairline-accent)] bg-[#060910] px-3 text-sm text-white outline-none" />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-[52px] w-full items-center justify-center border border-[#beae84] bg-[#d4c59e] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#0e1016] hover:bg-[#c7b88f]"
              >
                Submit Request →
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-5xl">Production Capabilities</h2>
            <p className="mt-4 text-base text-[#adb2bd] sm:text-lg">End-to-end manufacturing solutions tailored for emerging and established luxury brands.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-[var(--hairline-accent)] bg-[#080b13]/70 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-lg text-[#d4c59e]">🏷️</span>
              <h3 className="mt-5 text-2xl font-semibold text-[#f4eee1] sm:text-3xl">Accessible MOQ</h3>
              <p className="mt-3 text-base text-[#b6bcc7]">Starting at just 50 pieces per style/color, allowing brands to test markets with minimal risk.</p>
            </article>
            <article className="rounded-2xl border border-[var(--hairline-accent)] bg-[#080b13]/70 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-lg text-[#d4c59e]">♛</span>
              <h3 className="mt-5 text-2xl font-semibold text-[#f4eee1] sm:text-3xl">Custom Branding</h3>
              <p className="mt-3 text-base text-[#b6bcc7]">Embossing, debossing, foil stamping, and custom hardware integration for your logo.</p>
            </article>
            <article className="rounded-2xl border border-[var(--hairline-accent)] bg-[#080b13]/70 p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-lg text-[#d4c59e]">▦</span>
              <h3 className="mt-5 text-2xl font-semibold text-[#f4eee1] sm:text-3xl">Material Sourcing</h3>
              <p className="mt-3 text-base text-[#b6bcc7]">Access to premium full-grain, top-grain, and exotic leathers sourced globally.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-[#f4eee1] sm:text-4xl lg:text-6xl">What we manufacture</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#adb2bd] sm:text-lg">
                Precision-crafted leather goods produced to your exact specifications. High-grade materials and rigorous quality control at every step.
              </p>
            </div>
            <Link href="/portfolio" className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d4c59e] no-underline hover:text-[#ebddb4]">
              View Full Portfolio
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                name: "Sandals",
                desc: "Premium men's sandals with custom tooling and ergonomic soles.",
                image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=1200&q=80"
              },
              {
                name: "Loafers & Half Loafers",
                desc: "Classic and modern silhouettes with superior stitching.",
                image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80"
              },
              {
                name: "Belts",
                desc: "Full-grain leather belts with custom hardware options.",
                image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=80"
              },
              {
                name: "Wallets",
                desc: "Bifolds, cardholders, and travel wallets with RFID blocking.",
                image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80"
              }
            ].map((item) => (
              <article key={item.name} className="overflow-hidden rounded-2xl border border-[var(--hairline-accent)] bg-[#0a0d15]/80">
                <div className="h-56 bg-cover bg-center sm:h-60" style={{ backgroundImage: `url('${item.image}')` }} />
                <div className="space-y-3 p-6">
                  <h3 className="text-2xl font-semibold text-[#f4eee1]">{item.name}</h3>
                  <p className="text-base text-[#b6bcc7]">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
