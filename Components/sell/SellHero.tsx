import Image from "next/image";

export default function SellHero() {
  return (
    <section className="relative bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/sellCar-img/porsche-911-carrera1.jpg"
          alt="A well-kept car ready for sale"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40" />
      </div>

      <div className="relative mx-auto max-w-3xl px-8 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          Sell With Confidence
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          List your car in front of serious buyers
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-300">
          No lowball offers, no endless back-and-forth. Tell us about your car
          and our team handles verification, pricing guidance, and connecting
          you with a qualified buyer.
        </p>
      </div>
    </section>
  );
}
