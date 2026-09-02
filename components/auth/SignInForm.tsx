"use client";

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import FormField from "./FormField";

type Mode = "signin" | "forgot" | "reset";

export default function SignInForm({ onSuccess }: { onSuccess: () => void }) {
  const router = useRouter();

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function clearMessages() {
    setError(null);
    setMessage(null);
  }

  function goToSignIn() {
    setMode("signin");
    setCode("");
    setNewPassword("");
    clearMessages();
  }

  async function handleSignIn(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    clearMessages();
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Incorrect email or password.");
      return;
    }

    router.refresh();
    onSuccess();
  }

  async function handleForgotPassword(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    clearMessages();
    setLoading(true);

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Unable to send the confirmation code.");
        setLoading(false);
        return;
      }

      setMessage(
        "If an account exists for this email, a confirmation code has been sent.",
      );
      setMode("reset");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleResetPassword(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    clearMessages();

    if (code.length !== 6) {
      setError("Please enter the 6-digit confirmation code.");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          code,
          newPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? "Unable to reset your password.");
        setLoading(false);
        return;
      }

      const result = await signIn("credentials", {
        email,
        password: newPassword,
        redirect: false,
      });

      if (result?.error) {
        setError(
          "Password was reset successfully. Please sign in with your new password.",
        );
        setMode("signin");
        setPassword("");
        setCode("");
        setNewPassword("");
        setLoading(false);
        return;
      }

      setLoading(false);
      router.refresh();
      onSuccess();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  if (mode === "forgot") {
    return (
      <form onSubmit={handleForgotPassword} className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">Forgot your password?</h3>
          <p className="mt-1 text-xs leading-5 text-foreground/50">
            Enter your email and we&apos;ll send you a 6-digit confirmation
            code.
          </p>
        </div>

        <FormField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
        />

        {error && <p className="text-xs font-medium text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-primary py-2.5 text-sm font-medium text-white transition-colors hover:bg-secondary disabled:opacity-60"
        >
          {loading ? "Sending code..." : "Send Confirmation Code"}
        </button>

        <button
          type="button"
          onClick={goToSignIn}
          className="w-full text-center text-xs font-medium text-foreground/50 hover:text-primary"
        >
          Back to Sign In
        </button>
      </form>
    );
  }

  if (mode === "reset") {
    return (
      <form onSubmit={handleResetPassword} className="space-y-4">
        <div>
          <h3 className="text-base font-semibold">Reset your password</h3>
          <p className="mt-1 text-xs leading-5 text-foreground/50">
            Enter the 6-digit code sent to{" "}
            <span className="font-medium text-foreground/70">{email}</span>.
          </p>
        </div>

        <label className="block">
          <span className="text-xs font-medium text-foreground/60">
            Confirmation Code
          </span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={6}
            required
            value={code}
            onChange={(e) =>
              setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            className="mt-1 w-full rounded-lg border border-foreground/15 px-3 py-2 text-center text-lg font-semibold tracking-[0.35em] text-foreground outline-none focus:border-primary"
          />
        </label>

        <FormField
          label="New Password"
          type="password"
          value={newPassword}
          onChange={setNewPassword}
        />

        {message && (
          <p className="text-xs font-medium text-secondary">{message}</p>
        )}

        {error && <p className="text-xs font-medium text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-primary py-2.5 text-sm font-medium text-white transition-colors hover:bg-secondary disabled:opacity-60"
        >
          {loading ? "Resetting password..." : "Reset Password"}
        </button>

        <div className="flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={goToSignIn}
            className="font-medium text-foreground/50 hover:text-primary"
          >
            Back to Sign In
          </button>

          <button
            type="button"
            onClick={() => {
              clearMessages();
              setMode("forgot");
              setCode("");
              setNewPassword("");
            }}
            className="font-medium text-foreground/50 hover:text-primary"
          >
            Resend Code
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSignIn} className="space-y-4">
      <FormField label="Email" type="email" value={email} onChange={setEmail} />

      <FormField
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />

      <div className="flex justify-end -mt-1">
        <button
          type="button"
          onClick={() => {
            clearMessages();
            setMode("forgot");
          }}
          className="text-xs font-medium text-foreground/50 transition-colors hover:text-primary"
        >
          Forgot password?
        </button>
      </div>

      {error && <p className="text-xs font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-primary py-2.5 text-sm font-medium text-white transition-colors hover:bg-secondary disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <p className="text-center text-[11px] text-foreground/40">
        Members get 15% off every listing, automatically.
      </p>
    </form>
  );
}
