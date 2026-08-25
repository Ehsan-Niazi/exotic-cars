import { ShieldCheck, FileCheck2, CreditCard, Truck } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Verified sellers",
    description:
      "Every dealer and private seller is identity-checked before they can list a vehicle.",
  },
  {
    icon: FileCheck2,
    title: "Inspection reports",
    description:
      "Multi-point inspection history is attached to every listing, not just a photo gallery.",
  },
  {
    icon: CreditCard,
    title: "Secure payments",
    description:
      "Escrow-backed checkout keeps funds protected until you've taken delivery.",
  },
  {
    icon: Truck,
    title: "Nationwide delivery",
    description:
      "Track your vehicle from the seller's driveway to yours, wherever you are.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <h2 className="text-2xl font-semibold tracking-[-0.02em]">
        Why buyers choose Exotic Cars Hub
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map(({ icon: Icon, title, description }) => (
          <div key={title}>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50">
              <Icon className="h-5 w-5 text-red-700" />
            </div>
            <h3 className="mt-4 text-sm font-semibold">{title}</h3>
            <p className="mt-1.5 text-[13px] leading-6 text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
