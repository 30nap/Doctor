import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** True when a value still contains a [bracketed] placeholder. */
export function isPlaceholder(value: string | null | undefined): boolean {
  return !value || /\[[^\]]*\]/.test(value);
}

/** Returns the value, or undefined if it is still a placeholder. */
export function real<T extends string>(value: T | null | undefined): T | undefined {
  return isPlaceholder(value) ? undefined : (value as T);
}

const faDigits = "۰۱۲۳۴۵۶۷۸۹";

/** Converts Latin digits to Persian digits. */
export function toFaDigits(input: string | number): string {
  return String(input).replace(/\d/g, (d) => faDigits[Number(d)]);
}
