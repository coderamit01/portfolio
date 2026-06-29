"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { staggerContainer, fadeUp, viewportOnce } from "@/src/lib/animations";

export function Blog() {
  return (
    <section
      id="blog"
      className="scroll-mt-[94px] rounded-[20px] border border-border bg-card p-[54px_48px]"
    >
      <div className="mb-[46px] text-center">
        <Eyebrow className="mb-3">Latest Posts</Eyebrow>
        <h2 className="text-[clamp(26px,3vw,40px)] font-extrabold">From Blog</h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3"
      >
        {BLOG_POSTS.map((post) => (
          <motion.article
            key={post.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-2xl border border-border bg-inner transition-colors duration-300 hover:border-[rgba(141,209,79,0.4)]"
          >
            <div
              className="relative h-[200px] overflow-hidden"
              style={{ background: post.gradient }}
            >
              <div className="absolute left-[14px] top-[14px] z-[2] flex gap-2">
                <span className="rounded-md bg-accent px-3 py-[5px] text-[11px] font-bold text-[#0f1a0a]">
                  {post.category}
                </span>
                <span className="rounded-md bg-black/40 px-[11px] py-[5px] text-[11px] text-white">
                  #
                </span>
              </div>
              <div className="absolute inset-[34px_18px_18px] flex items-center justify-center rounded-lg border border-white/5 bg-[#0c0f16] text-xs text-[#3a4154]">
                {post.title.split(" ").slice(0, 2).join(" ").toLowerCase()}.ui
              </div>
            </div>
            <div className="p-6">
              <div className="mb-3 text-xs text-muted">
                {post.date} • {post.readTime}
              </div>
              <h3 className="mb-4 text-[17px] font-bold leading-[1.4]">
                {post.title}
              </h3>
              <p className="mb-[18px] text-[13px] leading-[1.6] text-muted">
                {post.excerpt}
              </p>
              <a
                href="#"
                aria-label={`Read: ${post.title}`}
                className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-border text-text transition-all duration-300 hover:border-accent hover:bg-accent hover:text-[#0f1a0a]"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
