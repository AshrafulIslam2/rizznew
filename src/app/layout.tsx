import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/lib/cart-context";

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

export const metadata: Metadata = {
  title: "RIZZ — Luxury Leather Footwear & Accessories",
  description:
    "Artisan leather footwear and accessories handcrafted in Chittagong, Bangladesh. Shop loafers, sandals, belts, and wallets. COD available nationwide.",
  openGraph: {
    title: "RIZZ — Luxury Leather",
    description: "Artisan leather footwear and accessories, crafted in Chittagong.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
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
