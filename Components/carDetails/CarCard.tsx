import Image from "next/image";
import Link from "next/link";
import { Car } from "@/lib/types";
import CarMileage from "./CarMileage";
import CarCondition from "./CarCondition";
import FuelType from "./FuelType";
import { carInfo } from "@/lib/car-info";
import { MEMBER_DISCOUNT_PERCENT, getDiscountedPrice } from "@/lib/pricing";
import SignInPrompt from "@/components/auth/SignInPrompt";

export default function CarCard({
  car,
  location,
  isMember = false,
}: {
  car: Car;
  location: Car["location"];
  isMember?: boolean;
}) {
  const carImage = carInfo.find((info) => info.name === car.manufacturer);
  const discountedPrice = getDiscountedPrice(car.price * 100);

  return (
    <div className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-foreground/10 transition-shadow hover:shadow-xl">
      <Link href={`/shop/${car.manufacturer}`}>
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

          {isMember && (
            <span className="absolute right-3 top-3 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
              -{MEMBER_DISCOUNT_PERCENT}% Member
            </span>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold text-foreground">
              {car.year} {car.manufacturer} {car.model}
            </h3>

            {!isMember && (
              <p className="whitespace-nowrap text-sm font-semibold text-primary">
                $ xxxxx
              </p>
            )}
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

      {isMember ? (
        <div className="border-t border-foreground/10 px-4 pb-4 pt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-foreground/40 line-through">
              ${`${Math.round(car.price * 100).toString()}`}
            </span>
            <span className="text-[11px] font-medium text-secondary">
              your price:
            </span>
            <span className="text-base font-semibold text-primary">
              ${discountedPrice.toString()}
            </span>
          </div>
        </div>
      ) : (
        <div className="border-t border-foreground/10 px-4 pb-4 pt-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-foreground/80">
                Unlock full pricing
              </p>
              <p className="mt-0.5 text-[11px] text-foreground/40">
                Sign in to view the price
              </p>
            </div>
            <SignInPrompt />
          </div>
        </div>
      )}
    </div>
  );
}
