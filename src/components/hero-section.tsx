import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  sidebarImage?: string;
}

export function HeroSection({ title, subtitle, backgroundImage, sidebarImage }: HeroProps) {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black">
      {/* Sidebar Image */}
      {sidebarImage && (
        <div className="absolute left-0 top-0 h-full w-1/4 opacity-60 overflow-hidden">
          <div className="h-full w-full relative">
            <img
              src={sidebarImage}
              alt="Leather detail"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 py-20">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] font-semibold">
            Premium Leather Craftsmanship
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Link
            href="/oem-quote"
            className="px-8 py-3 bg-[var(--primary)] text-black uppercase text-xs tracking-[0.15em] font-semibold hover:bg-[var(--primary-hover)] transition-colors"
          >
            Request OEM Quote
          </Link>
          <Link
            href="/wholesale-apply"
            className="px-8 py-3 border border-gray-400 text-gray-300 uppercase text-xs tracking-[0.15em] font-semibold hover:border-white hover:text-white transition-colors"
          >
            Apply For Wholesale
          </Link>
          <Link
            href="/brand/catalog"
            className="px-8 py-3 border border-gray-400 text-gray-300 uppercase text-xs tracking-[0.15em] font-semibold hover:border-white hover:text-white transition-colors"
          >
            Browse Catalog
          </Link>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 text-xs uppercase tracking-[0.15em] text-gray-400">
          <span className="flex items-center gap-2">
            <span className="text-[var(--primary)]">✓</span> MOQ 50+
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--primary)]">✓</span> Genuine Leather
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--primary)]">✓</span> QC Before Shipment
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[var(--primary)]">✓</span> BD COD Nationwide
          </span>
        </div>
      </div>
    </section>
  );
}
