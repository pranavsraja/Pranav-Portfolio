"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import StarBackground from "../components/StarBackground";
import Magnetic from "../components/ui/Magnetic";
import { ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
    return (
        <main className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
            <StarBackground />

            {/* Visual Red Alert Glitch Tint */}
            <div className="absolute inset-0 z-[1] bg-red-950/10 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center px-5">
                <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="mb-8"
                >
                    <Ghost className="w-24 h-24 text-purple-500 opacity-80" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[12rem] sm:text-[16rem] font-black text-white/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tighter"
                >
                    LOST IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">SPACE</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 text-lg sm:text-xl max-w-md mb-12 font-light"
                >
                    The page you're looking for has drifted into a black hole or never existed in this dimension.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Magnetic strength={0.4}>
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-10 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Return to Base
                        </Link>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Ambient Red Glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-red-900/20 blur-[150px] rounded-full pointer-events-none" />
        </main>
    );
}
