"use client";

import dynamic from "next/dynamic";
import { useMediaQuery, usePrefersReducedMotion } from "./useMediaQuery";

// The 3D background pulls in three.js (~600 KB). Load it as a separate chunk,
// only in the browser, so it never delays the first paint of the page.
const NeuralBackground = dynamic(() => import("./NeuralBackground"), { ssr: false });

/**
 * Renders the animated 3D background only on tablet/desktop widths and when
 * the visitor hasn't asked for reduced motion. Phones skip the download
 * entirely and keep the plain dark background.
 */
export default function BackgroundLoader() {
  const isWide = useMediaQuery("(min-width: 768px)");
  const reducedMotion = usePrefersReducedMotion();

  if (!isWide || reducedMotion) return null;
  return <NeuralBackground />;
}
