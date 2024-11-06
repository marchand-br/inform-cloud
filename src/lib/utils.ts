import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// verifica se o objeto é vazio {}
export function emptyObject(obj: object): boolean {
  // return Object.keys({obj}).length === 0;
  return Object.keys(obj).length === 0;
}