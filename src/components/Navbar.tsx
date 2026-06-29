"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/src/lib/data";
import { useActiveSection } from "@/src/hooks/useActiveSection";
import { useTheme } from "@/src/components/ThemeProvider";
import { cn } from "@/src/lib/utils";

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[var(--header)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[74px] w-full max-w-[1300px] items-center gap-5 px-6">
        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-xl border border-border bg-card2 text-text transition-colors duration-200 hover:border-accent hover:text-accent nav:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo */}
        <a
          href="#top"
          className="flex flex-none items-center gap-[9px] text-[19px] font-bold tracking-[-0.5px]"
        >
          <Code2 className="text-accent" size={24} />
          <span>
            Amit<span className="text-muted">.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-7 whitespace-nowrap text-[15px] nav:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors duration-200 hover:text-accent",
                  isActive ? "text-text" : "text-muted",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Socials + theme toggle */}
        <div className="ml-auto flex flex-none items-center gap-[15px]">
          <div className="hidden items-center gap-[15px] sm:flex">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex text-muted transition-colors duration-200 hover:text-accent"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-border bg-card2 transition-colors duration-200 hover:border-accent"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-[#f5c451]" />
            ) : (
              <Moon size={18} className="text-muted" />
            )}
          </button>
        </div>
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
            <div className="flex flex-col px-6 pb-[18px] pt-[10px]">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-[11px] text-text",
                    i < NAV_LINKS.length - 1 && "border-b border-border",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
