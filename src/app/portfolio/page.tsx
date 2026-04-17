import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Rizz Leather",
  description: "Portfolio and capability showcase of premium leather footwear and accessories."
};

export default function PortfolioPage() {
  const categories = ["All Categories", "Sandals", "Loafers", "Half Loafers", "Belts", "Wallets", "Packaging"];

  const showcaseItems = [
    {
      slug: "leather-jacket",
      title: "Leather Jacket",
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1200&q=80"
    },
    {
      slug: "black-belt",
      title: "Black Belt",
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=80"
    },
    {
      slug: "leather-wallet",
      title: "Wallet",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80"
    },
    {
      slug: "women-leatherwear",
      title: "Women Leatherwear",
      image: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      slug: "craft-detail",
      title: "Craft Detail",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80"
    },
    {
      slug: "tanned-hide",
      title: "Tanned Hide",
      image: "https://images.unsplash.com/photo-1518544866330-4e31c8d0f4f5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      slug: "textured-leather",
      title: "Textured Leather",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80"
    },
    {
      slug: "premium-packaging",
      title: "Packaging",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const processCards = [
    {
      step: "01",
      title: "Leather Selection",
      description: "Rigorous grading of hides before cutting to ensure uniform grain, thickness, and color matching across production runs."
    },
    {
      step: "02",
      title: "Precision Stitching",
      description: "Computer-controlled and skilled hand-stitching options, maintaining exact tension and stitch density per inch."
    },
    {
      step: "03",
      title: "Edge Finishing",
      description: "Multiple coats of premium edge paint applied by hand, sanded, and sealed for a smooth, durable, luxury feel."
    },
    {
      step: "04",
      title: "Final Inspection",
      description: "Comprehensive 12-point QC check on every finished item covering dimensions, hardware functionality, and visual perfection."
    }
  ];

  return (
    <main>
      <section className="border-y border-[var(--hairline-accent)] bg-[#02040a]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <h1 className="text-5xl font-medium leading-[1.05] text-[#f4eee1] sm:text-6xl lg:text-8xl">
            Portfolio / Capability
            <span className="block italic text-[#d8d0bb]">Showcase</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-[#adb2bd] sm:text-xl">
            Sample work across footwear & accessories. Client brand names are not displayed to respect privacy agreements.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/manufacturing/quote"
              className="inline-flex min-h-[52px] w-full max-w-[260px] items-center justify-center border border-[#d4ccb9] bg-[#e6e1d6] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#11131a] no-underline hover:bg-[#d7d1c3]"
            >
              Request OEM Quote
            </Link>
            <Link
              href="https://wa.me/8801712345678"
              className="inline-flex min-h-[52px] w-full max-w-[260px] items-center justify-center border border-[var(--hairline-accent)] bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#ece2c8] no-underline hover:bg-white/5"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)]">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6">
          <nav className="flex min-w-max items-center gap-6 py-5 text-sm text-[#aeb4bf] sm:gap-10 sm:text-[1.08rem]">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`whitespace-nowrap border-none bg-transparent p-0 tracking-[0.04em] ${
                  index === 0 ? "text-[#e7dbbc]" : "text-[#aeb4bf]"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {showcaseItems.map((item) => (
              <Link
                key={item.title}
                href={`/portfolio/${item.slug}`}
                className="group overflow-hidden rounded-md border border-[#171e2d] bg-[#060912] no-underline"
              >
                <div className="relative">
                  <div className="aspect-[4/5] bg-cover bg-center transition duration-500 group-hover:scale-[1.03]" style={{ backgroundImage: `url('${item.image}')` }} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#04070f] via-[#04070f]/70 to-transparent p-4">
                    <p className="text-2xl font-semibold text-[#efe7d8]">{item.title}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#b9c0cb]">View product brochure</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1.45fr] lg:gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-medium leading-tight text-[#f4eee1] sm:text-5xl lg:text-6xl">
              Uncompromising
              <br />
              Quality & Craft.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-[#aeb4bf]">
              Every piece manufactured in our facility undergoes rigorous inspection. We blend traditional leathercraft techniques with modern
              precision machinery to deliver consistent excellence at scale.
            </p>
            <Link href="/manufacturing" className="inline-block border-b border-[#b6ab89] pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#e8ddc1] no-underline">
              Learn About Our Facility
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {processCards.map((card) => (
              <article key={card.title} className="rounded-md border border-[#1a2130] bg-[#070b15] p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#c9bb93]">{card.step}</p>
                <h3 className="mt-4 text-2xl font-semibold text-[#ece5d4] sm:text-[1.9rem]">{card.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[#afb5c1]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] bg-[#03050b] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h2 className="text-4xl font-medium leading-tight text-[#f4eee1] sm:text-6xl">
            Ready to manufacture your next
            <span className="block">collection?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#adb2bd] sm:text-2xl">Get a detailed OEM quote in 24-48 hours.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/manufacturing/quote"
              className="inline-flex min-h-[52px] w-full max-w-[260px] items-center justify-center border border-[#d4ccb9] bg-[#e6e1d6] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#11131a] no-underline hover:bg-[#d7d1c3]"
            >
              Request Quote
            </Link>
            <Link
              href="https://wa.me/8801712345678"
              className="inline-flex min-h-[52px] w-full max-w-[260px] items-center justify-center border border-[var(--hairline-accent)] bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#ece2c8] no-underline hover:bg-white/5"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
