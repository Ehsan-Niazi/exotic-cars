import SellHero from "@/components/sell/SellHero";
import SellSteps from "@/components/sell/SellSteps";
import SellPerks from "@/components/sell/SellPerks";
import SellForm from "@/components/sell/SellForm";

export default function SellPage() {
  return (
    <main className="bg-background">
      <SellHero />
      <SellSteps />
      <SellPerks />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 lg:pb-24">
        <h2 className="mb-6 text-2xl font-semibold tracking-[-0.02em] text-foreground">
          Tell us about your car
        </h2>
        <SellForm />
      </section>
    </main>
  );
}
