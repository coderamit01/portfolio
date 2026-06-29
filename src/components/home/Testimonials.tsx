"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { GlowEdge } from "@/src/components/ui/GlowEdge";
import { cn } from "@/src/lib/utils";
import { EASE } from "@/src/lib/animations";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-[94px] overflow-hidden rounded-[20px] border border-border bg-card p-[54px_48px]"
    >
      <GlowEdge />
      <div className="mb-[42px] text-center">
        <Eyebrow className="mb-3">Testimonials</Eyebrow>
        <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold">
          What clients say
          <span className="animate-blink text-accent">_</span>
        </h2>
      </div>

      <div className="relative mx-auto max-w-[760px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="rounded-[18px] border border-border bg-inner p-10"
          >
            <Quote className="mb-5 text-accent opacity-85" size={38} fill="currentColor" />
            <p className="mb-[26px] text-[clamp(16px,1.6vw,20px)] leading-[1.7] text-text">
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <div
                className="flex h-[54px] w-[54px] flex-none items-center justify-center rounded-full text-[19px] font-extrabold text-accent"
                style={{ background: "linear-gradient(150deg,#234b4f,#101f22)" }}
              >
                {t.initials}
              </div>
              <div className="flex-1">
                <div className="text-base font-bold">{t.name}</div>
                <div className="text-[13px] text-muted">{t.role}</div>
              </div>
              <div className="flex gap-[3px] text-[#f5c451]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={17} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-[30px] flex items-center justify-center gap-[18px]">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card2 text-text transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <ArrowLeft size={18} strokeWidth={2.2} />
          </button>
          <div className="flex gap-[9px]">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-[9px] w-[9px] rounded-full transition-colors duration-300",
                  i === index ? "bg-accent" : "bg-border",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card2 text-text transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <ArrowRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
