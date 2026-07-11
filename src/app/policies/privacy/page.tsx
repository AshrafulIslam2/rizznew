import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RIZZ Leather",
  description: "RIZZ Leather privacy policy — how we collect, use, and protect your personal data. Read your rights and our data practices.",
  alternates: { canonical: "/policies/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-3 px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-[var(--muted)]">We only use submitted contact details to respond to inquiries and process business requests.</p>
    </main>
  );
}
