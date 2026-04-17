"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS } from "@/lib/site";

const navItems = [...NAV_LINKS];
const leftDesktopNav = navItems.slice(0, 4);
const rightDesktopNav = navItems.filter((item) => item.href === "/factory-quality" || item.href === "/portfolio");

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden min-[1025px]:block border-b border-[var(--hairline-accent)] bg-[#04060d] text-[10px] uppercase tracking-[0.28em] text-[#8f96a3]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
          <span>CHITTAGONG, BANGLADESH | SHIPPING: BD • USA • EU • MIDDLE EAST</span>
          <div className="flex gap-7 tracking-[0.22em] text-[#9ea4b0]">
            <span>{CONTACT.whatsappDisplay}</span>
            <span>{CONTACT.email.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 border-b border-[var(--hairline-accent)] bg-[#050810]/95 text-[var(--text)] backdrop-blur">
        <div className="mx-auto max-w-7xl px-4">
          {/* Mobile Header */}
          <div className="flex h-14 items-center justify-between gap-3 min-[1025px]:hidden">
            <Link href="/" className="shrink-0 text-lg font-bold text-[var(--text)] no-underline sm:text-xl sm:tracking-[0.2em]">
              Rizz
            </Link>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="tap-target rounded border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)] sm:px-4"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>

          {/* Desktop & Tablet Header */}
          <div className="hidden h-16 grid-cols-[1fr_auto_1fr] items-center gap-6 min-[1025px]:grid">
            {/* Left Nav */}
            <nav className="flex   gap-8 text-sm uppercase tracking-wide">
              {leftDesktopNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`tap-target  flex items-center no-underline transition-colors ${
                    isActive(item.href) ? "text-[#f2f4f6]" : "text-[#a5acb8] hover:text-[#f2f4f6]"
                  }`}
                >
                  {item.label.replace(" (Catalog)", "")}
                </Link>
              ))}
            </nav>

            {/* Center Logo */}
            <Link href="/" className="justify-self-center text-2xl font-serif font-bold text-white no-underline tracking-[0.35em]">
              R I Z Z
            </Link>

            {/* Right Nav */}
            <nav className="flex items-center justify-end gap-7 text-sm uppercase tracking-wide">
              {rightDesktopNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`tap-target flex items-center no-underline transition-colors ${
                    isActive(item.href) ? "text-[#f2f4f6]" : "text-[#a5acb8] hover:text-[#f2f4f6]"
                  }`}
                >
                  {item.label.replace(" & Quality", "")}
                </Link>
              ))}
              <Link
                href="/manufacturing/quote"
                className="inline-flex min-h-[44px] items-center rounded-xl border border-[#a79873] px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#e1d3ad] no-underline hover:bg-[#a79873]/10"
              >
                Request OEM Quote
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {open ? (
        <div className="fixed inset-0 z-50 bg-black/65 min-[1025px]:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-[var(--border)] bg-[var(--surface)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="border-b border-[var(--border)] flex items-center justify-between px-4 py-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Navigation</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="tap-target rounded border border-[var(--border)] px-3 py-2 text-sm"
              >
                ✕
              </button>
            </div>

            <div className="h-[calc(100%-57px)] overflow-y-auto overscroll-contain px-4 py-4">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`tap-target rounded-lg border border-[var(--border)] px-3 py-2 text-sm no-underline transition-colors ${
                      isActive(item.href) ? "border-[var(--primary)] bg-[var(--primary-tint)] text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-4 grid gap-2">
                <Link
                  href="/manufacturing/quote"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full text-sm"
                >
                  Request OEM Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
