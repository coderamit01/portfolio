"use client";

import { motion } from "framer-motion";
import { SKILL_TILES, SKILL_GROUPS } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { OrbitRings } from "@/src/components/ui/OrbitRings";
import { staggerContainer, scaleIn, viewportOnce } from "@/src/lib/animations";

export function Skills() {
  return (
    <section className="relative overflow-hidden rounded-[20px] border border-border bg-card p-[54px_48px]">
      <OrbitRings reverse className="absolute right-9 top-[30px]" />

      <div className="relative mb-[46px] text-center">
        <Eyebrow className="mb-3">Projects</Eyebrow>
        <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold">My Skills</h2>
      </div>

      <div className="grid grid-cols-1 items-center gap-[44px] lg:grid-cols-2">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-[430px] grid-cols-5 gap-4"
        >
          {SKILL_TILES.map((tile, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="flex aspect-square items-center justify-center rounded-[13px] border border-border text-[20px] font-extrabold"
              style={{
                background: tile.bg,
                color: tile.color,
                gridColumnStart: tile.col,
              }}
            >
              {tile.label}
            </motion.div>
          ))}
        </motion.div>

        <ul className="flex flex-col gap-[18px]">
          {SKILL_GROUPS.map(({ label, items }) => (
            <li key={label} className="flex gap-3 text-sm">
              <span className="mt-[2px] text-muted">•</span>
              <span>
                <span className="font-bold text-text">{label}</span>{" "}
                <span className="text-muted">{items}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
