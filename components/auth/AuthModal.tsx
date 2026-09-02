"use client";

import { useState } from "react";
import { X } from "lucide-react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default function AuthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-4 sm:gap-6">
            <button
              onClick={() => setTab("signin")}
              className={`border-b-2 pb-1 text-sm font-semibold transition-colors ${
                tab === "signin"
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/50 hover:text-foreground"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab("signup")}
              className={`border-b-2 pb-1 text-sm font-semibold transition-colors ${
                tab === "signup"
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/50 hover:text-foreground"
              }`}
            >
              Sign Up
            </button>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-foreground/40 hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6">
          {tab === "signin" ? (
            <SignInForm onSuccess={onClose} />
          ) : (
            <SignUpForm onSuccess={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
