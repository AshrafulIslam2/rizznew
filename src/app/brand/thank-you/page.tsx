import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Rizz Leather",
  description: "Order received confirmation."
};

export default function BrandThankYouPage() {
  return (
    <main className="bg-[#02040b] text-[#f2ede2]">
      <section className="border-y border-[var(--hairline-accent)] py-6 sm:py-7">
        <div className="mx-auto max-w-4xl px-4 sm:px-5">
          <div className="text-center">
            <div className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2a3242] bg-[#090d17] text-lg text-[#d8c69f]">
              ✓
            </div>
            <h1 className="mt-3 font-serif text-5xl text-[#f4ede2] sm:text-6xl">Thank You</h1>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#c6b791]">Your order has been received</p>
          </div>

          <section className="mt-5 rounded-xl border border-[#1b2335] bg-[#080d17] p-3 sm:p-4">
            <div className="grid gap-3 text-left sm:grid-cols-3 sm:gap-0">
              <div className="sm:border-r sm:border-[#1b2335] sm:pr-4">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#98a0ad]">Order Number</p>
                <p className="mt-1.5 text-2xl text-[#f2ebdf]">#RZ-8492-BD</p>
              </div>
              <div className="sm:border-r sm:border-[#1b2335] sm:px-4">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#98a0ad]">Expected Delivery</p>
                <p className="mt-1.5 text-2xl text-[#f2ebdf]">2-4 Business Days</p>
                <p className="mt-1 text-xs text-[#8490a0]">Inside Bangladesh</p>
              </div>
              <div className="sm:pl-4">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[#98a0ad]">COD Amount Due</p>
                <p className="mt-1.5 text-2xl font-semibold text-[#d8c69f]">৳ 22,780</p>
                <p className="mt-1 text-xs text-[#8490a0]">Payable upon delivery</p>
              </div>
            </div>
          </section>

          <section className="mt-4 grid gap-3 sm:grid-cols-2">
            <article className="rounded-xl border border-[#1b2335] bg-[#080d17] p-4 text-center">
              <div className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#2d364a] text-xs text-[#d8c69f]">☎</div>
              <h2 className="mt-3 font-serif text-3xl text-[#efe8dd]">We'll call to confirm</h2>
              <p className="mt-2 text-xs leading-relaxed text-[#a8b0bd]">
                Our team will contact you shortly at the provided phone number to verify your order details before dispatch.
              </p>
            </article>

            <article className="rounded-xl border border-[#1b2335] bg-[#080d17] p-4 text-center">
              <div className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#2d364a] text-xs text-[#d8c69f]">◉</div>
              <h2 className="mt-3 font-serif text-3xl text-[#efe8dd]">Need modifications?</h2>
              <p className="mt-2 text-xs leading-relaxed text-[#a8b0bd]">
                For international inquiries, order changes, or cancellations, please reach out to our dedicated support.
              </p>
              <Link
                href="https://wa.me/8801712345678"
                className="mt-3 inline-flex min-h-[30px] items-center justify-center rounded-full border border-[#2f384b] px-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#d7c89f] no-underline"
              >
                WhatsApp Support
              </Link>
            </article>
          </section>

          <div className="mt-6 border-t border-[#151c2d] pt-5 text-center">
            <Link
              href="/brand/catalog"
              className="inline-flex min-h-[40px] items-center justify-center rounded-full border border-[#d8c69f] bg-[#d8c69f] px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#11141b] no-underline"
            >
              Continue Shopping
            </Link>

            <div className="mx-auto mt-6 max-w-2xl">
              <h3 className="font-serif text-4xl text-[#efe8dd] sm:text-5xl">Track / Check Order Status</h3>
              <p className="mt-2 text-xs text-[#99a2b0]">Enter your details below to check status without logging in.</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                <input
                  className="min-h-[38px] rounded-full border border-[#263044] bg-[#070b15] px-3.5 text-xs text-[#ece6db] outline-none placeholder:text-[#5f6775]"
                  placeholder="Order Number (e.g. #RZ-84)"
                />
                <input
                  className="min-h-[38px] rounded-full border border-[#263044] bg-[#070b15] px-3.5 text-xs text-[#ece6db] outline-none placeholder:text-[#5f6775]"
                  placeholder="Phone Number"
                />
                <button
                  type="button"
                  className="min-h-[38px] rounded-full border border-[#2f384b] px-5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#d7c89f]"
                >
                  Lookup
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
