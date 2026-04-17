import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return/Refund Policy | Rizz Leather",
  description: "Return and refund policy for brand retail orders."
};

export default function ReturnsPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-3 px-4 py-10">
      <h1 className="text-3xl font-bold">Return/Refund (Brand orders)</h1>
      <p className="text-[var(--muted)]">Return and refund terms apply to retail brand orders based on product condition and reporting window.</p>
    </main>
  );
}
