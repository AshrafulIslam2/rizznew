import Image from "next/image";
import { CONTACT } from "@/lib/site";

type Props = {
  name: string;
  image: string;
  priceText?: string;
};

export function ProductCard({ name, image, priceText = "Contact for price" }: Props) {
  const text = encodeURIComponent(`Hi, I want to order this product: ${name}`);

  return (
    <article className="product-card-surface overflow-hidden rounded-xl border border-[var(--hairline-accent)]">
      <Image src={image} alt={name} width={500} height={360} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="h-52 w-full object-cover sm:h-56" />
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-[var(--muted)]">{priceText}</p>
        <a
          href={`https://wa.me/${CONTACT.whatsappNumber}?text=${text}`}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp w-full text-sm sm:w-auto"
        >
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
