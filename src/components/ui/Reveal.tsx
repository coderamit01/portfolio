"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/src/lib/animations";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** HTML id for in-page anchor navigation. */
  id?: string;
  as?: "div" | "section";
}

/** Scroll-reveal wrapper: fades + slides its children up when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  id,
  as = "div",
}: RevealProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
