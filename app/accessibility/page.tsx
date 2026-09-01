import LegalHeader from "@/components/legal/LegalHeader";
import LegalSection from "@/components/legal/LegalSection";

export default function AccessibilityPage() {
  return (
    <main className="bg-background">
      <LegalHeader title="Accessibility" updated="August 30, 2026" />
      <div className="mx-auto max-w-3xl space-y-10 px-8 py-14">
        <LegalSection
          heading="Our commitment"
          paragraphs={[
            "We want Exotic Cars Hub to be usable by everyone, including people who rely on assistive technology like screen readers or keyboard navigation.",
          ]}
        />
        <LegalSection
          heading="Standards we work toward"
          paragraphs={[
            "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, and we treat accessibility issues as bugs to be fixed.",
          ]}
        />
        <LegalSection
          heading="Let us know"
          paragraphs={[
            "If you run into an accessibility barrier anywhere on the site, please reach out through our Contact page — we want to hear about it.",
          ]}
        />
      </div>
    </main>
  );
}
