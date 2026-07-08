declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function pixelTrack(
  event: string,
  data?: Record<string, unknown>,
  options?: { eventID?: string },
) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, data ?? {}, options ?? {});
  }
}
