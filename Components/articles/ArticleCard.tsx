import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/article-types";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden bg-foreground/5">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
          {article.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold leading-snug text-foreground">
          {article.title}
        </h3>
        <p className="mt-2 text-xs leading-5 text-foreground/60 line-clamp-2">
          {article.excerpt}
        </p>
        <p className="mt-3 text-[11px] text-foreground/40">
          {article.date} &middot; {article.readTime}
        </p>
      </div>
    </Link>
  );
}
