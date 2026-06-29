"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { JOBS } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { GlowEdge } from "@/src/components/ui/GlowEdge";
import { cn } from "@/src/lib/utils";
import { EASE } from "@/src/lib/animations";

export function Experience() {
  const [active, setActive] = useState(0);
  const job = JOBS[active];

  return (
    <section
      id="resume"
      className="relative scroll-mt-[94px] overflow-hidden rounded-[20px] border border-border bg-card p-[54px_48px]"
    >
      <GlowEdge />
      <Eyebrow className="mb-[14px]">Experience</Eyebrow>
      <h2 className="mb-[44px] text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.2]">
        <span className="text-text">+12</span>{" "}
        <span className="text-muted">years of</span>{" "}
        <span className="text-text">passion</span>{" "}
        <span className="text-muted">for programming techniques</span>
      </h2>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        {/* Company tabs */}
        <div className="flex flex-col gap-[14px]">
          {JOBS.map((j, i) => (
            <button
              key={j.company}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "flex items-center gap-4 rounded-[14px] border bg-inner p-[18px_22px] text-left transition-colors duration-300",
                i === active
                  ? "border-[rgba(141,209,79,0.5)]"
                  : "border-border hover:border-[rgba(141,209,79,0.4)]",
              )}
            >
              <span
                className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] text-[20px] font-extrabold"
                style={{
                  background: j.logoBg,
                  color: j.logoColor,
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {j.logo}
              </span>
              <span>
                <span className="block text-[17px] font-bold">{j.company}</span>
                <span className="block text-[13px] text-muted">{j.period}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <h3 className="mb-[22px] text-[21px] font-bold text-accent">
              {job.role}
            </h3>
            <ul className="mb-[30px] flex flex-col gap-4">
              {job.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-3 text-sm leading-[1.7] text-text"
                >
                  <span className="mt-[2px] text-accent">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-[9px] border border-border p-[9px_16px] text-[13px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
