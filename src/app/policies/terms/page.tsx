import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | RIZZ",
  description: "Terms of service for RIZZ — luxury leather footwear and accessories. Governs all purchases, use of the website, and customer obligations."
};

export default function TermsPage() {
  return (
    <main>
      <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-12 text-center">
        <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">Policy</p>
        <h1 className="mt-3 font-serif text-4xl text-[var(--cream)] sm:text-5xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Last updated: June 2025</p>
      </section>

      <article className="mx-auto max-w-2xl space-y-10 px-5 py-14 text-sm leading-loose text-[var(--muted)] lg:px-8">
        <nav className="text-[10px] uppercase tracking-[0.22em]">
          <Link href="/" className="hover:text-[var(--text)] transition-colors">Home</Link>
          <span className="mx-2 opacity-40">›</span>
          <span className="text-[var(--gold-dim)]">Terms of Service</span>
        </nav>

        <p>By placing an order or using this website, you agree to these Terms of Service. Please read them carefully. If you do not agree, do not use this site or place an order.</p>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">1. About Us</h2>
          <p className="mt-3">RIZZ Leather ("RIZZ", "we", "us") is a leather goods brand based in Chittagong, Bangladesh. We sell directly to customers via this website and via WhatsApp. Our contact is rizzleatherbd@gmail.com.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">2. Orders & COD Commitment</h2>
          <p className="mt-3">All domestic orders are placed on a Cash on Delivery basis. By placing an order, you commit to purchasing the item and paying the total amount upon delivery. Placing an order and refusing delivery without valid reason may result in your number being flagged and future orders declined.</p>
          <p className="mt-3">We reserve the right to refuse or cancel any order at our discretion, including in cases of suspected fraud or repeated delivery refusals.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">3. Pricing & Currency</h2>
          <p className="mt-3">All prices on this website are shown in Bangladeshi Taka (BDT / ৳). International pricing, where applicable, is indicative and may vary depending on exchange rates at the time of order.</p>
          <p className="mt-3">We reserve the right to change prices at any time. The price at the time of order confirmation is the final price you pay.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">4. Product Information</h2>
          <p className="mt-3">We make every effort to display accurate product images, colours, and descriptions. However, slight variations in colour may occur due to monitor settings. Leather is a natural material — minor variations in grain and shade are inherent and not defects.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">5. Shipping & Delivery</h2>
          <p className="mt-3">Delivery timelines are estimates and may vary due to courier conditions, location, or unforeseen circumstances. RIZZ is not liable for delays caused by third-party courier services. See our <Link href="/policies/shipping" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">Shipping Policy</Link> for full details.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">6. Returns & Refunds</h2>
          <p className="mt-3">Returns are accepted within 7 days of delivery for unworn items in original condition. See our <Link href="/policies/returns" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">Return Policy</Link> for full details and process.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">7. Intellectual Property</h2>
          <p className="mt-3">All content on this website — including images, text, logos, and designs — is the property of RIZZ Leather. You may not reproduce, copy, or use any content without our express written permission.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">8. Limitation of Liability</h2>
          <p className="mt-3">RIZZ's liability is limited to the value of the order placed. We are not liable for indirect, incidental, or consequential damages arising from the use of our products or services.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">9. Changes to Terms</h2>
          <p className="mt-3">We reserve the right to update these terms at any time. The updated version will be posted on this page with the revised date. Continued use of the site constitutes acceptance of updated terms.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">10. Governing Law</h2>
          <p className="mt-3">These terms are governed by the laws of the People's Republic of Bangladesh. Any disputes will be resolved under the jurisdiction of Chittagong, Bangladesh.</p>
        </section>

        <div className="border-t border-[var(--hairline)] pt-8">
          <p>Contact us at <a href="mailto:rizzleatherbd@gmail.com" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">rizzleatherbd@gmail.com</a> with any questions about these terms.</p>
        </div>
      </article>
    </main>
  );
}
