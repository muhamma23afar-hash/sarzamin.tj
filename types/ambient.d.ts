declare module "clsx" {
  export type ClassValue = string | number | boolean | null | undefined | ClassValue[] | { [key: string]: unknown };
  export function clsx(...inputs: ClassValue[]): string;
  export { clsx };
}

declare module "tailwind-merge" {
  export function twMerge(...classLists: string[]): string;
}
