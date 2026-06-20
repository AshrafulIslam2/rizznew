export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'https://rizz.com.bd';
}

export type SeoOverride = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
};

/** Admin-managed per-page SEO override, saved via the admin panel's SEO settings page. */
export async function getSeoOverride(key: string): Promise<SeoOverride | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3040/api';
    const res = await fetch(`${apiUrl}/seo/${key}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || Object.keys(data).length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

/** Builds Next.js Metadata, letting an admin-set SEO override win over the page's own defaults. */
export function buildMetadata(opts: {
  path: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage?: string;
  override: SeoOverride | null;
}): import("next").Metadata {
  const { path, defaultTitle, defaultDescription, defaultImage, override } = opts;
  const title = override?.title || defaultTitle;
  const description = override?.description || defaultDescription;
  return {
    title,
    description,
    keywords: override?.keywords ? override.keywords.split(",").map((k) => k.trim()) : undefined,
    alternates: { canonical: override?.canonical || path },
    openGraph: {
      title: override?.ogTitle || title,
      description: override?.ogDescription || description,
      images: override?.ogImage ? [{ url: override.ogImage }] : (defaultImage ? [{ url: defaultImage }] : undefined),
      type: "website",
    },
  };
}
