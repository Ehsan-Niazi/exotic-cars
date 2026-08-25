import { Car } from "@/lib/types";
import { mockCars } from "@/lib/mock-cars";

export async function getCars(): Promise<Car[]> {
  const res = await fetch(process.env.CAR_INFO_API_URL!, {
    next: { revalidate: 300 },
  });
  const cars = res.ok ? await res.json() : mockCars;
  return cars;
}

export async function getLocation(): Promise<Car["location"]> {
  const res = await fetch(`${process.env.LOCATION_API_URL}`, {
    next: { revalidate: 300 }, // ISR: refresh every 5 minutes
  });
  const location: Car["location"] = await res.json();
  return location;
}
