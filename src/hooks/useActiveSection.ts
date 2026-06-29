"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view and returns its id, so the navbar
 * can highlight the active link. Pure scroll math — no IntersectionObserver —
 * to match the reference's "last section whose top passed the offset" behaviour.
 */
export function useActiveSection(ids: string[], offset = 150): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return active;
}
