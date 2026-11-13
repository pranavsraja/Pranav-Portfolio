"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * reducedMotion="user": when the visitor's device asks for reduced motion,
 * framer-motion skips movement (slides, the tech ticker, loader bar) and
 * keeps only opacity fades.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
