import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockArticles } from "@/lib/mock-articles";

export async function generateStaticParams() {
  return mockArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = mockArticles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-background">
      <article>
        {/* Article header */}
        <div className="bg-neutral-950 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-14">
            <p className="text-xs text-neutral-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>{" "}
              /{" "}
              <Link href="/articles" className="hover:text-white">
                Articles
              </Link>{" "}
              / <span className="text-neutral-300">{article.title}</span>
            </p>

            <div className="mt-8">
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
                {article.category}
              </span>

              <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-400">
                {article.excerpt}
              </p>

              <p className="mt-6 text-xs text-neutral-500">
                {article.author} &middot; {article.date} &middot;{" "}
                {article.readTime}
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="relative h-56 overflow-hidden rounded-2xl bg-foreground/5 sm:h-96 lg:h-130">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
          </div>
        </div>

        {/* Article body */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-16">
          <div className="space-y-10">
            {article.sections.map((section, index) => (
              <section key={index}>
                {section.heading && (
                  <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
                    {section.heading}
                  </h2>
                )}

                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-sm leading-7 text-foreground/65 sm:text-base sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex gap-3 text-sm leading-6 text-foreground/65 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Back to articles */}
          <div className="mt-14 border-t border-foreground/10 pt-8">
            <Link
              href="/articles"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            >
              ← Back to Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
