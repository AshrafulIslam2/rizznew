"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent, trackingPath } from "@/lib/tracking";

export function SiteTracking() {
  const pathname = usePathname();
  const query = useSearchParams().toString();
  const lastPage = useRef<string>();
  useEffect(() => {
    const path = trackingPath(pathname, query);
    if (lastPage.current === path) return;
    const previous = lastPage.current;
    lastPage.current = path;
    trackEvent("page_view", {
      page_path: path, page_location: window.location.origin + path,
      page_referrer: previous ? window.location.origin + previous : "",
      meta: { event_name: "PageView", parameters: {} },
    });
  }, [pathname, query]);

  useEffect(() => {
    const sent = new Set<number>();
    const scroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const percent = Math.round(window.scrollY / available * 100);
      for (const threshold of [25, 50, 75, 90]) {
        if (percent >= threshold && !sent.has(threshold)) {
          sent.add(threshold);
          trackEvent("scroll_depth", { percent_scrolled: threshold });
        }
      }
    };
    const click = (e: MouseEvent) => {
      const anchor = (e.target as Element)?.closest?.("a");
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.origin === window.location.origin && /^\/brand\/catalog\/[^/]+\/?$/.test(url.pathname)) {
        trackEvent("select_item", { ecommerce: { items: [{
          item_id: decodeURIComponent(url.pathname.split("/")[3]), quantity: 1,
        }] } });
      }
      const channel = url.protocol === "tel:" ? "phone" : url.protocol === "mailto:" ? "email"
        : ["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(url.hostname) ? "whatsapp" : null;
      if (channel) trackEvent("contact_click", { contact_channel: channel,
        meta: { event_name: "Contact", parameters: { contact_channel: channel } } });
      else if (/^https?:$/.test(url.protocol) && url.origin !== window.location.origin)
        trackEvent("outbound_click", { link_domain: url.hostname });
    };
    let formStarted = false;
    const focus = (e: FocusEvent) => {
      if (pathname === "/brand/checkout" && !formStarted &&
          e.target instanceof HTMLInputElement && e.target.closest("form")) {
        formStarted = true;
        trackEvent("form_start", { form_name: "checkout" });
      }
    };
    const video = (e: Event) => {
      if (!(e.target instanceof HTMLVideoElement)) return;
      // Do not send media URLs (they may contain access tokens).
      trackEvent(e.type === "ended" ? "video_complete" : "video_start", { media_type: "product_video" });
    };
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("click", click);
    document.addEventListener("focusin", focus);
    document.addEventListener("play", video, true);
    document.addEventListener("ended", video, true);
    return () => {
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("click", click);
      document.removeEventListener("focusin", focus);
      document.removeEventListener("play", video, true);
      document.removeEventListener("ended", video, true);
    };
  }, [pathname, query]);
  return null;
}
