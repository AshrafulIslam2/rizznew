import Link from "next/link";

// Intentionally isolated from the main navbar so primary navigation remains unchanged.
const SEO_ROUTE_LINKS = Object.freeze([
  "/sandals-manufacturer-bangladesh",
  "/sandals-manufacturer-dhaka",
  "/sandals-wholesaler-dhaka",
  "/sandals-wholesaler-chittagong",
  "/sandals-wholesaler-bangladesh",
  "/leather-sandals-wholesaler-dhaka",
  "/leather-sandals-wholesaler-bangladesh",
  "/leather-sandals-factory-bangladesh",
  "/leather-sandals-factory-chittagong",
  "/leather-sandals-manufacturer-chittagong",
  "/leather-sandals-manufacturer-bangladesh",
  "/sandals-factory-bangladesh",
  "/sandals-factory-chittagong",
  "/sandals-manufacturer-chittagong",
  "/mens-sandals-factory-chittagong",
  "/womens-sandals-factory-chittagong",
  "/low-moq-footwear-manufacturer"
]);

function formatLabel(path: string) {
  return path
    .replace(/^\//, "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function SeoRoutesTopbar() {
  return (
    <aside aria-label="Featured route links" className="border-b border-[var(--hairline-accent)] bg-[#060911]">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          {SEO_ROUTE_LINKS.map((href) => (
            <Link
              key={href}
              href={href}
              className="inline-flex min-h-[34px] shrink-0 items-center rounded-md border border-[var(--border)] bg-[#0d1320] px-3 text-[11px] font-medium uppercase tracking-[0.05em] text-[#b8c0cf] no-underline transition-colors hover:border-[#556a8f] hover:text-[#e7edf8]"
            >
              {formatLabel(href)}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}