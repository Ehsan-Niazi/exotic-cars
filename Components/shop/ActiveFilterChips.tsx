"use client";

import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toggleInList, setParam } from "@/lib/query";

const LIST_KEYS = [
  "manufacturer",
  "bodyType",
  "fuel",
  "transmission",
  "condition",
];

export default function ActiveFilterChips() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const chips: { key: string; value: string; label: string }[] = [];

  for (const key of LIST_KEYS) {
    for (const value of searchParams.get(key)?.split(",").filter(Boolean) ??
      []) {
      chips.push({
        key,
        value,
        label: value,
      });
    }
  }

  if (searchParams.get("category") === "luxury") {
    chips.push({
      key: "category",
      value: "luxury",
      label: "Luxury",
    });
  }

  if (searchParams.get("minPrice") || searchParams.get("maxPrice")) {
    const min = searchParams.get("minPrice") ?? "0";
    const max = searchParams.get("maxPrice") ?? "any";

    chips.push({
      key: "price",
      value: "price",
      label: `$${Number(min).toString()} – ${
        max === "any" ? "any" : `$${Number(max).toString()}`
      }`,
    });
  }

  if (!chips.length) return null;

  function remove(chip: { key: string; value: string }) {
    let next = new URLSearchParams(searchParams);

    if (LIST_KEYS.includes(chip.key)) {
      next = toggleInList(next, chip.key, chip.value);
    } else if (chip.key === "price") {
      next.delete("minPrice");
      next.delete("maxPrice");
    } else {
      next = setParam(next, chip.key, "");
    }

    router.push(next.toString() ? `${pathname}?${next.toString()}` : pathname);
  }

  return (
    <div className="flex flex-wrap items-center gap-2 pb-6">
      {chips.map((chip) => (
        <button
          key={`${chip.key}-${chip.value}`}
          type="button"
          onClick={() => remove(chip)}
          className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-foreground/80 ring-1 ring-foreground/10 hover:text-primary hover:ring-primary"
        >
          {chip.label}

          <X className="h-3 w-3" />
        </button>
      ))}
    </div>
  );
}
