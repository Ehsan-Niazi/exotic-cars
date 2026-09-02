"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import FormField from "./FormField";

export default function SignUpForm({ onSuccess }: { onSuccess: () => void }) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Account created, but sign-in failed. Try signing in manually.");
      return;
    }

    router.refresh();
    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        label="Full name"
        type="text"
        value={name}
        onChange={setName}
      />
      <FormField label="Email" type="email" value={email} onChange={setEmail} />
      <FormField
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />

      {error && <p className="text-xs font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-primary py-2.5 text-sm font-medium text-white transition-colors hover:bg-secondary disabled:opacity-60"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>

      <p className="text-center text-[11px] font-medium text-foreground/40">
        Members get 15% off every listing, automatically.
      </p>
    </form>
  );
}
