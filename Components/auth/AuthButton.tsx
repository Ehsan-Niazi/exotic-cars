"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { ChevronDown, LogOut } from "lucide-react";
import { useAuthModal } from "./AuthModalProvider";
import { MEMBER_DISCOUNT_PERCENT } from "@/lib/pricing";

export default function AuthButton() {
  const { data: session, status } = useSession();
  const { open } = useAuthModal();
  const [menuOpen, setMenuOpen] = useState(false);

  if (status === "loading") {
    return <span className="h-4 w-24 animate-pulse rounded bg-foreground/10" />;
  }

  if (!session) {
    return (
      <button onClick={open} className="hover:text-red-700 transition-colors">
        Sign In / Sign Up
      </button>
    );
  }

  const firstName = session.user?.name?.split(" ")[0] || "there";
  const initial = firstName[0]?.toUpperCase() ?? "U";

  return (
    <div
      className="relative"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <button className="flex items-center gap-1.5 transition-colors hover:text-red-700">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
          {initial}
        </span>
        Welcome, {firstName}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            menuOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {menuOpen && (
        <div className="absolute right-0 top-full z-50 min-w-56 rounded-md bg-white py-2 shadow-lg">
          <div className="border-b border-foreground/10 px-4 py-2">
            <p className="text-xs text-foreground/50">Signed in as</p>
            <p className="truncate text-sm font-medium text-foreground">
              {session.user?.email}
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {MEMBER_DISCOUNT_PERCENT}% member pricing active
          </div>
          <button
            onClick={() => signOut()}
            className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-foreground/80 transition-colors hover:bg-red-50 hover:text-primary"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
