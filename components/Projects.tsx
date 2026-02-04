"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Code2 } from "lucide-react";
import Image from "next/image";
import SpotlightCard from "./ui/SpotlightCard";

// Add shimmer animation
const shimmerStyle = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  animation: shimmer 3s infinite;
}
.gradient-animate {
  background-size: 200% 200%;
  animation: gradient-shift 6s ease infinite;
}
`;

const ProjectCard = ({ title, category, image, description, index, technologies, github }: {
    title: string;
    category: string;
    image?: string;
    description: string;
    index: number;
    technologies: string[];
    github: string;
}) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative rounded-xl h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
            <SpotlightCard className="glass-panel overflow-hidden h-full flex flex-col border border-white/10 group-hover:border-white/30 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div className="relative w-full h-48 overflow-hidden shimmer">
                    {/* Gradient background with accent color */}
                    <div className={`w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black ${image ? '' : 'flex items-center justify-center'}`}>
                        {image ? (
                            <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                            <Code2 className="w-12 h-12 text-purple-400" />
                        )}
                    </div>
                    {/* Enhanced hover overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
                        <a href={github || "#"} target="_blank" rel="noopener noreferrer" aria-label="Github Repo" className="p-3 bg-white/90 rounded-full hover:bg-purple-200 transition-colors transform group-hover:scale-110 duration-300">
                            <Github className="w-5 h-5 text-black" />
                        </a>
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 dark:border-white/30 text-[var(--muted)]">
                            {category}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--foreground)] mt-2 mb-2 group-hover:text-purple-300 transition-colors font-[var(--font-outfit)] line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-[var(--muted)] text-sm line-clamp-3 mb-4 flex-grow">
                        {description}
                    </p>
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-white/10">
                        {technologies.map((tech: string, i: number) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="text-xs px-2 py-1 rounded border border-white/20 dark:border-white/30 text-[var(--muted)] hover:bg-white/5 dark:hover:bg-white/10 transition-colors cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
};

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const projects = [
        {
            title: "Automated Claims Processing Using Databricks",
            category: "Data & ML Systems",
            description: "Production grade insurance claims system built on the Databricks Lakehouse. Integrates real time data pipelines, computer vision based damage assessment, and governed analytics for automated decisioning.",
            technologies: ["Databricks", "Python", "Computer Vision", "MLOps"],
            github: "",
        },
        {
            title: "Scalable Healthcare Data Engineering Platform for Analytics and Benchmarking",
            category: "Data Engineering Platforms",
            description: "Scalable, multi-tenant healthcare data platform for analytics and benchmarking. Automates ingestion, schema standardization, and data quality validation across heterogeneous CMS datasets using reusable orchestration.",
            technologies: ["Airflow", "Spark", "SQL", "Data Quality"],
            github: "",
        },
        {
            title: "Optimized Machine Learning Models for Predictive Insights and Performance Analysis",
            category: "Machine Learning",
            description: "Comparative machine learning benchmarking project evaluating multiple supervised models under a unified preprocessing and evaluation pipeline. Focuses on performance trade-offs, metric-driven model selection, and predictive reliability.",
            technologies: ["Scikit-learn", "Python", "Pandas", "Evaluation"],
            github: "https://github.com/pranavsraja/Optimized-Machine-Learning-Models-for-Predictive-Insights-and-Performance-Analysis",
        },
        {
            title: "Understanding Social Sentiment Through AI",
            category: "NLP",
            description: "End-to-end social sentiment analysis pipeline using classical and neural models for multi-class sentiment classification. Emphasizes text preprocessing, model comparison, and performance driven evaluation on real world social data.",
            technologies: ["NLP", "Transformers", "Python", "NLTK"],
            github: "https://github.com/pranavsraja/Understanding-Social-Sentiment-Through-AI",
        },
        {
            title: "IdiomSense: Multimodal Classification of Figurative Language",
            category: "NLP",
            description: "Multimodal figurative language classification system integrating textual and visual representations for idiom sense disambiguation. Focuses on multimodal feature fusion, model evaluation, and robustness in non literal language understanding.",
            technologies: ["Multimodal", "NLP", "PyTorch", "Vision"],
            github: "https://github.com/pranavsraja/IdiomSense-Multimodal-Classification-of-Figurative-Language",
        },
        {
            title: "LSTM-based Language Model for Text Generation",
            category: "Deep Learning",
            description: "Neural language generation system using LSTM architectures for sequence modeling and text synthesis. Evaluates generative behavior and limitations of recurrent models through qualitative and baseline comparisons.",
            technologies: ["PyTorch", "LSTM", "RNN", "Seq2Seq"],
            github: "https://github.com/pranavsraja/LSTM-based-Language-Model-for-Text-Generation",
        },
        {
            title: "EfficientNet-Based Bird Species Classification Using Transfer Learning",
            category: "Computer Vision",
            description: "Fine grained bird species classification system built using EfficientNet and transfer learning.Emphasizes dataset curation, model fine-tuning, and accuracy driven evaluation on multi-class visual data.",
            technologies: ["EfficientNet", "Transfer Learning", "TensorFlow", "Classification"],
            github: "https://github.com/pranavsraja/EfficientNet-Based-Bird-Species-Classification-Using-Transfer-Learning",
        },
        {
            title: "CycleGAN for Image-to-Image Translation",
            category: "Computer Vision",
            description: "Unpaired image-to-image translation system using CycleGAN for cross domain visual transformation. Explores adversarial learning stability, cycle-consistency constraints, and qualitative output fidelity.",
            technologies: ["GAN", "PyTorch", "Image Processing", "Adversarial"],
            github: "https://github.com/pranavsraja/CycleGAN-for-Image-to-Image-Translation",
        },
        {
            title: "Big Data Insights: NYC Taxi Trip Analytics with PySpark",
            category: "Big Data Engineering",
            description: "Large-scale analytics pipeline processing NYC taxi trip data using PySpark. Focuses on distributed ETL, performance-aware transformations, and insight extraction from high-volume datasets.",
            technologies: ["PySpark", "Hadoop", "SQL", "ETL"],
            github: "https://github.com/pranavsraja/Big-Data-Insights-NYC-Taxi-Trip-Analytics-with-PySpark",
        },
        {
            title: "MOOC Student Engagement and Dropout Analysis",
            category: "Data Analytics",
            description: "Structured analysis of MOOC learner engagement and dropout behavior using the CRISP-DM methodology. Identifies key behavioral drivers through exploratory analysis and predictive modeling to support retention strategies.",
            technologies: ["CRISP-DM", "Python", "Pandas", "Analysis"],
            github: "https://github.com/pranavsraja/MOOC-Student-Engagement-and-Dropout-Analysis-using-CRISP-DM",
        },
        {
            title: "Smart Analytics Dashboard (Power BI)",
            category: "Data Analytics",
            description: "Interactive analytics dashboard designed for decision support using Power BI. Transforms raw data into KPI-driven insights through modeled datasets, dynamic visuals, and drill-down analysis.",
            technologies: ["Power BI", "DAX", "Data Modeling", "Analytics"],
            github: "https://github.com/pranavsraja/Smart-Analytics-Dashboard-using-Power-BI",
        },
        {
            title: "Palmer Penguins Analysis using Statistical Methods",
            category: "Statistical Analysis",
            description: "Statistical analysis of the Palmer Penguins dataset using various methods to explore species differences and ecological patterns. Highlights data visualization, hypothesis testing, and multivariate analysis techniques.",
            technologies: ["R", "Statistics", "Visualization", "Hypothesis Testing"],
            github: "https://github.com/pranavsraja/Palmer-Penguins-Analysis-using-Statistical-Methods",
        },
    ];

    const categories = Array.from(new Set(projects.map((p) => p.category)));
    const filteredProjects = activeCategory
        ? projects.filter((p) => p.category === activeCategory)
        : projects;

    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-20" id="projects">
            <style>{shimmerStyle}</style>
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4 font-[var(--font-outfit)]">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Projects</span>
            </h2>
            <p className="text-[var(--muted)] mb-12 text-center max-w-2xl px-4">
                Explore my portfolio of data engineering, machine learning, and analytics projects
            </p>

            {/* Category Filter */}
            <div className="flex justify-center mb-12 px-4">
                <div className="relative">
                    <motion.select
                        value={activeCategory || ""}
                        onChange={(e) => setActiveCategory(e.target.value || null)}
                        className="appearance-none px-5 py-3 rounded-lg font-medium transition-all
                            bg-gradient-to-r from-purple-500/10 to-cyan-500/10 dark:from-purple-500/20 dark:to-cyan-500/20
                            border border-purple-300 dark:border-purple-500/30
                            text-gray-800 dark:text-white
                            hover:border-purple-400 dark:hover:border-purple-400/50
                            focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/50
                            cursor-pointer shadow-sm hover:shadow-md transition-all
                            min-w-[250px]"
                    >
                        <option value="">All Projects</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </motion.select>
                    <motion.div
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-purple-600 dark:text-purple-400"
                        animate={{ rotate: activeCategory ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4"
            >
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.title} {...project} index={index} />
                ))}
            </motion.div>

            {/* Mascot Placeholder */}
            <div className="absolute right-0 top-1/4 opacity-20 pointer-events-none -z-10 animate-pulse">
                <div className="w-64 h-64 bg-purple-600 rounded-full blur-[100px]" />
            </div>
        </section>
    );
};

export default Projects;
