"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { HERO_ROLES } from "@/src/lib/data";
import { fadeRight, fadeLeft, viewportOnce } from "@/src/lib/animations";
import amitImage from "@/src/assets/amit.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";


const TECH_TILES = [
  { node: "N", bg: "#000", color: "#fff", size: "text-[22px]" },
  {
    node: "▲",
    bg: "rgba(255,166,17,.08)",
    color: "#ffa611",
    size: "text-[20px]",
  },
  {
    node: "M",
    bg: "rgba(19,170,82,.07)",
    color: "#13aa52",
    size: "text-[18px]",
  },
  {
    node: "JS",
    bg: "rgba(131,200,75,.07)",
    color: "#83c84b",
    size: "text-[13px]",
  },
  {
    node: "⚛",
    bg: "rgba(97,218,251,.06)",
    color: "#61dafb",
    size: "text-[22px]",
  },
];

export function Hero() {
  return (
    <section
      id="about"
      className="relative mt-6.5 scroll-mt-23.5 overflow-hidden   p-12"
    >
      <span id="top" className="absolute -top-24" />
      <div className="flex flex-wrap items-center gap-13.5">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="min-w-75 flex-1 basis-95"
        >
          <p className="mb-3.5 text-[clamp(15px,1.4vw,17px)] tracking-[0.5px] text-pink">
            {"<span>"}
            <span className="text-text">Hi, I'm Amit Hasan</span>
            <span className="animate-blink text-accent">|</span>
            {"</span>"}
          </p>
          <h1 className="mb-5.5 text-[clamp(34px,4.4vw,58px)] font-extrabold leading-[1.08] tracking-[-1px]">
            Building Modern
            <span className="text-accent"> Web Experiences</span>
          </h1>
          <p className="mb-7.5 max-w-140 text-[clamp(13px,1.1vw,15px)] leading-[1.75] text-text">
            <span className="text-pink">{"<p>"}</span>
            Every great product starts with an idea. I bring those ideas to life by building thoughtful, high-quality digital experiences that are reliable, engaging, and designed for long-term success.
            <span className="text-pink">{"</p>"}</span>
          </p>

          <div className="mb-8.5 flex items-center gap-3.5">
            <Marquee speed={30} delay={0} className="flex-1">
              {TECH_TILES.map((tile, i) => (
                <div
                  key={i}
                  className={`flex h-13.5 w-13.5 items-center justify-center rounded-[13px] border border-border font-extrabold me-3 ${tile.size}`}
                  style={{ background: tile.bg, color: tile.color }}
                >
                  {tile.node}
                </div>
              ))}
            </Marquee>
            <span className="text-sm text-muted flex-1">...and More</span>
          </div>

          <div className="flex items-center gap-4">
            <button className="border border-slate-300 py-1.5 px-5 cursor-pointer" role="button">{`Let's Talk`}</button>
            <button className="border border-slate-300 py-1.5 px-5 cursor-pointer" role="button">{`Case Studies`}</button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto h-117.5 w-full max-w-105 flex-none">
          <div>
            <Image src={amitImage} className="h-full w-full" alt="Amit Hasan Profile Image" height={100} width={100} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
