import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cart | Rizz Leather",
  description: "Review your selected products before secure checkout."
};

type CartPageProps = {
  searchParams: Promise<{
    product?: string;
  }>;
};

type CartItem = {
  slug: string;
  title: string;
  subtitle: string;
  size: string;
  color: string;
  unitPrice: number;
  quantity: number;
  image: string;
};

const productMap: Record<string, Omit<CartItem, "quantity">> = {
  "classic-loafers": {
    slug: "classic-loafers",
    title: "The Executive Briefcase",
    subtitle: "Heritage Collection",
    size: 'Standard (15")',
    color: "Midnight Black",
    unitPrice: 18500,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80"
  },
  "leather-wallets": {
    slug: "leather-wallets",
    title: "Heritage Bifold Wallet",
    subtitle: "Signature Accessories",
    size: "Standard",
    color: "Onyx Black",
    unitPrice: 4200,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
  },
  "formal-belts": {
    slug: "formal-belts",
    title: "Classic Dress Belt",
    subtitle: "Signature Accessories",
    size: "36-38",
    color: "Espresso Brown",
    unitPrice: 3500,
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80"
  }
};

const recommendations = [
  {
    title: "Leather Card Sleeve",
    subtitle: "Minimal daily carry",
    price: "1,600",
    href: "/brand/catalog/leather-wallets",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Signature Key Fob",
    subtitle: "Hand-finished leather",
    price: "1,200",
    href: "/brand/catalog/classic-loafers",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Classic Dress Belt",
    subtitle: "Formal essential",
    price: "3,500",
    href: "/brand/catalog/formal-belts",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80"
  }
];

const assuranceItems = [
  {
    icon: "🛡",
    title: "Secure Cash on Delivery",
    detail: "Pay only when you receive your order."
  },
  {
    icon: "✓",
    title: "100% Authentic Leather",
    detail: "Handcrafted in Chittagong, Bangladesh."
  },
  {
    icon: "🚚",
    title: "Fast Local Delivery",
    detail: "2-3 business days nationwide."
  }
];

const formatBdt = (value: number) => `৳ ${value.toLocaleString("en-US")}`;

export default async function BrandCartPage({ searchParams }: CartPageProps) {
  const { product } = await searchParams;
  const selected = product ? productMap[product] : productMap["classic-loafers"];

  const cartItems: CartItem[] = [
    {
      ...(selected ?? productMap["classic-loafers"]),
      quantity: 1
    },
    {
      ...productMap["leather-wallets"],
      quantity: 1
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const shipping = 180;
  const discount = 700;
  const total = subtotal + shipping - discount;

  return (
    <main className="bg-[#02040b] text-[#f2ede2]">
      <section className="border-y border-[var(--hairline-accent)] py-6 sm:py-7">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <div className="mb-5 sm:mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#c6b791]">Checkout</p>
            <h1 className="mt-2 font-serif text-4xl leading-[1.02] text-[#f4eee3] sm:text-5xl">Your Cart</h1>
            <p className="mt-2 max-w-2xl text-sm text-[#aeb4bf] sm:text-base">
              Review selected pieces, confirm delivery details, and proceed to secure checkout.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.35fr_0.85fr] xl:items-start">
            <div className="space-y-3">
              {cartItems.map((item) => (
                <article key={`${item.slug}-${item.size}`} className="rounded-2xl border border-[#1e2537] bg-[#090d18] p-3 sm:p-4">
                  <div className="grid gap-3 sm:grid-cols-[112px_1fr] sm:items-center">
                    <div className="overflow-hidden rounded-xl border border-[#20283a] bg-[#060a14]">
                      <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                    </div>

                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#b6ac93]">{item.subtitle}</p>
                      <h2 className="font-serif text-2xl leading-[1.05] text-[#eee7dc] sm:text-3xl">{item.title}</h2>
                      <div className="flex flex-wrap gap-1.5 text-[10px] uppercase tracking-[0.12em] text-[#b3bac7]">
                        <span className="rounded-full border border-[#2f3749] px-2.5 py-0.5">Size: {item.size}</span>
                        <span className="rounded-full border border-[#2f3749] px-2.5 py-0.5">Color: {item.color}</span>
                        <span className="rounded-full border border-[#2f3749] px-2.5 py-0.5">Qty: {item.quantity}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-2xl font-semibold text-[#efe9de]">{formatBdt(item.unitPrice)}</p>
                        <Link
                          href={`/brand/catalog/${item.slug}`}
                          className="inline-flex min-h-[30px] items-center justify-center rounded-full border border-[#3a4359] px-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#d6c7a0] no-underline"
                        >
                          Edit Item
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="rounded-2xl border border-[#20283a] bg-[#080c16] p-4 sm:p-5 xl:sticky xl:top-16">
              <h3 className="font-serif text-3xl text-[#f0eadf]">Order Summary</h3>
              <div className="mt-4 space-y-3 border-y border-[#1f2638] py-4 text-xs text-[#c0c6d1] sm:text-sm">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatBdt(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>{formatBdt(shipping)}</span>
                </div>
                <div className="flex items-center justify-between text-[#8fe6af]">
                  <span>Discount</span>
                  <span>- {formatBdt(discount)}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#b6ac93]">Total</p>
                <p className="text-3xl font-semibold text-[#efe9de]">{formatBdt(total)}</p>
              </div>

              <Link
                href={`/brand/checkout?product=${selected?.slug ?? "classic-loafers"}`}
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-[#d8c69f] bg-[#d8c69f] px-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#10131a] no-underline"
              >
                Proceed to COD Checkout
              </Link>
              <Link
                href="https://wa.me/8801712345678"
                className="mt-2 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-[#145638] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#27d366] no-underline"
              >
                WhatsApp for Intl Orders
              </Link>

              <div className="mt-4 space-y-2">
                {assuranceItems.map((item) => (
                  <article key={item.title} className="rounded-lg border border-[#182033] bg-[#050913] px-3 py-2.5">
                    <div className="flex items-start gap-2.5">
                      <span className="text-sm leading-none text-[#d7c89f]">{item.icon}</span>
                      <div>
                        <h4 className="text-sm font-semibold text-[#e6e0d4]">{item.title}</h4>
                        <p className="text-xs text-[#9ea6b4]">{item.detail}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-7 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <div className="mb-5 text-center">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#c6b791]">You may also like</p>
            <h2 className="mt-2 font-serif text-4xl text-[#f2ece1] sm:text-5xl">Curated Add-Ons</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block rounded-2xl border border-[#1d2435] bg-[#090d18] p-3 no-underline transition hover:border-[#2b3449]"
              >
                <div className="overflow-hidden rounded-xl border border-[#20283a] bg-[#060a14]">
                  <div className="aspect-[16/12] bg-cover bg-center transition duration-500 hover:scale-[1.03]" style={{ backgroundImage: `url('${item.image}')` }} />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-2xl text-[#efe8dd]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#aeb4bf]">{item.subtitle}</p>
                  <p className="mt-2 text-2xl font-semibold text-[#efe9de]">৳ {item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
