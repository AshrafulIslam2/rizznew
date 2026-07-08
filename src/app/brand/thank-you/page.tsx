import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { OrderId } from "./order-id";

export const metadata: Metadata = {
  title: "Order Confirmed | RIZZ",
  description: "Your RIZZ order has been received. We will call to confirm before dispatch."
};

export default function ThankYouPage() {

  return (
    <main>
      <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-14 text-center">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold-dim)] text-2xl text-[var(--gold)]">
          ✓
        </div>
        <h1 className="mt-5 font-serif text-4xl text-[var(--cream)] sm:text-5xl">Order Confirmed</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Thank you for choosing RIZZ. We will call you to confirm before dispatch.</p>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
        {/* Order details */}
        <div className="grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
          <div className="bg-[var(--surface)] px-6 py-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Order Number</p>
            <Suspense fallback={<span className="mt-2 font-serif text-2xl text-[var(--cream)]">—</span>}>
              <OrderId />
            </Suspense>
          </div>
          <div className="bg-[var(--surface)] px-6 py-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Expected Delivery</p>
            <p className="mt-2 font-serif text-xl text-[var(--cream)]">2–4 Business Days</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">Across Bangladesh</p>
          </div>
          <div className="bg-[var(--surface)] px-6 py-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Payment</p>
            <p className="mt-2 font-serif text-xl text-[var(--cream)]">Cash on Delivery</p>
            <p className="mt-1 text-[10px] text-[var(--muted)]">Pay when it arrives</p>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-8 space-y-4">
          <h2 className="font-serif text-2xl text-[var(--cream)]">What happens next</h2>
          {[
            { step: "01", title: "Confirmation Call", body: "Our team will call the phone number you provided to verify your order details and confirm delivery address." },
            { step: "02", title: "Dispatch", body: "Once confirmed, your order is packed and dispatched the same or next business day. You'll receive an SMS from our courier." },
            { step: "03", title: "Delivery", body: "Your courier will arrive with the package. You pay the full amount in cash and receive your piece." }
          ].map((item) => (
            <div key={item.step} className="flex gap-5 border border-[var(--border)] bg-[var(--surface)] p-5">
              <span className="font-serif text-3xl text-[var(--gold-dim)] opacity-60">{item.step}</span>
              <div>
                <h3 className="font-medium text-[var(--cream)]">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modifications */}
        <div className="mt-8 border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
          <h3 className="font-serif text-xl text-[var(--cream)]">Need to modify or cancel?</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">Contact us as soon as possible before dispatch. Once shipped, cancellations are not possible.</p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/8801750514197"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto flex items-center justify-center gap-2"
            >
              WhatsApp Support
            </a>
            <Link href="/contact" className="btn-ghost w-full sm:w-auto">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/brand/catalog" className="btn-primary inline-flex">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
