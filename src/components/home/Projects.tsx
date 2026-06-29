"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { EASE } from "@/src/lib/animations";

export function Projects() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];
  const next = () => setIndex((i) => (i + 1) % PROJECTS.length);
  const prev = () => setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);

  const meta: { label: string; value: string }[] = [
    { label: "Client", value: project.client },
    { label: "Completion Time", value: project.time },
    { label: "Technologies", value: project.tech },
  ];

  return (
    <section
      id="portfolio"
      className="scroll-mt-[94px] rounded-[20px] border border-border bg-card p-[54px_48px]"
    >
      <Eyebrow className="mb-3">Projects</Eyebrow>
      <h2 className="mb-10 text-[clamp(26px,3vw,40px)] font-extrabold">
        My Recent Works
      </h2>

      <div className="grid grid-cols-1 items-start gap-[46px] lg:grid-cols-2">
        {/* Browser mock */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`mock-${index}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative aspect-[16/13] overflow-hidden rounded-2xl border border-border bg-[#0e0e13]"
          >
            <div className="flex h-[34px] items-center gap-[7px] border-b border-border bg-[#16161c] px-[14px]">
              <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
              <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
            </div>
            <div className="p-[30px]">
              <div className="mb-[10px] text-[22px] font-extrabold text-white">
                {project.tag}
              </div>
              <div className="mb-[22px] max-w-[200px] text-xs text-[#9aa]">
                {project.description}
              </div>
              <div className="mb-[30px] flex gap-2">
                <span className="rounded-md bg-white px-3 py-[6px] text-[11px] font-bold text-black">
                  Try For Free
                </span>
                <span className="rounded-md border border-[#444] px-3 py-[6px] text-[11px] text-[#ccc]">
                  Book A Demo
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div
                  className="h-[46px] rounded-lg border"
                  style={{
                    background: `${project.accent}1a`,
                    borderColor: `${project.accent}33`,
                  }}
                />
                <div className="h-[46px] rounded-lg border border-border bg-white/[0.04]" />
                <div className="h-[46px] rounded-lg border border-border bg-white/[0.04]" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Details */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${index}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <h3 className="mb-[14px] text-[clamp(20px,2.2vw,27px)] font-bold leading-[1.25] text-accent">
                {project.title}
              </h3>
              <p className="mb-[26px] text-sm leading-[1.7] text-muted">
                {project.description}
              </p>
              <div className="mb-2 text-[15px] font-bold text-pink">
                Project Info
              </div>
              {meta.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-[14px] border-b border-border py-4"
                >
                  <span className="flex-none text-sm text-text">{label}</span>
                  <span className="text-right text-sm text-muted">{value}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-[30px] flex flex-wrap items-center justify-between gap-[18px]">
            <div className="flex gap-[26px]">
              <a
                href="#"
                className="flex items-center gap-[7px] border-b border-border pb-[3px] text-sm text-text transition-colors hover:text-accent"
              >
                <ArrowUpRight size={15} />
                Live Demo
              </a>
              <a
                href="#"
                className="flex items-center gap-[7px] border-b border-border pb-[3px] text-sm text-text transition-colors hover:text-accent"
              >
                <Github size={15} />
                View on Github
              </a>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous project"
                className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#aecb86] text-[#1a2410] transition-colors duration-300 hover:bg-accent"
              >
                <ArrowLeft size={20} strokeWidth={2.2} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next project"
                className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#aecb86] text-[#1a2410] transition-colors duration-300 hover:bg-accent"
              >
                <ArrowRight size={20} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
