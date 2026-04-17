import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Rizz Leather",
  description: "Shipping policy for Bangladesh and international destinations."
};

export default function ShippingPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-3 px-4 py-10">
      <h1 className="text-3xl font-bold">Shipping Policy</h1>
      <p className="text-[var(--muted)]">Shipping coverage includes Bangladesh, USA, EU, and Middle East subject to order type and delivery terms.</p>
    </main>
  );
}
