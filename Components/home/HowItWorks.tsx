const STEPS = [
  {
    number: "01",
    title: "Search & compare",
    description:
      "Filter by make, body type, and budget, then compare inspection reports side by side.",
  },
  {
    number: "02",
    title: "Connect with the seller",
    description:
      "Message verified dealers or owners directly, ask questions, and schedule a viewing.",
  },
  {
    number: "03",
    title: "Buy with confidence",
    description:
      "Pay securely through escrow and arrange pickup or nationwide delivery.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="text-2xl font-semibold tracking-[-0.02em]">
          How it works
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number}>
              <p className="text-sm font-semibold text-red-500">
                {step.number}
              </p>
              <h3 className="mt-3 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
