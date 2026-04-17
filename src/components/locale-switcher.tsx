"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  currentLocale: "en" | "bn";
};

export function LocaleSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();
  const nextLocale = currentLocale === "en" ? "bn" : "en";
  const nextLabel = currentLocale === "en" ? "বাংলা" : "English";
  const targetPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);

  return (
    <Link href={targetPath} className="btn-outline px-3 text-sm">
      {nextLabel}
    </Link>
  );
}
