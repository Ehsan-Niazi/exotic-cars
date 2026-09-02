"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function FormField({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground/60">{label}</span>

      <div className="relative mt-1">
        <input
          type={isPassword && showPassword ? "text" : type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-foreground/15 px-3 py-2 pr-10 text-sm text-foreground outline-none focus:border-primary"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((value) => !value)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 transition-colors hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    </label>
  );
}
