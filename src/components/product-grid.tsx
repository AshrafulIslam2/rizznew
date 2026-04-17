import Link from "next/link";
import Image from "next/image";

interface ProductGridItem {
  id: string;
  image: string;
  title: string;
  category?: string;
}

interface ProductGridProps {
  title: string;
  subtitle?: string;
  showViewAll?: boolean;
  viewAllLink?: string;
  items: ProductGridItem[];
  columns?: 2 | 3 | 4;
}

export function ProductGrid({
  title,
  subtitle,
  showViewAll = false,
  viewAllLink = "/brand/catalog",
  items,
  columns = 4,
}: ProductGridProps) {
  const gridColsClass = {
    2: "grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)] mb-3">Collections</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">{title}</h2>
            {subtitle && <p className="text-[var(--muted)] mt-3">{subtitle}</p>}
          </div>
          {showViewAll && (
            <Link href={viewAllLink} className="text-xs uppercase tracking-[0.2em] text-[var(--primary)] hover:text-white transition-colors">
              ( View All Categories )
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 ${gridColsClass[columns]} gap-6`}>
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/brand/catalog/${item.id}`}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-end">
                <div className="p-4 md:p-6 w-full">
                  {item.category && (
                    <p className="text-xs uppercase tracking-widest text-[var(--primary)] mb-2">
                      {item.category}
                    </p>
                  )}
                  <h3 className="text-white font-serif text-lg md:text-xl group-hover:text-[var(--primary)] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
