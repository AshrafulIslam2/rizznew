import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Products | Rizz Leather",
  description: "Browse all Rizz leather products."
};

const products = [
  {
    name: "The Chelsea Silhouette",
    slug: "classic-loafers",
    category: "Boots",
    price: "24,000",
    tag: "New",
    image: "https://images.unsplash.com/photo-1608256246200-53e8b47b8b32?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "The Command Boot",
    slug: "leather-wallets",
    category: "Boots",
    price: "28,500",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Urban Chukka",
    slug: "formal-belts",
    category: "Boots",
    price: "21,000",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "The Heritage Brogue",
    slug: "mens-sandals",
    category: "Oxfords",
    price: "26,500",
    image: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Avant Zip Boot",
    slug: "half-loafers",
    category: "Boots",
    price: "32,000",
    outOfStock: true,
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Classic Ox Boot",
    slug: "leather-wallets",
    category: "Oxfords",
    price: "25,000",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
  }
];

const recentSearch = ["Chelsea Boots", "Loafers", "Black Oxford", "Messenger Bag"];
const filters = {
  category: ["Boots (12)", "Oxfords (8)", "Loafers (15)", "Sneakers (6)"],
  leatherType: ["Full-Grain (24)", "Suede (9)", "Pebbled (11)"]
};

export default function BrandProductsPage() {
  return (
    <main className="bg-[#01030a] text-[#f2ede2]">
      <section className="border-y border-[var(--hairline-accent)] py-7 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <header className="border-b border-[#1b2233] pb-5">
            <div className="flex items-center justify-between gap-3">
              <h1 className="font-serif text-6xl text-[#f3ece1] sm:text-7xl">Leather Boots</h1>
              <button type="button" className="text-3xl text-[#8c95a4]">
                ×
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-[0.14em] text-[#9ea6b4]">Recent:</span>
              {recentSearch.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-full border border-[#2a3243] px-4 py-1.5 text-xs text-[#c3c9d3]"
                >
                  {item}
                </button>
              ))}
            </div>
          </header>

          <div className="mt-6 grid gap-5 lg:grid-cols-[260px_1fr]">
            <aside className="rounded-2xl border border-[#171e2f] bg-[#050913] p-4 lg:sticky lg:top-20 lg:self-start">
              <div className="mb-4 flex items-center justify-between border-b border-[#1a2234] pb-3">
                <p className="text-xl font-semibold text-[#ece5d9]">Filters</p>
                <button type="button" className="text-xs underline text-[#9fa6b3]">
                  Reset All
                </button>
              </div>

              <div className="space-y-5">
                <div className="border-b border-[#1a2234] pb-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#98a1af]">Category</p>
                  <div className="mt-3 space-y-2.5">
                    {filters.category.map((item, index) => (
                      <label key={item} className="flex items-center gap-2 text-sm text-[#c7cdd7]">
                        <input type="checkbox" defaultChecked={index === 0} className="h-4 w-4 rounded border border-[#3a4355] bg-transparent" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-b border-[#1a2234] pb-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#98a1af]">Leather Type</p>
                  <div className="mt-3 space-y-2.5">
                    {filters.leatherType.map((item) => (
                      <label key={item} className="flex items-center gap-2 text-sm text-[#c7cdd7]">
                        <input type="checkbox" className="h-4 w-4 rounded border border-[#3a4355] bg-transparent" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border-b border-[#1a2234] pb-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-[#98a1af]">Price Range</p>
                  <div className="mt-3 flex items-center justify-between text-[#d8c69f]">
                    <span>৳ 5,000</span>
                    <span>৳ 45,000+</span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-[#252e41]">
                    <div className="h-full w-4/5 rounded-full bg-[#d8c69f]" />
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex min-h-[40px] w-full items-center justify-center rounded-full border border-[#d8c69f] bg-[#d8c69f] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#10141c]"
                >
                  Apply Filters
                </button>
              </div>
            </aside>

            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm text-[#bcc3cf]">
                  Showing <span className="font-semibold text-[#f0e8dd]">12 results</span> for <span className="font-semibold text-[#f0e8dd]">"Leather Boots"</span>
                </p>
                <button type="button" className="rounded-full border border-[#293245] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#c2c8d2]">
                  Sort by: Recommended
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((item) => (
                  <Link
                    key={item.name}
                    href={`/brand/catalog/${item.slug}`}
                    className="group block rounded-2xl border border-[#1a2234] bg-[#070b15] p-3 no-underline transition hover:border-[#323d53]"
                  >
                    <div className="relative overflow-hidden rounded-xl border border-[#20283a] bg-[#060a14]">
                      {item.tag && (
                        <span className="absolute left-3 top-3 z-10 rounded-full bg-[#d8c69f] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0f131c]">
                          {item.tag}
                        </span>
                      )}
                      {item.outOfStock && (
                        <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111826]/90 px-4 py-1 text-xs uppercase tracking-[0.12em] text-[#d4d9e3]">
                          Out of Stock
                        </span>
                      )}
                      <span className="absolute right-3 top-3 z-10 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#2d364a] bg-[#070b15]/80 text-sm text-[#d9dee7]">
                        ♡
                      </span>
                      <div
                        className={`aspect-[4/5] bg-cover bg-center transition duration-500 group-hover:scale-[1.03] ${
                          item.outOfStock ? "opacity-45 grayscale" : ""
                        }`}
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                    </div>
                    <div className="mt-3">
                      <h2 className="font-serif text-4xl text-[#efe8dd]">{item.name}</h2>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#9fa6b3]">{item.category}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-3xl font-semibold text-[#d9c69d]">৳ {item.price}</p>
                        <span className="text-xs uppercase tracking-[0.12em] text-[#c2c8d2]">COD</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-center gap-2">
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2b3448] text-[#b0b7c3]">
                  {"<"}
                </button>
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c69f] bg-[#d8c69f] text-[#11141b]">
                  1
                </button>
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2b3448] text-[#b0b7c3]">
                  2
                </button>
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2b3448] text-[#b0b7c3]">
                  3
                </button>
                <span className="px-2 text-[#7f8897]">...</span>
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2b3448] text-[#b0b7c3]">
                  8
                </button>
                <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#2b3448] text-[#b0b7c3]">
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
