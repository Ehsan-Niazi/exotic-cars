import Link from "next/link";
import { BodyType } from "@/lib/types";
import Image from "next/image";

const CATEGORIES: { type: BodyType; icon: string; hoverIcon: string }[] = [
  {
    type: "Hatchback",
    icon: "/body-types/hatchback.svg",
    hoverIcon: "/body-types/hatchback1.svg",
  },
  {
    type: "Coupe",
    icon: "/body-types/coupe.svg",
    hoverIcon: "/body-types/coupe1.svg",
  },
  {
    type: "Convertible",
    icon: "/body-types/convertible.svg",
    hoverIcon: "/body-types/convertible1.svg",
  },
  {
    type: "Sedan",
    icon: "/body-types/sedan.svg",
    hoverIcon: "/body-types/sedan1.svg",
  },
  {
    type: "SUV",
    icon: "/body-types/suv.svg",
    hoverIcon: "/body-types/suv1.svg",
  },

  {
    type: "Truck",
    icon: "/body-types/pickup.svg",
    hoverIcon: "/body-types/pickup1.svg",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <h2 className="text-2xl font-semibold tracking-[-0.02em]">
        Browse by body type
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {CATEGORIES.map(({ type, icon, hoverIcon }) => (
          <Link
            key={type}
            href={`/shop?bodyType=${type}`}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 px-2 py-6 transition-colors sm:py-8 hover:border-red-700 hover:bg-red-50"
          >
            <div className="relative h-14 w-24 sm:h-16 sm:w-28">
              <Image
                src={icon}
                alt={type}
                height={112}
                width={112}
                className="absolute object-contain opacity-100 transition-opacity group-hover:opacity-0"
              />

              <Image
                src={hoverIcon}
                alt={type}
                width={112}
                height={112}
                className="absolute object-contain opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <span className="mt-7 text-sm font-medium">{type}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
