"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { HERO_ROLES } from "@/src/lib/data";
import { GlowEdge } from "@/src/components/ui/GlowEdge";
import { fadeRight, fadeLeft, viewportOnce } from "@/src/lib/animations";

/** Typewriter that types, pauses, deletes, then advances to the next role. */
function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    let word = 0;
    let char = words[0]?.length ?? 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = words[word];
      char += deleting ? -1 : 1;
      setText(current.slice(0, char));

      let delay = deleting ? 55 : 110;
      if (!deleting && char === current.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && char === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 1600);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

const TECH_TILES = [
  { node: "N", bg: "#000", color: "#fff", size: "text-[22px]" },
  { node: "▲", bg: "rgba(255,166,17,.08)", color: "#ffa611", size: "text-[20px]" },
  { node: "M", bg: "rgba(19,170,82,.07)", color: "#13aa52", size: "text-[18px]" },
  { node: "JS", bg: "rgba(131,200,75,.07)", color: "#83c84b", size: "text-[13px]" },
  { node: "⚛", bg: "rgba(97,218,251,.06)", color: "#61dafb", size: "text-[22px]" },
];

export function Hero() {
  const typed = useTypewriter(HERO_ROLES);

  return (
    <section
      id="about"
      className="relative mt-[26px] scroll-mt-[94px] overflow-hidden rounded-[20px] border border-border bg-card p-12"
    >
      <span id="top" className="absolute -top-24" />
      <GlowEdge />
      <div className="flex flex-wrap items-center gap-[54px]">
        {/* Hexagon avatar */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto h-[470px] w-full max-w-[420px] flex-none"
        >
          <div
            className="absolute inset-0 flex items-end justify-center overflow-hidden"
            style={{
              clipPath:
                "polygon(30% 0,70% 0,100% 50%,70% 100%,30% 100%,0 50%)",
              background:
                "linear-gradient(155deg,#23454b 0%,#13262b 55%,#0d1a1e 100%)",
            }}
          >
            <svg width="320" height="380" viewBox="0 0 320 380" className="opacity-90">
              <defs>
                <linearGradient id="silhouette" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#7fd0c4" stopOpacity=".34" />
                  <stop offset="1" stopColor="#7fd0c4" stopOpacity=".06" />
                </linearGradient>
              </defs>
              <circle cx="160" cy="120" r="78" fill="url(#silhouette)" />
              <path
                d="M30 380c0-78 58-132 130-132s130 54 130 132z"
                fill="url(#silhouette)"
              />
            </svg>
          </div>
          <div
            className="absolute bottom-[-2px] left-1/2 flex h-[80px] w-[72px] -translate-x-1/2 items-center justify-center shadow-[0_8px_22px_rgba(141,209,79,0.4)]"
            style={{
              clipPath:
                "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)",
              background: "linear-gradient(160deg,#a3e34f,#6fb838)",
            }}
          >
            <span className="text-[26px] font-extrabold text-[#0f1a0a]">{"</>"}</span>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="min-w-[300px] flex-1 basis-[380px]"
        >
          <p className="mb-[14px] text-[clamp(15px,1.4vw,17px)] tracking-[0.5px] text-pink">
            {"<span>"}
            <span className="text-text">Hey, I&rsquo;m Amit</span>
            <span className="animate-blink text-accent">|</span>
            {"</span>"}
          </p>
          <h1 className="mb-[22px] text-[clamp(34px,4.4vw,58px)] font-extrabold leading-[1.08] tracking-[-1px]">
            Senior{" "}
            <span className="text-accent">
              {"{"}
              {typed}
              {"}"}
            </span>
            Web &amp; App developer
            <span className="animate-blink text-accent">_</span>
          </h1>
          <p className="mb-[30px] max-w-[560px] text-[clamp(13px,1.1vw,15px)] leading-[1.75] text-text">
            <span className="text-pink">{"<p>"}</span>With expertise in
            cutting-edge technologies such as{" "}
            <span className="text-pink">NodeJS, React, Angular, and Laravel</span>
            ... I deliver web solutions that are both innovative and robust.
            <span className="text-pink">{"</p>"}</span>
          </p>

          <div className="mb-[34px] flex flex-wrap items-center gap-[14px]">
            {TECH_TILES.map((tile, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`flex h-[54px] w-[54px] items-center justify-center rounded-[13px] border border-border font-extrabold ${tile.size}`}
                style={{ background: tile.bg, color: tile.color }}
              >
                {tile.node}
              </motion.div>
            ))}
            <span className="text-sm text-muted">...and more</span>
          </div>

          <motion.a
            href="#"
            whileHover={{ gap: 16 }}
            className="inline-flex items-center gap-[11px] text-[15px] font-semibold text-accent"
          >
            <Download size={20} />[ Download my CV ]
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
