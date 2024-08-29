import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function shortText(text: string | undefined | null ): string {
  const safeText = text ?? ""; 
  return safeText.charAt(0).toUpperCase() + safeText.charAt(safeText.length - 1).toUpperCase();
}
