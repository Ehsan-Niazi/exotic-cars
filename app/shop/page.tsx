import ShopHeader from "@/components/shop/ShopHeader";
import FiltersSidebar from "@/components/shop/FiltersSidebar";
import SortDropdown from "@/components/shop/SortDropdown";
import ActiveFilterChips from "@/components/shop/ActiveFilterChips";
import ListingsGrid from "@/components/shop/ListingsGrid";
import Pagination from "@/components/shop/Pagination";
import { getCars, getLocation } from "@/lib/cars";
import { filterAndSortCars, ShopSearchParams } from "@/lib/filter-cars";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<ShopSearchParams>;
}) {
  const params = await searchParams;

  // Same two calls FeaturedListings makes on the home page, so a car's
  // photo/condition/location treatment looks identical whether you're
  // looking at "Featured" or the full shop grid.
  const [cars, location] = await Promise.all([getCars(), getLocation()]);

  const { results, total, page, totalPages } = filterAndSortCars(cars, params);
  const availableMakes = Array.from(
    new Set(cars.map((c) => c.manufacturer)),
  ).sort();

  return (
    <main className="bg-background">
      <ShopHeader resultCount={total} />

      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="flex flex-col gap-10 lg:flex-row">
          <FiltersSidebar availableMakes={availableMakes} />

          <div className="flex-1">
            <ActiveFilterChips />

            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-foreground/60">
                Showing {results.length} of {total} cars
              </p>
              <SortDropdown />
            </div>

            <ListingsGrid cars={results} location={location} />

            <Pagination
              page={page}
              totalPages={totalPages}
              searchParams={params as Record<string, string | undefined>}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
