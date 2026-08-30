import { createHash, randomInt } from "crypto";

export function generateResetCode(): string {
  return randomInt(100000, 1000000).toString();
}

export function hashResetCode(code: string): string {
  return createHash("sha256").update(code).digest("hex");
}
