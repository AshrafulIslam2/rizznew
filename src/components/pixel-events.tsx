"use client";

import { useEffect } from "react";
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
  useEffect(() => {
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
