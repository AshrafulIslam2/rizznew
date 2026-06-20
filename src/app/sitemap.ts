import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";

const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "daily" },
  { path: "/brand/catalog", priority: 0.9, changeFrequency: "daily" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/factory-quality", priority: 0.6, changeFrequency: "monthly" },
  { path: "/materials", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/policies/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/policies/terms", priority: 0.3, changeFrequency: "yearly" },
  { path: "/policies/shipping", priority: 0.3, changeFrequency: "yearly" },
  { path: "/policies/returns", priority: 0.3, changeFrequency: "yearly" },
  { path: "/policies/cookie", priority: 0.3, changeFrequency: "yearly" },
];

async function getProductSlugs(): Promise<{ slug: string; updated_at?: string }[]> {
  try {
    const res = await fetch(`${API}/products`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data
      .filter((p: Record<string, unknown>) => p.is_published)
      .map((p: Record<string, unknown>) => ({ slug: p.slug as string, updated_at: p.updated_at as string | undefined }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const products = await getProductSlugs();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${baseUrl}/brand/catalog/${p.slug}`,
    lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...productEntries];
}
