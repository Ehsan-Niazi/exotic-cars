import Link from "next/link";

// Dark showroom banner — deliberately the same neutral-950 treatment as
// the home page's Hero and HowItWorks sections, so landing here from
// "View all" on Featured Listings feels like a continuation, not a new site.
export default function ShopHeader({ resultCount }: { resultCount: number }) {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-14">
        <p className="text-xs text-neutral-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>{" "}
          / <span className="text-neutral-300">Shop</span>
        </p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          The Full Collection
        </p>
        <div className="mt-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <h1 className="text-2xl font-semibold sm:text-3xl tracking-[-0.02em]">
            Browse inventory
          </h1>
          <p className="text-sm text-neutral-400">
            {resultCount} {resultCount === 1 ? "car" : "cars"} available
          </p>
        </div>
      </div>
    </div>
  );
}
