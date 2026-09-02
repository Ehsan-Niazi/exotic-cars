import Link from "next/link";

export default function LegalHeader({
  title,
  updated,
}: {
  title: string;
  updated: string;
}) {
  return (
    <div className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-14">
        <p className="text-xs text-neutral-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>{" "}
          / <span className="text-neutral-300">{title}</span>
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.02em]">
          {title}
        </h1>
        <p className="mt-2 text-xs text-neutral-500">Last updated: {updated}</p>
      </div>
    </div>
  );
}
