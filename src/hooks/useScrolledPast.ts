"use client";

import { useEffect, useState } from "react";

/** Returns true once the user has scrolled past `threshold` pixels. */
export function useScrolledPast(threshold = 520): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return past;
}
