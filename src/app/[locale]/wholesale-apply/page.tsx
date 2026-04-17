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
  const url = `${getBaseUrl()}${localizedPath(safeLocale, "/wholesale-apply")}`;

  return {
    title: copy.seo.wholesale.title,
    description: copy.seo.wholesale.description,
    openGraph: {
      title: copy.seo.wholesale.title,
      description: copy.seo.wholesale.description,
      url,
      siteName: copy.siteName,
      locale: safeLocale === "bn" ? "bn_BD" : "en_US",
      type: "website"
    }
  };
}

export default async function WholesaleApplyPage({ params }: Props) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "en";
  const copy = getDictionary(safeLocale);

  return (
    <main className="mx-auto max-w-2xl space-y-5">
      <h1 className="text-3xl font-bold">{copy.forms.wholesale.title}</h1>
      <p className="text-[var(--muted)]">{copy.forms.wholesale.description}</p>
      <RequestForm formType="wholesale-apply" locale={safeLocale} labels={copy.forms.common} />
    </main>
  );
}
