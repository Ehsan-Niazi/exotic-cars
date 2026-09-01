import LegalHeader from "@/components/legal/LegalHeader";
import LegalSection from "@/components/legal/LegalSection";

export default function CookiesPage() {
  return (
    <main className="bg-background">
      <LegalHeader title="Cookies Policy" updated="August 30, 2026" />
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-14">
        <LegalSection
          heading="What are cookies"
          paragraphs={[
            "Cookies are small text files stored on your device that help websites remember information about your visit.",
          ]}
        />
        <LegalSection
          heading="How we use cookies"
          paragraphs={[
            "Essential cookies keep you signed in between visits and remember basic site preferences. We don't use cookies for third-party advertising.",
          ]}
        />
        <LegalSection
          heading="Managing cookies"
          paragraphs={[
            "You can control or delete cookies through your browser settings. Note that disabling essential cookies may prevent you from staying signed in.",
          ]}
        />
      </div>
    </main>
  );
}
