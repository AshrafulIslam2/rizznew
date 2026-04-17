import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Rizz Leather",
  description: "Privacy policy for Rizz Leather website and inquiries."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-3 px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-[var(--muted)]">We only use submitted contact details to respond to inquiries and process business requests.</p>
    </main>
  );
}
