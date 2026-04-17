import type { Metadata } from "next";
import { getDictionary, isLocale, Locale } from "@/lib/i18n";
import { getBaseUrl, localizedPath } from "@/lib/seo";
import { HeroSection } from "@/components/hero-section";
import { ServiceCards } from "@/components/service-cards";
import { ProductGrid } from "@/components/product-grid";
import { BestSellers } from "@/components/best-sellers";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "en";
  const copy = getDictionary(safeLocale);
  const url = `${getBaseUrl()}${localizedPath(safeLocale)}`;

  return {
    title: copy.seo.home.title,
    description: copy.seo.home.description,
    openGraph: {
      title: copy.seo.home.title,
      description: copy.seo.home.description,
      url,
      siteName: copy.siteName,
      locale: safeLocale === "bn" ? "bn_BD" : "en_US",
      type: "website"
    }
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "en";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Leather Footwear & Accessories Manufacturer"
        subtitle="Specializing in OEM, Wholesale, and our exclusive brand. Minimum Order Quantity from 50 pieces."
        backgroundImage="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=2000&q=80"
        sidebarImage="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&h=1000&q=80"
      />

      {/* Choose Your Path */}
      <ServiceCards
        title="Choose Your Path"
        subtitle="Tailored services for brands, bulk buyers, and individual connoisseurs."
        cards={[
          {
            icon: "🏭",
            title: "OEM Manufacturing",
            description:
              "Bring your designs to life. Full-scale manufacturing for your brand with private labeling and custom material sourcing.",
            cta: "Explore OEM",
            href: "/manufacturing",
          },
          {
            icon: "🏢",
            title: "Wholesale Supply",
            description:
              "Access our premium catalog at bulk pricing. Ready-to-ship inventory for retailers and distributors worldwide.",
            cta: "Apply Now",
            href: "/wholesale/apply",
          },
          {
            icon: "👑",
            title: "Our Brand Catalog",
            description:
              "Shop the exclusive Rizz collection. Artisanal footwear and accessories crafted for the modern gentleman.",
            cta: "Shop Collection",
            href: "/brand/catalog",
          },
        ]}
      />

      {/* Collections */}
      <ProductGrid
        title="Masterful Categories"
        showViewAll
        items={[
          {
            id: "classic-loafers",
            title: "Classic Loafers",
            image:
              "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
          },
          {
            id: "sandals",
            title: "Sandals",
            category: "Summer Collection",
            image:
              "https://images.unsplash.com/photo-1572099160157-cbf19db6beb4?auto=format&fit=crop&w=800&q=80",
          },
          {
            id: "half-loafers",
            title: "Half Loafers",
            image:
              "https://images.unsplash.com/photo-1564002055624-0c15cafe50d7?auto=format&fit=crop&w=800&q=80",
          },
          {
            id: "leather-jackets",
            title: "Leather Jackets",
            image:
              "https://images.unsplash.com/photo-1551028719-00167b16ebc5?auto=format&fit=crop&w=800&q=80",
          },
        ]}
      />

      {/* Best Sellers */}
      <BestSellers
        title="Curated Best Sellers"
        subtitle="Discover the pieces defining modern luxury. Available for direct purchase."
        products={[
          {
            id: "onyx-loafer",
            title: "The Onyx Loafer",
            material: "Full Grain Calfskin",
            image:
              "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
            href: "/brand/onyx-loafer",
          },
          {
            id: "cognac-mule",
            title: "Cognac Mule",
            material: "Premium Suede",
            image:
              "https://images.unsplash.com/photo-1564002055624-0c15cafe50d7?auto=format&fit=crop&w=800&q=80",
            href: "/brand/cognac-mule",
          },
          {
            id: "signature-belt",
            title: "Signature Belt",
            material: "Italian Leather",
            image:
              "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
            href: "/brand/signature-belt",
          },
          {
            id: "classic-bifold",
            title: "Classic Bifold",
            material: "Vegetable Tanned",
            image:
              "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=800&q=80",
            href: "/brand/classic-bifold",
          },
        ]}
      />
    </main>
  );
}
