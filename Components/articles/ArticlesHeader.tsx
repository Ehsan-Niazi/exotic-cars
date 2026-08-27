import Link from "next/link";

// Same dark neutral-950 banner treatment as the shop page's header, so
// navigating between sections of the site feels consistent.
export default function ArticlesHeader() {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-8 py-14">
        <p className="text-xs text-neutral-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>{" "}
          / <span className="text-neutral-300">Articles</span>
        </p>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          The Journal
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          Buying guides, market insight, and stories from the road
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-400">
          Everything we've learned from inspecting, buying, and selling
          exceptional cars &mdash; written by the Exotic Cars Hub team.
        </p>
      </div>
    </div>
  );
}
