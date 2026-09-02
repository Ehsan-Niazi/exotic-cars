import Link from "next/link";
import { ArticleCategory } from "@/lib/article-types";

const CATEGORIES: ArticleCategory[] = [
  "Buying Guides",
  "Market Trends",
  "Maintenance",
  "Reviews",
];

// Plain links, no client JS needed — the page itself reads ?category=
// and filters the static array server-side.
export default function CategoryFilter({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/articles"
        className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
          !active
            ? "bg-primary text-white"
            : "bg-white text-foreground/70 ring-1 ring-foreground/10 hover:text-primary"
        }`}
      >
        All
      </Link>
      {CATEGORIES.map((category) => (
        <Link
          key={category}
          href={`/articles?category=${encodeURIComponent(category)}`}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
            active === category
              ? "bg-primary text-white"
              : "bg-white text-foreground/70 ring-1 ring-foreground/10 hover:text-primary"
          }`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
