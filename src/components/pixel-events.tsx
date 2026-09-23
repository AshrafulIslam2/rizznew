"use client";

import { useEffect, useRef } from "react";
import { trackEcommerce, type TrackingItem } from "@/lib/tracking";
import { pixelTrack } from "@/lib/pixel";

export function PixelViewContent({
  name,
  price,
  slug,
  category,
}: {
  name: string;
  price: number;
  slug: string;
  category?: string;
}) {
  const lastSlug = useRef<string>();
  useEffect(() => {
    if (lastSlug.current === slug) return;
    lastSlug.current = slug;
    pixelTrack("ViewContent", {
      content_name: name,
      content_ids: [slug],
      content_type: "product",
      content_category: category ?? "Leather Goods",
      value: price,
      currency: "BDT",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return null;
}

export function EcommerceView({ event, items, listId }: {
  event: "view_cart" | "view_item_list";
  items: TrackingItem[];
  listId?: string;
}) {
  const last = useRef<string>();
  const signature = JSON.stringify({ event, items, listId });
  useEffect(() => {
    if (!items.length || last.current === signature) return;
    last.current = signature;
    trackEcommerce(event, items, listId ? { item_list_id: listId } : {});
  }, [event, items, listId, signature]);
  return null;
}

export function PixelInitiateCheckout({
  value,
  numItems,
}: {
  value: number;
  numItems: number;
}) {
  useEffect(() => {
    pixelTrack("InitiateCheckout", {
      value,
      currency: "BDT",
      num_items: numItems,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
