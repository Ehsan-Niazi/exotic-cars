"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) return;

    setStatus("loading");

    try {
      // API integration point:
      // const response = await fetch("/api/newsletter", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email: trimmedEmail }),
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to subscribe");
      // }

      await new Promise((resolve) => setTimeout(resolve, 700));

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0f0d] py-10 text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#006039]/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#006039]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Small label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#006039]/40 bg-[#006039]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8ccfb2]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#006039]" />
            Exotic Cars Hub
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Stay ahead of the market.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Get the latest exotic and luxury car listings delivered straight to
            your inbox. Be the first to discover exceptional vehicles and new
            arrivals.
          </p>

          {status === "success" ? (
            <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-[#006039]/40 bg-[#006039]/10 px-6 py-5">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#006039] text-lg">
                ✓
              </div>

              <p className="mt-3 text-sm font-semibold text-white">
                You&apos;re on the list.
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Thanks for subscribing. Keep an eye on your inbox for the latest
                listings.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>

                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (status === "error") {
                      setStatus("idle");
                    }
                  }}
                  placeholder="Enter your email address"
                  disabled={status === "loading"}
                  className="h-12 w-full rounded-xl border border-white/10 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#006039] focus:ring-2 focus:ring-[#006039]/30 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-12 shrink-0 rounded-xl bg-primary px-7 text-sm font-semibold text-white shadow-lg shadow-[#006039]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl hover:shadow-[#006039]/30 focus:outline-none focus:ring-2 focus:ring-[#8ccfb2] focus:ring-offset-2 focus:ring-offset-[#0a0f0d] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "loading" ? "Joining..." : "Join the list"}
                </button>
              </form>

              {status === "error" && (
                <p className="mt-3 text-xs font-medium text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="mt-4 text-[13px] text-gray-500">
                No spam. Just exceptional cars and new listings.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
