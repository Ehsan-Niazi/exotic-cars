import { Sparkles, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Transparency first",
    description:
      "Every listing carries a real inspection history. No surprises after the sale.",
  },
  {
    icon: Sparkles,
    title: "A standard, not a checkbox",
    description:
      "We turn away sellers who don't meet our bar. It's why buyers keep coming back.",
  },
  {
    icon: HeartHandshake,
    title: "People, not just listings",
    description:
      "Real conversations with real sellers &mdash; we build the tools, not the distance.",
  },
  {
    icon: Compass,
    title: "Rooted, but not limited",
    description:
      "Seattle is home base. Our marketplace reaches buyers and sellers nationwide.",
  },
];

export default function MissionValues() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
          What we stand for
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, description }) => (
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
      </div>
    </section>
  );
}
