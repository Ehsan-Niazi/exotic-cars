import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getCars } from "@/lib/cars";
import { getBrandHistory } from "@/lib/brand-history";

export async function generateStaticParams() {
  const cars = await getCars();
  return cars.map((car) => ({ manufacturer: car.manufacturer }));
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ manufacturer: string }>;
}) {
  const { manufacturer: rawManufacturer } = await params;
  const manufacturer = decodeURIComponent(rawManufacturer);

  const cars = await getCars();
  const car = cars.find((c) => c.manufacturer === manufacturer);

  if (!car) {
    notFound();
  }

  const history = getBrandHistory(manufacturer);

  return (
    <main className="bg-background">
      <div className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-4xl px-8 py-14">
          <p className="text-xs text-neutral-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/shop" className="hover:text-white">
              Shop
            </Link>{" "}
            / <span className="text-neutral-300">{manufacturer}</span>
          </p>

          <div className="mt-8">
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-secondary">
              {history.founded}
            </span>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.02em] sm:text-5xl">
              {manufacturer}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-400">
              {history.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-8 py-10">
        <div className="flex justify-center items-center relative h-70 overflow-hidden rounded-2xl bg-foreground/5 sm:h-105 lg:h-130">
          <Image
            src={history.image}
            alt={`${manufacturer} vehicle`}
            width={400}
            height={200}
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1152px"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-8 pb-16">
        <div className="space-y-10">
          {history.sections.map((section, index) => (
            <section key={index}>
              {section.heading && (
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
                  {section.heading}
                </h2>
              )}
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-sm leading-7 text-foreground/65 sm:text-base sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-white p-6 ring-1 ring-foreground/10">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
            Currently Available
          </p>
          <p className="mt-2 text-sm text-foreground/70">
            Browse {manufacturer} inventory in the full collection.
          </p>
          <Link
            href={`/shop?manufacturer=${encodeURIComponent(manufacturer)}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            View {manufacturer} Listings
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/shop"
            className="inline-flex items-center text-sm font-medium text-foreground/50 hover:text-primary"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>
    </main>
  );
}
