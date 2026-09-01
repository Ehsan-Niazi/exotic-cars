const STATS = [
  { value: "2019", label: "Founded in Seattle" },
  { value: "12,000+", label: "Cars Sold" },
  { value: "180+", label: "Trusted Dealers" },
  { value: "4.9/5", label: "Average Buyer Rating" },
];

export default function StatsStrip() {
  return (
    <section className="bg-neutral-950 py-10 sm:py-12 lg:py-14 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-semibold tracking-[-0.02em]">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-neutral-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
