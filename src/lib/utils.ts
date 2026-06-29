/** Tiny `clsx`-style class joiner — keeps conditional classNames readable. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
