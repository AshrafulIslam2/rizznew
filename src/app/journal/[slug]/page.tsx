import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, fetchPost, fetchPosts, type Section } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug) ?? POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rizzleather.com";

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${baseUrl}/journal/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["RIZZ Leather"],
      tags: [post.category, "leather sandals", "Bangladesh", "Chittagong"],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-10 font-serif text-2xl text-[var(--cream)] sm:text-3xl"
        >
          {s.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="mt-7 font-serif text-xl text-[var(--cream)]"
        >
          {s.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="mt-5 text-sm leading-loose text-[var(--muted)]">
          {s.text}
        </p>
      );
    case "ul":
      return (
        <ul
          key={i}
          className="mt-5 space-y-2 pl-5"
        >
          {s.items.map((item, j) => (
            <li
              key={j}
              className="text-sm leading-relaxed text-[var(--muted)] list-disc marker:text-[var(--gold-dim)]"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol
          key={i}
          className="mt-5 space-y-2 pl-5"
        >
          {s.items.map((item, j) => (
            <li
              key={j}
              className="text-sm leading-relaxed text-[var(--muted)] list-decimal marker:text-[var(--gold-dim)]"
            >
              {item}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside
          key={i}
          className="mt-8 border-l-2 border-[var(--gold-dim)] bg-[var(--surface)] px-6 py-5"
        >
          <p className="text-sm leading-relaxed text-[var(--muted)]">{s.text}</p>
        </aside>
      );
    case "table":
      return (
        <div key={i} className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[var(--hairline)]">
                {s.head.map((h, j) => (
                  <th
                    key={j}
                    className="py-3 pr-6 text-left text-[9px] uppercase tracking-[0.2em] text-[var(--gold-dim)]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.rows.map((row, j) => (
                <tr
                  key={j}
                  className="border-b border-[var(--hairline)] odd:bg-[var(--surface)]"
                >
                  {row.map((cell, k) => (
                    <td
                      key={k}
                      className="py-3 pr-6 text-sm leading-relaxed text-[var(--muted)]"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  // Try API first (dynamic), fall back to static posts
  const post = await fetchPost(slug) ?? POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rizzleather.com";
  const coverImage = post.coverImage || `${baseUrl}/assets/images/rizzslide.jpg`;

  // Related posts: try API then static, same category
  const apiPosts = await fetchPosts();
  const staticSlugs = new Set(apiPosts.map((p) => p.slug));
  const allPosts = [...apiPosts, ...POSTS.filter((p) => !staticSlugs.has(p.slug))];
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: "RIZZ Leather",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "RIZZ Leather",
      logo: { "@type": "ImageObject", url: `${baseUrl}/assets/images/rizzslide.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/journal/${post.slug}` },
    articleSection: post.category,
    keywords: [
      "leather sandals Bangladesh",
      "genuine leather",
      "handcrafted footwear Chittagong",
      post.category,
    ].join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        {/* Article header */}
        <header className="border-b border-[var(--hairline)] bg-[var(--surface)] py-16 text-center">
          <div className="mx-auto max-w-2xl px-5">
            <div className="flex items-center justify-center gap-3">
              <span className="rounded-full border border-[var(--hairline)] px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-[var(--gold-dim)]">
                {post.category}
              </span>
              <span className="text-[10px] text-[var(--muted)]">
                {post.readingTime} min read
              </span>
            </div>
            <h1 className="mt-5 font-serif text-3xl leading-snug text-[var(--cream)] sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              {post.description}
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              <span>RIZZ Leather</span>
              <span className="opacity-40">·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
            {/* Breadcrumb */}
            <nav className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--text)] transition-colors">
                Home
              </Link>
              <span className="opacity-40">›</span>
              <Link href="/journal" className="hover:text-[var(--text)] transition-colors">
                Journal
              </Link>
              <span className="opacity-40">›</span>
              <span className="text-[var(--gold-dim)] line-clamp-1 max-w-[140px]">
                {post.title}
              </span>
            </nav>
          </div>
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div className="mx-auto max-w-2xl px-5 pt-10 lg:px-8">
            <img
              src={post.coverImage}
              alt={post.coverAlt}
              className="w-full rounded object-cover max-h-80"
            />
          </div>
        )}

        {/* Article body */}
        <article className="mx-auto max-w-2xl px-5 py-14 lg:px-8">
          {post.body.map((section, i) => renderSection(section, i))}
        </article>

        {/* Internal CTA */}
        <section className="border-y border-[var(--hairline)] bg-[var(--surface)] py-12 text-center">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">
            Made in Chittagong
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[var(--cream)] sm:text-3xl">
            Shop Handcrafted Leather Sandals
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Genuine leather. Full-grain hides. COD available across Bangladesh.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/brand/catalog?category=sandals"
              className="border border-[var(--gold-dim)] px-7 py-3 text-[10px] uppercase tracking-[0.35em] text-[var(--gold-light)] transition-colors hover:bg-[var(--gold-dim)] hover:text-[var(--bg)]"
            >
              Shop Sandals →
            </Link>
            <Link
              href="/manufacturing"
              className="border border-[var(--hairline)] px-7 py-3 text-[10px] uppercase tracking-[0.35em] text-[var(--muted)] transition-colors hover:border-[var(--gold-dim)] hover:text-[var(--gold-light)]"
            >
              Our Workshop
            </Link>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
            <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">
              Continue Reading
            </p>
            <h2 className="mt-3 font-serif text-2xl text-[var(--cream)]">
              Related Articles
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/journal/${p.slug}`}
                  className="group flex flex-col gap-3 border border-[var(--hairline)] p-6 no-underline transition-colors hover:border-[var(--gold-dim)]"
                >
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--gold-dim)]">
                    {p.category}
                  </span>
                  <h3 className="font-serif text-lg leading-snug text-[var(--cream)] group-hover:text-[var(--gold-light)] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] line-clamp-2">
                    {p.description}
                  </p>
                  <span className="mt-auto text-[10px] uppercase tracking-[0.2em] text-[var(--gold-dim)]">
                    Read → {p.readingTime} min
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to journal */}
        <div className="border-t border-[var(--hairline)] py-8 text-center">
          <Link
            href="/journal"
            className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] transition-colors hover:text-[var(--gold-light)]"
          >
            ← Back to Journal
          </Link>
        </div>
      </main>
    </>
  );
}
