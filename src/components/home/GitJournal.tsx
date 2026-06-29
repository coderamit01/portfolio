import { GIT_JOURNAL } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { Reveal } from "@/src/components/ui/Reveal";

export function GitJournal() {
  return (
    <Reveal
      as="section"
      delay={0.05}
      className="rounded-[20px] border border-border bg-card p-10"
    >
      <Eyebrow className="mb-[26px]">Git Journaling</Eyebrow>
      <ul className="flex flex-col gap-[22px]">
        {GIT_JOURNAL.map(({ date, text, dim }) => (
          <li key={text} className="flex items-start gap-[14px]">
            <span className="mt-[7px] h-[7px] w-[7px] flex-none rounded-full bg-muted" />
            <div className="text-sm">
              <span className="text-muted">{date}:</span>{" "}
              <span className={dim ? "text-muted" : "text-text"}>{text}</span>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
