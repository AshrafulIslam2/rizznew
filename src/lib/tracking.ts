export type TrackingItem = {
  item_id: string;
  item_name?: string;
  item_category?: string;
  item_variant?: string;
  price: number;
  quantity: number;
};

declare global {
  interface Window { dataLayer?: Record<string, unknown>[]; }
}

const metaCustomEvents: Record<string, string> = {
  view_cart: "ViewCart", view_item_list: "ViewItemList", select_item: "SelectItem",
  remove_from_cart: "RemoveFromCart", add_shipping_info: "AddShippingInfo",
  catalog_filter: "CatalogFilter", select_variant: "SelectVariant",
  coupon_apply: "CouponApply", coupon_remove: "CouponRemove",
  checkout_error: "CheckoutError", form_start: "CheckoutFormStart",
  catalog_download: "CatalogDownload", scroll_depth: "ScrollDepth",
  outbound_click: "OutboundClick", video_start: "VideoStart", video_complete: "VideoComplete",
};

export function trackEvent(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // Analytics failures must never interrupt checkout or cart operations.
  try {
    if (!data.meta && metaCustomEvents[event]) {
      const { ecommerce, ...parameters } = data;
      const commerce = ecommerce as { value?: number; currency?: string; items?: TrackingItem[] } | undefined;
      data = { ...data, meta: {
        event_name: metaCustomEvents[event], custom: true,
        parameters: commerce ? {
          value: commerce.value, currency: commerce.currency,
          content_ids: commerce.items?.map(i => i.item_id), content_type: "product",
          contents: commerce.items?.map(i => ({ id: i.item_id, quantity: i.quantity, item_price: i.price })),
          ...parameters,
        } : parameters,
      } };
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ ecommerce: null, meta: null });
    window.dataLayer.push({ ...data, event });
  } catch { /* Tracking can be blocked independently of the storefront. */ }
}

export function cartTrackingItems(items: {
  slug: string; name: string; price: number; quantity: number; size: string; color: string;
}[]): TrackingItem[] {
  return items.map(i => ({
    item_id: i.slug, item_name: i.name, price: i.price, quantity: i.quantity,
    item_variant: [i.size, i.color].filter(Boolean).join(" / "),
  }));
}

export function trackEcommerce(event: string, items: TrackingItem[], extra: Record<string, unknown> = {}) {
  trackEvent(event, { ecommerce: {
    currency: "BDT", value: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    items, ...extra,
  } });
}

// Queries can contain customer details. Only catalog controls are reported.
export function trackingPath(pathname: string, query: string): string {
  if (pathname !== "/brand/catalog") return pathname;
  const source = new URLSearchParams(query);
  const safe = new URLSearchParams();
  for (const key of ["category", "price", "sort", "size", "page"]) {
    const value = source.get(key);
    if (value) safe.set(key, value.slice(0, 100));
  }
  return pathname + (safe.size ? `?${safe}` : "");
}
