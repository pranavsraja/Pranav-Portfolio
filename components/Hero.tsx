"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  "Database Engineer",
  "Data Systems Engineer",
  "Machine Learning Engineer",
  "AI & Vision Specialist",
  "Lakehouse Platform Builder",
];

const useTypewriter = (words: string[], speed = 75, pause = 1900) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(t);
  }, [subIndex, index, deleting, words, speed, pause]);

  return { text: words[index].substring(0, subIndex), blink };
};

const STATS = [
  { value: "SymphonyAI", label: "Current Organization" },
  { value: "12+", label: "Data & ML Systems" },
  { value: "10+", label: "Evaluated Models" },
];

const Hero = () => {
  const { text: role, blink } = useTypewriter(ROLES);

  return (
    <div className="relative flex flex-col h-full w-full">
      <div className="flex flex-col min-h-screen w-full items-center justify-center z-[20] px-5 sm:px-10 pt-28 pb-16">
        <div className="w-full flex flex-col items-center justify-center text-center max-w-[840px]">

          {/* Understated Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-mono tracking-wide backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Database Engineer Apprentice · SymphonyAI</span>
          </motion.div>

          {/* Clean, Sculptural Headline (No squiggly lines) */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight font-[var(--font-outfit)] leading-[1.08] text-zinc-100 mb-4"
          >
            Hi, I&apos;m Pranav.
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 h-10 sm:h-12 flex items-center justify-center"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300 font-[var(--font-outfit)]">
              {role}
              <span
                className="inline-block w-[1.5px] h-5 sm:h-7 ml-1.5 bg-zinc-400 align-middle"
                style={{ opacity: blink ? 1 : 0 }}
              />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-zinc-400 mb-10 max-w-[580px] leading-relaxed font-normal"
          >
            Engineering database infrastructure, distributed data pipelines, and machine learning systems.
            Currently advancing database reliability and enterprise AI systems at SymphonyAI.
          </motion.p>

          {/* Tactile, Minimal Buttons (No glowing neon halos) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2 group"
            >
              Hit Me Up
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="/pranav.pdf"
              download
              className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 font-medium text-sm hover:border-white/20 hover:text-white transition-colors flex items-center gap-2"
            >
              Resume
              <Download className="w-4 h-4 text-zinc-400" />
            </a>
          </motion.div>

          {/* Clean Metric Strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center justify-center gap-10 sm:gap-16 mb-12"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold font-[var(--font-outfit)] text-zinc-100">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-2.5"
          >
            {[
              { href: "https://github.com/pranavsraja", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/pranavsraja/", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:pranavsunilraja@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
