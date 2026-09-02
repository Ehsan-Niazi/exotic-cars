import Image from "next/image";
import Link from "next/link";

// Same dark-banner-with-photo treatment as the home page Hero, so the
// About page reads as part of the same site rather than a bolted-on page.
export default function AboutHero() {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/about-images/seattle.jpg"
          alt="Seattle skyline with the Space Needle"
          fill
          sizes="(max-width: 1024px) 100vw, 1152px"
          priority
          loading="eager"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/40" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 text-center">
        <p className="text-xs  font-bold uppercase tracking-[0.6em] text-primary inline">
          Est. in Seattle
        </p>
        <h1 className="mt-6 text-3xl font-semibold sm:text-5xl tracking-[-0.03em]">
          Built by people who love cars as much as you do
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-300">
          Exotic Cars Hub started as a small showroom near the Space Needle and
          grew into a marketplace buyers trust nationwide &mdash; without losing
          the standards we opened the doors with.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/shop"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm sm:w-auto font-medium transition-colors hover:bg-secondary"
          >
            Browse Inventory
          </Link>
          <Link
            href="#visit"
            className="w-full rounded-full border border-white/25 px-6 py-3 text-sm sm:w-auto font-medium transition-colors hover:bg-white/10"
          >
            Visit Our Showroom
          </Link>
        </div>
      </div>
    </section>
  );
}
