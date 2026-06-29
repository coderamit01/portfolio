"use client";

import { MessageCircle, Phone, Mail } from "lucide-react";
import { COMPANY_LOGOS, COOPERATION_CONTACTS } from "@/src/lib/data";
import { Eyebrow } from "@/src/components/ui/Eyebrow";
import { GlowEdge } from "@/src/components/ui/GlowEdge";
import { OrbitRings } from "@/src/components/ui/OrbitRings";
import { Reveal } from "@/src/components/ui/Reveal";

const CONTACT_ICONS = [MessageCircle, Phone, Mail];

export function Cooperation() {
  return (
    <Reveal
      as="section"
      className="relative overflow-hidden rounded-[20px] border border-border bg-card p-10"
    >
      <GlowEdge className="left-[8%] right-[38%] opacity-70" />
      <Eyebrow className="mb-[14px]">Cooperation</Eyebrow>
      <h2 className="mb-7 text-[clamp(24px,2.6vw,34px)] font-extrabold leading-[1.18]">
        More than <span className="text-text">+168</span>{" "}
        <span className="text-muted">companies trusted worldwide</span>
        <span className="animate-blink text-accent">_</span>
      </h2>

      <div className="mb-[30px] grid grid-cols-2 items-center gap-[22px_14px] rounded-[14px] border border-border p-[26px_22px] sm:grid-cols-4">
        {COMPANY_LOGOS.map((name) => (
          <span
            key={name}
            className="text-center text-[15px] font-semibold text-[#7d8088]"
          >
            {name}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-[26px]">
        <div className="relative flex h-[150px] w-[150px] flex-none items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-[rgba(141,209,79,0.2)]" />
          <span className="absolute inset-6 rounded-full border border-[rgba(141,209,79,0.28)]" />
          <span className="absolute left-1/2 top-[14px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-accent" />
          <div
            className="flex h-[74px] w-[74px] items-end justify-center overflow-hidden rounded-full"
            style={{ background: "linear-gradient(150deg,#234b4f,#101f22)" }}
          >
            <svg width="60" height="64" viewBox="0 0 60 64" fill="#7fd0c4" opacity=".4">
              <circle cx="30" cy="22" r="15" />
              <path d="M4 64c0-15 11-26 26-26s26 11 26 26z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-[13px] text-sm">
          {COOPERATION_CONTACTS.map(({ label, value }, i) => {
            const Icon = CONTACT_ICONS[i];
            return (
              <div key={label} className="flex items-center gap-[10px]">
                <Icon size={17} className="text-accent" />
                <span className="text-muted">{label}</span>{" "}
                <span className="text-pink">{value}</span>
              </div>
            );
          })}
        </div>
      </div>

      <OrbitRings className="absolute bottom-[18px] right-6" />
    </Reveal>
  );
}
