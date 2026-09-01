import LegalHeader from "@/components/legal/LegalHeader";
import LegalSection from "@/components/legal/LegalSection";

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      <LegalHeader title="Privacy Policy" updated="August 30, 2026" />
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-14">
        <LegalSection
          heading="Information we collect"
          paragraphs={[
            "When you create an account, we collect your name, email address, and a securely hashed version of your password. We never store your password in plain text.",
            "When you browse or search listings, we may collect information about the searches you run and the listings you view, so we can show you more relevant cars.",
          ]}
        />
        <LegalSection
          heading="How we use your information"
          paragraphs={[
            "We use your information to operate your account, show you member pricing, keep track of your saved cars, and communicate with you about listings and account activity.",
            "We do not sell your personal information to third parties.",
          ]}
        />
        <LegalSection
          heading="Cookies"
          paragraphs={[
            "We use cookies to keep you signed in and to remember basic preferences. See our Cookies Policy for details.",
          ]}
        />
        <LegalSection
          heading="Your choices"
          paragraphs={[
            "You can update your account details or request deletion of your account at any time by contacting us.",
          ]}
        />
        <LegalSection
          heading="Contact us"
          paragraphs={[
            "Questions about this policy? Reach out through our Contact page and we'll get back to you.",
          ]}
        />
      </div>
    </main>
  );
}
