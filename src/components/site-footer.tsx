import Link from "next/link";
import { POLICY_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border border-[var(--hairline-accent)] bg-[#070a11]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <section>
            <h3 className="text-3xl font-serif tracking-[0.2em] text-white sm:text-4xl sm:tracking-[0.24em]">RIZZ</h3>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#afb4bd] sm:mt-6 sm:text-base">
              Premium leather manufacturing and retail based in Chittagong, Bangladesh. Redefining global luxury standards.
            </p>
            <div className="mt-6 flex items-center gap-4 text-[#c7cab1] sm:mt-8">
              <a href="#" aria-label="Instagram" className="text-2xl transition hover:text-white">
                ◌
              </a>
              <a href="#" aria-label="Facebook" className="text-2xl transition hover:text-white">
                f
              </a>
              <a href="#" aria-label="LinkedIn" className="text-2xl transition hover:text-white">
                in
              </a>
            </div>
          </section>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6c89d]">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-[#b4bac4] sm:mt-6 sm:space-y-4 sm:text-base">
              <li><Link href="/manufacturing" className="hover:text-white">OEM Manufacturing</Link></li>
              <li><Link href="/wholesale" className="hover:text-white">Wholesale Program</Link></li>
              <li><Link href="/contact" className="hover:text-white">Corporate Gifting</Link></li>
              <li><Link href="/materials" className="hover:text-white">Material Sourcing</Link></li>
            </ul>
          </section>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6c89d]">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-[#b4bac4] sm:mt-6 sm:space-y-4 sm:text-base">
              <li><Link href="/factory-quality" className="hover:text-white">Our Factory</Link></li>
              <li><Link href="/factory-quality" className="hover:text-white">Quality Control</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </section>

          <section>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6c89d]">Newsletter</h4>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#b4bac4] sm:mt-6 sm:text-base">
              Subscribe for updates on new materials and manufacturing capabilities.
            </p>
            <form className="mt-6 border-b border-[var(--hairline-accent)] pb-2">
              <div className="flex items-center justify-between gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-sm text-white placeholder:text-[#818794] focus:outline-none sm:text-base"
                />
                <button type="submit" className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9cca3] hover:text-[#ebddb4]">
                  Join
                </button>
              </div>
            </form>
          </section>
        </div>

        <div className="mt-12 border-t border-[var(--hairline-accent)] pt-6 sm:mt-14 sm:pt-8">
          <div className="flex flex-col gap-4 text-xs text-[#7f8590] sm:text-sm md:flex-row md:items-center md:justify-between">
            <p>© 2026 Rizz Leather BD. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {POLICY_LINKS.slice(0, 2).map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {link.label === "Terms" ? "Terms of Service" : link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
