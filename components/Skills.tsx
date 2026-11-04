"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Database, Cloud, GitBranch, BarChart3, LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  index: number;
}

const SkillCard = ({ title, icon: Icon, skills, index }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative h-full"
    >
      <div className="glass-panel rounded-xl p-6 h-full flex flex-col justify-between group">
        <div>
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
              <Icon className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-zinc-100 font-[var(--font-outfit)] tracking-tight">
              {title}
            </h3>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-xs font-mono text-zinc-300 bg-white/[0.02] border border-white/[0.07] rounded-md group-hover:border-white/15 hover:!border-white/30 hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories: SkillCategoryProps[] = [
    {
      title: "Core Programming",
      icon: Code2,
      skills: ["Python", "SQL", "PySpark", "Java", "R", "JavaScript"],
      index: 0,
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "NLP & Transformers",
        "Computer Vision",
        "TrOCR & LayoutLMv3",
        "Model Benchmarking",
      ],
      index: 1,
    },
    {
      title: "Data Engineering",
      icon: GitBranch,
      skills: [
        "ETL / ELT Pipelines",
        "Apache Airflow",
        "Databricks Lakehouse",
        "Delta Lake",
        "Data Validation & Quality",
        "Workflow Orchestration",
      ],
      index: 2,
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Snowflake", "Firebase", "Analytical Modeling"],
      index: 3,
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: ["AWS", "Git & CI/CD", "Linux", "Docker", "Vercel"],
      index: 4,
    },
    {
      title: "Analytics & Intelligence",
      icon: BarChart3,
      skills: [
        "Power BI",
        "Pandas",
        "NumPy",
        "Statistical Testing",
        "EDA",
        "CRISP-DM",
      ],
      index: 5,
    },
  ];

  return (
    <section className="py-24 flex flex-col items-center justify-center relative z-20" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block font-medium">
          Stack & Systems
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-outfit)] tracking-tight text-zinc-100">
          Core Capabilities
        </h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto">
          Production technologies applied across database engineering, data pipelines, and applied AI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full px-4">
        {categories.map((cat, index) => (
          <SkillCard key={index} {...cat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
