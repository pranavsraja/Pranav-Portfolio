"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Github, ArrowUpRight, ChevronDown } from "lucide-react";

/** Projects shown in the "All" view before "Show all". */
const INITIAL_VISIBLE = 6;

/** Broad filter groups that match target roles. A project can be in several. */
type Group = "de" | "ml" | "analytics";

const FILTERS: { id: Group | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "de", label: "Data Engineering" },
  { id: "ml", label: "ML & AI" },
  { id: "analytics", label: "Analytics" },
];

interface ProjectProps {
  title: string;
  /** Specific label shown on the card (e.g. NLP, Computer Vision). */
  category: string;
  groups: Group[];
  description: string;
  technologies: string[];
  github: string;
  /** Shown instead of a Source link when there is no public repo. */
  note?: string;
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "Automated Claims Processing Using Databricks",
    category: "Data & ML Systems",
    groups: ["de", "ml"],
    description: "Production-grade insurance claims system built on Databricks Lakehouse. Integrates real-time streaming pipelines, computer vision damage assessment, and governed analytics for automated decisioning.",
    technologies: ["Databricks", "Python", "Computer Vision", "Delta Lake"],
    github: "",
    featured: true,
  },
  {
    title: "Scalable Healthcare Data Engineering Platform",
    category: "Data Engineering Platforms",
    groups: ["de"],
    description: "Multi-tenant healthcare data platform for analytics and benchmarking. Automates ingestion, schema standardization, and data quality validation across heterogeneous CMS datasets.",
    technologies: ["Airflow", "Spark", "SQL", "Data Quality"],
    github: "",
    featured: true,
  },
  {
    title: "OCR Benchmarking System for SAGE Publishing",
    category: "Data & ML Systems",
    groups: ["ml"],
    description: "Large-scale OCR evaluation framework benchmarking TrOCR, Tesseract, EasyOCR, Donut & LayoutLMv3 across financial and handwritten documents, optimizing accuracy, latency, and cloud deployment cost.",
    technologies: ["TrOCR", "LayoutLMv3", "PyTorch", "OCR"],
    github: "",
    note: "Industry Project · SAGE Publishing",
    featured: true,
  },
  {
    title: "Optimized ML Models for Predictive Insights",
    category: "Machine Learning",
    groups: ["ml"],
    description: "Comparative ML benchmarking evaluating multiple supervised models under a unified preprocessing and validation pipeline. Focuses on metric-driven selection and reliability.",
    technologies: ["Scikit-learn", "Python", "Pandas", "Evaluation"],
    github: "https://github.com/pranavsraja/Optimized-Machine-Learning-Models-for-Predictive-Insights-and-Performance-Analysis",
  },
  {
    title: "Understanding Social Sentiment Through AI",
    category: "NLP",
    groups: ["ml"],
    description: "End-to-end social sentiment analysis pipeline using classical and transformer architectures for multi-class classification on real-world conversational data.",
    technologies: ["NLP", "Transformers", "Python", "NLTK"],
    github: "https://github.com/pranavsraja/Understanding-Social-Sentiment-Through-AI",
  },
  {
    title: "IdiomSense: Multimodal Figurative Language Classification",
    category: "NLP",
    groups: ["ml"],
    description: "Multimodal classification system integrating textual and visual representations for idiom sense disambiguation and non-literal language understanding.",
    technologies: ["Multimodal", "NLP", "PyTorch", "Vision"],
    github: "https://github.com/pranavsraja/IdiomSense-Multimodal-Classification-of-Figurative-Language",
  },
  {
    title: "LSTM-based Language Model for Text Generation",
    category: "Deep Learning",
    groups: ["ml"],
    description: "Neural language generation system evaluating sequence modeling and synthesis limitations of recurrent architectures against baseline models.",
    technologies: ["PyTorch", "LSTM", "RNN", "Seq2Seq"],
    github: "https://github.com/pranavsraja/LSTM-based-Language-Model-for-Text-Generation",
  },
  {
    title: "EfficientNet Bird Species Classification",
    category: "Computer Vision",
    groups: ["ml"],
    description: "Fine-grained bird species classification using EfficientNet and transfer learning with accuracy-driven evaluation on multi-class visual datasets.",
    technologies: ["EfficientNet", "Transfer Learning", "TensorFlow"],
    github: "https://github.com/pranavsraja/EfficientNet-Based-Bird-Species-Classification-Using-Transfer-Learning",
  },
  {
    title: "CycleGAN for Image-to-Image Translation",
    category: "Computer Vision",
    groups: ["ml"],
    description: "Unpaired image-to-image translation system using CycleGAN for cross-domain visual synthesis and adversarial stability analysis.",
    technologies: ["GAN", "PyTorch", "Image Processing"],
    github: "https://github.com/pranavsraja/CycleGAN-for-Image-to-Image-Translation",
  },
  {
    title: "NYC Taxi Trip Analytics with PySpark",
    category: "Big Data Engineering",
    groups: ["de", "analytics"],
    description: "Distributed analytics pipeline processing high-volume NYC taxi trip data using PySpark for performance-aware ETL and insight extraction.",
    technologies: ["PySpark", "Hadoop", "SQL", "ETL"],
    github: "https://github.com/pranavsraja/Big-Data-Insights-NYC-Taxi-Trip-Analytics-with-PySpark",
  },
  {
    title: "MOOC Student Engagement & Dropout Analysis",
    category: "Data Analytics",
    groups: ["analytics"],
    description: "Structured analysis of learner engagement and dropout behavior using CRISP-DM methodology to support data-informed retention interventions.",
    technologies: ["CRISP-DM", "Python", "Pandas", "EDA"],
    github: "https://github.com/pranavsraja/MOOC-Student-Engagement-and-Dropout-Analysis-using-CRISP-DM",
  },
  {
    title: "Smart Analytics Dashboard (Power BI)",
    category: "Data Analytics",
    groups: ["analytics"],
    description: "Interactive analytics dashboard for business decision support, transforming raw operational datasets into modeled KPI drill-downs.",
    technologies: ["Power BI", "DAX", "Data Modeling"],
    github: "https://github.com/pranavsraja/Smart-Analytics-Dashboard-using-Power-BI",
  },
  {
    title: "Palmer Penguins Statistical Analysis",
    category: "Statistical Analysis",
    groups: ["analytics"],
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
      className="glass-panel rounded-2xl p-6 flex flex-col justify-between group h-full"
    >
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-accent/40 bg-accent/10 text-accent">
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
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
          {project.technologies.map((tech, i) => (
            <span key={i} className="card-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom link */}
        <div className="flex items-center">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-tag card-link inline-flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs text-zinc-400">
              {project.note ?? "Private repository"}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState<Group | "all">("all");
  const [showAll, setShowAll] = useState(false);
  const countFor = (id: Group | "all") =>
    id === "all" ? projects.length : projects.filter((p) => p.groups.includes(id)).length;
  const filtered = active === "all" ? projects : projects.filter((p) => p.groups.includes(active));
  // "All" view starts with the first INITIAL_VISIBLE (Featured come first); a group shows everything.
  const canCollapse = active === "all" && filtered.length > INITIAL_VISIBLE;
  const visible = canCollapse && !showAll ? filtered.slice(0, INITIAL_VISIBLE) : filtered;

  const toggleShowAll = () => {
    if (showAll) {
      // Collapsing removes a lot of height — bring the section header back into view.
      document.getElementById("projects")?.scrollIntoView({ behavior: "auto" });
    }
    setShowAll((s) => !s);
  };

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
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-2 block font-medium">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-outfit)] tracking-tight text-zinc-100">
          Selected <span className="text-accent">Work</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-lg mx-auto">
          Industry and academic projects across data engineering, machine learning, and analytics.
        </p>
      </motion.div>

      {/* Filters — 2×2 grid on phones (all visible), one row from sm up;
          the yellow pill slides to the selected option */}
      <div className="w-full mb-10 px-4">
        <div
          role="tablist"
          aria-label="Filter projects"
          className="mx-auto grid grid-cols-2 w-full max-w-sm gap-1 p-1 rounded-2xl sm:flex sm:w-max sm:max-w-none sm:items-center sm:rounded-full border border-white/10 bg-white/[0.02]"
        >
          {FILTERS.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActive(f.id);
                  setShowAll(false);
                }}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-colors ${
                  isActive ? "text-black font-medium" : "text-zinc-300 hover:text-accent"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">
                  {f.label}{" "}
                  <span className={isActive ? "text-black/60" : "text-zinc-400"}>{countFor(f.id)}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {canCollapse && (
        <button
          onClick={toggleShowAll}
          aria-expanded={showAll}
          className="mt-10 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm text-zinc-300 hover:border-accent hover:text-accent transition-colors"
        >
          {showAll ? "Show fewer" : `Show all ${filtered.length} projects`}
          <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
        </button>
      )}
    </section>
  );
};

export default Projects;
