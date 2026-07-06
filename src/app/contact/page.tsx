import type { Metadata } from "next";
import { getSeoOverride, buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("contact");
  return buildMetadata({
    path: "/contact",
    defaultTitle: "Contact RIZZ Leather — Chittagong, Bangladesh",
    defaultDescription:
      "Get in touch with RIZZ Leather via WhatsApp or email. Cash on Delivery across Bangladesh, international shipping available.",
    override,
  });
}

async function getBranding() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";
  try {
    const res = await fetch(`${apiUrl}/branding`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export default async function ContactPage() {
  const branding = await getBranding();

  const whatsapp = branding?.contact_whatsapp_display || "+880 175 051 4197";
  const whatsappNumber = branding?.contact_whatsapp || "8801750514197";
  const email = branding?.contact_email || "rizzleatherbd@gmail.com";
  const shipping = branding?.contact_shipping || "Bangladesh · USA · Europe · Middle East";
  const locationRaw: string = branding?.contact_location || "Chittagong, Bangladesh";

  const locations = locationRaw
    .split("\n")
    .map((l: string) => l.trim())
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 space-y-10">
      {/* Header */}
      <div>
        <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Get in touch</p>
        <h1 className="mt-3 font-serif text-4xl text-[var(--cream)]">Contact Us</h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          Reach us directly for orders, custom work, OEM, wholesale, or any brand inquiry.
          We respond within a few hours on WhatsApp.
        </p>
      </div>

      {/* WhatsApp CTA — primary */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 rounded-2xl border border-emerald-700/40 bg-emerald-950/40 px-6 py-5 hover:border-emerald-600/60 hover:bg-emerald-950/60 transition"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-800/50 text-2xl">
            💬
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-emerald-400/70">WhatsApp — fastest response</p>
            <p className="mt-0.5 text-lg font-medium text-[var(--cream)]">{whatsapp}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition">
          Chat Now →
        </span>
      </a>

      {/* Email */}
      <a
        href={`mailto:${email}`}
        className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 hover:border-[var(--gold-dim)] transition"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--bg)] text-xl text-[var(--gold-dim)]">
          ✉
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">Email</p>
          <p className="mt-0.5 font-medium text-[var(--cream)]">{email}</p>
        </div>
      </a>

      {/* Locations */}
      {locations.length > 0 && (
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5 space-y-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">Locations & Outlets</p>
          <div className="divide-y divide-[var(--hairline)]">
            {locations.map((loc, i) => (
              <div key={i} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                <span className="mt-0.5 shrink-0 text-[var(--gold-dim)]">📍</span>
                <p className="text-sm leading-relaxed text-[var(--cream)]">{loc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shipping */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)]">Shipping Destinations</p>
        <p className="mt-2 text-sm text-[var(--cream)]">{shipping}</p>
      </div>
    </main>
  );
}
