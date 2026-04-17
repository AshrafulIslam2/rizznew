import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Factory & Quality | Rizz Leather",
  description: "Inside our Chittagong factory: precision leather craftsmanship and rigorous quality control."
};

export default function FactoryQualityPage() {
  const auditChecks = [
    { title: "Leather Quality", description: "Grain consistency, scar rejection, and temper verification." },
    { title: "Cutting Accuracy", description: "Precision die-cutting tolerances and pattern matching." },
    { title: "Stitching Strength", description: "Tensile testing and SPI (stitches per inch) validation." },
    { title: "Edge Finishing", description: "Burnishing smoothness and edge paint adhesion." },
    { title: "Hardware Check", description: "Plating durability, zipper smoothness, and rivet security." },
    { title: "Sole & Fit Check", description: "Lasting accuracy, sole adhesion, and dimensional stability." },
    { title: "Packaging Inspection", description: "Dust bag quality, box integrity, and protective wrapping." },
    { title: "100% Pass Rate Target", description: "Every batch follows strict release approval before dispatch." }
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Material Inspection",
      description: "Rigorous grading of leather hides, checking for grain consistency, thickness, and flawless surfaces."
    },
    {
      number: "02",
      title: "Stitching Checks",
      description: "Microscopic evaluation of thread tension, stitch alignment, and seam strength across all joints."
    },
    {
      number: "03",
      title: "Finishing Standards",
      description: "Edge painting verification, hardware polishing, and surface treatment validation."
    },
    {
      number: "04",
      title: "Final QA",
      description: "Comprehensive pre-dispatch audit ensuring every piece meets the Rizz luxury standard."
    }
  ];

  return (
    <main>
      <section className="border-y border-[var(--hairline-accent)] bg-[#03050c]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <h1 className="text-5xl font-medium leading-[1.04] text-[#f4eee1] sm:text-6xl lg:text-8xl">
            Factory & Quality
            <span className="block italic text-[#d2c49f]">Control</span>
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-[#adb2bd] sm:text-2xl">
            Our production workflow includes meticulous material inspection, precision stitching checks, exacting finishing standards, and final
            QA before dispatch.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/manufacturing/quote"
              className="inline-flex min-h-[52px] w-full max-w-[340px] items-center justify-center border border-[#d4ccb9] bg-[#d8ccad] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#11131a] no-underline hover:bg-[#cabf9f]"
            >
              Request OEM Quote
            </Link>
            <Link
              href="https://wa.me/8801712345678"
              className="inline-flex min-h-[52px] w-full max-w-[340px] items-center justify-center border border-[var(--hairline-accent)] bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#ece2c8] no-underline hover:bg-white/5"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="overflow-hidden border border-[var(--hairline-accent)] bg-[#090c15]">
            <div
              className="aspect-[4/5] bg-cover bg-center lg:aspect-[5/6]"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=80')" }}
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#b8ae90]">Facility Overview</p>
            <h2 className="text-4xl font-medium leading-tight text-[#f4eee1] sm:text-5xl lg:text-6xl">
              Precision
              <br />
              Craftsmanship
              <br />
              in Chittagong
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-[#adb2bd]">
              Located in the heart of Bangladesh&apos;s manufacturing hub, our state-of-the-art facility combines heritage leather crafting
              techniques with modern production efficiency.
            </p>
            <Link href="/manufacturing" className="inline-block border-b border-[#b6ab89] pb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#e8ddc1] no-underline">
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1100&q=80",
              "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1100&q=80",
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1100&q=80",
              "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1100&q=80"
            ].map((image, index) => (
              <div key={image} className="overflow-hidden border border-[#151c2c] bg-[#070b14]">
                <div className="aspect-[16/11] bg-cover bg-center sm:aspect-[4/3]" style={{ backgroundImage: `url('${image}')` }} />
                <p className="px-4 py-3 text-xs uppercase tracking-[0.13em] text-[#c4b894]">Craft detail {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl lg:text-6xl">Quality Control Workflow</h2>
            <p className="mt-4 text-lg text-[#adb2bd] sm:text-2xl">A systematic 4-step approach to perfection.</p>
          </div>

          <div className="relative mt-12 hidden lg:block">
            <div className="absolute left-0 right-0 top-8 h-px bg-[var(--hairline-accent)]" />
            <div className="grid grid-cols-4 gap-7">
              {workflowSteps.map((step) => (
                <article key={step.number} className="relative space-y-6 text-center">
                  <span className="relative mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-[var(--hairline-accent)] bg-[#04070f] text-lg text-[#d4c59e]">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium uppercase tracking-[0.12em] text-[#ebe3cf]">{step.title}</h3>
                  <p className="text-base leading-relaxed text-[#afb5c1]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:hidden">
            {workflowSteps.map((step) => (
              <article key={step.number} className="rounded-md border border-[#1a2130] bg-[#070b15] p-6">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-base text-[#d4c59e]">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium uppercase tracking-[0.1em] text-[#ebe3cf]">{step.title}</h3>
                </div>
                <p className="mt-4 text-base leading-relaxed text-[#afb5c1]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-7 flex flex-col gap-4 border-b border-[var(--hairline-accent)] pb-6 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-4xl font-medium text-[#f4eee1] sm:text-5xl">Comprehensive Audit</h2>
              <p className="mt-2 text-base text-[#aeb4bf]">Our 7-point inspection protocol.</p>
            </div>
            <Link href="/materials" className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d6c9a2] no-underline hover:text-[#e8ddbc]">
              Download Full Spec Sheet →
            </Link>
          </div>

          <div className="grid gap-px border border-[#1a2130] bg-[#1a2130] sm:grid-cols-2 lg:grid-cols-4">
            {auditChecks.map((check) => (
              <article key={check.title} className="space-y-4 bg-[#070b15] p-6 min-[480px]:p-7">
                <h3 className="text-xl font-medium uppercase tracking-[0.1em] text-[#ebe3cf]">{check.title}</h3>
                <p className="text-base leading-relaxed text-[#afb5c1]">{check.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl border border-[var(--hairline-accent)] bg-[#090d16]/80 px-6 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="text-4xl font-medium leading-tight text-[#f4eee1] sm:text-5xl">
              Want consistent quality
              <span className="block italic text-[#d2c49f]">for your brand?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#adb2bd] sm:text-lg">
              Get a detailed OEM quote in 24-48 hours. Export documentation support included.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/manufacturing/quote"
                className="inline-flex min-h-[52px] w-full max-w-[260px] items-center justify-center border border-[#d4ccb9] bg-[#d8ccad] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#11131a] no-underline hover:bg-[#cabf9f]"
              >
                Request Quote
              </Link>
              <Link
                href="https://wa.me/8801712345678"
                className="inline-flex min-h-[52px] w-full max-w-[260px] items-center justify-center border border-[var(--hairline-accent)] bg-transparent px-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#ece2c8] no-underline hover:bg-white/5"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
