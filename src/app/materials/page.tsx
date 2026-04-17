import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Materials | Rizz Leather",
  description: "Materials and craftsmanship details for Rizz products."
};

export default function MaterialsPage() {
  return (
    <PageShell
      title="Materials & Craftsmanship"
      description="We use selected leather grades, tested accessories, and process-controlled finishing to balance durability and comfort."
    />
  );
}
