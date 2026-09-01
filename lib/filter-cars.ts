import { Car } from "./types";
import { carInfo } from "./car-info";

export interface ShopSearchParams {
  manufacturer?: string;
  bodyType?: string;
  fuel?: string;
  transmission?: string;
  condition?: string;
  minPrice?: string;
  maxPrice?: string;
  sort?: "newest" | "price-asc" | "price-desc" | "mileage-asc";
  page?: string;
}

export const PAGE_SIZE = 6;

function toList(value?: string): string[] {
  return value ? value.split(",").filter(Boolean) : [];
}

export function parsePrice(value?: string): number | undefined {
  if (!value) return undefined;

  const digits = value.replace(/[^0-9]/g, "");

  return digits ? Number(digits) : undefined;
}

export function filterAndSortCars(cars: Car[], params: ShopSearchParams) {
  const makes = toList(params.manufacturer);
  const bodyTypes = toList(params.bodyType);
  const fuels = toList(params.fuel);
  const transmissions = toList(params.transmission);
  const conditions = toList(params.condition);

  const minPrice = parsePrice(params.minPrice);
  const maxPrice = parsePrice(params.maxPrice);

  // Create a quick lookup for carInfo using the car/manufacturer name.
  const carInfoMap = new Map(carInfo.map((info) => [info.name, info]));

  let results = cars.filter((car) => {
    if (makes.length && !makes.includes(car.manufacturer)) {
      return false;
    }

    const matchingCarInfo = carInfoMap.get(car.manufacturer);

    const bodyType = matchingCarInfo?.type;
    const fuel = matchingCarInfo?.fuel;
    const transmission = matchingCarInfo?.transmission;
    const condition = matchingCarInfo?.condition;

    if (bodyTypes.length && !bodyTypes.includes(bodyType ?? "")) {
      return false;
    }

    if (fuels.length && !fuels.includes(fuel ?? "")) {
      return false;
    }

    if (transmissions.length && !transmissions.includes(transmission ?? "")) {
      return false;
    }

    if (conditions.length && !conditions.includes(condition ?? "")) {
      return false;
    }

    if (minPrice !== undefined && Math.round(car.price * 100) < minPrice) {
      return false;
    }

    if (maxPrice !== undefined && Math.round(car.price * 100) > maxPrice) {
      return false;
    }

    return true;
  });

  switch (params.sort) {
    case "price-asc":
      results = results.sort((a, b) => a.price - b.price);
      break;

    case "price-desc":
      results = results.sort((a, b) => b.price - a.price);
      break;

    case "mileage-asc":
      results = results.sort((a, b) => {
        const mileageA = carInfoMap.get(a.manufacturer)?.mileage;
        const mileageB = carInfoMap.get(b.manufacturer)?.mileage;

        return (
          Number(mileageA ?? Number.MAX_SAFE_INTEGER) -
          Number(mileageB ?? Number.MAX_SAFE_INTEGER)
        );
      });
      break;

    case "newest":
    default:
      results = results.sort(
        (a, b) =>
          new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime(),
      );
  }

  const page = Math.max(1, Number(params.page) || 1);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));

  const paged = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return {
    results: paged,
    total: results.length,
    page,
    totalPages,
  };
}
