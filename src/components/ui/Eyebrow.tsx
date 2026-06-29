interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/** The small "• Label" tag that sits above section headings. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-[9px] text-sm text-accent ${className ?? ""}`}
    >
      <span className="h-[7px] w-[7px] rounded-full bg-accent" />
      {children}
    </div>
  );
}
