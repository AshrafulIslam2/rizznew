import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/footer";
import { HeaderNav } from "@/components/header-nav";

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
  title: "Rizz Leather",
  description: "OEM, wholesale, and brand leather products from Chittagong, Bangladesh.",
  openGraph: {
    title: "Rizz Leather",
    description: "OEM, wholesale, and brand leather products from Chittagong, Bangladesh.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <HeaderNav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
