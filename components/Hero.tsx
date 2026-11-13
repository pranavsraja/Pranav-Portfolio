"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import RoleRotator, { type RoleStyle } from "./RoleRotator";

/** Role line style — "slide" | "fade" | "static". Change here to try the alternatives. */
const ROLE_STYLE: RoleStyle = "slide";

const Hero = () => {

  return (
    <div className="relative flex flex-col h-full w-full">
      <div className="flex flex-col min-h-screen w-full items-center justify-center z-[20] px-5 sm:px-10 pt-28 pb-16">
        <div className="w-full flex flex-col items-center justify-center text-center max-w-[840px]">

          {/* Current-role badge — jumps to the Experience section */}
          <motion.a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
            }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group mb-8 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 text-xs font-mono tracking-wide backdrop-blur-md hover:border-accent/60 hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>
              Currently at{" "}
              <span className="text-zinc-100 group-hover:text-accent transition-colors">SymphonyAI</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
          </motion.a>

          {/* Clean, Sculptural Headline (No squiggly lines) */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight font-[var(--font-outfit)] leading-[1.08] text-zinc-100 mb-4"
          >
            Hi, I&apos;m <span className="text-accent">Pranav.</span>
          </motion.h1>

          {/* Role line */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 h-10 sm:h-12 flex items-center justify-center"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 font-[var(--font-outfit)]">
              <RoleRotator variant={ROLE_STYLE} />
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg text-zinc-400 mb-5 max-w-[580px] leading-relaxed font-normal"
          >
            Most people avoid messy data. I go looking for it, then turn it into pipelines, insights
            and models people can rely on.
          </motion.p>

          {/* Qualification — its own quiet line under the tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-zinc-400"
          >
            <GraduationCap className="w-4 h-4 text-accent shrink-0" aria-hidden />
            <span className="text-zinc-200 font-medium">MSc Data Science (Specialisation in AI)</span>
            <span className="hidden sm:inline text-zinc-600" aria-hidden>·</span>
            <span>Newcastle University</span>
          </motion.p>

          {/* Tactile, Minimal Buttons (No glowing neon halos) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-accent text-black font-semibold text-sm hover:bg-accent-hover transition-colors flex items-center gap-2 group"
            >
              Hit Me Up
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="/pranav.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 font-medium text-sm hover:border-accent hover:text-accent transition-colors flex items-center gap-2 group"
            >
              View Resume
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-accent transition-colors" />
            </a>
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
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-accent hover:border-accent transition-colors"
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
