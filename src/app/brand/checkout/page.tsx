"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const fmt = (n: number) => `৳ ${n.toLocaleString("en-US")}`;

const SHIPPING = 120;
const FREE_THRESHOLD = 5000;
const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";

const DIVISIONS = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Rangpur", "Mymensingh"];

type CalcResult = {
  subtotal: number;
  discount_amount: number;
  shipping_fee: number;
  free_shipping: boolean;
  free_gifts: { product_id: string; name: string; image: string | null; price: number }[];
  total: number;
  applied_campaigns: { id: string; name: string; code: string | null }[];
  code_valid: boolean | null;
  code_message: string | null;
};

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    division: "", district: "", area: "", address: "", postal: "",
    note: "", agreed: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [placing, setPlacing] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [promoInput, setPromoInput] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [calc, setCalc] = useState<CalcResult | null>(null);
  const [calcLoading, setCalcLoading] = useState(false);

  const baseShipping = total >= FREE_THRESHOLD ? 0 : SHIPPING;

  useEffect(() => {
    if (items.length === 0) return;
    setCalcLoading(true);
    const ctrl = new AbortController();
    fetch(`${API}/campaigns/calculate-cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: ctrl.signal,
      body: JSON.stringify({
        items: items.map((i) => ({ product_id: i.productId, price: i.price, quantity: i.quantity })).filter((i) => i.product_id),
        shipping_fee: baseShipping,
        code: appliedCode || undefined,
      }),
    })
      .then((r) => r.ok ? r.json() : null)
      .then((data: CalcResult | null) => setCalc(data))
      .catch(() => {})
      .finally(() => setCalcLoading(false));
    return () => ctrl.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, appliedCode, baseShipping]);

  const shipping = calc ? calc.shipping_fee : baseShipping;
  const discount = calc?.discount_amount ?? 0;
  const grandTotal = calc ? calc.total : total + shipping;

  function applyPromo() {
    setAppliedCode(promoInput.trim());
  }
  function removePromo() {
    setAppliedCode("");
    setPromoInput("");
  }

  function set(field: string, value: string | boolean) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.phone.trim() || !/^(\+?880|0)1[3-9]\d{8}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid Bangladesh phone number";
    if (!form.division) e.division = "Required";
    if (!form.district.trim()) e.district = "Required";
    if (!form.area.trim()) e.area = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.agreed) e.agreed = "You must agree to the COD policy";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    if (items.length === 0) return;

    setPlacing(true);
    setSubmitError(null);
    try {
      const res = await fetch(`${API}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: `${form.firstName} ${form.lastName}`.trim(),
          customer_phone: form.phone,
          division: form.division,
          district: form.district,
          area: form.area,
          address: form.postal ? `${form.address} (Postal: ${form.postal})` : form.address,
          items: items.map((i) => ({
            slug: i.slug,
            name: i.name,
            price: i.price,
            size: i.size,
            color: i.color,
            quantity: i.quantity,
            image: i.image,
          })),
          subtotal: total,
          shipping_fee: shipping,
          discount_amount: discount,
          promo_code: appliedCode || undefined,
          campaign_ids: calc?.applied_campaigns.map((c) => c.id) ?? [],
          free_gifts: calc?.free_gifts ?? [],
          total: grandTotal,
          payment_method: "COD",
          notes: form.note || undefined,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      clear();
      router.push("/brand/thank-you");
    } catch {
      setSubmitError("Could not place your order. Please check your connection and try again.");
      setPlacing(false);
    }
  }

  const inputCls = (field: string) =>
    `mt-1.5 w-full border bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none transition-colors ${
      errors[field]
        ? "border-red-500 focus:border-red-400"
        : "border-[var(--border-soft)] focus:border-[var(--gold-dim)]"
    }`;

  if (items.length === 0 && !placing) {
    return (
      <main className="py-24 text-center">
        <p className="font-serif text-2xl text-[var(--cream)]">Your cart is empty</p>
        <Link href="/brand/catalog" className="btn-primary mt-8 inline-flex">Shop Now</Link>
      </main>
    );
  }

  return (
    <main>
      <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-10 text-center">
        <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">Final Step</p>
        <h1 className="mt-2 font-serif text-4xl text-[var(--cream)] sm:text-5xl">Checkout</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Cash on Delivery — Bangladesh</p>
      </section>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mx-auto max-w-7xl grid gap-8 px-5 py-10 lg:grid-cols-[1fr_380px] lg:items-start lg:px-8">
          {/* Left */}
          <div className="space-y-6">
            {/* Contact */}
            <section className="border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="font-serif text-2xl text-[var(--cream)]">1. Contact Information</h2>
              <div className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">First Name *</span>
                    <input className={inputCls("firstName")} placeholder="Rafiqul" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
                    {errors.firstName && <p className="mt-1 text-[10px] text-red-400">{errors.firstName}</p>}
                  </label>
                  <label>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Last Name *</span>
                    <input className={inputCls("lastName")} placeholder="Islam" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
                    {errors.lastName && <p className="mt-1 text-[10px] text-red-400">{errors.lastName}</p>}
                  </label>
                </div>
                <label>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Phone Number (Bangladesh) *</span>
                  <input className={inputCls("phone")} placeholder="01XXXXXXXXX" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                  {errors.phone && <p className="mt-1 text-[10px] text-red-400">{errors.phone}</p>}
                  <p className="mt-1 text-[10px] text-[var(--muted)]">We will call to confirm your order before dispatch.</p>
                </label>
                <label>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Email (Optional)</span>
                  <input className={inputCls("email")} placeholder="For order tracking" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
                </label>
              </div>
            </section>

            {/* Delivery */}
            <section className="border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="font-serif text-2xl text-[var(--cream)]">2. Delivery Address</h2>
              <div className="mt-5 space-y-4">
                <label>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Division *</span>
                  <select
                    className={inputCls("division")}
                    value={form.division}
                    onChange={(e) => set("division", e.target.value)}
                  >
                    <option value="">Select Division</option>
                    {DIVISIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                  {errors.division && <p className="mt-1 text-[10px] text-red-400">{errors.division}</p>}
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">District *</span>
                    <input className={inputCls("district")} placeholder="e.g. Chattogram" value={form.district} onChange={(e) => set("district", e.target.value)} />
                    {errors.district && <p className="mt-1 text-[10px] text-red-400">{errors.district}</p>}
                  </label>
                  <label>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Upazila / Area *</span>
                    <input className={inputCls("area")} placeholder="e.g. Agrabad" value={form.area} onChange={(e) => set("area", e.target.value)} />
                    {errors.area && <p className="mt-1 text-[10px] text-red-400">{errors.area}</p>}
                  </label>
                </div>
                <label>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Street Address *</span>
                  <input className={inputCls("address")} placeholder="House No, Road, Block" value={form.address} onChange={(e) => set("address", e.target.value)} />
                  {errors.address && <p className="mt-1 text-[10px] text-red-400">{errors.address}</p>}
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Postal Code (Optional)</span>
                    <input className={inputCls("postal")} placeholder="e.g. 4000" value={form.postal} onChange={(e) => set("postal", e.target.value)} />
                  </label>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="font-serif text-2xl text-[var(--cream)]">3. Payment Method</h2>
              <div className="mt-5">
                <div className="border border-[var(--gold-dim)] bg-[var(--gold-tint)] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-[var(--cream)]">Cash on Delivery (COD)</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">Pay in cash when your order arrives. No advance required. Our delivery agent will collect the amount.</p>
                    </div>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-[10px] text-[#0a0806]">✓</span>
                  </div>
                </div>

                <label>
                  <span className="mt-4 block text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Delivery Notes (Optional)</span>
                  <input className={inputCls("note")} placeholder="E.g., Call before arriving" value={form.note} onChange={(e) => set("note", e.target.value)} />
                </label>

                <label className="mt-5 flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 accent-[var(--gold)]"
                    checked={form.agreed}
                    onChange={(e) => set("agreed", e.target.checked)}
                  />
                  <span className="text-xs leading-relaxed text-[var(--muted)]">
                    I confirm my order and agree to the{" "}
                    <Link href="/policies/terms" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] underline">Terms of Service</Link>{" "}
                    and{" "}
                    <Link href="/policies/returns" className="text-[var(--gold-dim)] hover:text-[var(--gold-light)] underline">Return Policy</Link>.
                    I understand I am committing to purchase these items upon delivery.
                  </span>
                </label>
                {errors.agreed && <p className="mt-1 text-[10px] text-red-400">{errors.agreed}</p>}
              </div>
            </section>
          </div>

          {/* Order summary */}
          <aside className="border border-[var(--border)] bg-[var(--surface)] p-6 lg:sticky lg:top-24">
            <h2 className="font-serif text-2xl text-[var(--cream)]">Order Summary</h2>

            <div className="mt-5 space-y-4">
              {items.map((item) => (
                <div key={`${item.slug}-${item.size}-${item.color}`} className="flex items-center gap-3">
                  <div
                    className="h-14 w-14 shrink-0 bg-cover bg-center border border-[var(--border)]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm text-[var(--cream)]">{item.name}</p>
                    <p className="text-[10px] text-[var(--muted)]">Size: {item.size} · Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm text-[var(--gold-light)]">{fmt(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            {/* Promo code */}
            <div className="mt-5 border-t border-[var(--hairline)] pt-5">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Promo Code</span>
              {appliedCode ? (
                <div className="mt-2 flex items-center justify-between border border-[var(--gold-dim)] bg-[var(--gold-tint)] px-3 py-2">
                  <span className="font-mono text-xs uppercase text-[var(--gold-light)]">{appliedCode}</span>
                  <button type="button" onClick={removePromo} className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] hover:text-red-400 transition-colors">
                    Remove
                  </button>
                </div>
              ) : (
                <div className="mt-2 flex gap-2">
                  <input
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                    placeholder="Enter code"
                    className="flex-1 border border-[var(--border-soft)] bg-[var(--bg)] px-3 py-2 text-sm uppercase text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--gold-dim)]"
                  />
                  <button type="button" onClick={applyPromo} disabled={!promoInput.trim() || calcLoading} className="btn-outline px-4 text-[10px] disabled:opacity-50">
                    Apply
                  </button>
                </div>
              )}
              {calc?.code_message && (
                <p className="mt-1.5 text-xs text-red-400">{calc.code_message}</p>
              )}
              {calc?.code_valid && (
                <p className="mt-1.5 text-xs text-emerald-400">Promo code applied!</p>
              )}
            </div>

            <div className="mt-5 space-y-2 border-t border-[var(--hairline)] pt-5 text-sm text-[var(--muted)]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[var(--cream)]">{fmt(total)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <span>Discount{calc && calc.applied_campaigns.length > 0 ? ` (${calc.applied_campaigns.map((c) => c.name).join(", ")})` : ""}</span>
                  <span className="text-emerald-400">−{fmt(discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-emerald-400" : "text-[var(--cream)]"}>
                  {shipping === 0 ? "Free" : fmt(shipping)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>COD Fee</span>
                <span className="text-emerald-400">Free</span>
              </div>
            </div>

            {calc && calc.free_gifts.length > 0 && (
              <div className="mt-4 space-y-2 border border-emerald-800 bg-emerald-950/30 px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-400">🎁 Free Gift Included</p>
                {calc.free_gifts.map((g) => (
                  <p key={g.product_id} className="text-xs text-[var(--muted)]">{g.name}</p>
                ))}
              </div>
            )}

            <div className="mt-4 flex items-baseline justify-between border-t border-[var(--hairline)] pt-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted)]">Total Due</span>
              <span className="font-serif text-2xl text-[var(--cream)]">{fmt(grandTotal)}</span>
            </div>
            <p className="mt-1 text-[10px] text-[var(--muted)]">Payable on delivery</p>

            {submitError && (
              <p className="mt-3 text-xs text-red-400">{submitError}</p>
            )}

            <button
              type="submit"
              disabled={placing}
              className="btn-primary mt-6 w-full disabled:opacity-60"
            >
              {placing ? "Placing Order…" : "Place COD Order"}
            </button>

            <Link
              href="/brand/cart"
              className="mt-3 block text-center text-[10px] uppercase tracking-[0.25em] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              ← Edit Cart
            </Link>
          </aside>
        </div>
      </form>
    </main>
  );
}
