import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Rizz Leather",
  description: "Leather footwear and accessories manufacturer for OEM, wholesale, and brand orders."
};

export default function HomePage() {
  const categoryShowcase = [
    {
      label: "Classic Loafers",
      href: "/brand/catalog?category=Men%27s%20Loafers",
      image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1600&q=80"
    },
    {
      label: "Sandals",
      href: "/brand/catalog?category=Men%27s%20Sandals",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80"
    },
    {
      label: "Half Loafers",
      href: "/brand/catalog?category=Half%20Loafers",
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      label: "Belts",
      href: "/brand/catalog?category=Men%27s%20Belts",
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=80"
    },
    {
      label: "Wallets",
      href: "/brand/catalog?category=Men%27s%20Wallets",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const bestSellers = [
    {
      name: "The Onyx Loafer",
      material: "Full Grain Calfskin",
      href: "/brand/catalog?category=Men%27s%20Loafers",
      image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Cognac Mule",
      material: "Premium Suede",
      href: "/brand/catalog?category=Men%27s%20Sandals",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Signature Belt",
      material: "Italian Leather",
      href: "/brand/catalog?category=Men%27s%20Belts",
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=80"
    },
    {
      name: "Classic Bifold",
      material: "Vegetable Tanned",
      href: "/brand/catalog?category=Men%27s%20Wallets",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const portfolioImages = [
    { src: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80", alt: "Portfolio product line" },
    { src: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=1200&q=80", alt: "Footwear batch production" },
    { src: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=80", alt: "Leather craftsmanship details" },
    { src: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80", alt: "Factory packaging line" },
    { src: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80", alt: "Portfolio sandals set" },
    { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80", alt: "Wholesale packed cartons" },
    { src: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80", alt: "QC inspection table" },
    { src: "https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?auto=format&fit=crop&w=1200&q=80", alt: "Finished product display" }
  ];

  const faqItems = [
    { question: "What is your MOQ?", answer: "MOQ starts from 50 pairs/pieces depending on product type and customization." },
    { question: "Do you provide sampling?", answer: "Yes. Sampling is available and sample charges apply before bulk production." },
    { question: "What is the lead time?", answer: "Typical lead time is 2-6 weeks based on order quantity and material readiness." },
    { question: "Which countries do you ship to?", answer: "We serve Bangladesh, USA, Europe, and Middle East markets." },
    { question: "Can you add our logo?", answer: "Yes. We offer custom logo emboss/deboss and private labeling options." },
    { question: "Is COD available?", answer: "COD is available in Bangladesh for selected brand/retail orders." },
    { question: "How do I access wholesale pricing?", answer: "Submit the wholesale apply form to unlock reseller pricing and catalog support." }
  ];

  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[var(--hairline-accent)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=2200&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-[#050507]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/85" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[#b8a981]">Premium Leather Craftsmanship</p>
          <h1 className="mt-7 max-w-5xl text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
            Leather Footwear & <br className="hidden sm:block" />
            Accessories Manufacturer
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#c2c4ca] sm:text-lg lg:text-2xl">
            Specializing in OEM, Wholesale, and our exclusive brand. Minimum Order Quantity from 50 pieces.
          </p>

          <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/manufacturing/quote"
              className="tap-target inline-flex justify-center border border-[#beae84] bg-[#d4c59e] px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#0e1016] no-underline transition hover:bg-[#c7b88f]"
            >
              Request OEM Quote
            </Link>
            <Link
              href="/wholesale/apply"
              className="tap-target inline-flex justify-center border border-[#554e40] bg-black/25 px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7d8dc] no-underline transition hover:border-[#8c836d] hover:text-white"
            >
              Apply For Wholesale
            </Link>
            <Link
              href="/brand/catalog"
              className="tap-target inline-flex justify-center border border-[#554e40] bg-black/25 px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7d8dc] no-underline transition hover:border-[#8c836d] hover:text-white"
            >
              Browse Catalog
            </Link>
          </div>

          <div className="mt-11 w-full border-t border-[var(--hairline-accent)] pt-5">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.12em] text-[#b6b9c2] sm:text-xs sm:tracking-[0.2em]">
              <span>✓ MOQ 50+</span>
              <span>✓ Genuine Leather</span>
              <span>✓ QC Before Shipment</span>
              <span>✓ BD COD Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] bg-[#07090f] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Choose Your Path</h2>
            <p className="mt-4 text-base text-[#adb2bd] sm:text-lg">Tailored services for brands, bulk buyers, and individual connoisseurs.</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <article className="flex min-h-[300px] flex-col items-center border border-[var(--hairline-accent)] bg-[#0a0d15]/70 px-5 py-8 text-center sm:min-h-[340px] sm:px-6 sm:py-10">
              <span className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-xl text-[#d5c8a0]">🏭</span>
              <h3 className="text-2xl font-semibold text-[#f5f6f7] sm:text-3xl">OEM Manufacturing</h3>
              <p className="mt-4 text-base leading-relaxed text-[#b5bac4] sm:mt-5 sm:text-lg">
                Bring your designs to life. Full-scale manufacturing for your brand with private labeling and custom material sourcing.
              </p>
              <Link href="/manufacturing" className="mt-auto pt-8 text-sm font-semibold uppercase tracking-[0.28em] text-[#d7caa3] no-underline hover:text-[#e4d6ad]">
                Explore OEM
              </Link>
            </article>

            <article className="flex min-h-[300px] flex-col items-center border border-[var(--hairline-accent)] bg-[#0a0d15]/70 px-5 py-8 text-center sm:min-h-[340px] sm:px-6 sm:py-10">
              <span className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-xl text-[#d5c8a0]">📦</span>
              <h3 className="text-2xl font-semibold text-[#f5f6f7] sm:text-3xl">Wholesale Supply</h3>
              <p className="mt-4 text-base leading-relaxed text-[#b5bac4] sm:mt-5 sm:text-lg">
                Access our premium catalog at bulk pricing. Ready-to-ship inventory for retailers and distributors worldwide.
              </p>
              <Link href="/wholesale/apply" className="mt-auto pt-8 text-sm font-semibold uppercase tracking-[0.28em] text-[#d7caa3] no-underline hover:text-[#e4d6ad]">
                Apply Now
              </Link>
            </article>

            <article className="flex min-h-[300px] flex-col items-center border border-[var(--hairline-accent)] bg-[#0a0d15]/70 px-5 py-8 text-center sm:min-h-[340px] sm:px-6 sm:py-10">
              <span className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-xl text-[#d5c8a0]">♛</span>
              <h3 className="text-2xl font-semibold text-[#f5f6f7] sm:text-3xl">Our Brand Catalog</h3>
              <p className="mt-4 text-base leading-relaxed text-[#b5bac4] sm:mt-5 sm:text-lg">
                Shop the exclusive Rizz collection. Artisanal footwear and accessories crafted for the modern gentleman.
              </p>
              <Link href="/brand/catalog" className="mt-auto pt-8 text-sm font-semibold uppercase tracking-[0.28em] text-[#d7caa3] no-underline hover:text-[#e4d6ad]">
                Shop Collection
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Collections</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Masterful Categories</h2>
            </div>
            <Link
              href="/brand/catalog"
              className="text-xs uppercase tracking-[0.3em] text-[#d4c7a2] no-underline hover:text-[#e6d7ad]"
            >
              ( View All Categories )
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
            {categoryShowcase.map((item, index) => {
              const tileClass =
                index === 0
                  ? "sm:col-span-2 lg:col-span-6 lg:row-span-2 min-h-[300px] sm:min-h-[440px] lg:min-h-[520px]"
                  : "min-h-[180px] sm:min-h-[220px] lg:col-span-3";
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative overflow-hidden border border-[var(--hairline-accent)] ${tileClass}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
                  <p className="absolute bottom-4 left-4 z-10 text-lg font-semibold text-[#f4eee1] sm:bottom-5 sm:left-5 sm:text-3xl lg:text-4xl">{item.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-2">
        <article className="surface-panel space-y-4 rounded-xl border p-6">
          <h2 className="text-2xl font-bold">OEM Highlights</h2>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>• Custom logo emboss/deboss</li>
            <li>• Sampling available (sample charge applies)</li>
            <li>• MOQ starts from 50 pcs</li>
            <li>• Export-ready support</li>
          </ul>
          <Link href="/manufacturing/quote" className="btn-primary">
            Request OEM Quote
          </Link>
        </article>
        <article className="surface-panel space-y-4 rounded-xl border p-6">
          <h2 className="text-2xl font-bold">Wholesale Highlights</h2>
          <ul className="space-y-2 text-[var(--muted)]">
            <li>• Bulk supply for retailers & distributors</li>
            <li>• Apply to access pricing & catalog</li>
          </ul>
          <Link href="/wholesale/apply" className="btn-outline">
            Wholesale Apply
          </Link>
        </article>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Curated Best Sellers</h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-[#adb2bd] sm:text-lg">
              Discover the pieces defining modern luxury. Available for direct purchase.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {bestSellers.map((item) => (
              <Link key={item.name} href={item.href} className="group no-underline">
                <article>
                  <div className="relative overflow-hidden border border-[var(--hairline-accent)] bg-[#0a0d15]">
                    <div
                      className="h-[280px] bg-cover bg-center transition duration-500 group-hover:scale-105 sm:h-[320px] lg:h-[360px]"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute right-4 top-4 border border-[var(--hairline-accent)] bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d8caa4]">
                      BD COD
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/20" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-[#f4eee1] sm:text-2xl">{item.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#c8b98f]">{item.material}</p>
                    </div>
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--hairline-accent)] text-[10px] text-[#d6c89f]">
                      WA
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/brand/catalog"
              className="inline-flex min-h-[54px] items-center justify-center border border-[#8f8468] px-9 text-sm font-semibold uppercase tracking-[0.28em] text-[#e0d2ad] no-underline hover:bg-[#8f8468]/10"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Factory Excellence</p>
              <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Factory & Quality Control</h2>
            </div>
            <Link href="/factory-quality" className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[#d4c7a2] no-underline hover:text-[#e6d7ad]">
              ( Explore Facility )
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <article className="group relative min-h-[300px] overflow-hidden border border-[var(--hairline-accent)] sm:min-h-[380px] lg:col-span-7 lg:min-h-[460px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${portfolioImages[6].src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-semibold text-[#f4eee1] sm:text-2xl lg:text-3xl">Multi-Stage Inspection Workflow</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#c9ccd3]">
                  Every order passes raw material inspection, in-line stitching checks, finishing review, and pre-shipment approval.
                </p>
              </div>
            </article>

            <div className="grid gap-4 lg:col-span-5">
              <article className="border border-[var(--hairline-accent)] bg-[#0a0d15]/70 p-6">
                <h3 className="text-2xl font-semibold text-[#f4eee1]">QC Benchmarks</h3>
                <ul className="mt-4 space-y-2 text-sm text-[#bcc1cb]">
                  <li>✓ Leather grading and shade matching</li>
                  <li>✓ Stitch density and edge paint validation</li>
                  <li>✓ Hardware durability and pull tests</li>
                  <li>✓ Final pair-by-pair carton audit</li>
                </ul>
              </article>

              <article className="group relative min-h-[180px] overflow-hidden border border-[var(--hairline-accent)] sm:min-h-[206px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${portfolioImages[1].src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/20" />
                <p className="absolute bottom-4 left-4 text-lg font-semibold text-[#f4eee1] sm:text-xl">Batch Consistency</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline-accent)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Portfolio</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Crafted Collections in Focus</h2>
            </div>
            <Link href="/portfolio" className="text-xs uppercase tracking-[0.3em] text-[#d4c7a2] no-underline hover:text-[#e6d7ad]">
              ( View Complete Portfolio )
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
            {portfolioImages.slice(0, 5).map((item, index) => {
              const tileClass =
                index === 0 ? "sm:col-span-2 lg:col-span-6 lg:row-span-2 min-h-[300px] sm:min-h-[440px] lg:min-h-[520px]" : "min-h-[180px] sm:min-h-[220px] lg:col-span-3";
              return (
                <article key={item.src} className={`group relative overflow-hidden border border-[var(--hairline-accent)] ${tileClass}`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.src}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
                  <p className="absolute bottom-4 left-4 z-10 text-base font-semibold text-[#f4eee1] sm:bottom-5 sm:left-5 sm:text-xl lg:text-2xl">{item.alt}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="border border-[#8f8468] bg-gradient-to-r from-[#080b13] via-[#0b101b] to-[#0a0d15] px-6 py-10 sm:px-10 sm:py-12">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#cdbb8f]">OEM / Private Label</p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-[#f4eee1] sm:text-4xl lg:text-5xl">
                  Need OEM / Private Label production? Get a quote in 24-48 hours.
                </h2>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/manufacturing/quote"
                  className="inline-flex min-h-[52px] items-center justify-center border border-[#beae84] bg-[#d4c59e] px-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#0e1016] no-underline hover:bg-[#c7b88f]"
                >
                  Request OEM Quote
                </Link>
                <Link
                  href="/wholesale/apply"
                  className="inline-flex min-h-[52px] items-center justify-center border border-[#8f8468] px-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#e0d2ad] no-underline hover:bg-[#8f8468]/10"
                >
                  Wholesale Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#cdbb8f]">Support</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <details key={item.question} className="group border border-[var(--hairline-accent)] bg-[#0a0d15]/70">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left">
                <span className="pr-3 text-base font-medium text-[#f4eee1] sm:text-lg">{item.question}</span>
                <span className="text-[#cdbb8f] transition group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[var(--hairline-accent)] px-5 py-4 text-sm leading-relaxed text-[#bcc1cb]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
