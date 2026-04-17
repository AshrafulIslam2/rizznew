import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Rizz Leather",
  description: "Cookie usage and browser storage policy for Rizz Leather website."
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-3 px-4 py-10">
      <h1 className="text-3xl font-bold">Cookie Policy</h1>
      <p className="text-[var(--muted)]">We may use essential cookies and analytics storage to improve website experience and performance.</p>
    </main>
  );
}
