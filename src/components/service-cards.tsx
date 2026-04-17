import Link from "next/link";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

interface ServiceCardsProps {
  title: string;
  subtitle: string;
  cards: ServiceCard[];
}

export function ServiceCards({ title, subtitle, cards }: ServiceCardsProps) {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white">{title}</h2>
          <p className="text-[var(--muted)] text-lg">{subtitle}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-[var(--border)] rounded-lg p-8 space-y-6 hover:border-[var(--primary)] transition-colors"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center border-2 border-[var(--border)] rounded-full mx-auto">
                <span className="text-3xl">{card.icon}</span>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-serif text-white">{card.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href={card.href}
                  className="block text-center text-xs uppercase tracking-[0.2em] text-[var(--primary)] hover:text-white transition-colors font-semibold"
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
