"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_ITEMS = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "SQL",
  "PySpark",
  "Databricks",
  "Apache Airflow",
  "Snowflake",
  "AWS",
  "Scikit-learn",
  "Pandas",
  "PostgreSQL",
  "Power BI",
  "Transformers",
  "Docker",
  "Git",
  "Linux",
  "Delta Lake",
];

const TechTicker = () => {
  const doubled = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="w-full relative z-20 py-12 border-y border-white/[0.06] bg-[#07080a]/60">
      <div className="relative overflow-hidden">
        {/* Fades */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#07080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#07080a] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          >
            {doubled.map((tech, i) => (
              <span
                key={i}
                className="text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors uppercase tracking-widest cursor-default flex items-center gap-6"
              >
                <span>{tech}</span>
                <span className="text-zinc-700">/</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechTicker;
