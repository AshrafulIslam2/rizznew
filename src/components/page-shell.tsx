interface PageShellProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-6">{title}</h1>
        {description && (
          <p className="text-[#6B6B6B] text-lg leading-relaxed max-w-2xl">{description}</p>
        )}
        {children}
      </section>
    </main>
  );
}
