"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <div className="flex flex-col h-screen w-full items-center justify-center z-[20] px-5 sm:px-10">
                <div className="w-full flex flex-col items-center justify-center text-center max-w-[900px]">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-6xl sm:text-8xl font-black text-[var(--foreground)] mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] font-[var(--font-outfit)]"
                    >
                        Hi, I&apos;m{" "}
                        <motion.span
                            animate={{
                                textShadow: [
                                    "0 0 20px rgba(168,85,247,0.4)",
                                    "0 0 40px rgba(168,85,247,0.6)",
                                    "0 0 20px rgba(168,85,247,0.4)"
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 light-mode-text-bold"
                        >
                            Pranav
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="text-xl sm:text-2xl text-[var(--muted)] mb-8 max-w-[600px] leading-relaxed font-light tracking-wide"
                    >
                        I build <span className="font-semibold text-purple-400">Data and AI</span> systems that drive real decisions. Designed to ship, scale, and evolve with the product.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center gap-5"
                    >
                        <Magnetic strength={0.4}>
                            <a href="#contact" className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-[#2A0E61] to-[#7042f88b] text-white font-semibold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(112,66,248,0.6)] flex items-center gap-2 overflow-hidden border border-[rgba(112,66,248,0.5)]">
                                Let&apos;s Talk
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Magnetic>
                        <Magnetic strength={0.4}>
                            <a href="/pranav.pdf" download className="px-10 py-4 rounded-full glass-panel text-[var(--foreground)] font-semibold hover:bg-[var(--foreground)]/10 transition-all hover:scale-105 flex items-center gap-2 border border-[var(--glass-border)] hover:border-[var(--foreground)]/30">
                                Resume
                                <Download className="w-5 h-5" />
                            </a>
                        </Magnetic>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-12 flex items-center justify-center gap-6"
                    >
                        <Magnetic strength={0.5}>
                            <a href="https://github.com/pranavsraja" aria-label="Github Profile" className="flex items-center justify-center w-12 h-12 glass-panel rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:scale-110 transition-all hover:shadow-[0_0_15px_rgba(112,66,248,0.5)]">
                                <Github className="w-6 h-6" />
                            </a>
                        </Magnetic>
                        <Magnetic strength={0.5}>
                            <a href="https://www.linkedin.com/in/pranavsraja/" aria-label="LinkedIn Profile" className="flex items-center justify-center w-12 h-12 glass-panel rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:scale-110 transition-all hover:shadow-[0_0_15px_rgba(0,195,255,0.5)]">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </Magnetic>
                        <Magnetic strength={0.5}>
                            <a href="mailto:pranavsunilraja@gmail.com" aria-label="Email Me" className="flex items-center justify-center w-12 h-12 glass-panel rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:scale-110 transition-all hover:shadow-[0_0_15px_rgba(112,66,248,0.5)]">
                                <Mail className="w-6 h-6" />
                            </a>
                        </Magnetic>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
