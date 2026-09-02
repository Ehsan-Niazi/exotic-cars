import Image from "next/image";

export default function OurStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-foreground/5 md:h-96">
          <Image
            src="/about-images/inspecting.jpg"
            alt="A car being inspected in the Exotic Cars Hub showroom"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Our Story
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
            From one showroom to a marketplace people trust
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-6 text-foreground/70">
            <p>
              Exotic Cars Hub opened its first showroom a few blocks from the
              Space Needle with a simple idea: buying a car &mdash; especially
              an exceptional one &mdash; shouldn&apos;t feel like a gamble.
            </p>
            <p>
              Every vehicle that came through our doors was inspected,
              documented, and sold with a story you could actually verify. That
              standard is still the foundation of the marketplace today, even as
              we&apos;ve grown to connect buyers and verified sellers across the
              country.
            </p>
            <p>
              We&apos;re still headquartered in Seattle, and our original
              showroom is still open &mdash; come say hello.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
