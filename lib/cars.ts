import { Car } from "@/lib/types";
import { mockCars } from "@/lib/mock-cars";

export async function getCars(): Promise<Car[]> {
  try {
    const res = await fetch(process.env.CAR_INFO_API_URL!, {
      next: { revalidate: 300 },
    });

    const cars: Car[] = res.ok ? await res.json() : mockCars;

    // Keep only one car for each manufacturer
    const uniqueCars = Array.from(
      new Map(cars.map((car) => [car.manufacturer, car])).values(),
    );

    return uniqueCars;
  } catch (error) {
    console.error("Failed to fetch cars:", error);

    // Also deduplicate mock data
    return Array.from(
      new Map(mockCars.map((car) => [car.manufacturer, car])).values(),
    );
  }
}

export async function getLocation(): Promise<Car["location"]> {
  try {
    const res = await fetch(`${process.env.LOCATION_API_URL}`, {
      next: { revalidate: 300 }, // ISR: refresh every 5 minutes
    });
    if (!res.ok) return "Nationwide";
    const location: Car["location"] = await res.json();
    return location;
  } catch (error) {
    console.error("Failed to fetch location:", error);
    return "Nationwide";
  }
}
