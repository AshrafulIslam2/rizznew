import Link from "next/link";
import { CONTACT, POLICY_LINKS } from "@/lib/site";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";

async function getCategories(): Promise<{ slug: string; name: string }[]> {
  try {
    const res = await fetch(`${API}/categories`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.filter((c: any) => c.is_active).map((c: any) => ({ slug: c.slug, name: c.name }));
  } catch {
    return [];
  }
}

type SocialLinks = {
  social_instagram?: string;
  social_facebook?: string;
  social_linkedin?: string;
  social_tiktok?: string;
  social_youtube?: string;
};

async function getSocialLinks(): Promise<SocialLinks> {
  try {
    const res = await fetch(`${API}/branding`, { next: { revalidate: 300 } });
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  social_instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]"><path d="M12 2.2c3.2 0 3.6 0 4.85.06 1.17.06 2.2.27 3.05.62a6.1 6.1 0 0 1 2.21 1.44 6.1 6.1 0 0 1 1.44 2.21c.35.85.56 1.88.62 3.05.06 1.25.06 1.65.06 4.85s0 3.6-.06 4.85c-.06 1.17-.27 2.2-.62 3.05a6.1 6.1 0 0 1-1.44 2.21 6.1 6.1 0 0 1-2.21 1.44c-.85.35-1.88.56-3.05.62-1.25.06-1.65.06-4.85.06s-3.6 0-4.85-.06c-1.17-.06-2.2-.27-3.05-.62a6.1 6.1 0 0 1-2.21-1.44 6.1 6.1 0 0 1-1.44-2.21c-.35-.85-.56-1.88-.62-3.05C2.2 15.6 2.2 15.2 2.2 12s0-3.6.06-4.85c.06-1.17.27-2.2.62-3.05A6.1 6.1 0 0 1 4.32 1.9 6.1 6.1 0 0 1 6.53.46c.85-.35 1.88-.56 3.05-.62C10.83.2 11.23.2 12.43.2zm0 1.98c-3.15 0-3.52 0-4.76.06-1.02.05-1.58.22-1.94.37a3.9 3.9 0 0 0-1.44.94 3.9 3.9 0 0 0-.94 1.44c-.15.36-.32.92-.37 1.94C2.43 8.18 2.43 8.55 2.43 11.7s0 3.52.06 4.76c.05 1.02.22 1.58.37 1.94.18.46.43.84.94 1.44.5.5.88.76 1.44.94.36.15.92.32 1.94.37 1.24.06 1.61.06 4.76.06s3.52 0 4.76-.06c1.02-.05 1.58-.22 1.94-.37a3.9 3.9 0 0 0 1.44-.94c.5-.5.76-.88.94-1.44.15-.36.32-.92.37-1.94.06-1.24.06-1.61.06-4.76s0-3.52-.06-4.76c-.05-1.02-.22-1.58-.37-1.94a3.9 3.9 0 0 0-.94-1.44 3.9 3.9 0 0 0-1.44-.94c-.36-.15-.92-.32-1.94-.37-1.24-.06-1.61-.06-4.76-.06zm0 3.6a5.92 5.92 0 1 1 0 11.84 5.92 5.92 0 0 1 0-11.84zm0 9.76a3.84 3.84 0 1 0 0-7.68 3.84 3.84 0 0 0 0 7.68zm7.54-10a1.39 1.39 0 1 1-2.78 0 1.39 1.39 0 0 1 2.78 0z" /></svg>
  ),
  social_facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" /></svg>
  ),
  social_linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" /></svg>
  ),
  social_tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]"><path d="M16.6 2h-3.2v13.6a3.1 3.1 0 1 1-2.2-2.97V9.3a6.3 6.3 0 1 0 5.4 6.24V8.5a7.3 7.3 0 0 0 4.4 1.5V6.8a4.1 4.1 0 0 1-4.4-4.8z" /></svg>
  ),
  social_youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]"><path d="M21.6 7.2s-.21-1.5-.87-2.16c-.83-.87-1.76-.87-2.19-.92C15.5 4 12 4 12 4h-.01s-3.49 0-6.54.12c-.43.05-1.36.05-2.19.92-.66.66-.87 2.16-.87 2.16S2.18 8.96 2.18 10.7v1.6c0 1.75.21 3.5.21 3.5s.21 1.5.87 2.16c.83.87 1.92.84 2.4.93 1.75.17 7.34.22 7.34.22s3.5 0 6.55-.12c.43-.05 1.36-.05 2.19-.92.66-.66.87-2.16.87-2.16s.21-1.74.21-3.5v-1.6c0-1.74-.21-3.5-.21-3.5zM9.95 14.6V8.9l5.2 2.85-5.2 2.85z" /></svg>
  ),
};

export async function SiteFooter() {
  const [categories, social] = await Promise.all([getCategories(), getSocialLinks()]);
  const socialEntries = (["social_instagram", "social_facebook", "social_linkedin", "social_tiktok", "social_youtube"] as const)
    .filter((key) => social[key]);
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
              <li><Link href="/brand/catalog" className="hover:text-[var(--text)] transition-colors">All Products</Link></li>
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/brand/catalog?category=${cat.slug}`} className="hover:text-[var(--text)] transition-colors">{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">Help</p>
            <ul className="space-y-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <li><Link href="/contact" className="hover:text-[var(--text)] transition-colors">Contact</Link></li>
              <li><Link href="/policies/shipping" className="hover:text-[var(--text)] transition-colors">Shipping Info</Link></li>
              <li><Link href="/policies/returns" className="hover:text-[var(--text)] transition-colors">Returns</Link></li>
              <li><Link href="/manufacturing" className="hover:text-[var(--text)] transition-colors">Wholesale / OEM</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">Atelier</p>
            <ul className="space-y-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <li><Link href="/factory-quality" className="hover:text-[var(--text)] transition-colors">Our Craft</Link></li>
              <li><Link href="/materials" className="hover:text-[var(--text)] transition-colors">Materials</Link></li>
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

        <div className="mt-14 flex flex-col gap-5 border-t border-[var(--border)] pt-7 text-[10px] uppercase tracking-[0.2em] text-[#3d3d3d] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rizz Leather. All rights reserved.</p>
          {socialEntries.length > 0 && (
            <div className="flex items-center gap-3">
              {socialEntries.map((key) => (
                <a
                  key={key}
                  href={social[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={key.replace("social_", "")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--cream)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold-light)]"
                >
                  {SOCIAL_ICONS[key]}
                </a>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-5">
            {POLICY_LINKS.map((link) => (
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
