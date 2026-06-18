import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RIZZ — Luxury Leather Footwear & Accessories",
  description: "Artisan leather footwear and accessories. Crafted in Chittagong, worn worldwide."
};

const newArrivals = [
  {
    name: "The Onyx Loafer",
    material: "Full-Grain Calfskin",
    price: "৳ 5,800",
    badge: "New",
    href: "/brand/catalog?category=Men%27s%20Loafers",
    image: "/assets/images/rizz_crodile_slide_sandals/image05.jpg"
  },
  {
    name: "Cognac Mule",
    material: "Premium Suede",
    price: "৳ 4,200",
    badge: "Bestseller",
    href: "/brand/catalog?category=Men%27s%20Sandals",
    image: "/assets/images/rizz_crodile_slide_sandals/image07.jpg"
  },
  {
    name: "Signature Slide",
    material: "Vegetable-Tanned Leather",
    price: "৳ 3,500",
    badge: null,
    href: "/brand/catalog?category=Men%27s%20Sandals",
    image: "/assets/images/rizz_master_color_sandals/image01.jpg"
  },
  {
    name: "The Classic Bifold",
    material: "Italian Veg-Tan",
    price: "৳ 2,800",
    badge: "New",
    href: "/brand/catalog?category=Men%27s%20Wallets",
    image: "/assets/images/rizz_double_bockles-sandals/image03.jpg"
  }
];

const categories = [
  {
    label: "Loafers",
    sub: "The Signature Collection",
    href: "/brand/catalog?category=Men%27s%20Loafers",
    image: "/assets/images/rizz_master_color_sandals/image01.jpg",
    span: "lg:col-span-6 lg:row-span-2"
  },
  {
    label: "Sandals",
    sub: "Open Luxury",
    href: "/brand/catalog?category=Men%27s%20Sandals",
    image: "/assets/images/rizz_simple_sandals/image01.jpg",
    span: "lg:col-span-3"
  },
  {
    label: "Belts",
    sub: "The Finishing Detail",
    href: "/brand/catalog?category=Men%27s%20Belts",
    image: "/assets/images/rizz_cholate_sandals/image01.jpg",
    span: "lg:col-span-3"
  },
  {
    label: "Wallets",
    sub: "Everyday Refinement",
    href: "/brand/catalog?category=Men%27s%20Wallets",
    image: "/assets/images/rizz_dubai_sandals/image04.jpg",
    span: "lg:col-span-3"
  },
  {
    label: "Half Loafers",
    sub: "Modern Classic",
    href: "/brand/catalog?category=Half%20Loafers",
    image: "/assets/images/rizz_simple_sandals/image02.jpg",
    span: "lg:col-span-3"
  }
];

const materials = [
  { label: "Full-Grain Calfskin", desc: "The pinnacle of leather. Natural texture, unmatched durability." },
  { label: "Premium Suede", desc: "Velvety nap, rich depth. For the discerning touch." },
  { label: "Vegetable-Tanned", desc: "Traditional bark-tanning. Ages into a personal patina." },
  { label: "Crocodile-Emboss", desc: "Exotic texture, refined character. A statement in restraint." }
];

