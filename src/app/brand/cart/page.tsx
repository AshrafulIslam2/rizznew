"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/lib/products";

const fmt = (n: number) => `৳ ${n.toLocaleString("en-US")}`;

const SHIPPING = 120;
const FREE_SHIPPING_THRESHOLD = 5000;

export default function CartPage() {
  const { items, removeItem, updateQty, total, count } = useCart();

  const related = PRODUCTS.filter((p) => !items.some((i) => i.slug === p.slug)).slice(0, 3);
  const shippingCost = total >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING;
  const grandTotal = total + shippingCost;

  return (
    <main>
      {/* Header */}
      <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-10 text-center">
        <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">Review</p>
        <h1 className="mt-2 font-serif text-4xl text-[var(--cream)] sm:text-5xl">Your Cart</h1>
        {count > 0 && (
          <p className="mt-2 text-sm text-[var(--muted)]">{count} {count === 1 ? "item" : "items"}</p>
        )}
      </section>

      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        {items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl text-[var(--cream)]">Your cart is empty</p>
            <p className="mt-2 text-sm text-[var(--muted)]">Discover the collection and find something you love.</p>
            <Link href="/brand/catalog" className="btn-primary mt-8 inline-flex">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            {/* Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={`${item.slug}-${item.size}-${item.color}`}
                  className="grid grid-cols-[96px_1fr] gap-5 border border-[var(--border)] bg-[var(--surface)] p-4 sm:grid-cols-[120px_1fr] sm:p-5"
                >
                  <div
                    className="h-24 bg-cover bg-center sm:h-[120px]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex flex-col justify-between gap-2">
                    <div>
                      <h2 className="font-serif text-xl text-[var(--cream)]">{item.name}</h2>
                      <div className="mt-1 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                        <span>Size: {item.size}</span>
                        <span>·</span>
                        <span>Colour: {item.color}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      {/* Qty */}
                      <div className="inline-flex items-center border border-[var(--border-soft)]">
                        <button
                          type="button"
                          onClick={() => updateQty(item.slug, item.size, item.color, item.quantity - 1)}
                          className="h-9 w-9 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                        >
                          −
                        </button>
                        <span className="w-10 text-center text-sm text-[var(--cream)]">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.slug, item.size, item.color, item.quantity + 1)}
                          className="h-9 w-9 flex items-center justify-center text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-[var(--gold-light)]">{fmt(item.price * item.quantity)}</span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.slug, item.size, item.color)}
                          className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] hover:text-red-400 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Summary */}
            <aside className="border border-[var(--border)] bg-[var(--surface)] p-6 lg:sticky lg:top-24">
              <h2 className="font-serif text-2xl text-[var(--cream)]">Order Summary</h2>

              <div className="mt-5 space-y-3 border-t border-[var(--hairline)] pt-5 text-sm text-[var(--muted)]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[var(--cream)]">{fmt(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shippingCost === 0 ? "text-emerald-400" : "text-[var(--cream)]"}>
                    {shippingCost === 0 ? "Free" : fmt(shippingCost)}
                  </span>
                </div>
                {shippingCost > 0 && (
                  <p className="text-[10px] text-[var(--muted)]">
                    Add {fmt(FREE_SHIPPING_THRESHOLD - total)} more for free shipping
                  </p>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[var(--hairline)] pt-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Total</span>
                <span className="font-serif text-2xl text-[var(--cream)]">{fmt(grandTotal)}</span>
              </div>

              <p className="mt-2 text-[10px] text-[var(--muted)]">Payable upon delivery (COD)</p>

              <Link href="/brand/checkout" className="btn-primary mt-5 w-full text-center">
                Proceed to Checkout
              </Link>

              <Link href="/brand/catalog" className="mt-3 block text-center text-[10px] uppercase tracking-[0.25em] text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                Continue Shopping
              </Link>

              <div className="mt-6 space-y-2 border-t border-[var(--hairline)] pt-5">
                {[
                  { icon: "✓", text: "Cash on Delivery — no advance payment" },
                  { icon: "✓", text: "7-day returns on unworn items" },
                  { icon: "✓", text: "Genuine leather, guaranteed" }
                ].map((item) => (
                  <p key={item.text} className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
                    <span className="text-[var(--gold-dim)]">{item.icon}</span>
                    {item.text}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        )}

        {/* You may also like */}
        {related.length > 0 && (
          <section className="mt-16 border-t border-[var(--hairline)] pt-14">
            <p className="mb-2 text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">Suggested</p>
            <h2 className="mb-8 font-serif text-2xl text-[var(--cream)]">You May Also Like</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <Link key={p.slug} href={`/brand/catalog/${p.slug}`} className="group block no-underline">
                  <div className="overflow-hidden bg-[var(--surface)]">
                    <div
                      className="h-[200px] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ backgroundImage: `url('${p.images[0]}')` }}
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-base text-[var(--cream)]">{p.name}</h3>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{p.material}</p>
                    <p className="mt-1 text-sm text-[var(--gold-light)]">{fmt(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
