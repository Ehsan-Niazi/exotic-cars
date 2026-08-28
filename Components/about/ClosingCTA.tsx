import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="border-t border-foreground/10 bg-white py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-8 text-center">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
          Ready to find your next car?
        </h2>
        <p className="mt-2 max-w-md text-sm text-foreground/60">
          Browse verified listings online, or stop by the Seattle showroom
          and see one in person.
        </p>
        <div className="mt-7 flex items-center gap-4">
          <Link
            href="/shop"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary"
          >
            Browse Inventory
          </Link>
          <Link
            href="/sell"
            className="rounded-full px-6 py-3 text-sm font-medium text-foreground/70 ring-1 ring-foreground/15 transition-colors hover:text-primary hover:ring-primary"
          >
            Sell Your Car
          </Link>
        </div>
      </div>
    </section>
  );
}
