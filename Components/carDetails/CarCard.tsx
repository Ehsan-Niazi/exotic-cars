import Image from "next/image";
import Link from "next/link";
import { Car } from "@/lib/types";
import CarMileage from "./CarMileage";
import CarCondition from "./CarCondition";
import FuelType from "./FuelType";
import { carInfo } from "@/lib/car-info";

export default function CarCard({
  car,
  location,
}: {
  car: Car;
  location: Car["location"];
}) {
  const carImage = carInfo.find((image) => image.name === car.manufacturer);

  return (
    <div className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-xl">
      {/* Was linking to /shop/${car.manufacturer}, which is the same value
          for every card right now — /shop/${car.id} is the unique key and
          is what the (not-yet-built) /shop/[id] detail page should read. */}
      <Link href={`/shop/${car.manufacturer}/${car.id}`}>
        <div className="relative h-48 w-full overflow-hidden bg-foreground/5">
          <Image
            src={carImage?.Img || "/car-placeholder.jpg"}
            alt={`${car.color} ${car.year} ${car.manufacturer} ${car.model}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
            <CarCondition condition={carImage?.condition} />
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              {car.year} {car.manufacturer} {car.model}
            </h3>

            <p className="whitespace-nowrap text-sm font-semibold text-primary">
              ${Math.round(car.price * 100)}
            </p>
          </div>

          <p className="mt-1 text-xs text-foreground/60">
            <CarMileage mileage={carImage?.mileage} />
            <FuelType
              fuel={carImage?.fuel}
              transmission={carImage?.transmission}
            />
          </p>

          <p className="mt-2 text-xs text-foreground/40">
            {typeof location === "string" ? location : location.city}
          </p>
        </div>
      </Link>

      <div className="border-t border-foreground/10 px-4 pb-4 pt-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-foreground/80">
              Unlock exclusive pricing
            </p>
            <p className="mt-0.5 text-[10px] text-foreground/40">
              Sign in to view your discounted price
            </p>
          </div>

          <Link
            href="/login"
            className="shrink-0 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
