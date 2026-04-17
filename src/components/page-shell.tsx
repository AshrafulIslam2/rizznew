import Link from "next/link";

type Props = {
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageShell({ title, description, primaryCta, secondaryCta }: Props) {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="max-w-3xl text-[var(--muted)]">{description}</p>
      {primaryCta || secondaryCta ? (
        <div className="flex flex-wrap gap-3">
          {primaryCta ? (
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
            </Link>
          ) : null}
          {secondaryCta ? (
            <Link href={secondaryCta.href} className="btn-outline">
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      ) : null}
    </main>
  );
}
