import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";

const paths = [
  "",
  "/manufacturing",
  "/manufacturing/quote",
  "/wholesale",
  "/wholesale/apply",
  "/brand",
  "/brand/catalog",
  "/factory-quality",
  "/materials",
  "/portfolio",
  "/contact",
  "/policies/privacy",
  "/policies/terms",
  "/policies/shipping",
  "/policies/returns",
  "/policies/cookie"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
