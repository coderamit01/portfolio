"use client";

import { motion } from "framer-motion";
import { STATS } from "@/src/lib/data";
import { Counter } from "@/src/components/ui/Counter";
import { staggerContainer, fadeUp, viewportOnce } from "@/src/lib/animations";

export function Stats() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="rounded-[20px] border border-border bg-card p-[44px_48px]"
      style={{
        backgroundImage:
          "linear-gradient(var(--dot) 1px,transparent 1px),linear-gradient(90deg,var(--dot) 1px,transparent 1px)",
        backgroundSize: "46px 46px",
      }}
    >
      <div className="grid grid-cols-1 gap-[34px] sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ icon: Icon, value, suffix, label }) => (
          <motion.div key={label} variants={fadeUp}>
            <div className="mb-[14px] text-accent">
              <Icon size={26} strokeWidth={1.7} />
            </div>
            <Counter
              value={value}
              suffix={suffix}
              className="text-[clamp(34px,3.4vw,48px)] font-extrabold leading-none"
            />
            <div className="mt-[6px] text-sm text-text">{label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
