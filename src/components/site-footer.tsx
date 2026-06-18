import Link from "next/link";
import { CONTACT, POLICY_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[#050505]">
      {/* Newsletter */}
      <div className="border-b border-[var(--hairline)] py-12">
        <div className="mx-auto max-w-xl px-5 text-center">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Stay in the know</p>
          <h3 className="mt-3 font-serif text-2xl text-[var(--cream)] sm:text-3xl">Join the Inner Circle</h3>
          <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
            New arrivals, exclusive offers, and stories from the atelier — delivered quietly to your inbox.
          </p>
          <form className="mt-6 flex overflow-hidden border border-[var(--border-soft)]">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 border-l border-[var(--border-soft)] bg-[var(--gold)] px-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0a0806] transition hover:bg-[var(--gold-light)]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <p className="font-serif text-2xl tracking-[0.4em] text-[var(--cream)]">RIZZ</p>
            <p className="mt-4 max-w-xs text-xs leading-loose text-[var(--muted)]">
              Artisan leather footwear and accessories, crafted in Chittagong, Bangladesh. Shipped worldwide.
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[var(--gold-dim)]">{CONTACT.location}</p>
          </div>

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">Shop</p>
            <ul className="space-y-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <li><Link href="/brand/catalog?sort=new" className="hover:text-[var(--text)] transition-colors">New Arrivals</Link></li>
              <li><Link href="/brand/catalog?category=Men%27s%20Loafers" className="hover:text-[var(--text)] transition-colors">Loafers</Link></li>
              <li><Link href="/brand/catalog?category=Men%27s%20Sandals" className="hover:text-[var(--text)] transition-colors">Sandals</Link></li>
              <li><Link href="/brand/catalog?category=Men%27s%20Belts" className="hover:text-[var(--text)] transition-colors">Belts</Link></li>
              <li><Link href="/brand/catalog?category=Men%27s%20Wallets" className="hover:text-[var(--text)] transition-colors">Wallets</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">Help</p>
            <ul className="space-y-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <li><Link href="/contact" className="hover:text-[var(--text)] transition-colors">Contact</Link></li>
              <li><Link href="/policies/shipping" className="hover:text-[var(--text)] transition-colors">Shipping Info</Link></li>
              <li><Link href="/policies/returns" className="hover:text-[var(--text)] transition-colors">Returns</Link></li>
              <li><Link href="/wholesale/apply" className="hover:text-[var(--text)] transition-colors">Wholesale</Link></li>
              <li><Link href="/manufacturing" className="hover:text-[var(--text)] transition-colors">OEM / Custom</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">Atelier</p>
            <ul className="space-y-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <li><Link href="/factory-quality" className="hover:text-[var(--text)] transition-colors">Our Craft</Link></li>
              <li><Link href="/materials" className="hover:text-[var(--text)] transition-colors">Materials</Link></li>
              <li><Link href="/portfolio" className="hover:text-[var(--text)] transition-colors">Portfolio</Link></li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[var(--text)] transition-colors normal-case tracking-normal">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text)] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--border)] pt-7 text-[10px] uppercase tracking-[0.2em] text-[#3d3d3d] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rizz Leather. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {POLICY_LINKS.slice(0, 3).map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[var(--muted)] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
