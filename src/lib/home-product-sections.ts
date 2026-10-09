import { getApiProductCardPrice, getApiProductImages, newestProductsFirst } from "@/lib/products";

export type HomeCategory = {
  id: string;
  slug: string;
  name: string;
  is_active: boolean;
};

export type HomeApiProduct = {
  slug: string;
  name: string;
  material?: string | null;
  created_at?: string;
  status: string;
  is_published: boolean;
  is_featured?: boolean;
  category?: { slug: string } | null;
  tags?: string[];
  price?: number | null;
  variants?: { price: number; sale_price?: number | null }[];
  media?: { media_url: string; media_type?: string; is_primary?: boolean }[];
  images?: { image_url: string; is_primary?: boolean }[];
};

export type HomeProductCard = {
  slug: string;
  name: string;
  material: string;
  price: string;
  badge: string | null;
  href: string;
  image: string | null;
};

function toCard(product: HomeApiProduct): HomeProductCard {
  const price = getApiProductCardPrice(product);
  return {
    slug: product.slug,
    name: product.name,
    material: product.material || "",
    price: price > 0 ? `৳ ${price.toLocaleString("en-US")}` : "Contact for Price",
    badge: product.tags?.includes("new") ? "New"
      : product.tags?.includes("bestseller") ? "Bestseller"
      : product.is_featured ? "Featured" : null,
    href: `/brand/catalog/${encodeURIComponent(product.slug)}`,
    image: getApiProductImages(product)[0] || null,
  };
}

/** One public catalog fetch supplies arrivals and every category row. */
export function buildHomeProductSections(products: HomeApiProduct[], categories: HomeCategory[]) {
  const seen = new Set<string>();
  const visible = products
    .filter(product => {
      if (product.status !== "ACTIVE" || !product.is_published || !product.slug || seen.has(product.slug)) return false;
      seen.add(product.slug);
      return true;
    })
    .sort((a, b) => newestProductsFirst({ createdAt: a.created_at }, { createdAt: b.created_at }));

  const seenCategories = new Set<string>();
  const sections = categories.flatMap(category => {
    if (!category.is_active || !category.slug || seenCategories.has(category.slug)) return [];
    seenCategories.add(category.slug);
    const matching = visible.filter(product => product.category?.slug === category.slug);
    if (!matching.length) return [];
    const params = new URLSearchParams({ category: category.slug, sort: "new" });
    return [{
      slug: category.slug,
      name: category.name,
      total: matching.length,
      href: `/brand/catalog?${params.toString()}`,
      products: matching.slice(0, 10).map(toCard),
    }];
  });

  return { newArrivals: visible.slice(0, 4).map(toCard), sections };
}
