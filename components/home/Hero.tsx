import Image from "next/image";
import Link from "next/link";
import SearchWidget from "./SearchWidget";

export default function Hero() {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/bgtt.jpg"
          alt="Exotic car on display"
          width={2000}
          height={1000}
          priority
          sizes="100vw"
          className="w-auto h-auto opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-l from-neutral-0 via-neutral-900 to-neutral-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-32 sm:pt-20 sm:pb-36 lg:pt-24 lg:pb-40 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
          Curated. Verified. Exceptional.
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
          Drive something extraordinary
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-300">
          Exotic Cars Hub connects you with trusted sellers and inspected
          vehicles &mdash; from everyday performance to once-in-a-lifetime
          exotics.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/shop"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm sm:w-auto font-medium transition-colors hover:bg-secondary"
          >
            Browse Inventory
          </Link>
          <Link
            href="/sell"
            className="w-full rounded-full border border-white/25 px-6 py-3 text-sm sm:w-auto font-medium transition-colors hover:bg-white/10"
          >
            Sell Your Car
          </Link>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-20 sm:absolute sm:left-6 sm:right-6 sm:-top-16 sm:mt-0 lg:left-8 lg:right-8">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}
