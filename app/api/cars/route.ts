import { NextResponse } from "next/server";
import { getCars } from "@/lib/cars";

export async function GET() {
  const cars = await getCars();
  return NextResponse.json(cars);
}
