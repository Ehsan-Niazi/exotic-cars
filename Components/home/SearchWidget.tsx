"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, ChevronDown, Loader2 } from "lucide-react";
import { Car } from "@/lib/types";

const ANY_MAKE = "Any Make";

const BODY_TYPES = [
  "Any Type",
  "Hatchback",
  "Coupe",
  "Convertible",
  "Sedan",
  "SUV",
  "Truck",
];

const PRICE_CAPS = [
  "Any Price",
  "$5,000",
  "$10,000",
  "$15,000",
  "$20,000",
  "$25,000",
  "$50,000",
  "$100,000",
  "$150,000",
  "$250,000+",
];

export default function SearchWidget() {
  const router = useRouter();

  const [makes, setMakes] = useState<string[]>([ANY_MAKE]);
  const [loading, setLoading] = useState(true);
  const [make, setMake] = useState(ANY_MAKE);
  const [bodyType, setBodyType] = useState(BODY_TYPES[0]);
  const [maxPrice, setMaxPrice] = useState(PRICE_CAPS[0]);

  // Controls which dropdown is currently open
  const [openField, setOpenField] = useState<
    "make" | "bodyType" | "maxPrice" | null
  >(null);

  function handleSearch() {
    const params = new URLSearchParams();

    if (make !== makes[0]) params.set("make", make);
    if (bodyType !== BODY_TYPES[0]) params.set("bodyType", bodyType);
    if (maxPrice !== PRICE_CAPS[0]) params.set("maxPrice", maxPrice);

    router.push(`/shop?${params.toString()}`);
  }

  useEffect(() => {
    fetch("/api/cars")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }

        return response.json();
      })
      .then((cars: Car[]) => {
        const uniqueMakes = [...new Set(cars.map((car) => car.manufacturer))];
        setMakes([ANY_MAKE, ...uniqueMakes]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-3 rounded-2xl bg-white p-4 text-foreground shadow-xl ring-1 ring-black/5 sm:grid-cols-[1fr_1fr_1fr_auto]">
      <Field
        label="Make"
        value={make}
        options={makes}
        onChange={setMake}
        disabled={loading}
        loading={loading}
        isOpen={openField === "make"}
        onToggle={() => setOpenField(openField === "make" ? null : "make")}
      />

      <Field
        label="Body Type"
        value={bodyType}
        options={BODY_TYPES}
        onChange={setBodyType}
        isOpen={openField === "bodyType"}
        onToggle={() =>
          setOpenField(openField === "bodyType" ? null : "bodyType")
        }
      />

      <Field
        label="Max Price"
        value={maxPrice}
        options={PRICE_CAPS}
        onChange={setMaxPrice}
        isOpen={openField === "maxPrice"}
        onToggle={() =>
          setOpenField(openField === "maxPrice" ? null : "maxPrice")
        }
      />

      <button
        onClick={handleSearch}
        className="flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary"
      >
        <Search className="h-4 w-4" />
        Search
      </button>
    </div>
  );
}

function Field({
  label,
  value,
  options,
  onChange,
  disabled,
  loading,
  isOpen,
  onToggle,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  disabled?: boolean;
  loading?: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  function handleSelect(option: string) {
    onChange(option);
    onToggle();
  }

  return (
    <div
      className={`relative flex flex-col rounded-xl border border-gray-200 px-3 py-2 text-left ${
        loading ? "bg-gray-50 opacity-70" : ""
      }`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
        {label}
      </span>

      <button
        type="button"
        disabled={disabled}
        onClick={onToggle}
        className={`mt-0.5 flex w-full items-center justify-between bg-transparent text-sm font-medium outline-none ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <span className="flex items-center gap-2">
          {loading && (
            <Loader2 className="h-3.5 w-3.5 animate-spin text-gray-400" />
          )}

          {loading ? "Loading makes..." : value}
        </span>

        {!loading && (
          <ChevronDown
            className={`h-4 w-4 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {isOpen && !disabled && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="max-h-60 overflow-y-auto py-1">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-3 py-2 text-left text-sm transition-colors hover:bg-gray-100 ${
                  option === value
                    ? "bg-gray-50 font-semibold text-gray-900"
                    : "text-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Search } from "lucide-react";

// const ANY_MAKE = "Any Make";
// // const MAKES = [
// //   "Any Make",
// //   "Porsche",
// //   "Ferrari",
// //   "Land Rover",
// //   "Tesla",
// //   "Mercedes-Benz",
// // ];
// const BODY_TYPES = [
//   "Any Type",
//   "Sedan",
//   "SUV",
//   "Coupe",
//   "Convertible",
//   "Truck",
//   "Electric",
// ];
// const PRICE_CAPS = [
//   "Any Price",
//   "$50,000",
//   "$100,000",
//   "$150,000",
//   "$250,000+",
// ];

// export default function SearchWidget() {
//   const router = useRouter();
//   const [makes, setMakes] = useState<string[]>([ANY_MAKE]);
//   const [loading, setLoading] = useState(true);
//   const [make, setMake] = useState(makes[0]);
//   const [bodyType, setBodyType] = useState(BODY_TYPES[0]);
//   const [maxPrice, setMaxPrice] = useState(PRICE_CAPS[0]);

//   function handleSearch() {
//     const params = new URLSearchParams();
//     if (make !== makes[0]) params.set("make", make);
//     if (bodyType !== BODY_TYPES[0]) params.set("bodyType", bodyType);
//     if (maxPrice !== PRICE_CAPS[0]) params.set("maxPrice", maxPrice);
//     router.push(`/shop?${params.toString()}`);
//   }

//   useEffect(() => {
//     fetch("/api/makes")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch makes");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setMakes([
//           ANY_MAKE,
//           ...data.map((make: { name: string }) => make.name),
//         ]);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="grid grid-cols-1 gap-3 rounded-2xl bg-white p-4 text-foreground shadow-xl ring-1 ring-black/5 sm:grid-cols-[1fr_1fr_1fr_auto]">
//       <Field
//         label="Make"
//         value={make}
//         options={makes}
//         onChange={setMake}
//         disabled={loading}
//       />
//       <Field
//         label="Body Type"
//         value={bodyType}
//         options={BODY_TYPES}
//         onChange={setBodyType}
//       />
//       <Field
//         label="Max Price"
//         value={maxPrice}
//         options={PRICE_CAPS}
//         onChange={setMaxPrice}
//       />
//       <button
//         onClick={handleSearch}
//         className="flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-600"
//       >
//         <Search className="h-4 w-4" />
//         Search
//       </button>
//     </div>
//   );
// }

// function Field({
//   label,
//   value,
//   options,
//   onChange,
//   disabled,
// }: {
//   label: string;
//   value: string;
//   options: string[];
//   onChange: (value: string) => void;
//   disabled?: boolean;
// }) {
//   return (
//     <label className="flex flex-col rounded-xl border border-gray-200 px-3 py-2 text-left">
//       <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">
//         {label}
//       </span>
//       <select
//         disabled={disabled}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="mt-0.5 bg-transparent text-sm font-medium outline-none"
//       >
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// }
