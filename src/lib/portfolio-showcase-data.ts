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
    image: "/assets/images/rizz_master_color_sandals/image01.jpg"
  },
  {
    title: "Classic Loafers",
    blurb: "Category-focused builds with pattern, fit, and material options for private label.",
    image: "/assets/images/rizz_simple_sandals/image01.jpg"
  },
  {
    title: "Belts & Wallets",
    blurb: "Complementary leather goods to complete assortments for retailers and brands.",
    image: "/assets/images/rizz_simple_sandals/image02.jpg"
  }
];

export async function getPortfolioShowcaseItems(pathname: string): Promise<PortfolioShowcaseItem[]> {
  if (!SHOWCASE_ENABLED_ROUTES.has(pathname)) {
    return [];
  }

  // Future DB integration point: replace DEFAULT_ITEMS with a database query per pathname.
  return DEFAULT_ITEMS;
}


