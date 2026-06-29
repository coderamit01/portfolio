"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolledPast } from "@/src/hooks/useScrolledPast";

export function ScrollToTop() {
  const visible = useScrolledPast(520);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -4 }}
          className="fixed bottom-[26px] right-[26px] z-[70] flex h-12 w-12 items-center justify-center rounded-[13px] bg-accent text-[#11200a] shadow-[0_10px_26px_rgba(141,209,79,0.4)]"
        >
          <ArrowUp size={22} strokeWidth={2.4} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
