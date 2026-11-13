"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "./useMediaQuery";

/**
 * Hero line: "Turning data into ___", where the ending cycles through what the
 * work produces. Outcomes (not job titles) on purpose — "I work as an AI
 * Engineer" would read as a current title, which isn't accurate.
 *
 *  - "slide":  the ending slides up and the next slides in.
 *  - "fade":   endings cross-fade in place (softer).
 *  - "static": one full sentence, no motion.
 * Visitors who ask for reduced motion always get the static sentence.
 */
export type RoleStyle = "slide" | "fade" | "static";

const LEAD = "Turning data into";

const OUTCOMES = [
  "insights",       // analyst
  "pipelines",      // data engineer
  "ML models",      // ML engineer
  "AI systems",     // AI engineer
  "dashboards",     // analyst / BI
  "decisions",      // data scientist
];

const STATIC_LINE = "Turning data into insights, pipelines & AI systems";
const INTERVAL_MS = 2400;

const VARIANTS = {
  slide: {
    initial: { y: "100%", opacity: 0 },
    animate: { y: "0%", opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0, filter: "blur(4px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(4px)" },
  },
};

const Outcome = ({ text }: { text: string }) => (
  <span className="text-zinc-100 border-b-2 border-accent/80">{text}</span>
);

export default function RoleRotator({ variant = "slide" }: { variant?: RoleStyle }) {
  const reducedMotion = usePrefersReducedMotion();
  const animated = variant !== "static" && !reducedMotion;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!animated) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % OUTCOMES.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, [animated]);

  if (!animated) return <span>{STATIC_LINE}</span>;

  const outcome = OUTCOMES[index];
  const v = VARIANTS[variant as "slide" | "fade"];

  return (
    <>
      {/* Screen readers get the full sentence once instead of a changing word */}
      <span className="sr-only">{STATIC_LINE}.</span>

      <span aria-hidden className="inline-flex items-baseline justify-center gap-[0.3em]">
        <span>{LEAD}</span>
        <span className="relative inline-grid overflow-hidden text-left pb-1 -mb-1">
          {/* Invisible sizers: every ending stacked in the same cell, so the box
              is as wide as the widest one as rendered (not by letter count). */}
          {OUTCOMES.map((o) => (
            <span key={o} className="invisible col-start-1 row-start-1 whitespace-nowrap">
              <Outcome text={o} />
            </span>
          ))}
          <AnimatePresence initial={false}>
            <motion.span
              key={outcome}
              className="col-start-1 row-start-1 whitespace-nowrap"
              initial={v.initial}
              animate={v.animate}
              exit={v.exit}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outcome text={outcome} />
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
    </>
  );
}
