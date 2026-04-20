export type PortfolioShowcaseItem = {
  title: string;
  blurb: string;
  image: string;
};

export const SHOWCASE_ENABLED_ROUTES = new Set([
  "/sandals-manufacturer-bangladesh",
  "/sandals-manufacturer-dhaka",
  "/sandals-wholesaler-dhaka",
  "/sandals-wholesaler-chittagong",
  "/sandals-wholesaler-bangladesh",
  "/leather-sandals-wholesaler-dhaka",
  "/leather-sandals-wholesaler-bangladesh",
  "/leather-sandals-factory-bangladesh",
  "/leather-sandals-factory-chittagong",
  "/leather-sandals-manufacturer-chittagong",
  "/leather-sandals-manufacturer-bangladesh",
  "/sandals-factory-bangladesh",
  "/sandals-factory-chittagong",
  "/sandals-manufacturer-chittagong",
  "/mens-sandals-factory-chittagong",
  "/womens-sandals-factory-chittagong",
  "/low-moq-footwear-manufacturer",
  "/manufacturing",
  "/manufacturing/quote",
  "/wholesale",
  "/wholesale/apply",
  "/brand/catalog",
  "/factory-quality",
  "/materials"
]);

const DEFAULT_ITEMS: PortfolioShowcaseItem[] = [
  {
    title: "Premium Sandals",
    blurb: "Built for wholesale and OEM programs with clean finishing and repeat quality.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Classic Loafers",
    blurb: "Category-focused builds with pattern, fit, and material options for private label.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Belts & Wallets",
    blurb: "Complementary leather goods to complete assortments for retailers and brands.",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=80"
  }
];

export async function getPortfolioShowcaseItems(pathname: string): Promise<PortfolioShowcaseItem[]> {
  if (!SHOWCASE_ENABLED_ROUTES.has(pathname)) {
    return [];
  }

  // Future DB integration point: replace DEFAULT_ITEMS with a database query per pathname.
  return DEFAULT_ITEMS;
}
