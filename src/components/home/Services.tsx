"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { RichTextRenderer } from "@/src/components/ui/RichTextRenderer";
import { staggerContainer, fadeUp, viewportOnce } from "@/src/lib/animations";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-23.5 overflow-hidden rounded-[20px] border border-border p-[54px_48px]"
    >
      <div className="mb-11.5 text-center">
        <Eyebrow className="text-lg mb-3.5">Services</Eyebrow>
        <h2 className="text-slate-900 text-[clamp(26px,3vw,40px)] font-extrabold leading-[1.2]">Solutions That  
          <span className="text-accent"> Work</span>{" "} for You
        </h2>
        <p className="text-slate-800">Custom-tailored solutions designed to meet your specific requirements and business objectives. </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SERVICES.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-[#21bf7312] p-[34px_30px] bg-[#21bf7312] transition-colors duration-300 hover:border-[#21bf73]"
          >
            <div className="mb-6.5 text-text">
              <Icon className="text-accent" size={26} strokeWidth={1.6} />
            </div>
            <h3 className="mb-3 text-slate-800 text-lg font-bold">{title}</h3>
            <p className="text-[13.5px] leading-[1.7] text-slate-600">
              <RichTextRenderer value={description} />
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
