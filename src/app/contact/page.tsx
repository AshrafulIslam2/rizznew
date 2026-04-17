import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Rizz Leather",
  description: "Contact Rizz Leather for OEM, wholesale, and catalog inquiries."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 px-4 py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-[var(--muted)]">Reach us directly for OEM, wholesale, or brand inquiries.</p>
      <div className="surface-panel space-y-2 rounded-xl border p-5">
        <p>WhatsApp: {CONTACT.whatsappDisplay}</p>
        <p>Email: {CONTACT.email}</p>
        <p>Location: {CONTACT.location}</p>
      </div>
    </main>
  );
}
