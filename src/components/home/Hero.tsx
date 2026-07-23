"use client";
import { motion } from "framer-motion";
import { fadeRight, fadeLeft, viewportOnce } from "@/src/lib/animations";
import amitImage from "@/src/assets/amit.png";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import {
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiGo,
  SiPostgresql,
  SiWordpress
} from "react-icons/si";



const TECH_TILES = [
  {
    node: <SiNodedotjs />,
    bg: "rgba(83,158,67,.10)",
    color: "#539e43",
    size: "text-[18px]",
  },
  {
    node: <SiExpress />,
    bg: "rgba(0,0,0,.08)",
    color: "#000000",
    size: "text-[16px]",
  },
  {
    node: <SiNextdotjs />,
    bg: "rgba(0,0,0,.10)",
    color: "#000000",
    size: "text-[18px]",
  },
  {
    node: <SiReact />,
    bg: "rgba(97,218,251,.08)",
    color: "#61dafb",
    size: "text-[18px]",
  },
  {
    node: <SiTailwindcss />,
    bg: "rgba(56,189,248,.10)",
    color: "#38bdf8",
    size: "text-[18px]",
  },
  {
    node: <SiBootstrap />,
    bg: "rgba(121,48,250,.10)",
    color: "#7b30fa",
    size: "text-[18px]",
  },
  {
    node: <SiDocker />,
    bg: "rgba(36,160,237,.10)",
    color: "#2496ed",
    size: "text-[18px]",
  },
  {
    node: <SiGo />,
    bg: "rgba(0,173,216,.10)",
    color: "#00add8",
    size: "text-[20px]",
  },
  {
    node: <SiPostgresql />,
    bg: "rgba(51,103,145,.10)",
    color: "#336791",
    size: "text-[18px]",
  },
  {
    node: <SiWordpress />,
    bg: "rgba(33,117,155,.10)",
    color: "#21759b",
    size: "text-[18px]",
  },
];

export function Hero() {
  return (
    <section
      id="about"
      className="relative mt-6.5 scroll-mt-23.5 py-12"
    >
      <div className="flex flex-col md:flex-row-reverse md:items-center gap-13">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto w-full md:w-1/2 max-w-105 flex-1">
          <div>
            <Image src={amitImage} className="h-full w-full" alt="Amit Hasan Profile Image" height={100} width={100} />
          </div>
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="md:w-1/2"
        >
          <p className="mb-3.5 text-[clamp(15px,1.4vw,17px)] tracking-[0.5px] text-pink">
            {"<span>"}
            <span className="text-slate-700">Hi, I`m Amit Hasan</span>
            <span className="animate-blink text-accent">|</span>
            {"</span>"}
          </p>
          <h1 className="mb-5.5 text-slate-950 text-[clamp(34px,4.4vw,58px)] font-extrabold leading-[1.08] tracking-[-1px]">
            Building Modern
            <span className="text-accent"> Web Experiences</span>
          </h1>
          <p className="mb-7.5 max-w-140 text-[clamp(13px,1.1vw,15px)] leading-[1.75] text-slate-700">
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

          <div className="flex items-center gap-4 mt-5">
            <Link href="#" className="secondary_button" role="button">{`Case Studies`}</Link>
            <Link href="#" className="action_button" role="button">{`Let's Talk`}</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
