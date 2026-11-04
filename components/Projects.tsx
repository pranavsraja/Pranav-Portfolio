"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "Automated Claims Processing Using Databricks",
    category: "Data & ML Systems",
    description: "Production-grade insurance claims system built on Databricks Lakehouse. Integrates real-time streaming pipelines, computer vision damage assessment, and governed analytics for automated decisioning.",
    technologies: ["Databricks", "Python", "Computer Vision", "Delta Lake"],
    github: "",
    featured: true,
  },
  {
    title: "Scalable Healthcare Data Engineering Platform",
    category: "Data Engineering Platforms",
    description: "Multi-tenant healthcare data platform for analytics and benchmarking. Automates ingestion, schema standardization, and data quality validation across heterogeneous CMS datasets.",
    technologies: ["Airflow", "Spark", "SQL", "Data Quality"],
    github: "",
    featured: true,
  },
  {
    title: "OCR Benchmarking System for SAGE Publishing",
    category: "Data & ML Systems",
    description: "Large-scale OCR evaluation framework benchmarking TrOCR, Tesseract, EasyOCR, Donut & LayoutLMv3 across financial and handwritten documents, optimizing accuracy, latency, and cloud deployment cost.",
    technologies: ["TrOCR", "LayoutLMv3", "PyTorch", "OCR"],
    github: "",
    featured: true,
  },
  {
    title: "Optimized ML Models for Predictive Insights",
    category: "Machine Learning",
    description: "Comparative ML benchmarking evaluating multiple supervised models under a unified preprocessing and validation pipeline. Focuses on metric-driven selection and reliability.",
    technologies: ["Scikit-learn", "Python", "Pandas", "Evaluation"],
    github: "https://github.com/pranavsraja/Optimized-Machine-Learning-Models-for-Predictive-Insights-and-Performance-Analysis",
  },
  {
    title: "Understanding Social Sentiment Through AI",
    category: "NLP",
    description: "End-to-end social sentiment analysis pipeline using classical and transformer architectures for multi-class classification on real-world conversational data.",
    technologies: ["NLP", "Transformers", "Python", "NLTK"],
    github: "https://github.com/pranavsraja/Understanding-Social-Sentiment-Through-AI",
  },
  {
    title: "IdiomSense: Multimodal Figurative Language Classification",
    category: "NLP",
    description: "Multimodal classification system integrating textual and visual representations for idiom sense disambiguation and non-literal language understanding.",
    technologies: ["Multimodal", "NLP", "PyTorch", "Vision"],
    github: "https://github.com/pranavsraja/IdiomSense-Multimodal-Classification-of-Figurative-Language",
  },
  {
    title: "LSTM-based Language Model for Text Generation",
    category: "Deep Learning",
    description: "Neural language generation system evaluating sequence modeling and synthesis limitations of recurrent architectures against baseline models.",
    technologies: ["PyTorch", "LSTM", "RNN", "Seq2Seq"],
    github: "https://github.com/pranavsraja/LSTM-based-Language-Model-for-Text-Generation",
  },
  {
    title: "EfficientNet Bird Species Classification",
    category: "Computer Vision",
    description: "Fine-grained bird species classification using EfficientNet and transfer learning with accuracy-driven evaluation on multi-class visual datasets.",
    technologies: ["EfficientNet", "Transfer Learning", "TensorFlow"],
    github: "https://github.com/pranavsraja/EfficientNet-Based-Bird-Species-Classification-Using-Transfer-Learning",
  },
  {
    title: "CycleGAN for Image-to-Image Translation",
    category: "Computer Vision",
    description: "Unpaired image-to-image translation system using CycleGAN for cross-domain visual synthesis and adversarial stability analysis.",
    technologies: ["GAN", "PyTorch", "Image Processing"],
    github: "https://github.com/pranavsraja/CycleGAN-for-Image-to-Image-Translation",
  },
  {
    title: "NYC Taxi Trip Analytics with PySpark",
    category: "Big Data Engineering",
    description: "Distributed analytics pipeline processing high-volume NYC taxi trip data using PySpark for performance-aware ETL and insight extraction.",
    technologies: ["PySpark", "Hadoop", "SQL", "ETL"],
    github: "https://github.com/pranavsraja/Big-Data-Insights-NYC-Taxi-Trip-Analytics-with-PySpark",
  },
  {
    title: "MOOC Student Engagement & Dropout Analysis",
    category: "Data Analytics",
    description: "Structured analysis of learner engagement and dropout behavior using CRISP-DM methodology to support data-informed retention interventions.",
    technologies: ["CRISP-DM", "Python", "Pandas", "EDA"],
    github: "https://github.com/pranavsraja/MOOC-Student-Engagement-and-Dropout-Analysis-using-CRISP-DM",
  },
  {
    title: "Smart Analytics Dashboard (Power BI)",
    category: "Data Analytics",
    description: "Interactive analytics dashboard for business decision support, transforming raw operational datasets into modeled KPI drill-downs.",
    technologies: ["Power BI", "DAX", "Data Modeling"],
    github: "https://github.com/pranavsraja/Smart-Analytics-Dashboard-using-Power-BI",
  },
  {
    title: "Palmer Penguins Statistical Analysis",
    category: "Statistical Analysis",
    description: "Multivariate statistical exploration of ecological datasets utilizing hypothesis testing and visual analytics to surface species patterns.",
    technologies: ["R", "Statistics", "Hypothesis Testing"],
    github: "https://github.com/pranavsraja/Palmer-Penguins-Analysis-using-Statistical-Methods",
  },
];

const ProjectCard = ({ project, index }: { project: ProjectProps; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="glass-panel rounded-xl p-6 flex flex-col justify-between group h-full"
    >
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] text-zinc-300">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-zinc-100 mb-2 leading-snug group-hover:text-white transition-colors font-[var(--font-outfit)]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.03] border border-white/[0.08] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom link */}
        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors group/link"
            >
              <Github className="w-3.5 h-3.5 text-zinc-400 group-hover/link:text-white" />
              <span>Source</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all text-zinc-300" />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-zinc-500">
              Industry Project · SAGE
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filtered = activeCategory ? projects.filter((p) => p.category === activeCategory) : projects;

  return (
    <section className="py-24 flex flex-col items-center justify-center relative z-20" id="projects">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block font-medium">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-outfit)] tracking-tight text-zinc-100">
          Selected Engineering Work
        </h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-lg mx-auto">
          Explore data engineering platforms, computer vision pipelines, and machine learning models.
        </p>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 px-4 max-w-4xl">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
            !activeCategory
              ? "bg-white text-zinc-950 font-medium"
              : "border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
          }`}
        >
          All ({projects.length})
        </button>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(isActive ? null : cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                isActive
                  ? "bg-white text-zinc-950 font-medium border-transparent"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
};

export default Projects;
