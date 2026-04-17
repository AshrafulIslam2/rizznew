import Link from "next/link";
import { notFound } from "next/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDictionary, isLocale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const resolved = await params;
  if (!isLocale(resolved.locale)) {
    notFound();
  }

  const copy = getDictionary(resolved.locale);

  return (
    <div className="mx-auto min-h-screen max-w-6xl px-4 py-6">
      <header className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <nav className="flex items-center gap-5">
          <Link href={`/${resolved.locale}`}>{copy.nav.home}</Link>
          <Link href={`/${resolved.locale}/oem-quote`}>{copy.nav.oemQuote}</Link>
          <Link href={`/${resolved.locale}/wholesale-apply`}>{copy.nav.wholesaleApply}</Link>
        </nav>
        <LocaleSwitcher currentLocale={resolved.locale} />
      </header>
      {children}
    </div>
  );
}
