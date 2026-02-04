"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./ui/SpotlightCard";

const SkillCategory = ({ title, skills, index }: { title: string, skills: string[], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <SpotlightCard className="p-6 glass-panel rounded-2xl h-full border border-[var(--glass-border)]">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 font-[var(--font-outfit)]">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-[var(--foreground)]/5 rounded-full text-[var(--muted)] border border-[var(--glass-border)] hover:bg-[var(--foreground)]/10 hover:text-[var(--foreground)] transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </SpotlightCard>
        </motion.div>
    );
};

const Skills = () => {
    const categories = [
        {
            title: "Programming",
            skills: ["Python", "Java", "SQL", "PySpark", "R", "JavaScript"]
        },
        {
            title: "Data and Machine Learning",
            skills: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "NLP", "OCR", "Computer Vision", "Model evaluation & benchmarking"]
        },
        {
            title: "Database",
            skills: ["PostgreSQL", "MySQL", "Firebase", "Snowflake"]
        },
        {
            title: "DevOps & Tools",
            skills: ["AWS", "DataBricks", "Git", "CI/CD", "Linux", "Vercel", "Power BI", "Microsoft Suite"]
        },
        {
            title: "Data Engineering & Pipelines",
            skills: ["ETL / ELT pipelines", "Data preprocessing & validation", "Workflow orchestration fundamentals", "Structured & analytical data modeling"]
        }
    ];

    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-20" id="skills">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-10 text-center font-[var(--font-outfit)]">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Arsenal</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full px-4">
                {categories.map((cat, index) => (
                    <SkillCategory key={index} {...cat} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
