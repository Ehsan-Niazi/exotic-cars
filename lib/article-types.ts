export type ArticleCategory =
  | "Buying Guides"
  | "Market Trends"
  | "Maintenance"
  | "Reviews";

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  sections: ArticleSection[];
}
