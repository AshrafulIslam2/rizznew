import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

type RelatedItem = {
  title: string;
  price: string;
  image: string;
  href: string;
};

type ProductEntry = {
  title: string;
  summary: string;
  collection: string;
  price: string;
  oldPrice: string;
  save: string;
  stock: string;
  details: string;
  colorLabel: string;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  specs: string;
  craftsmanship: string;
  shipping: string;
  completeSet: RelatedItem[];
};

const catalogData: Record<string, ProductEntry> = {
  "classic-loafers": {
    title: "The Executive Briefcase",
    summary: "Crafted from full-grain Chittagong leather with a padded laptop compartment and hand-burnished edges.",
    collection: "Heritage Collection",
    price: "18,500",
    oldPrice: "22,000",
    save: "Save 15%",
    stock: "In Stock - Ready to Ship",
    details:
      "Crafted from full-grain Chittagong leather, the Executive Briefcase is designed for the modern professional. Featuring solid brass hardware, padded laptop compartment, and our signature hand-burnished edges.",
    colorLabel: "Midnight Black",
    colors: ["#05070d", "#4a302d", "#6a4d45"],
    sizes: ["Standard (15\")", "Large (17\")"],
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "The Executive Briefcase is the pinnacle of our craftsmanship. Designed to age beautifully, the full-grain leather develops a rich patina over time, telling the story of your journeys.",
    specs: "Width 40cm, Height 30cm, Depth 8cm, dedicated laptop sleeve for up to 17-inch devices, and interior zip organizer.",
    craftsmanship: "Hand-cut panels, reinforced stitched handles, brass-finished hardware, and edge painting with multi-coat sealing.",
    shipping: "Domestic COD delivery within 2-3 business days. International shipping timeline and duties are shared before dispatch.",
    completeSet: [
      {
        title: "Heritage Bifold Wallet",
        price: "4,200",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
        href: "/brand/catalog/leather-wallets"
      },
      {
        title: "Classic Dress Belt",
        price: "3,500",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
        href: "/brand/catalog/formal-belts"
      },
      {
        title: "Signature Key Fob",
        price: "1,200",
        image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&w=900&q=80",
        href: "/brand/catalog/classic-loafers"
      }
    ]
  },
  "leather-wallets": {
    title: "Heritage Bifold Wallet",
    summary: "Slim bifold wallet in textured calfskin with precise edge finishing and durable lining.",
    collection: "Signature Accessories",
    price: "4,200",
    oldPrice: "5,000",
    save: "Save 16%",
    stock: "In Stock - Ready to Ship",
    details: "A compact daily wallet with optimized slots, clean fold profile, and reinforced stitch lines for long-term use.",
    colorLabel: "Onyx Black",
    colors: ["#0b0d14", "#5e4438", "#7f5f4e"],
    sizes: ["Standard", "Travel"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Designed for everyday carry with a slim silhouette and premium feel in hand.",
    specs: "8 card slots, 2 currency sections, 1 hidden pocket, and anti-fray interior finish.",
    craftsmanship: "Stitched with high-tension nylon thread and hand-finished edges.",
    shipping: "Domestic COD available. International delivery available via WhatsApp concierge.",
    completeSet: [
      { title: "Classic Dress Belt", price: "3,500", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/formal-belts" },
      { title: "Signature Briefcase", price: "18,500", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/classic-loafers" },
      { title: "Leather Card Sleeve", price: "1,600", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/leather-wallets" }
    ]
  },
  "formal-belts": {
    title: "Classic Dress Belt",
    summary: "Formal leather belt with smooth finish, balanced thickness, and durable buckle hardware.",
    collection: "Signature Accessories",
    price: "3,500",
    oldPrice: "4,100",
    save: "Save 14%",
    stock: "In Stock - Ready to Ship",
    details: "A tailored belt designed to complement formal and smart-casual wardrobes.",
    colorLabel: "Espresso Brown",
    colors: ["#121319", "#3f2f2b", "#6c4f42"],
    sizes: ["32-34", "36-38"],
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Structured strap build with flexibility for all-day comfort.",
    specs: "Width 35mm, nickel buckle, adjustable hole spacing, and reinforced tongue.",
    craftsmanship: "Clean cut edge treatment with polished bevel and protective coating.",
    shipping: "Domestic COD and international shipping available.",
    completeSet: [
      { title: "Heritage Bifold Wallet", price: "4,200", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/leather-wallets" },
      { title: "Executive Briefcase", price: "18,500", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/classic-loafers" },
      { title: "Signature Key Fob", price: "1,200", image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/formal-belts" }
    ]
  },
  "mens-sandals": {
    title: "Artisan Leather Sandal",
    summary: "Comfort-focused sandal with durable leather upper and padded insole.",
    collection: "Summer Collection",
    price: "3,200",
    oldPrice: "3,900",
    save: "Save 18%",
    stock: "In Stock - Ready to Ship",
    details: "Lightweight sandal designed for breathable comfort with premium leather straps.",
    colorLabel: "Dark Tan",
    colors: ["#121319", "#5a3f2f", "#7a5a47"],
    sizes: ["40-42", "43-45"],
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Cushioned, flexible, and premium for daily summer wear.",
    specs: "Padded footbed, anti-slip sole, and breathable leather lining.",
    craftsmanship: "Hand-finished straps and precision buckle placement.",
    shipping: "COD available in Bangladesh. International delivery on request.",
    completeSet: [
      { title: "Classic Dress Belt", price: "3,500", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/formal-belts" },
      { title: "Heritage Bifold Wallet", price: "4,200", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/leather-wallets" },
      { title: "Signature Key Fob", price: "1,200", image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/mens-sandals" }
    ]
  },
  "half-loafers": {
    title: "Urban Half Loafer",
    summary: "Lightweight half loafer made for effortless daily wear and comfort.",
    collection: "Urban Classics",
    price: "5,800",
    oldPrice: "6,700",
    save: "Save 13%",
    stock: "In Stock - Ready to Ship",
    details: "A streamlined silhouette offering breathable comfort with premium leather finishing.",
    colorLabel: "Mocha Brown",
    colors: ["#0e1119", "#4a352d", "#7b5b4d"],
    sizes: ["40-42", "43-45"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1500&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Soft in-step feel and balanced outsole grip for city movement.",
    specs: "Slip-on profile, lightweight sole, and breathable inner lining.",
    craftsmanship: "Curved seam detailing and reinforced heel counter.",
    shipping: "COD available in Bangladesh. International orders through WhatsApp.",
    completeSet: [
      { title: "Executive Briefcase", price: "18,500", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/classic-loafers" },
      { title: "Classic Dress Belt", price: "3,500", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/formal-belts" },
      { title: "Heritage Bifold Wallet", price: "4,200", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80", href: "/brand/catalog/leather-wallets" }
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = catalogData[slug];
  if (!entry) {
    return { title: "Product | Rizz Leather" };
  }
  return {
    title: `${entry.title} | Rizz Leather`,
    description: entry.summary
  };
}

export default async function BrandProductPage({ params }: Props) {
  const { slug } = await params;
  const entry = catalogData[slug];
  if (!entry) {
    notFound();
  }

  return (
    <main className="bg-[#01030a] text-[#f1ede4]">
      <section className="border-y border-[var(--hairline-accent)] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 xl:grid-cols-[1.3fr_0.9fr] xl:items-start">
            <div className="grid gap-4 self-start sm:grid-cols-[72px_1fr] sm:gap-5 xl:sticky xl:top-24">
              <div className="order-2 flex gap-3 overflow-x-auto pb-1 sm:order-1 sm:grid sm:gap-3 sm:overflow-visible">
                {entry.images.map((image, index) => (
                  <button
                    key={`${entry.title}-thumb-${index + 1}`}
                    type="button"
                    className={`shrink-0 overflow-hidden rounded-xl border bg-[#050912] ${index === 0 ? "border-[#b9a87f]" : "border-[#1f2738]"}`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <div className="h-16 w-14 bg-cover bg-center sm:h-[78px] sm:w-full" style={{ backgroundImage: `url('${image}')` }} />
                  </button>
                ))}
              </div>

              <div className="order-1 overflow-hidden rounded-2xl border border-[#1b2335] bg-[#050912] sm:order-2">
                <div className="relative">
                  <span className="absolute left-4 top-4 rounded-full bg-[#d8c9a3] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#10131b]">
                    COD Eligible
                  </span>
                  <div className="aspect-[4/5] bg-cover bg-center sm:aspect-[16/13]" style={{ backgroundImage: `url('${entry.images[0]}')` }} />
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#b9ad91]">{entry.collection}</p>
              <h1 className="font-serif text-5xl leading-[1.05] text-[#f2ece1] sm:text-6xl">{entry.title}</h1>

              <div className="flex flex-wrap items-center gap-3">
                <p className="text-4xl font-semibold text-[#efe9de]">৳ {entry.price}</p>
                <p className="text-sm text-[#7f8694] line-through">৳ {entry.oldPrice}</p>
                <span className="rounded-md border border-[#3d3428] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#d4c190]">
                  {entry.save}
                </span>
              </div>

              <p className="text-base text-[#bfd2be]">● {entry.stock}</p>
              <p className="text-base leading-relaxed text-[#afb5c1]">{entry.details}</p>

              <div className="border-t border-[#1d2435] pt-5">
                <p className="text-xs uppercase tracking-[0.12em] text-[#a7adb8]">
                  Color: <span className="font-semibold text-[#d8dde6]">{entry.colorLabel}</span>
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {entry.colors.map((color, index) => (
                    <button
                      key={`${entry.title}-color-${index + 1}`}
                      type="button"
                      className={`h-9 w-9 rounded-full border ${index === 0 ? "border-[#dfcca2]" : "border-[#5a6272]"}`}
                      style={{ backgroundColor: color }}
                      aria-label={`Color option ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.12em] text-[#a7adb8]">
                  <span>Size</span>
                  <span className="text-[#b8bfc9]">Size Guide</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {entry.sizes.map((size, index) => (
                    <button
                      key={`${entry.title}-size-${size}`}
                      type="button"
                      className={`rounded-xl border px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] ${
                        index === 0 ? "border-[#cdbd97] bg-[#17130c] text-[#efe2c2]" : "border-[#323b4d] bg-transparent text-[#c0c6d0]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-[#1e2537] bg-[#080d18] p-4 text-sm text-[#b5bbc7]">
                <p className="font-medium text-[#d9dee7]">COD Available in Bangladesh</p>
                <p className="mt-1 text-xs text-[#8f97a6]">Order now and pay upon delivery. Delivery within 2-3 business days.</p>
              </div>

              <Link
                href={`/brand/cart?product=${slug}`}
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-[#d8c69f] bg-[#d8c69f] px-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#10131a] no-underline"
              >
                Add to Cart
              </Link>
              <Link
                href="https://wa.me/8801712345678"
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-[#1f6947] bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#35d673] no-underline"
              >
                WhatsApp to Order Internationally
              </Link>

              <div className="space-y-1 border-t border-[#1d2435] pt-4">
                <details open className="border-b border-[#1d2435] py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.1em] text-[#d8dde6]">Description</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#aeb4bf]">{entry.description}</p>
                </details>
                <details className="border-b border-[#1d2435] py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.1em] text-[#d8dde6]">Dimensions & Specs</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#aeb4bf]">{entry.specs}</p>
                </details>
                <details className="border-b border-[#1d2435] py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.1em] text-[#d8dde6]">Craftsmanship & Materials</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#aeb4bf]">{entry.craftsmanship}</p>
                </details>
                <details className="border-b border-[#1d2435] py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-[0.1em] text-[#d8dde6]">Shipping & Returns</summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#aeb4bf]">{entry.shipping}</p>
                </details>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-5xl text-[#f2ece1] sm:text-6xl">Complete the Set</h2>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#b9ad91]">Perfectly Paired Accessories</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {entry.completeSet.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#1d2435] bg-[#090d17] p-4">
                <div className="overflow-hidden rounded-xl bg-[#070b14]">
                  <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                </div>
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-3xl text-[#efe8dd]">{item.title}</h3>
                    <p className="mt-2 text-3xl font-semibold text-[#efe9de]">৳ {item.price}</p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[34px] items-center justify-center rounded-full border border-[#3a4359] px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#d6c7a0] no-underline"
                  >
                    Add
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
