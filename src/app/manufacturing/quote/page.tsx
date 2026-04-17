import type { Metadata } from "next";
import { RequestForm } from "@/components/forms/request-form";
import { formLabels } from "@/lib/form-labels";

export const metadata: Metadata = {
  title: "OEM Quote | Rizz Leather",
  description: "Submit your OEM quote request for private label manufacturing.",
  openGraph: {
    title: "OEM Quote | Rizz Leather",
    description: "Submit your OEM quote request for private label manufacturing."
  }
};

export default function ManufacturingQuotePage() {
  return (
    <main className="mx-auto max-w-3xl space-y-5 px-4 py-10">
      <h1 className="text-3xl font-bold">Request OEM Quote</h1>
      <p className="text-[var(--muted)]">Share your product specs, target quantity, and expected timeline.</p>
      <RequestForm formType="oem-quote" locale="en" labels={formLabels} />
    </main>
  );
}
