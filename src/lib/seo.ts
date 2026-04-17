import { Locale } from "@/lib/i18n";

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}
