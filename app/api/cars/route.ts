import { NextResponse } from "next/server";
import { mockCars } from "@/lib/mock-cars";
import { Car } from "@/lib/types";

export async function GET() {
  try {
    const res = await fetch(process.env.CAR_INFO_API_URL!, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json(mockCars);
    }

    const cars: Car[] = await res.json();

    return NextResponse.json(cars);
  } catch (error) {
    console.error("Failed to fetch cars:", error);

    return NextResponse.json(mockCars);
  }
}
