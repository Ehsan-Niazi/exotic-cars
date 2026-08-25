import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedListings from "@/components/home/FeaturedListings";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <FeaturedListings />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <NewsletterCTA />
    </main>
  );
}
