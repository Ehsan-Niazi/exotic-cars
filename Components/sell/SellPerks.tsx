import { ShieldCheck, TrendingUp, Zap } from "lucide-react";

const PERKS = [
  {
    icon: ShieldCheck,
    title: "Verified buyers only",
    description: "Every buyer on the platform goes through the same identity checks your listing will.",
  },
  {
    icon: TrendingUp,
    title: "Fair, data-backed pricing",
    description: "We help you price against real comparable sales, not a guess.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    description: "Most listings get their first serious inquiry within a week.",
  },
];

export default function SellPerks() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {PERKS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-2xl bg-white p-6 ring-1 ring-foreground/10">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
            <p className="mt-1.5 text-[13px] leading-6 text-foreground/60">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
