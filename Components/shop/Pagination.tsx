import Link from "next/link";

export default function Pagination({
  page,
  totalPages,
  searchParams,
}: {
  page: number;
  totalPages: number;
  searchParams: Record<string, string | undefined>;
}) {
  if (totalPages <= 1) return null;

  function hrefFor(target: number) {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value && key !== "page") params.set(key, value);
    });
    if (target > 1) params.set("page", String(target));
    const query = params.toString();
    return query ? `/shop?${query}` : "/shop";
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mt-10 flex items-center justify-center gap-1.5">
      <PageLink href={hrefFor(page - 1)} disabled={page === 1}>
        Prev
      </PageLink>
      {pages.map((p) => (
        <Link
          key={p}
          href={hrefFor(p)}
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
            p === page
              ? "bg-primary text-white"
              : "text-foreground/60 hover:bg-white"
          }`}
        >
          {p}
        </Link>
      ))}
      <PageLink href={hrefFor(page + 1)} disabled={page === totalPages}>
        Next
      </PageLink>
    </nav>
  );
}

function PageLink({
  href,
  disabled,
  children,
}: {
  href: string;
  disabled: boolean;
  children: React.ReactNode;
}) {
  if (disabled) {
    return <span className="px-3 text-sm text-foreground/25">{children}</span>;
  }
  return (
    <Link href={href} className="px-3 text-sm font-medium text-foreground/60 hover:text-primary">
      {children}
    </Link>
  );
}
