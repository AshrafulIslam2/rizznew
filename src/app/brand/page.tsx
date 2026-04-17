import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Brand | Rizz Leather",
  description: "Choose your path: Shop Bangladesh or connect for international orders.",
  openGraph: {
    title: "Our Brand | Rizz Leather",
    description: "Choose your path: Shop Bangladesh or connect for international orders."
  }
};

export default function BrandPage() {
  const entries = [
    {
      title: "Shop Bangladesh",
      description: "Cash on Delivery available nationwide.",
      cta: "Enter Store",
      href: "/brand/catalog",
      badge: "BD",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1400&q=80"
    },
    {
      title: "International Orders",
      description: "Direct inquiry via WhatsApp for global shipping.",
      cta: "Connect Now",
      href: "https://wa.me/8801712345678",
      badge: "WA",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1400&q=80"
    }
  ];

  return (
    <main className="relative isolate overflow-hidden border-y border-[var(--hairline-accent)] bg-[#01030a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(24,30,45,0.45),rgba(1,3,10,0.95)_62%)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <section className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="text-center">
          <h1 className="font-serif text-6xl font-medium tracking-[0.08em] text-[#f1ede4] sm:text-7xl lg:text-8xl">RIZZ</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.14em] text-[#b8b1a2] sm:text-base">Masterfully Crafted Leather Goods</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#9c968a] sm:text-sm">Chittagong, Bangladesh</p>
        </div>

        <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {entries.map((entry) => (
            <article key={entry.title} className="group relative overflow-hidden rounded-3xl border border-[#2b3242]/70 bg-[#070b14]/70">
              <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.04]" style={{ backgroundImage: `url('${entry.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03060f]/95 via-[#03060f]/55 to-[#03060f]/30" />
              <div className="relative flex min-h-[370px] flex-col justify-end p-6 sm:p-8">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#9b8a65]/70 bg-[#0b0f18]/70 text-xs font-semibold tracking-[0.1em] text-[#d8c8a0]">
                  {entry.badge}
                </span>
                <h2 className="font-serif text-4xl leading-tight text-[#f1ebe0] sm:text-5xl">{entry.title}</h2>
                <p className="mt-3 text-base text-[#b8bdc8] sm:text-lg">{entry.description}</p>
                <Link
                  href={entry.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#d9c89e] no-underline"
                >
                  {entry.cta} <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-[#8a8f9a] sm:text-sm">
          By entering this site, you agree to our Terms of Service and Privacy Policy.
          <br />
          Prices are shown in BDT for domestic orders. International pricing upon inquiry.
        </p>
      </section>
    </main>
  );
}
