import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catalog | Rizz Leather",
  description: "Discover signature leather collections from Rizz."
};

const featuredCollections = [
  {
    title: "Signature Bags",
    href: "/brand/catalog/classic-loafers",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Premium Wallets",
    href: "/brand/catalog/leather-wallets",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "Classic Belts",
    href: "/brand/catalog/formal-belts",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1400&q=80"
  }
];

const products = [
  {
    slug: "classic-loafers",
    name: "The Executive Briefcase",
    sub: "Full-grain Chittagong Leather",
    bdt: "18,500",
    usd: "170",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1100&q=80"
  },
  {
    slug: "leather-wallets",
    name: "Heritage Bifold Wallet",
    sub: "Textured Calfskin",
    bdt: "4,200",
    usd: "40",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1100&q=80"
  },
  {
    slug: "classic-loafers",
    name: "Weekender Duffle",
    sub: "Heavyweight Pull-up Leather",
    bdt: "24,000",
    usd: "220",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1100&q=80"
  },
  {
    slug: "formal-belts",
    name: "Classic Dress Belt",
    sub: "Smooth Finish Leather",
    bdt: "3,500",
    usd: "32",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1100&q=80"
  }
];

const quickFilters = ["All Items", "Bags", "Wallets", "Belts"];

const faqs = [
  "Which countries do you ship to?",
  "How is international pricing calculated?",
  "What are the accepted payment methods?"
];

export default function CatalogPage() {
  return (
    <main className="bg-[#02040b] text-[#f2ede2]">
      <section className="relative isolate overflow-hidden border-y border-[var(--hairline-accent)]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,47,67,0.4),rgba(2,4,11,0.95)_65%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
          <p className="text-xs uppercase tracking-[0.24em] text-[#c5b58d]">Heritage & Craft</p>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-[1.02] text-[#f3ede2] sm:text-6xl lg:text-8xl">
            The Art of
            <span className="block">Bangladeshi Leather</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#aeb4bf] sm:text-2xl">
            Sourced from the finest tanneries in Chittagong, our collection embodies generations of master craftsmanship.
          </p>
          <Link
            href="#product-grid"
            className="mt-10 inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#d6c69f] bg-[#dfcfaa] px-10 text-sm font-semibold uppercase tracking-[0.2em] text-[#11131a] no-underline hover:bg-[#d3c29a]"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredCollections.map((collection) => (
            <article key={collection.title} className="group relative overflow-hidden rounded-3xl border border-[#20283a] bg-[#070b15]">
              <div className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-[1.04]" style={{ backgroundImage: `url('${collection.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/95 via-[#040812]/55 to-transparent" />
              <div className="relative flex min-h-[250px] flex-col justify-end p-6">
                <h2 className="font-serif text-4xl text-[#f1ebdf]">{collection.title}</h2>
                <Link
                  href={collection.href}
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c89f] no-underline"
                >
                  Shop Now <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="product-grid" className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8">
          {quickFilters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] ${
                index === 0
                  ? "border-[#d8c89f] bg-[#d8c89f] text-[#10131c]"
                  : "border-[#2b3243] bg-transparent text-[#c4c9d2] hover:border-[#465067]"
              }`}
            >
              {filter}
            </button>
          ))}
          <span className="mx-1 hidden h-7 w-px bg-[#242c3f] md:inline-block" />
          <button type="button" className="rounded-full border border-[#2b3243] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#c4c9d2]">
            COD Available
          </button>
          <div className="ml-auto flex items-center gap-3">
            <button type="button" className="rounded-full border border-[#2b3243] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#c4c9d2]">
              Sort By
            </button>
            <button type="button" className="rounded-full border border-[#2b3243] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-[#c4c9d2]">
              Filters
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <Link
              key={product.name}
              href={`/brand/catalog/${product.slug}`}
              className="block rounded-3xl border border-[#1d2435] bg-[#090d18] p-4 no-underline transition hover:border-[#2a3348]"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#060a13] p-3">
                <span className="absolute left-4 top-4 rounded-full bg-[#d8c9a3] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#10131b]">
                  COD Eligible
                </span>
                <span className="absolute right-4 top-4 text-lg text-[#d8dce5]">{index === 3 ? "♥" : "♡"}</span>
                <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${product.image}')` }} />
              </div>

              <div className="mt-4">
                <div className="mb-3 flex gap-2">
                  <span className="h-3 w-3 rounded-full border border-[#645849] bg-[#745e4c]" />
                  <span className="h-3 w-3 rounded-full border border-[#645849] bg-[#06080f]" />
                </div>
                <h3 className="font-serif text-3xl leading-tight text-[#efe9de]">{product.name}</h3>
                <p className="mt-2 text-base text-[#b0b6c1]">{product.sub}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-4xl font-semibold text-[#efeadf]">
                    ৳ {product.bdt} <span className="text-base font-medium text-[#aeb4bf]">/ ${product.usd}</span>
                  </p>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1f222a] text-3xl text-[#d7c79f]">
                    +
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/brand/products"
            className="inline-flex rounded-full border border-[#3a4359] px-8 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#d6c7a0] no-underline"
          >
            Load More Products
          </Link>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[2rem] border border-[#20283a] bg-[linear-gradient(90deg,#050a16,rgba(17,20,30,0.65))] p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0c4028] text-sm font-semibold tracking-[0.08em] text-[#61e394]">
                  WA
                </span>
                <h2 className="mt-5 font-serif text-6xl text-[#f0eadd] sm:text-7xl">International Shipping</h2>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#b0b6c1]">
                  Experience Rizz luxury globally. Connect directly with our concierge team via WhatsApp for personalized international orders and
                  shipping quotes.
                </p>
                <Link
                  href="https://wa.me/8801712345678"
                  className="mt-7 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#27d366] px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#06140b] no-underline hover:bg-[#23c05b]"
                >
                  Chat on WhatsApp
                </Link>
              </div>

              <div className="rounded-3xl border border-[#1d2435] bg-[#080c16] p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#cdbf97]">Frequently Asked Questions</p>
                <div className="mt-4 divide-y divide-[#1d2435]">
                  {faqs.map((faq) => (
                    <div key={faq} className="flex items-center justify-between py-4 text-base text-[#d8dde6]">
                      <span>{faq}</span>
                      <span className="text-2xl text-[#9ca3b1]">+</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
