"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Longest we'll wait for web fonts before revealing the page anyway. */
const MAX_FONT_WAIT_MS = 600;

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The page is server-rendered, so it's ready as soon as React has hydrated
    // (i.e. now). Don't wait for the window "load" event — it waits for every
    // asset and kept the loader up while visitors were already scrolling.
    // Only give fonts a short moment so text doesn't visibly swap style.
    let cancelled = false;
    const hide = () => {
      if (!cancelled) setIsLoading(false);
    };
    const timeout = new Promise((resolve) => setTimeout(resolve, MAX_FONT_WAIT_MS));
    Promise.race([document.fonts?.ready ?? Promise.resolve(), timeout]).then(hide);
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          // `site-loader` locks page scrolling while visible (see globals.css);
          // data-lenis-prevent stops the smooth-scroll library scrolling behind it.
          data-lenis-prevent
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeOut" } }}
          className="site-loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080a]"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-100">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Pranav Sunil Raja</span>
            </div>

            {/* Hairline loader */}
            <div className="w-28 h-[2px] bg-zinc-800 overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-accent w-14 absolute rounded-full"
                animate={{ x: [-56, 112] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.9,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
