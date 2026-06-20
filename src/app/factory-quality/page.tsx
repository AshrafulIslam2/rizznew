import type { Metadata } from "next";
import Link from "next/link";
import { getSeoOverride, buildMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const override = await getSeoOverride("factory-quality");
  return buildMetadata({
    path: "/factory-quality",
    defaultTitle: "Our Craft — Factory & Quality | RIZZ",
    defaultDescription: "How RIZZ leather goods are made — selection, cutting, stitching, and finishing, by hand, in Chittagong, Bangladesh.",
    override,
  });
}

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

const fallbackSteps = [
  { title: "Selection", body: "Every hide is hand-inspected for grain, thickness, and finish before it ever touches a cutting table." },
  { title: "Cutting & Stitching", body: "Patterns are cut by hand, stitched by craftsmen who have spent years perfecting their trade." },
  { title: "Finishing", body: "Edges are burnished, hardware is fitted, and every piece is inspected before it leaves the workshop." }
];

export default async function FactoryQualityPage() {
  const data = await getSection("factory-quality");

  const heroImage = data?.hero_image || "/assets/images/rizz_crodile_slide_sandals/image07.jpg";
  const heroTag = data?.hero_tag || "Our Craft";
  const heroHeadline = data?.hero_headline || "Made for men of distinction.";
  const introBody = data?.intro_body || "Every Rizz piece begins as a single hide — selected, cut, and shaped by craftsmen who have spent decades understanding leather.";
  const steps: { title: string; body: string }[] = (data?.steps && Array.isArray(data.steps) && data.steps.length > 0) ? data.steps : fallbackSteps;

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="h-[50vh] min-h-[380px] bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-8 sm:px-16 lg:px-24">
            <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">{heroTag}</p>
            <h1 className="mt-4 max-w-lg font-serif text-4xl leading-tight text-[var(--cream)] sm:text-5xl lg:text-6xl">{heroHeadline}</h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Chittagong, Bangladesh</p>
        <h2 className="mt-3 font-serif text-3xl text-[var(--cream)] sm:text-4xl">The Process</h2>
        <p className="mt-6 text-sm leading-loose text-[var(--muted)]">{introBody}</p>
      </section>

      {/* Steps */}
      <section className="border-y border-[var(--hairline)] bg-[var(--surface)] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
            {steps.map((s, i) => (
              <div key={`${s.title}-${i}`} className="bg-[var(--surface)] p-7">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[var(--gold-dim)]">Step {i + 1}</p>
                <h3 className="mt-3 font-serif text-xl text-[var(--cream)]">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center lg:py-20">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="font-serif text-3xl text-[var(--cream)] sm:text-4xl">See it for yourself.</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">Browse the full collection. COD available. Free returns within 7 days.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/brand/catalog" className="btn-primary w-full sm:w-auto">Shop the Collection</Link>
            <Link href="/materials" className="btn-ghost w-full sm:w-auto">Explore Materials</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
