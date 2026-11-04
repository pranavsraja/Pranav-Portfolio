"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 250);
    };

    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete);
      const fallback = setTimeout(handleComplete, 1200);
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
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
              <span>PSR · Data & AI</span>
            </div>

            {/* Precision hairline loader */}
            <div className="w-28 h-[1.5px] bg-slate-800 overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-sky-400 w-14 absolute rounded-full shadow-[0_0_8px_#38bdf8]"
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
