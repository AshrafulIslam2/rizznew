import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/lib/cart-context";
import { getBaseUrl } from "@/lib/seo";
import { BUSINESS as BUSINESS_NAP } from "@/lib/business";

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
// Kept at ~150 characters: Google truncates around 155-160 on desktop, and the
// previous 171-character version was being cut mid-sentence in results. Ends
// on a call to action so the snippet earns the click.
const defaultDescription =
  "Shop handcrafted genuine leather shoes,chelsi,office shoes, loafers, sandals, belts & wallets from Chattogram,Bangladesh with nationwide Cash on Delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: defaultTitle, template: "%s | RIZZ Leather" },
  description: defaultDescription,
  keywords: [
    // English keywords
    "leather shoes Bangladesh",
    "genuine leather loafer",
    "leather sandals Chittagong",
    "RIZZ leather",
    "handmade leather Bangladesh",
    "leather wallet Bangladesh",
    "Cash on Delivery leather shoes",
    "best leather shoes Bangladesh",
    "premium leather loafer Bangladesh",
    // Bangla keywords (helps Google index for Bengali searches)
    "চামড়ার জুতা বাংলাদেশ",
    "আসল চামড়ার লোফার",
    "রিজ লেদার",
    "হাতে তৈরি চামড়ার জুতা",
    "ভালো চামড়ার লোফার",
    "চামড়ার স্যান্ডেল চট্টগ্রাম",
  ],
  applicationName: siteName,
  authors: [{ name: siteName, url: baseUrl }],
  category: "Shopping",
  alternates: {
    canonical: "/",
    languages: {
      "en": baseUrl,
      "bn": `${baseUrl}/bn`,
      "x-default": baseUrl,
    },
  },
  openGraph: {
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    url: baseUrl,
    images: [{ url: "/assets/images/rizz-slide-crocodile-leather-sandal.jpg", width: 1200, height: 630, alt: siteName }],
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

async function getSocialUrls(): Promise<string[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";
    const res = await fetch(`${apiUrl}/branding`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    return ["social_instagram", "social_facebook", "social_linkedin", "social_tiktok", "social_youtube"]
      .map((k) => data?.[k])
      .filter(Boolean);
  } catch {
    return [];
  }
}

function buildOrganizationSchema(sameAs: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: siteName,
    alternateName: ["RIZZ চামড়া", "রিজ লেদার"],
    url: baseUrl,
    logo: `${baseUrl}/assets/images/rizz.png`,
    description: defaultDescription,
    foundingLocation: { "@type": "Place", name: "Chittagong, Bangladesh" },
    areaServed: [
      { "@type": "Country", "name": "Bangladesh" },
      { "@type": "AdministrativeArea", "name": "Chittagong" },
    ],
    knowsLanguage: ["en", "bn"],
    sameAs,
  };
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "@id": `${baseUrl}/#localbusiness`,
  name: siteName,
  image: `${baseUrl}/assets/images/rizz-slide-crocodile-leather-sandal.jpg`,
  url: baseUrl,
  priceRange: "৳৳",
  telephone: BUSINESS_NAP.telephone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_NAP.streetAddress,
    addressLocality: BUSINESS_NAP.addressLocality,
    postalCode: BUSINESS_NAP.postalCode,
    addressCountry: BUSINESS_NAP.addressCountry,
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
  alternateName: "RIZZ Leather Bangladesh",
  url: baseUrl,
  inLanguage: ["en", "bn"],
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${baseUrl}/brand/catalog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = await getSocialUrls();
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([buildOrganizationSchema(sameAs), localBusinessSchema, websiteSchema]) }}
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
