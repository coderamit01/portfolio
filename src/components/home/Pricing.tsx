"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { PRICING } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { cn } from "@/src/lib/utils";
import { staggerContainer, fadeUp, viewportOnce } from "@/src/lib/animations";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-[94px] overflow-hidden rounded-[20px] border border-border bg-card p-[54px_48px]"
    >
      <div className="mb-[46px] text-center">
        <Eyebrow className="mb-3">Pricing</Eyebrow>
        <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold">
          Flexible plans{" "}
          <span className="text-muted">for every project</span>
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 items-start gap-[24px] md:grid-cols-3"
      >
        {PRICING.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeUp}
            whileHover={{ y: plan.featured ? -8 : -6 }}
            className={cn(
              "relative rounded-[18px] p-[38px_32px] transition-colors duration-300",
              plan.featured
                ? "border border-[rgba(141,209,79,0.5)] shadow-[0_18px_50px_-20px_rgba(141,209,79,0.45)]"
                : "border border-border bg-inner hover:border-[rgba(141,209,79,0.4)]",
            )}
            style={
              plan.featured
                ? {
                  background:
                    "linear-gradient(180deg,rgba(141,209,79,.07),var(--inner))",
                }
                : undefined
            }
          >
            {plan.featured && (
              <span className="absolute right-[18px] top-[18px] rounded-md bg-accent px-3 py-[5px] text-[11px] font-bold text-[#0f1a0a]">
                POPULAR
              </span>
            )}
            <div
              className={cn(
                "mb-2 text-sm",
                plan.featured ? "text-accent" : "text-muted",
              )}
            >
              // {plan.name}
            </div>
            <div className="mb-[6px] flex items-end gap-[6px]">
              <span className="text-[clamp(34px,3.4vw,46px)] font-extrabold leading-none">
                {plan.price}
              </span>
              {plan.unit && (
                <span className="mb-2 text-sm text-muted">{plan.unit}</span>
              )}
            </div>
            <p className="mb-[26px] text-[13.5px] leading-[1.7] text-muted">
              {plan.description}
            </p>
            <ul className="mb-8 flex flex-col gap-[13px]">
              {plan.features.map((f) => (
                <li
                  key={f.label}
                  className={cn(
                    "flex gap-[11px] text-[13.5px]",
                    f.included ? "text-text" : "text-muted",
                  )}
                >
                  {f.included ? (
                    <Check size={16} className="flex-none text-accent" />
                  ) : (
                    <X size={16} className="flex-none text-muted" />
                  )}
                  {f.label}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={cn(
                "block rounded-[11px] py-[14px] text-center text-sm transition-all duration-300",
                plan.featured
                  ? "bg-accent font-bold text-[#0f1a0a] hover:brightness-110"
                  : "border border-border font-semibold text-text hover:border-accent hover:text-accent",
              )}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
