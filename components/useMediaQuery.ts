"use client";

import { useSyncExternalStore } from "react";

/**
 * Live CSS media-query match. Returns `serverValue` during SSR/hydration,
 * then the real value, and updates when the query result changes.
 */
export function useMediaQuery(query: string, serverValue = false): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => serverValue
  );
}

/** True when the visitor has asked their OS/browser to reduce motion. */
export const usePrefersReducedMotion = () => useMediaQuery("(prefers-reduced-motion: reduce)");
