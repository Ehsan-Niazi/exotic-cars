"use client";

import { FormEvent, useState } from "react";

const CONDITIONS = ["New", "Certified", "Used"];

export default function SellForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // API integration point: POST the FormData below to a real endpoint,
    // e.g. app/api/sell/route.ts, once you're ready to store submissions
    // (Prisma model + email notification, following the same pattern as
    // app/api/auth/signup/route.ts). For now this just confirms receipt.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-foreground/10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
          <span className="text-xl text-secondary">✓</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Thanks — we&apos;ve got it.
        </h3>
        <p className="mt-2 text-sm text-foreground/60">
          A member of our team will reach out within one business day to
          verify the details and talk through pricing.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-6 ring-1 ring-foreground/10 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Make" name="make" placeholder="Porsche" required />
        <Field label="Model" name="model" placeholder="911 Carrera S" required />
        <Field label="Year" name="year" type="number" placeholder="2023" required />
        <Field label="Mileage" name="mileage" type="number" placeholder="4200" required />

        <label className="block">
          <span className="text-xs font-medium text-foreground/60">Condition</span>
          <select
            name="condition"
            required
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-foreground/15 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
          >
            <option value="" disabled>
              Select condition
            </option>
            {CONDITIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <Field
          label="Asking Price"
          name="askingPrice"
          type="number"
          placeholder="95000"
          required
        />
      </div>

      <div className="mt-5">
        <label className="block">
          <span className="text-xs font-medium text-foreground/60">
            Anything else buyers should know?
          </span>
          <textarea
            name="notes"
            rows={4}
            placeholder="Service history, modifications, ownership details..."
            className="mt-1 w-full resize-none rounded-lg border border-foreground/15 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
          />
        </label>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Your Name" name="sellerName" placeholder="Jane Doe" required />
        <Field
          label="Contact Email"
          name="sellerEmail"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full rounded-full bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-secondary disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {loading ? "Submitting..." : "Submit Your Car"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground/60">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-lg border border-foreground/15 px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
      />
    </label>
  );
}
