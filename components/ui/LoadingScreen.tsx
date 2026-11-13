"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide as soon as the page has finished loading — no artificial delay.
    const handleComplete = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
      // Safety net so a slow third-party asset never traps the user on the loader.
      const fallback = setTimeout(handleComplete, 2500);
      return () => {
        window.removeEventListener("load", handleComplete);
        clearTimeout(fallback);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080a]"
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
