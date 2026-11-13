"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface Metric {
  value: string;
  label: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  desc: string;
  tags: string[];
  highlights: string[];
  /** Optional headline numbers. Only add real, verifiable figures. */
  metrics?: Metric[];
  current?: boolean;
}

/** How many highlights show before the "More" toggle. */
const VISIBLE_HIGHLIGHTS = 2;

const experiences: ExperienceItem[] = [
  {
    title: "Database Engineer Apprentice",
    company: "SymphonyAI",
    period: "Aug 2026 – Present",
    location: "Retail Data",
    type: "Current Role",
    current: true,
    desc: "Building and tuning the database layer behind retail analytics: SQL Server workflows, entity matching, and the APIs that serve the data to applications.",
    highlights: [
      "Developing and optimising SQL Server queries, stored procedures, ETL/data refresh workflows and validation for retailer, product, hierarchy and analytics data",
      "Implementing entity resolution and data-matching logic to link and validate entities across large retailer datasets, improving consistency and accuracy",
      "Building REST APIs and backend integrations that expose database-driven metadata, attributes, metrics and validation rules to application components",
      "Debugging complex database and business-rule issues through SQL and regression testing, performance troubleshooting, and Git-based code reviews",
    ],
    // TODO: add real impact numbers, e.g. { value: "40%", label: "Query latency reduced" }
    tags: ["SQL Server", "Stored Procedures", "ETL", "Entity Resolution", "REST APIs", "Data Validation"],
  },
  {
    title: "Freelance Engineer",
    company: "OneFone Call",
    period: "Mar 2026 – Aug 2026",
    location: "Travel Tech",
    type: "Freelance",
    desc: "Built a multi-tenant travel agent platform end to end, from secure per-agency data isolation to automated price comparison across travel providers.",
    highlights: [
      "Engineered the platform with Next.js 14 and FastAPI, using PostgreSQL Row-Level Security for strict data isolation across agency tiers",
      "Designed a parallel price comparison system with Playwright and Celery, backed by an AES-256 encrypted vault for third-party provider credentials",
      "Started a modern data stack with Apache Airflow, DuckDB and dbt-core to turn operational data into BI, including client lifetime value and price trend analysis",
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Playwright", "Celery", "Airflow", "dbt"],
  },
  {
    title: "Data Science Intern",
    company: "SAGE",
    period: "Mar 2025 – Aug 2025",
    location: "United Kingdom",
    type: "Dissertation Project",
    desc: "Delivered a large-scale OCR benchmarking system balancing accuracy, inference latency, and deployment cost across financial and handwritten documents.",
    metrics: [
      { value: "5", label: "OCR models benchmarked" },
      { value: "3", label: "Trade-offs balanced: accuracy, latency, cost" },
    ],
    highlights: [
      "Benchmarked TrOCR, Tesseract, EasyOCR, Donut & LayoutLMv3 at production scale",
      "Designed cost-aware evaluation framework optimizing accuracy vs. latency trade-offs",
      "Processed real-world financial and handwritten document datasets",
      "Produced actionable model selection guidelines for enterprise deployment",
    ],
    tags: ["Python", "OCR", "TrOCR", "LayoutLMv3", "NLP", "Benchmarking", "PyTorch"],
  },
];

const TimelineDot = ({ current }: { current?: boolean }) => (
  <span className="relative flex items-center justify-center w-4 h-4">
    {current && (
      <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400/60 animate-ping" />
    )}
    <span
      className={`relative w-3 h-3 rounded-full ring-4 ring-[#07080a] ${
        current ? "bg-emerald-400" : "bg-accent"
      }`}
    />
  </span>
);

const ExperienceCard = ({ exp, index }: { exp: ExperienceItem; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const shown = exp.highlights.slice(0, VISIBLE_HIGHLIGHTS);
  const extra = exp.highlights.slice(VISIBLE_HIGHLIGHTS);
  // Desktop: even items sit left of the centre line, odd items right.
  const cardLeft = index % 2 === 0;

  return (
    <motion.li
      initial={{ opacity: 0, x: cardLeft ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 sm:pl-12 md:pl-0 md:grid md:grid-cols-[1fr_2.5rem_1fr] md:items-start"
    >
      {/* Dot — mobile: on the left rail; desktop: centre column */}
      <span className="absolute left-0 sm:left-1 top-7 md:static md:col-start-2 md:row-start-1 md:mt-7 md:justify-self-center">
        <TimelineDot current={exp.current} />
      </span>

      {/* Desktop-only date label, on the opposite side of the line */}
      <div
        className={`hidden md:flex md:row-start-1 md:mt-[1.45rem] flex-col gap-1 ${
          cardLeft ? "md:col-start-3 items-start" : "md:col-start-1 items-end text-right"
        }`}
      >
        <span className="text-sm font-mono text-zinc-200">{exp.period}</span>
        <span className="text-xs font-mono text-zinc-400">{exp.company}</span>
      </div>

      <div
        className={`glass-panel rounded-2xl p-6 sm:p-8 md:row-start-1 ${
          cardLeft ? "md:col-start-1" : "md:col-start-3"
        }`}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono uppercase font-medium text-accent">{exp.type}</span>
              <span className="text-zinc-600">·</span>
              <span className="text-xs font-mono text-zinc-400">{exp.location}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-100 font-[var(--font-outfit)]">
              {exp.title}
            </h3>
            <p className="text-sm font-medium text-zinc-300 mt-0.5">{exp.company}</p>
          </div>

          {/* On desktop the date sits beside the timeline instead */}
          <span className="md:hidden text-xs font-mono px-3 py-1 rounded-full bg-white/[0.03] text-zinc-300 border border-white/10">
            {exp.period}
          </span>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{exp.desc}</p>

        {/* Impact numbers */}
        {exp.metrics && exp.metrics.length > 0 && (
          <div className="flex flex-wrap gap-x-10 gap-y-4 mb-6">
            {exp.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-bold text-accent font-[var(--font-outfit)] leading-none">
                  {m.value}
                </div>
                <div className="text-xs text-zinc-400 mt-1.5 max-w-[11rem] leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Highlights */}
        <ul className="space-y-2 mb-2">
          {shown.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
              <span className="text-accent/70 mt-1">―</span>
              <span>{h}</span>
            </li>
          ))}
          <AnimatePresence initial={false}>
            {expanded &&
              extra.map((h) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 overflow-hidden"
                >
                  <span className="text-accent/70 mt-1">―</span>
                  <span>{h}</span>
                </motion.li>
              ))}
          </AnimatePresence>
        </ul>

        {extra.length > 0 && (
          <button
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-accent transition-colors mb-6"
          >
            {expanded ? "Less" : `More (${extra.length})`}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
        {extra.length === 0 && <div className="mb-4" />}

        {/* Tags */}
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {exp.tags.map((tag) => (
            <span key={tag} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.li>
  );
};

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
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-2 block font-medium">
          Track Record
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-outfit)] tracking-tight text-zinc-100">
          Industry <span className="text-accent">Experience</span>
        </h2>
      </motion.div>

      <ol className="relative w-full max-w-3xl md:max-w-5xl px-4 flex flex-col gap-8 md:gap-6">
        {/* Timeline rail — left on mobile, centred on desktop */}
        <span
          aria-hidden
          className="absolute left-[1.5rem] sm:left-[1.75rem] md:left-1/2 md:-translate-x-1/2 top-8 bottom-8 w-px bg-white/15"
        />
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} exp={exp} index={index} />
        ))}
      </ol>
    </section>
  );
};

export default Experience;
