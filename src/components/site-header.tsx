"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { useCart } from "@/lib/cart-context";

const DEFAULT_ANNOUNCEMENT = "Complimentary shipping on orders above ৳5,000  ·  COD available nationwide";

const shopNav = [NAV_LINKS[0], NAV_LINKS[1], NAV_LINKS[2], NAV_LINKS[3], NAV_LINKS[4]];
const infoNav = [NAV_LINKS[5], NAV_LINKS[6], NAV_LINKS[7]];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [announcementText, setAnnouncementText] = useState(DEFAULT_ANNOUNCEMENT);
  const { count } = useCart();

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3040/api';
    fetch(`${apiUrl}/branding`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.announcement_bar_active && data?.announcement_bar_text) {
          setAnnouncementText(data.announcement_bar_text);
        }
      })
      .catch(() => {});
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href.split("?")[0]}/`);
  }

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const BagIcon = () => (
    <svg width="17" height="19" viewBox="0 0 18 20" fill="none">
      <path d="M1 6H17V18C17 19.1 16.1 20 15 20H3C1.9 20 1 19.1 1 18V6Z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 6V4C6 2.34 7.34 1 9 1C10.66 1 12 2.34 12 4V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );

  const SearchIcon = () => (
    <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
      <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M12 12L16.5 16.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );

  return (
    <>
      {/* Announcement Bar */}
      <div className="border-b border-[var(--hairline)] bg-[var(--bg)] text-center py-2.5 text-[10px] uppercase tracking-[0.3em] text-[var(--gold-dim)]">
        {announcementText}
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#080808]/98 backdrop-blur" : "bg-[#080808]/95 backdrop-blur"
        } border-b border-[var(--hairline)]`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Mobile Header */}
          <div className="flex h-14 items-center justify-between lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              className="tap-target flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)]"
              aria-label="Menu"
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              ) : (
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                  <path d="M0 1H22M0 7H22M0 13H22" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              )}
            </button>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-[0.4em] text-[var(--cream)] no-underline">
              RIZZ
            </Link>

            <div className="flex items-center gap-4">
              <button type="button" aria-label="Search" className="tap-target flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)]">
                <SearchIcon />
              </button>
              <Link href="/brand/cart" className="relative tap-target flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)]" aria-label="Cart">
                <BagIcon />
                {count > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--gold)] text-[8px] font-bold text-[#0a0806]">
                    {count}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden h-[60px] grid-cols-[1fr_auto_1fr] items-center gap-8 lg:grid">
            {/* Left Nav */}
            <nav className="flex items-center gap-7 text-[11px] uppercase tracking-[0.22em]">
              {shopNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors ${isActive(item.href) ? "text-[var(--gold-light)]" : "text-[var(--muted)] hover:text-[var(--text)]"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Center Logo */}
            <Link href="/" className="justify-self-center font-serif text-2xl tracking-[0.5em] text-[var(--cream)] no-underline">
              RIZZ
            </Link>

            {/* Right Nav */}
            <nav className="flex items-center justify-end gap-7 text-[11px] uppercase tracking-[0.22em]">
              {infoNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors ${isActive(item.href) ? "text-[var(--gold-light)]" : "text-[var(--muted)] hover:text-[var(--text)]"}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-4 w-px bg-[var(--border-soft)]" />
              <button type="button" aria-label="Search" className="text-[var(--muted)] transition-colors hover:text-[var(--text)]">
                <SearchIcon />
              </button>
              <Link href="/brand/cart" aria-label="Shopping Bag" className="relative text-[var(--muted)] transition-colors hover:text-[var(--text)]">
                <BagIcon />
                {count > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--gold)] text-[8px] font-bold text-[#0a0806]">
                    {count}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/70" />
          <div
            className="absolute left-0 top-0 h-full w-[80%] max-w-[320px] border-r border-[var(--border)] bg-[#0a0a0a]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-14 items-center justify-between border-b border-[var(--border)] px-5">
              <span className="font-serif text-lg tracking-[0.4em] text-[var(--cream)]">RIZZ</span>
              <button type="button" onClick={() => setOpen(false)} className="tap-target text-[var(--muted)]">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </button>
            </div>

            <nav className="overflow-y-auto px-5 py-6">
              <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[var(--gold-dim)]">Shop</p>
              <ul className="space-y-1">
                {shopNav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block py-2.5 text-sm uppercase tracking-[0.18em] transition-colors ${
                        isActive(item.href) ? "text-[var(--gold-light)]" : "text-[var(--text)] hover:text-[var(--gold-light)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="my-5 border-t border-[var(--border)]" />

              <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[var(--gold-dim)]">Info</p>
              <ul className="space-y-1">
                {infoNav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2.5 text-sm uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="my-5 border-t border-[var(--border)]" />

              <Link
                href="/brand/cart"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-2.5 text-sm uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                <span>Cart</span>
                {count > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--gold)] text-[9px] font-bold text-[#0a0806]">
                    {count}
                  </span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
