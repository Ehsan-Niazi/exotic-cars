import Image from "next/image";
import Link from "next/link";
import SearchWidget from "./SearchWidget";

export default function Hero() {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={"/bgt.jpg"}
          alt="Exotic car on display"
          fill
          loading="eager"
          priority
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-l from-neutral-0 via-neutral-900 to-neutral-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 pt-24 pb-40 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">
          Curated. Verified. Exceptional.
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.03em] sm:text-6xl">
          Drive something extraordinary
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-300">
          Exotic Cars Hub connects you with trusted sellers and inspected
          vehicles &mdash; from everyday performance to once-in-a-lifetime
          exotics.
        </p>

        <div className="mt-9 flex items-center justify-center gap-4">
          <Link
            href="/shop"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Browse Inventory
          </Link>
          <Link
            href="/sell"
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10"
          >
            Sell Your Car
          </Link>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-8">
        <div className="absolute -top-16 left-8 right-8">
          <SearchWidget />
        </div>
      </div>
    </section>
  );
}
