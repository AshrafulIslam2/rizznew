import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Materials — The Leather We Choose | RIZZ",
  description: "The genuine leathers RIZZ uses — full-grain calfskin, premium suede, vegetable-tanned, and crocodile-emboss. Sourced from the finest tanneries.",
  openGraph: {
    title: "Materials | RIZZ",
    description: "Genuine leather, hand-selected for grain, weight, and how it ages."
  }
};

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";

async function getSection(key: string) {
  try {
    const res = await fetch(`${API}/homepage/${key}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || Object.keys(data).length === 0) return null;
    return data;
  } catch {
    return null;
  }
}

const fallbackItems = [
  { label: "Full-Grain Calfskin", desc: "The pinnacle of leather. Natural texture, unmatched durability." },
  { label: "Premium Suede", desc: "Velvety nap, rich depth. For the discerning touch." },
  { label: "Vegetable-Tanned", desc: "Traditional bark-tanning. Ages into a personal patina." },
  { label: "Crocodile-Emboss", desc: "Exotic texture, refined character. A statement in restraint." }
];

export default async function MaterialsPage() {
  const data = await getSection("materials");

  const heroImage = data?.hero_image || "/assets/images/rizz_master_color_sandals/image01.jpg";
  const heroTag = data?.hero_tag || "Substance";
  const heroHeadline = data?.hero_headline || "The Leather We Choose";
  const introBody = data?.intro_body || "Sourced from the finest tanneries. Every hide is chosen for grain, weight, and how it ages over years of wear.";
  const items: { label: string; desc: string }[] = (data?.items && Array.isArray(data.items) && data.items.length > 0) ? data.items : fallbackItems;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="h-[45vh] min-h-[320px] bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 sm:px-16 lg:px-24">
            <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">{heroTag}</p>
            <h1 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-[var(--cream)] sm:text-5xl lg:text-6xl">{heroHeadline}</h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">{introBody}</p>
          </div>
        </div>
      </section>

      {/* Materials grid */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-px border border-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {items.map((m, i) => (
            <div key={`${m.label}-${i}`} className="bg-[var(--surface)] px-7 py-8 hover:bg-[var(--surface-soft)] transition-colors">
              <div className="mb-4 h-px w-8 bg-[var(--gold-dim)]" />
              <h3 className="font-serif text-lg text-[var(--cream)]">{m.label}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--hairline)] bg-[var(--surface)] py-16 text-center lg:py-20">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="font-serif text-3xl text-[var(--cream)] sm:text-4xl">See the craft behind it.</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">From hide to finished piece — how every RIZZ product is made.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/factory-quality" className="btn-primary w-full sm:w-auto">Our Craft</Link>
            <Link href="/brand/catalog" className="btn-ghost w-full sm:w-auto">Shop the Collection</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
