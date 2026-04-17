import type { Metadata } from "next";
import { RequestForm } from "@/components/forms/request-form";
import { getDictionary, isLocale, Locale } from "@/lib/i18n";
import { getBaseUrl, localizedPath } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "en";
  const copy = getDictionary(safeLocale);
  const url = `${getBaseUrl()}${localizedPath(safeLocale, "/oem-quote")}`;

  return {
    title: copy.seo.oem.title,
    description: copy.seo.oem.description,
    openGraph: {
      title: copy.seo.oem.title,
      description: copy.seo.oem.description,
      url,
      siteName: copy.siteName,
      locale: safeLocale === "bn" ? "bn_BD" : "en_US",
      type: "website"
    }
  };
}

export default async function OemQuotePage({ params }: Props) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "en";
  const copy = getDictionary(safeLocale);

  return (
    <main className="mx-auto max-w-2xl space-y-5">
      <h1 className="text-3xl font-bold">{copy.forms.oem.title}</h1>
      <p className="text-[var(--muted)]">{copy.forms.oem.description}</p>
      <RequestForm formType="oem-quote" locale={safeLocale} labels={copy.forms.common} />
    </main>
  );
}
