"use client";

import React from "react";
import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  desc: string;
  grade?: string;
  focus?: string[];
}

const education: EducationItem[] = [
  {
    degree: "MSc. Data Science",
    institution: "Newcastle University, United Kingdom",
    year: "2024 – 2025",
    grade: "Merit",
    focus: ["Machine Learning", "NLP", "Data Engineering", "AI Systems", "Statistics"],
    desc: "Graduated with Merit. Completed industry dissertation at SAGE Publishing on large-scale OCR benchmarking.",
  },
  {
    degree: "B.E. Electronics & Communication Engineering",
    institution: "Visvesvaraya Technological University, India",
    year: "2020 – 2024",
    focus: ["Signal Processing", "Embedded Systems", "Programming", "Mathematics"],
    desc: "Foundation in engineering mathematics, computational logic, and algorithmic problem-solving.",
  },
];

const Education = () => {
  return (
    <section className="py-24 flex flex-col items-center justify-center relative z-20" id="education">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block font-medium">
          Education
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-outfit)] tracking-tight text-zinc-100">
          Academic Foundation
        </h2>
      </motion.div>

      <div className="w-full max-w-3xl px-4 space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="glass-panel rounded-xl p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs text-zinc-400">
                {edu.year}
              </span>
              {edu.grade && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300">
                  {edu.grade}
                </span>
              )}
            </div>

            <h3 className="text-lg font-bold text-zinc-100 font-[var(--font-outfit)]">
              {edu.degree}
            </h3>
            <p className="text-sm font-medium text-zinc-300 mb-3">
              {edu.institution}
            </p>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
              {edu.desc}
            </p>

            {edu.focus && (
              <div className="flex flex-wrap gap-1.5">
                {edu.focus.map((f, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 text-xs font-mono rounded bg-white/[0.02] border border-white/[0.08] text-zinc-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
