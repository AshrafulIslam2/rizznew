import Link from "next/link";
import Image from "next/image";

interface BestSellerProduct {
  id: string;
  image: string;
  title: string;
  material: string;
  href: string;
}

interface BestSellersProps {
  title: string;
  subtitle: string;
  products: BestSellerProduct[];
}

export function BestSellers({ title, subtitle, products }: BestSellersProps) {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white">{title}</h2>
          <p className="text-[var(--muted)]">{subtitle}</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={product.href} className="relative block overflow-hidden rounded-lg aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </Link>

              {/* Product Info */}
              <div className="space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-serif text-white group-hover:text-[var(--primary)] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-[var(--muted)] mt-1">
                      {product.material}
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/8801750514197?text=Interested in ${product.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--primary)] hover:text-white transition-colors"
                    title="Contact on WhatsApp"
                  >
                    💬
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/brand/catalog"
            className="inline-block border border-[var(--primary)] text-[var(--primary)] px-8 py-3 uppercase text-xs tracking-widest hover:bg-[var(--primary)] hover:text-black transition-colors"
          >
            View Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}
