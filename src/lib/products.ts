export type Category = "Loafers" | "Sandals" | "Belts" | "Wallets" | "Half Loafers";

export type ProductVariant = {
  sku: string;
  size: string;
  color: string;
  price: number;
  salePrice: number | null;
  stock: number;
};

export type ProductVideo = {
  url: string;
  embedUrl: string;
  thumbnail: string;
  title: string;
};

export type Product = {
  id?: string;
  slug: string;
  name: string;
  material: string;
  category: string;
  categorySlug?: string;
  price: number;
  oldPrice: number | null;
  badge: "New" | "Bestseller" | "Sale" | null;
  sizes: string[];
  colors: Array<{ label: string; hex: string }>;
  images: string[];
  description: string;
  specs: string;
  craftsmanship: string;
  collection: string;
  variants?: ProductVariant[];
  videos?: ProductVideo[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "onyx-loafer",
    name: "The Onyx Loafer",
    material: "Full-Grain Calfskin",
    category: "Loafers",
    price: 5800,
    oldPrice: 6800,
    badge: "Bestseller",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { label: "Midnight Black", hex: "#0a0808" },
      { label: "Cognac Brown", hex: "#6b3b2d" },
      { label: "Dark Tan", hex: "#8a5c3f" }
    ],
    images: [
      "/assets/images/rizz_master_color_sandals/image01.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image07.jpg",
      "/assets/images/rizz_double_bockles-sandals/image02.jpg"
    ],
    description:
      "The Onyx Loafer is the cornerstone of the Rizz collection. Cut from a single piece of full-grain calfskin, its silhouette is clean, its welt stitched by hand. This is the shoe that wears better at ten years than it did at ten days.",
    specs:
      "Full-grain calfskin upper · Hand-stitched welt · Leather sole with rubber toe tap · Leather insole · Width: D (standard)",
    craftsmanship:
      "Each pair takes 14 hours to complete. The upper is cut by hand, the edges bevelled and heat-sealed, the welt stitched with 16 passes per inch. Sole burnished with bone.",
    collection: "The Signature"
  },
  {
    slug: "tobacco-penny-loafer",
    name: "Tobacco Penny Loafer",
    material: "Vegetable-Tanned Leather",
    category: "Loafers",
    price: 6500,
    oldPrice: null,
    badge: "New",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { label: "Tobacco", hex: "#5c3620" },
      { label: "Chestnut", hex: "#4a2c1a" }
    ],
    images: [
      "/assets/images/rizz_crodile_slide_sandals/image07.jpg",
      "/assets/images/rizz_master_color_sandals/image01.jpg",
      "/assets/images/rizz_double_bockles-sandals/image02.jpg"
    ],
    description:
      "Vegetable-tanned in the traditional manner. The Tobacco Penny Loafer develops a deep, personal patina with every wear — a shoe that becomes truly yours over time.",
    specs:
      "Veg-tanned calf upper · Penny saddle detail · Double leather sole · Leather lining · Last: 103",
    craftsmanship:
      "Goodyear-welted construction. Edges hand-finished with beeswax. Antiqued sole for depth of colour.",
    collection: "Heritage"
  },
  {
    slug: "croc-emboss-loafer",
    name: "Croc-Emboss Loafer",
    material: "Embossed Calfskin",
    category: "Loafers",
    price: 7200,
    oldPrice: 8000,
    badge: "Sale",
    sizes: ["40", "41", "42", "43", "44"],
    colors: [
      { label: "Deep Black", hex: "#080808" },
      { label: "Dark Navy", hex: "#1a1f2e" }
    ],
    images: [
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg",
      "/assets/images/rizz_master_color_sandals/image01.jpg",
      "/assets/images/rizz_simple_sandals/image01.jpg"
    ],
    description:
      "Exotic texture without compromise. The crocodile-emboss calfskin delivers maximum visual presence while remaining supple and comfortable through a full day of wear.",
    specs:
      "Croc-emboss calfskin upper · Leather sole · Gold-tone tassel detail · Leather lining",
    craftsmanship:
      "Embossed under heat and pressure then hand-lacquered. Tassel individually knotted.",
    collection: "Statement"
  },
  {
    slug: "cognac-mule",
    name: "Cognac Mule",
    material: "Premium Suede",
    category: "Sandals",
    price: 4200,
    oldPrice: 4900,
    badge: "Bestseller",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { label: "Cognac", hex: "#7a4f2d" },
      { label: "Sand", hex: "#c4a882" },
      { label: "Black", hex: "#0a0808" }
    ],
    images: [
      "/assets/images/rizz_crodile_slide_sandals/image07.jpg",
      "/assets/images/rizz_dubai_sandals/image04.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg"
    ],
    description:
      "The Cognac Mule: open at the heel, rich at the front. Suede upper over a padded leather footbed. Slips on in a second, stays comfortable for hours.",
    specs:
      "Premium suede upper · Padded leather footbed · Non-slip rubber outsole · Footbed width: 10cm",
    craftsmanship:
      "Suede brushed after lasting for consistent nap direction. Footbed hand-buffed to a satin finish.",
    collection: "Riviera"
  },
  {
    slug: "dubai-slide",
    name: "The Dubai Slide",
    material: "Full-Grain Leather",
    category: "Sandals",
    price: 3500,
    oldPrice: null,
    badge: "New",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { label: "Desert Sand", hex: "#c4a882" },
      { label: "Dark Tan", hex: "#8a5c3f" },
      { label: "Black", hex: "#0d0b09" }
    ],
    images: [
      "/assets/images/rizz_dubai_sandals/image04.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg",
      "/assets/images/rizz_master_color_sandals/image01.jpg"
    ],
    description:
      "Wide strap, clean line. Inspired by resort elegance, the Dubai Slide is the only sandal you need from June through September.",
    specs:
      "Full-grain leather upper strap · Anatomical footbed · Lightweight EVA midsole · Rubber outsole · Strap width: 5cm",
    craftsmanship:
      "Strap edges knife-cut and burnished. Upper hand-polished after assembly.",
    collection: "Riviera"
  },
  {
    slug: "double-buckle-sandal",
    name: "Double Buckle Sandal",
    material: "Vegetable-Tanned Leather",
    category: "Sandals",
    price: 4800,
    oldPrice: 5500,
    badge: null,
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: [
      { label: "Dark Brown", hex: "#3d2112" },
      { label: "Tan", hex: "#9b6940" }
    ],
    images: [
      "/assets/images/rizz_double_bockles-sandals/image02.jpg",
      "/assets/images/rizz_double_bockles-sandals/image03.jpg",
      "/assets/images/rizz_dubai_sandals/image04.jpg"
    ],
    description:
      "Two buckles, one statement. Adjustable at both ankle and instep for a precision fit — the sandal that takes you from beach to dinner.",
    specs:
      "Veg-tanned upper · Brass-tone buckle hardware · Leather-wrapped footbed · Rubber lug sole",
    craftsmanship:
      "Buckle stitch reinforced with saddle thread. All metal parts hand-polished.",
    collection: "Artisan"
  },
  {
    slug: "signature-belt",
    name: "The Signature Belt",
    material: "Italian Full-Grain",
    category: "Belts",
    price: 3200,
    oldPrice: null,
    badge: "Bestseller",
    sizes: ['S (28–30")', 'M (32–34")', 'L (36–38")', 'XL (40–42")'],
    colors: [
      { label: "Black", hex: "#080808" },
      { label: "Dark Brown", hex: "#3d2112" },
      { label: "Cognac", hex: "#7a4f2d" }
    ],
    images: [
      "/assets/images/rizz_cholate_sandals/image01.jpg",
      "/assets/images/rizz_double_bockles-sandals/image03.jpg",
      "/assets/images/rizz_simple_sandals/image01.jpg"
    ],
    description:
      "Full-grain Italian calf, 35mm width. The Signature Belt closes with a solid brass frame buckle and wears as naturally with tailored trousers as it does with dark denim.",
    specs:
      "Width: 35mm · Solid brass buckle · Full-grain calfskin · 5 adjustment holes · Available in 4 sizes",
    craftsmanship:
      "Edges hand-bevelled and polished with natural wax. Buckle post reinforced with copper rivet.",
    collection: "The Signature"
  },
  {
    slug: "formal-dress-belt",
    name: "Formal Dress Belt",
    material: "Smooth Box Calf",
    category: "Belts",
    price: 2800,
    oldPrice: 3200,
    badge: null,
    sizes: ['S (28–30")', 'M (32–34")', 'L (36–38")', 'XL (40–42")'],
    colors: [
      { label: "Jet Black", hex: "#050505" },
      { label: "Mahogany", hex: "#4a1c0f" }
    ],
    images: [
      "/assets/images/rizz_simple_sandals/image02.jpg",
      "/assets/images/rizz_cholate_sandals/image01.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg"
    ],
    description:
      "Smooth box calf, 30mm narrow profile. For black-tie and formal occasions — a belt that disappears into an outfit, which is exactly what it should do.",
    specs:
      "Width: 30mm · Gold or silver frame buckle · Box calf leather · Slim taper at tongue",
    craftsmanship:
      "Mirror-finished edges. Buckle plated in 14-carat gold or rhodium.",
    collection: "Black Label"
  },
  {
    slug: "classic-bifold",
    name: "The Classic Bifold",
    material: "Vegetable-Tanned Calf",
    category: "Wallets",
    price: 2800,
    oldPrice: null,
    badge: "New",
    sizes: ["One Size"],
    colors: [
      { label: "Natural Tan", hex: "#c4a882" },
      { label: "Dark Brown", hex: "#3d2112" },
      { label: "Black", hex: "#0a0808" }
    ],
    images: [
      "/assets/images/rizz_double_bockles-sandals/image03.jpg",
      "/assets/images/rizz_simple_sandals/image01.jpg",
      "/assets/images/rizz_master_color_sandals/image01.jpg"
    ],
    description:
      "Six card slots, two cash compartments, one coin pocket. Slim enough to forget you are carrying it — until you open it.",
    specs:
      "6 card slots · 2 bill sections · 1 coin pocket · Dimensions: 11 × 9.5 × 1.2cm (closed)",
    craftsmanship:
      "Saddle-stitched throughout. Edges hand-painted and polished through three coats.",
    collection: "Everyday"
  },
  {
    slug: "slim-card-holder",
    name: "Slim Card Holder",
    material: "Full-Grain Leather",
    category: "Wallets",
    price: 1900,
    oldPrice: 2200,
    badge: null,
    sizes: ["One Size"],
    colors: [
      { label: "Oxblood", hex: "#5c1a1a" },
      { label: "Black", hex: "#0a0808" },
      { label: "Cognac", hex: "#7a4f2d" }
    ],
    images: [
      "/assets/images/rizz_simple_sandals/image01.jpg",
      "/assets/images/rizz_double_bockles-sandals/image03.jpg",
      "/assets/images/rizz_cholate_sandals/image01.jpg"
    ],
    description:
      "Four card slots, one bill section. The Slim Card Holder is what you reach for when a full wallet feels like too much — which is most days.",
    specs:
      "4 card slots · 1 bill section · Dimensions: 10.5 × 8 × 0.8cm (closed)",
    craftsmanship:
      "Edges hand-slicked to glass finish. Interior lined with soft nubuck for card protection.",
    collection: "Everyday"
  },
  {
    slug: "modern-half-loafer",
    name: "Modern Half Loafer",
    material: "Full-Grain Calfskin",
    category: "Half Loafers",
    price: 5200,
    oldPrice: null,
    badge: "New",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { label: "Caramel", hex: "#9b6940" },
      { label: "Midnight", hex: "#0a0808" }
    ],
    images: [
      "/assets/images/rizz_simple_sandals/image02.jpg",
      "/assets/images/rizz_crodile_slide_sandals/image05.jpg",
      "/assets/images/rizz_master_color_sandals/image01.jpg"
    ],
    description:
      "Open at the heel, structured at the vamp. Lighter than a full loafer, more considered than a sandal — the shoe for the warm months.",
    specs:
      "Full-grain calf upper · Leather heel bar · Padded leather insole · Rubber-tipped sole",
    craftsmanship:
      "Heel bar hand-lasted and skived to a thin profile. Upper polished before and after lasting.",
    collection: "Urban"
  },
  {
    slug: "woven-half-loafer",
    name: "Woven Half Loafer",
    material: "Hand-Woven Calfskin",
    category: "Half Loafers",
    price: 6800,
    oldPrice: 7500,
    badge: null,
    sizes: ["40", "41", "42", "43", "44"],
    colors: [
      { label: "Tan", hex: "#9b6940" },
      { label: "Forest Green", hex: "#2d4a2d" }
    ],
    images: [
      "/assets/images/rizz_cholate_sandals/image01.jpg",
      "/assets/images/rizz_simple_sandals/image02.jpg",
      "/assets/images/rizz_dubai_sandals/image04.jpg"
    ],
    description:
      "Leather strips woven by hand into a continuous pattern. The most labour-intensive piece in the collection — and the one people stare at most.",
    specs:
      "Hand-woven calfskin upper · 120 individual leather strips · Soft leather lining · Flexible leather sole",
    craftsmanship:
      "Each upper is woven in-house over 3 hours. Pattern is continuous — no joins visible from outside.",
    collection: "Artisan"
  }
];

