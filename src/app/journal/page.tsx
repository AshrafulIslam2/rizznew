import type { Metadata } from "next";
import Link from "next/link";
import { POSTS, fetchPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal — Leather Craft, Care & Buying Guides",
  description:
    "The RIZZ Journal: in-depth guides on leather sandal care, how we handcraft footwear in Chittagong, brand comparisons, and buying advice for genuine leather goods in Bangladesh.",
  alternates: { canonical: "/journal" },
  openGraph: {
    title: "RIZZ Journal — Leather Craft, Care & Buying Guides",
    description:
      "In-depth guides on leather sandal care, Chittagong craftsmanship, brand comparisons, and how to buy genuine leather in Bangladesh.",
    type: "website",
    url: "/journal",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function JournalPage() {
  const apiPosts = await fetchPosts();

  // Merge: API posts take precedence over static, deduplicate by slug
  const staticSlugs = new Set(apiPosts.map((p) => p.slug));
  const merged = [
    ...apiPosts,
    ...POSTS.filter((p) => !staticSlugs.has(p.slug)),
  ];

  const sorted = [...merged].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "RIZZ Journal",
    description:
      "Leather craft, care guides, and buying advice from RIZZ — handcrafted footwear from Chittagong, Bangladesh.",
    url: "https://rizzleather.com/journal",
    publisher: {
      "@type": "Organization",
      name: "RIZZ Leather",
      url: "https://rizzleather.com",
    },
    blogPost: sorted.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: `https://rizzleather.com/journal/${p.slug}`,
      datePublished: p.publishedAt,
      author: { "@type": "Organization", name: "RIZZ Leather" },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        {/* Hero */}
        <section className="border-b border-[var(--hairline)] bg-[var(--surface)] py-16 text-center">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[var(--gold-dim)]">
            The RIZZ Journal
          </p>
          <h1 className="mt-3 font-serif text-4xl text-[var(--cream)] sm:text-5xl lg:text-6xl">
            Leather Craft &amp; Buying Guides
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Care instructions, maker stories, honest brand comparisons, and everything
            you need to buy and keep genuine leather sandals.
          </p>
          <nav className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--text)] transition-colors">
              Home
            </Link>
            <span className="opacity-40">›</span>
            <span className="text-[var(--gold-dim)]">Journal</span>
          </nav>
        </section>

        {/* Post grid */}
        <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group flex flex-col gap-3 no-underline"
              >
                <div className="overflow-hidden border border-[var(--hairline)] bg-[var(--surface)]">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.coverAlt}
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-40 items-center justify-center bg-[var(--surface)] px-6 text-center transition-transform duration-700 group-hover:scale-[1.03)]">
                      <p className="font-serif text-lg leading-snug text-[var(--cream)] opacity-70">
                        {post.title}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-[var(--hairline)] px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-[var(--gold-dim)]">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-[var(--muted)]">
                    {post.readingTime} min read
                  </span>
                </div>

                <h2 className="font-serif text-lg leading-snug text-[var(--cream)] group-hover:text-[var(--gold-light)] transition-colors">
                  {post.title}
                </h2>

                <p className="text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
                  {post.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-2">
                  <time
                    dateTime={post.publishedAt}
                    className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]"
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold-dim)] group-hover:text-[var(--gold-light)] transition-colors">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--hairline)] bg-[var(--surface)] py-14 text-center">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[var(--gold-dim)]">
            Shop the Collection
          </p>
          <h2 className="mt-3 font-serif text-3xl text-[var(--cream)] sm:text-4xl">
            Handcrafted Leather Sandals
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Made in Chittagong. Genuine leather. COD available across Bangladesh.
          </p>
          <Link
            href="/brand/catalog?category=sandals"
            className="mt-7 inline-block border border-[var(--gold-dim)] px-8 py-3 text-[10px] uppercase tracking-[0.35em] text-[var(--gold-light)] transition-colors hover:bg-[var(--gold-dim)] hover:text-[var(--bg)]"
          >
            Shop Sandals →
          </Link>
        </section>
      </main>
    </>
  );
}
