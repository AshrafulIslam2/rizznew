/** Editorial keywords supplement real page copy; they are not ranking guarantees. */
export function productKeywords(product: Record<string, unknown> | null): string[] {
  if (!product) return [];
  const values = [product.focus_keyword, ...["secondary_keywords", "long_tail_keywords", "geo_keywords", "tags"].flatMap(key => Array.isArray(product[key]) ? product[key] as unknown[] : [])];
  const seen = new Set<string>();
  return values.filter((value): value is string => typeof value === "string").map(value => value.trim()).filter(value => {
    const key = value.toLocaleLowerCase();
    if (!value || seen.has(key)) return false;
    seen.add(key); return true;
  });
}

export function productGuide(product: Record<string, unknown> | null, lang: "en" | "bn") {
  const content = product?.[lang === "bn" ? "seo_content_bn" : "seo_content"];
  // Do not show an English guide as Bangla when no translated copy was saved.
  return {
    heading: lang === "bn" ? "পণ্য সম্পর্কে আরও জানুন" : String(product?.seo_heading || "About this product"),
    content: typeof content === "string" ? content.trim() : "",
  };
}

export const jsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c");
