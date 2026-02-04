"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "brightness(2) blur(20px)", transition: { duration: 1.5, ease: [0.7, 0, 0.3, 1] } }}
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black overflow-hidden"
                >
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 1.5, 2],
                                opacity: [0, 0.3, 0]
                            }}
                            transition={{
                                duration: 2.5,
                                ease: "easeOut",
                                repeat: Infinity
                            }}
                            className="absolute w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full"
                        />
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0.2, 1.2],
                                opacity: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: 2,
                                ease: "circOut",
                                repeat: Infinity,
                                delay: 0.5
                            }}
                            className="absolute w-64 h-64 border border-white/10 rounded-full"
                        />
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0.8, 1, 0.8],
                                opacity: [0.4, 0.8, 0.4]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                            className="w-1 h-1 bg-white shadow-[0_0_50px_20px_rgba(255,255,255,0.8)] rounded-full"
                        />
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
