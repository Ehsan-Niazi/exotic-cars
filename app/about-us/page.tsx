import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionValues from "@/components/about/MissionValues";
import StatsStrip from "@/components/about/StatsStrip";
import LocationSection from "@/components/about/LocationSection";
import ClosingCTA from "@/components/about/ClosingCTA";

export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <OurStory />
      <MissionValues />
      <StatsStrip />
      <LocationSection />
      <ClosingCTA />
    </main>
  );
}
