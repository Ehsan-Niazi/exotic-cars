export default function LegalSection({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">{heading}</h2>
      <div className="mt-3 space-y-3">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-sm leading-7 text-foreground/65">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
