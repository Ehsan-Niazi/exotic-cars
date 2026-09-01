import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "The inspection report gave me the confidence to buy a car sight unseen, and delivery took three days.",
    name: "Daniel R.",
    role: "Bought a Porsche 911",
  },
  {
    quote:
      "Listing my car took ten minutes and I had three serious offers within a week.",
    name: "Amelia S.",
    role: "Sold a Range Rover Sport",
  },
  {
    quote:
      "Escrow checkout made a five-figure purchase feel as safe as any online order.",
    name: "Marcus T.",
    role: "Bought a Tesla Model S",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h2 className="text-2xl font-semibold tracking-[-0.02em]">
        What buyers and sellers say
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-gray-200 p-6"
          >
            <div className="flex gap-0.5 text-red-700">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-6 text-gray-600">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs">
              <span className="font-semibold">{t.name}</span>
              <span className="text-gray-400"> &middot; {t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
