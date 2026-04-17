import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Rizz Leather",
  description: "Terms of use for Rizz Leather website and services."
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-3 px-4 py-10">
      <h1 className="text-3xl font-bold">Terms</h1>
      <p className="text-[var(--muted)]">Order terms, quotation conditions, and service scope are confirmed per project or wholesale agreement.</p>
    </main>
  );
}
