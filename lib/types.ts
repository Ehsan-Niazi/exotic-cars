export type BodyType =
  | "Sedan"
  | "SUV"
  | "Coupe"
  | "Convertible"
  | "Truck"
  | "Hatchback";

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  bodyType: BodyType;
  fuelType: "Gasoline" | "Electric" | "Hybrid" | "Diesel";
  transmission: "Automatic" | "Manual";
  condition: "New" | "Used" | "Certified";
  image: string;
  featured?: boolean;
  location: { city: string } | string;
  listedAt: string; // ISO date, drives "Newest" sorting
  manufacturer: string;
  color: string;
}
