"use client";

import { createContext, useContext, useState } from "react";
import AuthModal from "./AuthModal";

const AuthModalContext = createContext<{ open: () => void } | null>(null);

// Wraps the whole app once (see app/providers.tsx). Any client component
// anywhere — the navbar button, a "Sign in" prompt buried inside a
// CarCard — can call useAuthModal().open() without needing to know about
// each other or pass callbacks around.
export function AuthModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AuthModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <AuthModal open={isOpen} onClose={() => setIsOpen(false)} />
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const ctx = useContext(AuthModalContext);
  if (!ctx) {
    throw new Error("useAuthModal must be used within AuthModalProvider");
  }
  return ctx;
}
