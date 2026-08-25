import Image from "next/image";
import Link from "next/link";
import { Car } from "@/lib/types";
import CarMileage from "./CarMileage";
import CarCondition from "./CarCondition";
import FuelType from "./FuelType";
import { carImages } from "@/lib/car-image";

export default function CarCard({
  car,
  location,
}: {
  car: Car;
  location: Car["location"];
}) {
  const carImage = carImages.find((image) => image.name === car.manufacturer);

  return (
    <div className="group block overflow-hidden rounded-2xl border border-gray-200 transition-shadow hover:shadow-lg">
      <Link href={`/shop/${car.manufacturer}`}>
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
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
            <h3 className="text-sm font-semibold">
              {car.year} {car.manufacturer} {car.model}
            </h3>

            <p className="whitespace-nowrap text-sm font-semibold text-primary">
              {/* ${`${car.price * 100}`} */} $ xxxxx
            </p>
          </div>

          <p className="mt-1 text-xs text-gray-500">
            <CarMileage mileage={carImage?.mileage} />
            <FuelType
              fuel={carImage?.fuel}
              transmission={carImage?.transmission}
            />
          </p>

          <p className="mt-2 text-xs text-gray-400">
            {typeof location === "string" ? location : location.city}
          </p>
        </div>
      </Link>

      <div className="border-t border-gray-100 px-4 pb-4 pt-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-gray-700">
              Unlock full pricing
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400">
              Sign in to view the price
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
