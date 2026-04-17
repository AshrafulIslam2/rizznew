"use client";

import { useEffect, useState } from "react";

const key = "rizz-language";

type Props = {
  className?: string;
  compact?: boolean;
};

export function LanguageToggle({ className, compact = false }: Props) {
  const [language, setLanguage] = useState<"en" | "bn">("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    if (stored === "en" || stored === "bn") {
      setLanguage(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  function switchTo(lang: "en" | "bn") {
    setLanguage(lang);
    window.localStorage.setItem(key, lang);
    document.documentElement.lang = lang;
  }

  return (
    <div className={`${className ?? "hidden lg:flex"} items-center rounded-md border border-[var(--border)] text-xs`}>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`${compact ? "h-8 px-2 py-1" : "tap-target px-2 py-1"} ${language === "en" ? "surface-soft" : "text-[var(--muted)]"}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => switchTo("bn")}
        className={`${compact ? "h-8 px-2 py-1" : "tap-target px-2 py-1"} ${language === "bn" ? "surface-soft" : "text-[var(--muted)]"}`}
        aria-label="Switch to Bangla"
      >
        বাংলা
      </button>
    </div>
  );
}
