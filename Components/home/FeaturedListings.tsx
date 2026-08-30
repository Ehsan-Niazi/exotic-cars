import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CarCard from "../carDetails/CarCard";
import { Car } from "@/lib/types";
import { getCars, getLocation } from "@/lib/cars";
import { auth } from "@/lib/auth";

async function getCarLocation(): Promise<Car["location"]> {
  const location: Car["location"] = await getLocation();
  return location;
}

async function getFeaturedCars(): Promise<Car[]> {
  const cars = await getCars();
  return cars.filter((car) => car).slice(0, 4);
}

export default async function FeaturedListings() {
  const [cars, location, session] = await Promise.all([
    getFeaturedCars(),
    getCarLocation(),
    auth(),
  ]);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.02em]">
              Featured listings
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Hand-picked vehicles, inspected and verified.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-1 text-sm font-medium text-red-700 hover:text-red-800 sm:flex"
          >
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cars.map((car) => (
            <CarCard
              key={`${car.model}${car.id}`}
              car={car}
              location={location}
              isMember={!!session}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
