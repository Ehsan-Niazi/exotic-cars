import { SearchX } from "lucide-react";
import CarCard from "@/components/carDetails/CarCard";
import { Car } from "@/lib/types";

export default function ListingsGrid({
  cars,
  location,
  isMember = false,
}: {
  cars: Car[];
  location: Car["location"];
  isMember?: boolean;
}) {
  if (!cars.length) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white py-16 sm:py-20 lg:py-24 text-center ring-1 ring-foreground/10">
        <SearchX className="h-8 w-8 text-foreground/25" />
        <p className="mt-4 text-sm font-medium text-foreground">
          No cars match those filters
        </p>
        <p className="mt-1 text-xs text-foreground/50">
          Try widening your price range or clearing a filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <CarCard
          key={`${car.manufacturer}${car.id}`}
          car={car}
          location={location}
          isMember={isMember}
        />
      ))}
    </div>
  );
}
