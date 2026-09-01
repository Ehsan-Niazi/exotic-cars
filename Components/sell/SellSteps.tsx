const STEPS = [
  {
    number: "01",
    title: "Tell us about your car",
    description:
      "Submit the details below — make, model, condition, and your asking price.",
  },
  {
    number: "02",
    title: "We verify and list it",
    description:
      "Our team confirms the details and gets your car in front of verified buyers.",
  },
  {
    number: "03",
    title: "You get paid, securely",
    description:
      "Accept an offer and receive payment through our escrow-backed checkout.",
  },
];

export default function SellSteps() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
          How selling works
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number}>
              <p className="text-sm font-semibold text-primary">{step.number}</p>
              <h3 className="mt-3 text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-foreground/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