export function getProductBySlug(slug: string): Product | null {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

/**
 * Card/list price for an API product: the lowest effective (sale or base) price
 * across its variants, since variant pricing is the source of truth once variants
 * exist. Falls back to the product's own base price only when it has no variants.
 */
export function getApiProductCardPrice(p: { price?: number | null; variants?: { price: number; sale_price?: number | null }[] }): number {
  if (p.variants && p.variants.length > 0) {
    const effective = p.variants.map((v) => v.sale_price ?? v.price);
    return Math.min(...effective);
  }
  return p.price ?? 0;
}

export function getRelatedProducts(slug: string, count = 4): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return PRODUCTS.slice(0, count);
  const sameCategory = PRODUCTS.filter((p) => p.slug !== slug && p.category === product.category);
  const others = PRODUCTS.filter((p) => p.slug !== slug && p.category !== product.category);
  return [...sameCategory, ...others].slice(0, count);
}

/**
 * Fetches the live, admin-managed product catalog from the backend, merging in
 * static fallback data by slug where available. This is the source of truth for
 * any page that needs the real catalog (listing, related/recommended products),
 * since the bare PRODUCTS array doesn't reflect what's actually live in the admin panel.
 */
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";
    const res = await fetch(`${apiUrl}/products`, { next: { revalidate: 60 } });
    if (!res.ok) return PRODUCTS;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) return PRODUCTS;
    const seen = new Set<string>();
    return data
      .filter((p: any) => {
        if (seen.has(p.slug)) return false;
        seen.add(p.slug);
        return true;
      })
      .map((p: any) => {
        const fallback = PRODUCTS.find((fp) => fp.slug === p.slug);
        if (fallback) return fallback;

        const price = getApiProductCardPrice(p);
        const cheapestVariant = (p.variants ?? []).length > 0
          ? p.variants.reduce((min: any, v: any) => ((v.sale_price ?? v.price) < (min.sale_price ?? min.price) ? v : min))
          : null;
        const oldPrice = cheapestVariant?.sale_price
          ? cheapestVariant.price
          : (p.compare_at_price && p.compare_at_price > price ? p.compare_at_price : null);

        return {
          slug: p.slug,
          name: p.name,
          material: p.material ?? "",
          category: p.category?.name ?? "Uncategorized",
          categorySlug: p.category?.slug ?? "",
          price,
          oldPrice,
          badge: p.tags?.includes("new") ? "New" : p.tags?.includes("bestseller") ? "Bestseller" : p.is_featured ? "Bestseller" : null,
          sizes: Array.from(new Set((p.variants ?? []).map((v: any) => String(v.attributes?.size ?? v.size ?? "")).filter(Boolean))),
          colors: Array.from(new Set((p.variants ?? []).map((v: any) => v.attributes?.color ?? v.color).filter(Boolean))).map((c: string) => ({ label: c, hex: "#888" })),
          images: p.media?.map((m: any) => m.media_url) ?? p.images?.map((i: any) => i.image_url) ?? [],
          description: p.description ?? p.short_description ?? "",
          specs: "",
          craftsmanship: "",
          collection: "",
        } as Product;
      });
  } catch {
    return PRODUCTS;
  }
}

