"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { setParam } from "@/lib/query";

const OPTIONS = [
  { value: "newest", label: "Newest listings" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "mileage-asc", label: "Mileage: Low to High" },
];

export default function SortDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(value: string) {
    const next = setParam(new URLSearchParams(searchParams), "sort", value);
    router.push(`${pathname}?${next.toString()}`);
  }

  return (
    <label className="flex w-full items-center justify-between gap-2 text-sm sm:w-auto sm:justify-start">
      <span className="text-foreground/60">Sort by</span>
      <select
        defaultValue={searchParams.get("sort") ?? "newest"}
        onChange={(e) => handleChange(e.target.value)}
        className="min-w-0 flex-1 rounded-lg bg-white px-3 py-2 sm:flex-none sm:py-1.5 text-sm font-medium text-foreground outline-none ring-1 ring-foreground/15 focus:ring-primary"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
