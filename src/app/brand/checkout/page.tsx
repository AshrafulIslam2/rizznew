import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout | Rizz Leather",
  description: "Complete your secure COD checkout."
};

type CheckoutPageProps = {
  searchParams: Promise<{
    product?: string;
  }>;
};

type CheckoutItem = {
  title: string;
  price: number;
  image: string;
  qty: number;
};

const checkoutItemsMap: Record<string, CheckoutItem[]> = {
  "classic-loafers": [
    {
      title: "The Executive Briefcase",
      price: 18500,
      qty: 1,
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Heritage Bifold Wallet",
      price: 4200,
      qty: 1,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80"
    }
  ],
  "leather-wallets": [
    {
      title: "Heritage Bifold Wallet",
      price: 4200,
      qty: 1,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Classic Dress Belt",
      price: 3500,
      qty: 1,
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80"
    }
  ],
  "formal-belts": [
    {
      title: "Classic Dress Belt",
      price: 3500,
      qty: 1,
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80"
    },
    {
      title: "Heritage Bifold Wallet",
      price: 4200,
      qty: 1,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80"
    }
  ]
};

const formatBdt = (value: number) => `৳ ${value.toLocaleString("en-US")}`;

const inputClassName =
  "mt-1.5 min-h-[44px] w-full rounded-lg border border-[#232a3b] bg-[#070b15] px-3.5 text-sm text-[#ede6d8] outline-none placeholder:text-[#5f6775] focus:border-[#384159]";

export default async function BrandCheckoutPage({ searchParams }: CheckoutPageProps) {
  const { product } = await searchParams;
  const items = checkoutItemsMap[product ?? "classic-loafers"] ?? checkoutItemsMap["classic-loafers"];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 80;
  const codFee = 0;
  const total = subtotal + shipping + codFee;

  return (
    <main className="bg-[#02040b] text-[#f2ede2]">
      <section className="border-y border-[var(--hairline-accent)] py-5 sm:py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <header className="mb-5 sm:mb-6">
            <h1 className="font-serif text-4xl text-[#f5eee3] sm:text-5xl">Checkout</h1>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#b8ac92]">Secure Cash on Delivery (Bangladesh)</p>
          </header>

          <div className="grid gap-4 xl:grid-cols-[1.45fr_0.95fr] xl:items-start">
            <div className="space-y-4">
              <section className="rounded-2xl border border-[#1a2234] bg-[#060a14] p-4 sm:p-5">
                <h2 className="font-serif text-3xl text-[#f0e9dd] sm:text-[1.75rem]">1. Contact Information</h2>
                <div className="mt-3 border-t border-[#171f31] pt-3 sm:pt-4">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                      First Name *
                      <input className={inputClassName} placeholder="Enter first name" />
                    </label>
                    <label className="text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                      Last Name *
                      <input className={inputClassName} placeholder="Enter last name" />
                    </label>
                  </div>

                  <label className="mt-3 block text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                    Phone Number (BD) *
                    <input className={inputClassName} placeholder="+880 1XXXXXXXXX" />
                  </label>
                  <p className="mt-2 text-xs text-[#6f7683]">We will call this number to confirm your order.</p>

                  <label className="mt-3 block text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                    Email Address (Optional)
                    <input className={inputClassName} placeholder="For order tracking updates" />
                  </label>
                </div>
              </section>

              <section className="rounded-2xl border border-[#1a2234] bg-[#060a14] p-4 sm:p-5">
                <h2 className="font-serif text-3xl text-[#f0e9dd] sm:text-[1.75rem]">2. Delivery Address</h2>
                <div className="mt-3 border-t border-[#171f31] pt-3 sm:pt-4">
                  <label className="block text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                    Division *
                    <input className={inputClassName} placeholder="Select Division" />
                  </label>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <label className="text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                      District *
                      <input className={inputClassName} placeholder="Select District" />
                    </label>
                    <label className="text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                      Upazila / Area *
                      <input className={inputClassName} placeholder="Select Area" />
                    </label>
                  </div>
                  <label className="mt-3 block text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                    Street Address / House / Road *
                    <input className={inputClassName} placeholder="House No, Road No, Block, Area" />
                  </label>
                  <label className="mt-3 block text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                    Postal Code (Optional)
                    <input className={inputClassName} placeholder="e.g 1212" />
                  </label>
                </div>
              </section>

              <section className="rounded-2xl border border-[#1a2234] bg-[#060a14] p-4 sm:p-5">
                <h2 className="font-serif text-3xl text-[#f0e9dd] sm:text-[1.75rem]">3. Payment Method</h2>
                <div className="mt-3 border-t border-[#171f31] pt-3 sm:pt-4">
                  <div className="rounded-xl border border-[#2a3242] bg-[#050913] p-3.5 sm:p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#efe7da]">Cash on Delivery (COD)</h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#a9b0bd]">
                          Pay securely with cash to the delivery agent upon receiving your order. No advance payment required.
                        </p>
                      </div>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#2e2b24] text-xs text-[#d8c69f]">✓</span>
                    </div>
                  </div>

                  <label className="mt-3 block text-xs uppercase tracking-[0.08em] text-[#a4adbb]">
                    Delivery Instructions (Optional)
                    <input className={inputClassName} placeholder="E.g., Call before delivery, leave with security guard" />
                  </label>

                  <label className="mt-3 flex items-start gap-2.5 text-xs leading-relaxed text-[#b8bfcb]">
                    <input type="checkbox" className="mt-1 h-4 w-4 rounded border border-[#2f3748] bg-transparent" />
                    <span>
                      I confirm my order and agree to the Cash on Delivery policy. I understand that I am committing to purchase these items.
                    </span>
                  </label>
                </div>
              </section>
            </div>

            <aside className="rounded-2xl border border-[#1a2234] bg-[#080d18] p-4 sm:p-5 xl:sticky xl:top-16">
              <h2 className="font-serif text-3xl text-[#f1eadd]">Order Summary</h2>
              <div className="mt-4 space-y-3">
                {items.map((item) => (
                  <article key={item.title} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-lg border border-[#2a3346] bg-[#050913]">
                        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                      </div>
                      <div>
                        <h3 className="text-lg leading-tight text-[#e9e2d5]">{item.title}</h3>
                        <p className="text-xs text-[#8d95a3]">Qty: {item.qty}</p>
                      </div>
                    </div>
                    <p className="text-xl font-semibold text-[#f0e9de]">{formatBdt(item.price)}</p>
                  </article>
                ))}
              </div>

              <div className="mt-4 space-y-2.5 border-y border-[#1d2538] py-3 text-sm text-[#bcc3cf]">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatBdt(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping (Inside Dhaka)</span>
                  <span>{formatBdt(shipping)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>COD Fee</span>
                  <span>{codFee === 0 ? "Free" : formatBdt(codFee)}</span>
                </div>
              </div>

              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <p className="text-3xl font-semibold text-[#f0e9de]">Total to Pay</p>
                  <p className="text-xs text-[#8d95a3]">Payable upon delivery</p>
                </div>
                <p className="text-4xl font-semibold text-[#d8c69f]">{formatBdt(total)}</p>
              </div>

              <Link
                href="/brand/thank-you"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-[#d8c69f] bg-[#d8c69f] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#11141b] no-underline"
              >
                Place COD Order
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
