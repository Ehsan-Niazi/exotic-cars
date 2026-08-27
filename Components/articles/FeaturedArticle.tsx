import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/article-types";

// Large spotlight card for the pinned/most recent article — pulls focus
// above the grid instead of treating every article as equal weight.
export default function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group grid grid-cols-1 overflow-hidden rounded-2xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-xl md:grid-cols-2"
    >
      <div className="relative h-64 w-full overflow-hidden bg-foreground/5 md:h-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center p-8">
        <span className="w-fit rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
          {article.category}
        </span>
        <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-[-0.01em] text-foreground">
          {article.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-foreground/60">
          {article.excerpt}
        </p>
        <p className="mt-5 text-xs text-foreground/40">
          {article.author} &middot; {article.date} &middot; {article.readTime}
        </p>
      </div>
    </Link>
  );
}
