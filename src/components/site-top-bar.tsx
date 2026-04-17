import { CONTACT } from "@/lib/site";
import { LanguageToggle } from "@/components/language-toggle";

export function SiteTopBar() {
  return (
    <div className="surface-soft hairline-accent hidden border-b text-[11px] text-[var(--muted)] sm:text-xs lg:block">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 md:justify-start">
          <span>{`WhatsApp: ${CONTACT.whatsappDisplay}`}</span>
          <span>{`Email: ${CONTACT.email}`}</span>
          <span>{`Location: ${CONTACT.location}`}</span>
          <span>{`Shipping: ${CONTACT.shipping}`}</span>
        </div>
        <div className="flex justify-center md:justify-end">
          <LanguageToggle className="flex" compact />
        </div>
      </div>
    </div>
  );
}
