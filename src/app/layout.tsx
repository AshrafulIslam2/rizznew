import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/lib/cart-context";
import { getBaseUrl } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

const baseUrl = getBaseUrl();
const siteName = "RIZZ Leather";
const defaultTitle = "RIZZ — Luxury Leather Footwear & Accessories | Bangladesh";
const defaultDescription =
  "Artisan leather footwear and accessories handcrafted in Chittagong, Bangladesh. Shop genuine leather loafers, sandals, belts, and wallets with Cash on Delivery nationwide.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: defaultTitle, template: "%s | RIZZ Leather" },
  description: defaultDescription,
  keywords: [
    "leather shoes Bangladesh",
    "genuine leather loafer",
    "leather sandals Chittagong",
    "RIZZ leather",
    "handmade leather Bangladesh",
    "leather wallet Bangladesh",
    "Cash on Delivery leather shoes",
  ],
  applicationName: siteName,
  authors: [{ name: siteName, url: baseUrl }],
  category: "Shopping",
  alternates: { canonical: "/" },
  openGraph: {
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    url: baseUrl,
    images: [{ url: "/assets/images/rizzslide.jpg", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    "geo.region": "BD-CTG",
    "geo.placename": "Chittagong, Bangladesh",
    "ICBM": "22.3569, 91.7832",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: siteName,
  url: baseUrl,
  logo: `${baseUrl}/assets/images/rizzslide.jpg`,
  description: defaultDescription,
  foundingLocation: { "@type": "Place", name: "Chittagong, Bangladesh" },
  areaServed: { "@type": "Country", name: "Bangladesh" },
  sameAs: [],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "@id": `${baseUrl}/#localbusiness`,
  name: siteName,
  image: `${baseUrl}/assets/images/rizzslide.jpg`,
  url: baseUrl,
  priceRange: "৳৳",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chittagong",
    addressCountry: "BD",
  },
  geo: { "@type": "GeoCoordinates", latitude: 22.3569, longitude: 91.7832 },
  areaServed: "Bangladesh",
  currenciesAccepted: "BDT",
  paymentAccepted: "Cash on Delivery",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: siteName,
  url: baseUrl,
  inLanguage: "en",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${baseUrl}/brand/catalog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, localBusinessSchema, websiteSchema]) }}
        />
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
