import LegalHeader from "@/components/legal/LegalHeader";
import LegalSection from "@/components/legal/LegalSection";

export default function TermsPage() {
  return (
    <main className="bg-background">
      <LegalHeader title="Terms of Service" updated="August 30, 2026" />
      <div className="mx-auto max-w-3xl space-y-10 px-8 py-14">
        <LegalSection
          heading="Acceptance of terms"
          paragraphs={[
            "By creating an account or using Exotic Cars Hub, you agree to these terms. If you don't agree, please don't use the platform.",
          ]}
        />
        <LegalSection
          heading="Using the marketplace"
          paragraphs={[
            "Exotic Cars Hub connects buyers and sellers of vehicles. We verify listings and sellers to the best of our ability, but we are not a party to the actual sale between buyer and seller.",
            "You agree to provide accurate information when listing a vehicle for sale or creating an account.",
          ]}
        />
        <LegalSection
          heading="No warranty on vehicles"
          paragraphs={[
            "Vehicles are sold by third-party sellers. While listings go through our inspection and verification process, Exotic Cars Hub does not provide a warranty on any vehicle sold through the platform unless explicitly stated in a listing.",
          ]}
        />
        <LegalSection
          heading="Limitation of liability"
          paragraphs={[
            "Exotic Cars Hub is not liable for disputes arising directly between buyers and sellers, to the fullest extent permitted by law.",
          ]}
        />
        <LegalSection
          heading="Governing law"
          paragraphs={[
            "These terms are governed by the laws of the State of Washington, without regard to conflict-of-law principles.",
          ]}
        />
      </div>
    </main>
  );
}
