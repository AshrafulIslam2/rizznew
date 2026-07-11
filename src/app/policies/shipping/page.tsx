import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery & Shipping Policy | RIZZ Leather",
  description: "RIZZ delivers across Bangladesh via COD in 2–4 business days. International shipping to USA, Europe, and Middle East. Full shipping policy details.",
  alternates: { canonical: "/policies/shipping" },
};

export default function ShippingPage() {
  return (
    <main>
      <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-12 text-center">
        <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">Policy</p>
        <h1 className="mt-3 font-serif text-4xl text-[var(--cream)] sm:text-5xl">Delivery & Shipping</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Last updated: June 2025</p>
      </section>

      <article className="mx-auto max-w-2xl space-y-10 px-5 py-14 text-sm leading-loose text-[var(--muted)] lg:px-8">
        <nav className="text-[10px] uppercase tracking-[0.22em]">
          <Link href="/" className="hover:text-[var(--text)] transition-colors">Home</Link>
          <span className="mx-2 opacity-40">›</span>
          <span className="text-[var(--gold-dim)]">Shipping Policy</span>
        </nav>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Bangladesh — Cash on Delivery</h2>
          <p className="mt-3">All domestic orders are fulfilled via Cash on Delivery (COD). You pay when the order arrives — no advance payment required.</p>
          <div className="mt-5 grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
            {[
              { label: "Inside Dhaka", time: "1–2 business days", cost: "৳ 80" },
              { label: "Outside Dhaka", time: "2–4 business days", cost: "৳ 120" },
              { label: "Orders over ৳5,000", time: "Standard timeline", cost: "Free" }
            ].map((row) => (
              <div key={row.label} className="bg-[var(--surface)] p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold-dim)]">{row.label}</p>
                <p className="mt-2 text-[var(--cream)]">{row.time}</p>
                <p className="mt-1 font-medium text-[var(--cream)]">{row.cost}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Order Processing</h2>
          <p className="mt-3">Orders are processed Monday to Saturday. Orders placed before 2 PM are dispatched the same day. Orders placed after 2 PM or on Sunday are dispatched the next business day.</p>
          <p className="mt-3">Before dispatch, our team will call the phone number provided to confirm your order. Please ensure the number is reachable.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Tracking</h2>
          <p className="mt-3">Once dispatched, you will receive an SMS from our courier partner with a tracking number. You can use this to track your delivery status in real time.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">International Shipping</h2>
          <p className="mt-3">We ship internationally to the USA, UK, Europe, UAE, and Saudi Arabia. International orders are handled via WhatsApp — contact us with your address for a shipping quote and timeline.</p>
          <ul className="mt-3 space-y-2 pl-4">
            <li>• Shipping costs vary by destination and weight</li>
            <li>• Estimated delivery: 7–14 business days depending on courier and location</li>
            <li>• Import duties and local taxes are the buyer's responsibility</li>
          </ul>
          <p className="mt-3">
            <a href="https://wa.me/8801750514197" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">WhatsApp us</a> to arrange international delivery.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Failed Delivery</h2>
          <p className="mt-3">If delivery is unsuccessful after two attempts (e.g., unavailable address, unreachable number), the order will be returned to us. We will contact you to reschedule. Reshipping costs may apply.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--cream)]">Damaged in Transit</h2>
          <p className="mt-3">If your order arrives visibly damaged, take photos and contact us within 48 hours. We will investigate with the courier and arrange a replacement at no cost to you.</p>
        </section>

        <div className="border-t border-[var(--hairline)] pt-8">
          <p>Questions about your delivery? <a href="mailto:rizzleatherbd@gmail.com" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">rizzleatherbd@gmail.com</a> or <a href="https://wa.me/8801750514197" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] transition-colors">WhatsApp</a>.</p>
        </div>
      </article>
    </main>
  );
}
