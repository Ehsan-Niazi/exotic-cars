import ArticlesHeader from "@/components/articles/ArticlesHeader";
import FeaturedArticle from "@/components/articles/FeaturedArticle";
import CategoryFilter from "@/components/articles/CategoryFilter";
import ArticleCard from "@/components/articles/ArticleCard";
import { mockArticles } from "@/lib/mock-articles";
import { ArticleCategory } from "@/lib/article-types";

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: ArticleCategory }>;
}) {
  const { category } = await searchParams;

  const featured = mockArticles.find((a) => a.featured);
  const rest = mockArticles
    .filter((a) => a.slug !== featured?.slug)
    .filter((a) => !category || a.category === category);

  return (
    <main className="bg-background">
      <ArticlesHeader />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-14">
        {!category && featured && (
          <div className="mb-14">
            <FeaturedArticle article={featured} />
          </div>
        )}

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
            {category ? category : "Latest articles"}
          </h2>
          <CategoryFilter active={category} />
        </div>

        {rest.length === 0 ? (
          <p className="py-10 sm:py-14 lg:py-16 text-center text-sm text-foreground/50">
            No articles in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
