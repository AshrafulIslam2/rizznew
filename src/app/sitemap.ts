import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";

const paths = [
  "",
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
