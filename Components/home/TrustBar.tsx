const STATS = [
  { value: "2,400+", label: "Verified Listings" },
  { value: "180+", label: "Trusted Dealers" },
  { value: "50", label: "States Covered" },
  { value: "4.9/5", label: "Average Buyer Rating" },
];

// Values are static placeholders. For live numbers, fetch them from
// GET /api/stats on the server and pass them in as props.
export default function TrustBar() {
  return (
    <section className="border-b bg-white pt-24 pb-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-8 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
