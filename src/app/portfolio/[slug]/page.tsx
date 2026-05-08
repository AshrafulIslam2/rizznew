import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

type BrochureItem = {
  title: string;
  category: string;
  summary: string;
  moq: string;
  leadTime: string;
  productionCapacity: string;
  materials: string[];
  construction: string[];
  gallery: string[];
};

const brochureData: Record<string, BrochureItem> = {
  "leather-jacket": {
    title: "Premium Leather Jacket",
    category: "Outerwear",
    summary: "Full-grain jacket line with reinforced seams, satin lining, and custom hardware options for private labels.",
    moq: "150 pieces / color",
    leadTime: "35-45 days",
    productionCapacity: "2,000 pieces / month",
    materials: ["Full-grain sheep leather", "YKK metal zipper", "Poly satin lining", "Nickel-free snap buttons"],
    construction: ["Double-needle seam reinforcement", "Edge folded cuff finish", "Branded inside label support", "Optional quilt padding"],
    gallery: [
      "/assets/images/rizz_master_color_sandals/image01.jpg",
      "/assets/images/rizz_simple_sandals/image01.jpg",
      "/assets/images/rizz_simple_sandals/image02.jpg",
      "/assets/images/rizz_cholate_sandals/image01.jpg"
    ]
  },
  "black-belt": {
    title: "Classic Black Belt",
    category: "Accessories",
    summary: "Executive belt program with premium buckle finishing and precision edge painting for export quality consistency.",
    moq: "300 pieces",
    leadTime: "18-25 days",
    productionCapacity: "10,000 pieces / month",
    materials: ["Vegetable-tanned cow leather", "Zinc alloy buckle", "Wax edge sealant", "Anti-rust hardware coating"],
    construction: ["Heat-pressed strap profiling", "Dual-layer stitch reinforcement", "Laser logo debossing option", "Buckle customization by brand"],
    gallery: [
      "/assets/images/rizz_dubai_sandals/image04.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image07.jpg",
      "/assets/images/rizz_double_bockles-sandals/image02.jpg"
    ]
  },
  "leather-wallet": {
    title: "Heritage Leather Wallet",
    category: "Wallets",
    summary: "Compact and long wallet variants with RFID lining, clean card-slot cut, and export-grade stitching.",
    moq: "500 pieces / style",
    leadTime: "20-28 days",
    productionCapacity: "25,000 pieces / month",
    materials: ["Top-grain calf leather", "RFID protective lining", "Nylon bonded thread", "Soft microfiber interior"],
    construction: ["Skived fold edges", "Multi-pocket die-cut panels", "Hand-burnished edges", "Gift box packaging available"],
    gallery: [
      "/assets/images/rizz_double_bockles-sandals/image03.jpg",
      "/assets/images/rizz_master_color_sandals/image01.jpg",
      "/assets/images/rizz_simple_sandals/image01.jpg",
      "/assets/images/rizz_simple_sandals/image02.jpg"
    ]
  },
  "women-leatherwear": {
    title: "Women's Leatherwear Capsule",
    category: "Apparel",
    summary: "Women's silhouette production with flexible grading, custom color development, and boutique-label finishing.",
    moq: "120 pieces / design",
    leadTime: "30-40 days",
    productionCapacity: "1,500 pieces / month",
    materials: ["Soft nappa leather", "Breathable inner lining", "Colorfast finishing coat", "Branded hangtag support"],
    construction: ["Pattern grading by size chart", "Waist and cuff reinforcement", "Premium hardware matching", "Final steam and shape set"],
    gallery: [
      "/assets/images/rizz_cholate_sandals/image01.jpg",
      "/assets/images/rizz_dubai_sandals/image04.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image07.jpg"
    ]
  },
  "craft-detail": {
    title: "Craftsmanship Detail Program",
    category: "Process",
    summary: "Close-up craftsmanship showcase for buyer approvals including stitch, edge, and hardware detailing.",
    moq: "Sample set from 20 units",
    leadTime: "10-15 days",
    productionCapacity: "Custom by program",
    materials: ["Client nominated leather", "Metal hardware options", "Thread color library", "Edge paint color library"],
    construction: ["QC checklist mapping", "Sample revision rounds", "Tolerance documentation", "Client approval archive"],
    gallery: [
      "/assets/images/rizz_double_bockles-sandals/image02.jpg",
      "/assets/images/rizz_double_bockles-sandals/image03.jpg",
      "/assets/images/rizz_master_color_sandals/image01.jpg",
      "/assets/images/rizz_simple_sandals/image01.jpg"
    ]
  },
  "tanned-hide": {
    title: "Tanned Hide Selection",
    category: "Raw Material",
    summary: "Leather source options from partner tanneries with consistent grading, thickness, and finish selection.",
    moq: "MOQ by hide grade",
    leadTime: "7-12 days material prep",
    productionCapacity: "As per line booking",
    materials: ["Chrome-tanned leather", "Veg-tanned leather", "Pull-up finish", "Embossed grain options"],
    construction: ["Grade segregation", "Moisture-level QC", "Color lot matching", "Cutting plan optimization"],
    gallery: [
      "/assets/images/rizz_simple_sandals/image02.jpg",
      "/assets/images/rizz_cholate_sandals/image01.jpg",
      "/assets/images/rizz_dubai_sandals/image04.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg"
    ]
  },
  "textured-leather": {
    title: "Textured Leather Series",
    category: "Material Library",
    summary: "Pebbled, saffiano, and custom embossed textures tailored to footwear and small leather goods collections.",
    moq: "250 pieces / texture",
    leadTime: "22-30 days",
    productionCapacity: "8,000 pieces / month",
    materials: ["Embossed top-grain leather", "Protective top coat", "Texture retention treatment", "Water-resistant finish option"],
    construction: ["Texture consistency validation", "Panel direction control", "Edge polish process", "Batch-level approval cards"],
    gallery: [
      "/assets/images/rizz_crodile_slide_sandals/image07.jpg",
      "/assets/images/rizz_double_bockles-sandals/image02.jpg",
      "/assets/images/rizz_double_bockles-sandals/image03.jpg",
      "/assets/images/rizz_master_color_sandals/image01.jpg"
    ]
  },
  "premium-packaging": {
    title: "Premium Packaging Set",
    category: "Packaging",
    summary: "Retail-ready box, tissue, and labeling system with custom brand assets and export protection specs.",
    moq: "1,000 sets",
    leadTime: "15-20 days",
    productionCapacity: "30,000 sets / month",
    materials: ["Rigid paperboard", "Magnetic lid option", "Recycled tissue paper", "Waterproof shipping sleeve"],
    construction: ["Pantone color matching", "Hot-foil logo options", "Drop-test compliant shipper", "Barcode and SKU print support"],
    gallery: [
      "/assets/images/rizz_simple_sandals/image01.jpg",
      "/assets/images/rizz_simple_sandals/image02.jpg",
      "/assets/images/rizz_cholate_sandals/image01.jpg",
      "/assets/images/rizz_dubai_sandals/image04.jpg"
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = brochureData[slug];
  if (!item) {
    return { title: "Portfolio Brochure | Rizz Leather" };
  }
  return {
    title: `${item.title} | Portfolio Brochure`,
    description: `${item.summary} MOQ: ${item.moq}.`
  };
}

export default async function PortfolioBrochurePage({ params }: Props) {
  const { slug } = await params;
  const item = brochureData[slug];

  if (!item) {
    notFound();
  }

  return (
    <main className="bg-[#01030a] text-[#f2ede2]">
      <section className="border-y border-[var(--hairline-accent)] py-7 sm:py-9">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link href="/portfolio" className="text-xs uppercase tracking-[0.15em] text-[#b8c0cd] no-underline">
            ← Back to Portfolio
          </Link>

          <div className="mt-5 grid gap-6 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
            <div className="space-y-4 xl:sticky xl:top-20">
              <div className="overflow-hidden rounded-2xl border border-[#1d2538] bg-[#060a14]">
                <div className="aspect-[16/11] bg-cover bg-center" style={{ backgroundImage: `url('${item.gallery[0]}')` }} />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {item.gallery.slice(1).map((image, index) => (
                  <div key={`${item.title}-angle-${index + 1}`} className="overflow-hidden rounded-xl border border-[#1d2538] bg-[#060a14]">
                    <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-[#1d2538] bg-[#070b15] p-4 sm:p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[#c8bc9c]">{item.category}</p>
              <h1 className="mt-2 font-serif text-5xl text-[#f2ebde] sm:text-6xl">{item.title}</h1>
              <p className="mt-3 text-sm leading-relaxed text-[#afb6c2] sm:text-base">{item.summary}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <article className="rounded-xl border border-[#232c40] bg-[#050913] p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#8f98a7]">MOQ</p>
                  <p className="mt-1 text-sm font-semibold text-[#eee7da]">{item.moq}</p>
                </article>
                <article className="rounded-xl border border-[#232c40] bg-[#050913] p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#8f98a7]">Lead Time</p>
                  <p className="mt-1 text-sm font-semibold text-[#eee7da]">{item.leadTime}</p>
                </article>
                <article className="rounded-xl border border-[#232c40] bg-[#050913] p-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#8f98a7]">Capacity</p>
                  <p className="mt-1 text-sm font-semibold text-[#eee7da]">{item.productionCapacity}</p>
                </article>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-[#1f283a] bg-[#050913] p-4">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c7bb99]">Materials Used</h2>
                  <ul className="mt-3 space-y-2 text-sm text-[#c0c7d2]">
                    {item.materials.map((material) => (
                      <li key={material}>• {material}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-[#1f283a] bg-[#050913] p-4">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c7bb99]">Construction & Product Details</h2>
                  <ul className="mt-3 space-y-2 text-sm text-[#c0c7d2]">
                    {item.construction.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/manufacturing/quote"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#d8c69f] bg-[#d8c69f] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#10141c] no-underline"
                >
                  Request OEM Quote
                </Link>
                <Link
                  href="https://wa.me/8801712345678"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[#2d6e4d] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#2edc78] no-underline"
                >
                  Discuss on WhatsApp
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

