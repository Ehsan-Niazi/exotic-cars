"use client";

import { useAuthModal } from "./AuthModalProvider";

// Small client "island" so CarCard (a Server Component) can offer a
// working sign-in trigger without itself needing "use client".
export default function SignInPrompt() {
  const { open } = useAuthModal();
  return (
    <button
      onClick={open}
      className="shrink-0 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md"
    >
      Sign In
    </button>
  );
}
