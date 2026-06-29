"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { GlowEdge } from "@/src/components/ui/GlowEdge";
import { RichTextRenderer } from "@/src/components/ui/RichTextRenderer";
import { staggerContainer, fadeUp, viewportOnce } from "@/src/lib/animations";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-[94px] overflow-hidden rounded-[20px] border border-border bg-card p-[54px_48px]"
    >
      <GlowEdge />
      <div className="mb-[46px] text-center">
        <Eyebrow className="mb-[14px]">Cooperation</Eyebrow>
        <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.2]">
          Designing <span className="text-text">solutions</span>{" "}
          <span className="text-muted">
            customized to meet your requirements
          </span>
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-border bg-inner p-[34px_30px] transition-colors duration-300 hover:border-[rgba(141,209,79,0.4)]"
          >
            <div className="mb-[26px] text-text">
              <Icon size={26} strokeWidth={1.6} />
            </div>
            <h3 className="mb-3 text-lg font-bold">{title}</h3>
            <p className="text-[13.5px] leading-[1.7] text-muted">
              <RichTextRenderer value={description} />
            </p>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-[42px] text-center text-[15px] leading-[1.8] text-muted">
        Excited to take on{" "}
        <span className="font-bold text-text">new projects</span> and
        collaborate.
        <br />
        Let&rsquo;s chat about your ideas.{" "}
        <a href="#contact" className="font-semibold text-accent">
          Reach out!
        </a>
      </p>
    </section>
  );
}
