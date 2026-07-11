import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Exchanges Policy | RIZZ Leather",
  description: "RIZZ accepts returns within 7 days of delivery for unworn items. First exchange is free. Full return and exchange policy details.",
  alternates: { canonical: "/policies/returns" },
};

export default function ReturnsPage() {
  return (
    <main>
      <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-12 text-center">
        <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">Policy</p>
        <h1 className="mt-3 font-serif text-4xl text-[var(--cream)] sm:text-5xl">Returns & Exchanges</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Last updated: June 2025</p>
      </section>

      <article className="mx-auto max-w-2xl space-y-10 px-5 py-14 text-sm leading-loose text-[var(--muted)] lg:px-8">
        <nav className="text-[10px] uppercase tracking-[0.22em]">
          <Link href="/" className="hover:text-[var(--text)] transition-colors">Home</Link>
          <span className="mx-2 opacity-40">›</span>
          <span className="text-[var(--gold-dim)]">Return Policy</span>
        </nav>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Return Window</h2>
          <p className="mt-3">We accept returns within <strong className="text-[var(--cream)]">7 days</strong> of the delivery date. Items must be:</p>
          <ul className="mt-3 space-y-2 pl-4">
            <li>• Unworn and unused</li>
            <li>• In original condition with no signs of wear, scuff marks, or odour</li>
            <li>• With all original packaging, tags, and accessories intact</li>
          </ul>
          <p className="mt-3">Items returned after 7 days, or showing signs of wear, will not be accepted.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">How to Return</h2>
          <ol className="mt-3 space-y-3 pl-4">
            <li><strong className="text-[var(--cream)]">1.</strong> Contact us within 7 days of delivery via WhatsApp (+880 175 051 4197) or email.</li>
            <li><strong className="text-[var(--cream)]">2.</strong> Share your order number and reason for return. Photos help speed up approval.</li>
            <li><strong className="text-[var(--cream)]">3.</strong> We arrange pickup from your address (Bangladesh) or provide a return address.</li>
            <li><strong className="text-[var(--cream)]">4.</strong> Refund or exchange processed within 3–5 business days of receiving the item.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Exchanges</h2>
          <p className="mt-3"><strong className="text-[var(--cream)]">First exchange is free</strong> for size or colour, subject to availability. Only one free exchange per order. Further exchanges may incur a shipping fee.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Refunds</h2>
          <p className="mt-3">Since all orders are Cash on Delivery, refunds are issued via bKash / Nagad or bank transfer (5–7 business days). Original shipping charges are non-refundable unless the return is due to our error.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Non-Returnable Items</h2>
          <ul className="mt-3 space-y-2 pl-4">
            <li>• Final sale items</li>
            <li>• Custom or personalised pieces</li>
            <li>• Items worn, altered, or damaged after delivery</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Defective or Wrong Items</h2>
          <p className="mt-3">Contact us within <strong className="text-[var(--cream)]">48 hours</strong> of delivery. We will arrange pickup and send the correct item at no cost.</p>
        </section>

        <div className="border-t border-[var(--hairline)] pt-8">
          <p>Questions? <a href="mailto:rizzleatherbd@gmail.com" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">rizzleatherbd@gmail.com</a> or <a href="https://wa.me/8801750514197" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">WhatsApp</a>.</p>
        </div>
      </article>
    </main>
  );
}
