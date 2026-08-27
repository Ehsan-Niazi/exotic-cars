"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toggleInList, setParam } from "@/lib/query";
import { carInfo } from "@/lib/car-info";

const BODY_TYPES = [...new Set(carInfo.map((car) => car.type))];

const FUEL_TYPES = ["Gasoline", "Electric", "Hybrid", "Diesel"];
const TRANSMISSIONS = ["Automatic", "Manual"];
const CONDITIONS = ["New", "Used", "Certified"];

export default function FiltersSidebar({
  availableMakes,
}: {
  availableMakes: string[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function toggle(key: string, value: string) {
    const next = toggleInList(new URLSearchParams(searchParams), key, value);

    router.push(`${pathname}?${next.toString()}`);
  }

  function updatePrice(key: "minPrice" | "maxPrice", value: string) {
    const next = setParam(new URLSearchParams(searchParams), key, value);

    router.push(`${pathname}?${next.toString()}`);
  }

  function clearAll() {
    router.push(pathname);
  }

  const isActive = (key: string, value: string) =>
    searchParams.get(key)?.split(",").includes(value) ?? false;

  return (
    <aside className="w-full shrink-0 h-full rounded-2xl bg-white p-5 ring-1 ring-foreground/10 lg:w-64">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Filters</h2>

        <button
          type="button"
          onClick={clearAll}
          className="text-xs font-medium text-primary hover:opacity-80"
        >
          Clear all
        </button>
      </div>

      <FilterSection title="Price">
        <div className="flex items-center gap-2">
          <input
            key={`min-price-${searchParams.toString()}`}
            type="number"
            placeholder="Min"
            defaultValue={searchParams.get("minPrice") ?? ""}
            onBlur={(e) => updatePrice("minPrice", e.target.value)}
            className="w-full rounded-lg border border-foreground/15 px-2.5 py-1.5 text-sm text-foreground outline-none focus:border-primary"
          />

          <span className="text-foreground/40">–</span>

          <input
            key={`max-price-${searchParams.toString()}`}
            type="number"
            placeholder="Max"
            defaultValue={searchParams.get("maxPrice") ?? ""}
            onBlur={(e) => updatePrice("maxPrice", e.target.value)}
            className="w-full rounded-lg border border-foreground/15 px-2.5 py-1.5 text-sm text-foreground outline-none focus:border-primary"
          />
        </div>
      </FilterSection>

      <FilterSection title="Make">
        {[...new Set(availableMakes)].map((manufacturer) => (
          <Checkbox
            key={manufacturer}
            label={manufacturer}
            checked={isActive("manufacturer", manufacturer)}
            onChange={() => toggle("manufacturer", manufacturer)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Body Type">
        {BODY_TYPES.map((type) => (
          <Checkbox
            key={type}
            label={type}
            checked={isActive("bodyType", type)}
            onChange={() => toggle("bodyType", type)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Fuel Type">
        {FUEL_TYPES.map((fuel) => (
          <Checkbox
            key={fuel}
            label={fuel}
            checked={isActive("fuel", fuel)}
            onChange={() => toggle("fuel", fuel)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Transmission">
        {TRANSMISSIONS.map((transmission) => (
          <Checkbox
            key={transmission}
            label={transmission}
            checked={isActive("transmission", transmission)}
            onChange={() => toggle("transmission", transmission)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Condition" last>
        {CONDITIONS.map((condition) => (
          <Checkbox
            key={condition}
            label={condition}
            checked={isActive("condition", condition)}
            onChange={() => toggle("condition", condition)}
          />
        ))}
      </FilterSection>
    </aside>
  );
}

function FilterSection({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`py-5 ${last ? "" : "border-b border-foreground/10"}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-xs font-semibold uppercase tracking-wide text-foreground/50">
          {title}
        </h3>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 text-foreground/50 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 1.04l-4.25-4.5a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen
            ? "mt-3 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-2.5">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground/80">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 rounded border-foreground/25 text-primary focus:ring-primary"
      />

      {label}
    </label>
  );
}