/**
 * Recommends related products from the live catalog: same category first, then
 * others, excluding the current product, capped at `count`.
 */
export function pickRelatedProducts(allProducts: Product[], current: Product, count = 4): Product[] {
  const sameCategory = allProducts.filter((p) => p.slug !== current.slug && p.category === current.category);
  const others = allProducts.filter((p) => p.slug !== current.slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}

export const CATEGORIES: Category[] = ["Loafers", "Sandals", "Belts", "Wallets", "Half Loafers"];

export const PRICE_RANGES = [
  { label: "Under ৳3,000", min: 0, max: 2999 },
  { label: "৳3,000 – ৳5,000", min: 3000, max: 5000 },
  { label: "৳5,000 – ৳7,000", min: 5000, max: 7000 },
  { label: "Above ৳7,000", min: 7001, max: Infinity }
] as const;

export const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "New Arrivals", value: "new" }
] as const;

export const REVIEWS: Record<string, Array<{ name: string; rating: number; date: string; body: string; image?: string }>> = {
  "onyx-loafer": [
    { name: "Rafiqul H.", rating: 5, date: "March 2025", body: "Exceptional quality. The leather feels substantial and the fit is precise. I've worn them every week for three months and they're only getting better." },
    { name: "Tanvir A.", rating: 5, date: "February 2025", body: "COD made it easy to try. I expected good — I got great. The craftsmanship is visible in person in a way photos can't capture." },
    { name: "Shahriar M.", rating: 4, date: "January 2025", body: "Runs very slightly narrow. Size up if you're between sizes. Otherwise these are the best shoes I own at any price point." }
  ],
  "cognac-mule": [
    { name: "Imran K.", rating: 5, date: "April 2025", body: "The suede is dense and rich. Wore them to a dinner party and got three compliments within an hour." },
    { name: "Rashed B.", rating: 5, date: "March 2025", body: "Perfect weight — not too casual, not too formal. The cognac colour photographs beautifully too." }
  ],
  "signature-belt": [
    { name: "Nur Islam", rating: 5, date: "April 2025", body: "My third Rizz belt. Each one I've had for years. The brass hardware hasn't tarnished once." },
    { name: "Farid C.", rating: 4, date: "March 2025", body: "Solid construction. The leather edge finish is better than belts at twice the price. Minor gripe: sizing chart could be clearer." }
  ]
};

export function getReviews(slug: string) {
  return REVIEWS[slug] ?? REVIEWS["onyx-loafer"];
}
