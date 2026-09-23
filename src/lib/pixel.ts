import { trackEvent, type TrackingItem } from "./tracking";

const eventNames: Record<string, string> = {
  ViewContent: "view_item", AddToCart: "add_to_cart",
  InitiateCheckout: "begin_checkout", Purchase: "purchase",
  AddPaymentInfo: "add_payment_info", Lead: "generate_lead",
};

// Queue before GTM loads. GTM owns delivery to Meta/GA to avoid duplicates.
export function pixelTrack(
  event: string,
  data: Record<string, unknown> = {},
  options?: { eventID?: string },
) {
  const { items: suppliedItems, transaction_id, shipping, coupon, ecommerce_value, ...parameters } = data;
  const contents = data.contents as { id: string; quantity: number; item_price?: number }[] | undefined;
  const ids = data.content_ids as string[] | undefined;
  const items = (suppliedItems as TrackingItem[] | undefined) ?? contents?.map(i => ({
    item_id: i.id, quantity: i.quantity, price: i.item_price ?? 0,
  })) ?? ids?.map(id => ({
    item_id: id, item_name: data.content_name, item_category: data.content_category,
    price: ids.length === 1 ? data.value : undefined, quantity: 1,
  }));
  trackEvent(eventNames[event] ?? event, {
    ecommerce: items ? {
      currency: data.currency ?? "BDT", value: ecommerce_value ?? data.value, items,
      ...(transaction_id ? { transaction_id } : {}),
      ...(shipping !== undefined ? { shipping } : {}),
      ...(coupon ? { coupon } : {}),
      ...(data.payment_type ? { payment_type: data.payment_type } : {}),
    } : undefined,
    meta: { event_name: event, parameters, event_id: options?.eventID },
  });
}
