"use client";

import { useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";

export function CatalogDownloadButton({ catalogUrl }: { catalogUrl: string }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ company_name: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!catalogUrl) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.company_name.trim() || !form.phone.trim()) {
      setError("Please enter your company/shop name and phone number.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      await fetch(`${API}/checkout-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: form.company_name,
          phone: form.phone,
          source: "catalog_download",
        }),
      }).catch(() => {});
      window.open(catalogUrl, "_blank");
      setOpen(false);
      setForm({ company_name: "", phone: "" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="btn-ghost">
        Download Catalog
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-sm border border-[var(--border)] bg-[var(--surface)] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl text-[var(--cream)]">Download Catalog</h3>
            <p className="mt-1 text-xs text-[var(--muted)]">Tell us a bit about your company so we can follow up.</p>
            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input
                value={form.company_name}
                onChange={(e) => setForm((f) => ({ ...f, company_name: e.target.value }))}
                placeholder="Company / Shop Name"
                className="w-full border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--gold-dim)] focus:outline-none"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder="Phone Number"
                className="w-full border border-[var(--border-soft)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--gold-dim)] focus:outline-none"
              />
              {error && <p className="text-[10px] text-red-400">{error}</p>}
              <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-50">
                {submitting ? "Preparing…" : "Get Catalog"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
