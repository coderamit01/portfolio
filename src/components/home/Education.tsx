import { GraduationCap, ScanLine } from "lucide-react";
import { EDUCATION, RESEARCHED } from "@/src/lib/data";
import { Reveal } from "@/src/components/ui/Reveal";
import type { TimelineItem } from "@/src/types";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ul className="relative flex flex-col gap-6 border-l border-border pl-6">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            className={`absolute -left-[31px] top-[5px] h-[9px] w-[9px] rounded-full ${item.active ? "bg-accent" : "bg-muted"
              }`}
          />
          <div
            className={`mb-1 text-[13px] ${item.active ? "text-accent" : "text-muted"}`}
          >
            {item.period}: <span className="text-accent">{item.title}</span>
          </div>
          <div className="text-sm text-text">{item.detail}</div>
        </li>
      ))}
    </ul>
  );
}

export function Education() {
  return (
    <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-2">
      <Reveal
        as="section"
        className="rounded-[20px] border border-border bg-card p-10"
      >
        <h2 className="mb-[30px] flex items-center gap-[14px] text-[clamp(26px,2.8vw,36px)] font-extrabold">
          <GraduationCap className="text-accent" size={30} strokeWidth={1.7} />
          Education
        </h2>
        <Timeline items={EDUCATION} />
      </Reveal>

      <Reveal
        as="section"
        delay={0.05}
        className="rounded-[20px] border border-border bg-card p-10"
      >
        <h2 className="mb-[30px] flex items-center gap-[14px] text-[clamp(26px,2.8vw,36px)] font-extrabold">
          <ScanLine className="text-accent" size={30} strokeWidth={1.7} />
          Researched
        </h2>
        <Timeline items={RESEARCHED} />
      </Reveal>
    </div>
  );
}
