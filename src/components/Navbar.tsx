"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/src/lib/data";
import { useActiveSection } from "@/src/hooks/useActiveSection";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="w-full max-w-7xl mx-auto sticky top-0 z-50 border-b bg-[#21bf7314] backdrop-blur-[10px] border border-[#21bf738a] rounded-2xl mt-5">
      <div className="flex h-18.5 items-center gap-5 px-6">
        {/* Logo */}
        <Link
          href="#top"
          className="flex flex-none items-center gap-x-2.5 text-[19px] font-bold tracking-[-0.5px]"
        >
          <Code2 className="text-accent" size={24} />
          <span className="text-slate-900">
            Amit
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-7 whitespace-nowrap text-[16px] text-slate-900 font-semibold nav:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors duration-200 text-slate-900 hover:text-accent",
                  isActive ? "text-accent" : "text-slate-900",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Socials + theme toggle */}
        <div className="ml-auto flex flex-none items-center gap-3.75">
          <div className="hidden items-center gap-3.75 sm:flex">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                className="flex text-slate-700 transition-colors duration-200 hover:text-accent"
              >
                <Icon size={17} className="text-slate-700" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11.5 w-11.5 flex-none items-center justify-center rounded-xl border border-border bg-card2 text-text transition-colors duration-200 hover:border-accent hover:text-accent nav:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>


      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border nav:hidden"
          >
            <div className="flex flex-col px-6 pb-4.5 pt-2.5">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-2.75 text-slate-900! font-semibold",
                    i < NAV_LINKS.length - 1 && "border-b border-border",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