export default function HomePage() {
  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/rizzslide.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#080808]" />

        <div className="relative flex min-h-[92vh] flex-col items-center justify-center px-5 pb-20 pt-16 text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">
            Chittagong &nbsp;·&nbsp; Bangladesh
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] text-[var(--cream)] sm:text-6xl lg:text-8xl">
            Crafted for<br />those who know.
          </h1>
          <p className="mt-6 max-w-md text-sm leading-loose text-[#9a9690] sm:text-base">
            Artisan leather footwear and accessories.<br />
            Each piece made by hand. None made in haste.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/brand/catalog" className="btn-primary w-full sm:w-auto">
              Shop the Collection
            </Link>
            <Link href="/brand/catalog?sort=new" className="btn-ghost w-full sm:w-auto">
              New Arrivals
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[var(--text)]">Scroll</span>
          <div className="h-8 w-px bg-[var(--gold-dim)]" />
        </div>
      </section>

      {/* ── Brand Bar ───────────────────────────────────────── */}
      <div className="border-y border-[var(--hairline)] bg-[var(--bg)] py-4">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 text-[9px] uppercase tracking-[0.35em] text-[var(--muted)]">
          <span>Genuine Leather</span>
          <span className="opacity-30">·</span>
          <span>Hand-Stitched</span>
          <span className="opacity-30">·</span>
          <span>COD Nationwide</span>
          <span className="opacity-30">·</span>
          <span>Ships Worldwide</span>
          <span className="opacity-30">·</span>
          <span>Free Returns</span>
        </div>
      </div>

      {/* ── New Arrivals ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Just In</p>
            <h2 className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl lg:text-5xl">New Arrivals</h2>
          </div>
          <Link href="/brand/catalog?sort=new" className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] hover:text-[var(--gold-light)] transition-colors">
            View All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {newArrivals.map((item) => (
            <Link key={item.name} href={item.href} className="group block no-underline">
              <div className="relative overflow-hidden bg-[var(--surface)]">
                <div
                  className="h-[340px] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04] sm:h-[380px] lg:h-[420px]"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                {item.badge && (
                  <span className="absolute left-4 top-4 bg-[var(--gold)] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#0a0806]">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="font-serif text-lg text-[var(--cream)]">{item.name}</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{item.material}</p>
                <p className="mt-2 text-sm font-medium tracking-wide text-[var(--gold-light)]">{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Editorial Banner ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="h-[60vh] min-h-[400px] bg-cover bg-center sm:h-[70vh]"
          style={{ backgroundImage: "url('/assets/images/rizz_crodile_slide_sandals/image07.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 sm:px-16 lg:px-24">
            <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">The Signature</p>
            <h2 className="mt-4 max-w-md text-3xl leading-tight text-[var(--cream)] sm:text-5xl lg:text-6xl">
              Made for men<br />of distinction.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#8a8580]">
              Every Rizz piece begins as a single hide — selected, cut, and shaped by craftsmen who have spent decades understanding leather.
            </p>
            <Link href="/factory-quality" className="btn-outline mt-8 inline-flex">
              Our Craft
            </Link>
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-12 text-center">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Explore</p>
          <h2 className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl lg:text-5xl">Collections</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              className={`group relative overflow-hidden ${cat.span} ${i === 0 ? "min-h-[400px] sm:min-h-[500px] lg:min-h-[560px]" : "min-h-[200px] sm:min-h-[240px]"}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
              <div className="absolute bottom-5 left-5">
                <p className="font-serif text-xl text-[var(--cream)] sm:text-2xl lg:text-3xl">{cat.label}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[var(--gold-dim)]">{cat.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Materials ────────────────────────────────────────── */}
      <section className="border-y border-[var(--hairline)] bg-[var(--surface)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Substance</p>
            <h2 className="mt-3 text-3xl text-[var(--cream)] sm:text-4xl">The Leather We Choose</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-loose text-[var(--muted)]">
              Sourced from the world's finest tanneries. Every hide is chosen for grain, weight, and how it ages over years of wear.
            </p>
          </div>
          <div className="grid gap-px border border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m) => (
              <div key={m.label} className="bg-[var(--surface)] px-7 py-8 hover:bg-[var(--surface-soft)] transition-colors">
                <div className="mb-4 h-px w-8 bg-[var(--gold-dim)]" />
                <h3 className="font-serif text-lg text-[var(--cream)]">{m.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/materials" className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">
              Explore All Materials →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Full-width Quote ─────────────────────────────────── */}
      <section className="py-24 text-center lg:py-36">
        <div className="mx-auto max-w-3xl px-5">
          <p className="font-serif text-2xl leading-relaxed text-[var(--cream)] sm:text-3xl lg:text-4xl">
            &ldquo;Luxury is not about the price.<br />
            It is about how something makes you feel every time you wear it.&rdquo;
          </p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-[var(--gold-dim)]">— Rizz Atelier, Chittagong</p>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-[var(--hairline)]">
        <div
          className="h-[50vh] min-h-[360px] bg-cover bg-[center_30%]"
          style={{ backgroundImage: "url('/assets/images/rizz_double_bockles-sandals/image02.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">Exclusive Access</p>
          <h2 className="mt-4 max-w-xl text-3xl text-[var(--cream)] sm:text-4xl lg:text-5xl">
            The full collection awaits.
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/brand/catalog" className="btn-primary w-full sm:w-auto">
              Shop Now
            </Link>
            <Link href="/contact" className="btn-ghost w-full sm:w-auto">
              Enquire
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
