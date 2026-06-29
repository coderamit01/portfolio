/** Decorative concentric-ring SVG used in the Cooperation / Skills cards. */
export function OrbitRings({
  className,
  reverse = false,
}: {
  className?: string;
  reverse?: boolean;
}) {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      stroke="rgba(255,255,255,.08)"
      aria-hidden
      className={`${reverse ? "animate-spin-rev" : "animate-spin-slow"} ${className ?? ""}`}
    >
      <circle cx="75" cy="75" r="58" />
      <circle cx="75" cy="75" r="36" />
      <circle cx="75" cy="17" r="3" fill="rgba(255,255,255,.14)" stroke="none" />
      <circle cx="129" cy="90" r="3" fill="rgba(255,255,255,.14)" stroke="none" />
    </svg>
  );
}
