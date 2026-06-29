/** The thin glowing line that runs along the top edge of feature cards. */
export function GlowEdge({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute left-[14%] right-[14%] top-[-1px] h-[2px] opacity-85 ${className ?? ""}`}
      style={{
        background:
          "linear-gradient(90deg,transparent,var(--accent),transparent)",
        boxShadow: "0 0 18px 1px var(--accent)",
      }}
    />
  );
}
