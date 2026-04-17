import Link from "next/link";
import { CONTACT } from "@/lib/site";

type Props = {
  className?: string;
  showCatalog?: boolean;
  compact?: boolean;
  onAction?: () => void;
};

export function CTAButtons({ className = "", showCatalog = false, compact = false, onAction }: Props) {
  const sizeClass = compact ? "px-2.5 text-sm" : "px-4 text-sm md:text-base";
  const widthClass = "w-full sm:w-auto";
  const stableClass = "shrink-0 whitespace-nowrap leading-none";

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 ${className}`}>
      <Link href="/manufacturing/quote" onClick={onAction} className={`btn-primary ${stableClass} ${widthClass} ${sizeClass}`}>
        Request OEM Quote
      </Link>
      <Link href="/wholesale/apply" onClick={onAction} className={`btn-outline ${stableClass} ${widthClass} ${sizeClass}`}>
        Wholesale Apply
      </Link>
      {showCatalog ? (
        <Link href="/brand/catalog" onClick={onAction} className={`btn-outline ${stableClass} ${widthClass} ${sizeClass}`}>
          Browse Catalog
        </Link>
      ) : null}
      <a
        href={`https://wa.me/${CONTACT.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        onClick={onAction}
        className={`btn-whatsapp ${stableClass} ${widthClass} ${sizeClass}`}
      >
        WhatsApp
      </a>
    </div>
  );
}
