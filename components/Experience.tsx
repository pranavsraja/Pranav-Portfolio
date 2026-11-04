"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  desc: string;
  tags: string[];
  highlights: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    title: "Database Engineer Apprentice",
    company: "SymphonyAI",
    period: "Nov 2025 – Present",
    location: "Enterprise AI",
    type: "Current Role",
    current: true,
    desc: "Engineering enterprise database infrastructure, data reliability, and query optimization supporting predictive and generative AI platforms.",
    highlights: [
      "Designing and optimizing enterprise database schemas, indexing strategies, and automated data workflows",
      "Executing query performance tuning, latency benchmarking, and data integrity governance across production systems",
      "Collaborating with platform and AI engineering teams to ensure high availability and low-latency data access",
    ],
    tags: ["SQL", "Database Optimization", "ETL Pipelines", "Data Modeling", "Performance Tuning", "Enterprise AI"],
  },
  {
    title: "Data Science Intern",
    company: "SAGE Publishing",
    period: "Mar 2025 – Aug 2025",
    location: "United Kingdom",
    type: "Dissertation Project",
    desc: "Delivered a large-scale OCR benchmarking system balancing accuracy, inference latency, and deployment cost across financial and handwritten documents.",
    highlights: [
      "Benchmarked TrOCR, Tesseract, EasyOCR, Donut & LayoutLMv3 at production scale",
      "Designed cost-aware evaluation framework optimizing accuracy vs. latency trade-offs",
      "Processed real-world financial and handwritten document datasets",
      "Produced actionable model selection guidelines for enterprise deployment",
    ],
    tags: ["Python", "OCR", "TrOCR", "LayoutLMv3", "NLP", "Benchmarking", "PyTorch"],
  },
];

const Experience = () => {
  return (
    <section className="py-24 flex flex-col items-center justify-center relative z-20" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block font-medium">
          Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-outfit)] tracking-tight text-zinc-100">
          Industry Experience
        </h2>
      </motion.div>

      <div className="w-full max-w-3xl px-4 space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-panel rounded-xl p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono uppercase font-medium text-zinc-400">
                    {exp.type}
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs font-mono text-zinc-500">{exp.location}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 font-[var(--font-outfit)]">
                  {exp.title}
                </h3>
                <p className="text-sm font-medium text-zinc-300 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.03] text-zinc-300 border border-white/10">
                {exp.period}
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              {exp.desc}
            </p>

            <ul className="space-y-2 mb-6">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <span className="text-zinc-500 mt-1">―</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.08]">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 text-xs font-mono rounded bg-white/[0.02] border border-white/[0.08] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
