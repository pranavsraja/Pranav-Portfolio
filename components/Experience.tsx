"use client";

import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./ui/SpotlightCard";

const ExperienceCard = ({ title, company, period, desc, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l-2 border-purple-500 last:border-0 last:pb-0"
        >
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" />
            <SpotlightCard className="glass-panel p-6 rounded-xl hover:bg-[var(--foreground)]/5 transition-colors border-l-0">
                <h3 className="text-2xl font-bold text-[var(--foreground)] font-[var(--font-outfit)]">{title}</h3>
                <div className="flex justify-between items-center mt-2 mb-4">
                    <span className="text-purple-300 font-semibold">{company}</span>
                    <span className="text-[var(--muted)] text-sm">{period}</span>
                </div>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                    {desc}
                </p>
            </SpotlightCard>
        </motion.div>
    );
};

const Experience = () => {
    const experiences = [
        {
            title: "Data Science Intern (Dissertation Project)",
            company: "SAGE, United Kingdom",
            period: "Mar 2025 - Aug 2025",
            desc: "Delivered a large-scale OCR benchmarking system balancing accuracy, inference latency, and deployment cost across financial and handwritten documents. Integrated cutting-edge models like TrOCR, Tesseract, EasyOCR, Donut and LayoutLMv3, optimizing for real-world applications."
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center py-20 relative z-20" id="experience">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-16 font-[var(--font-outfit)]">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Experience</span>
            </h2>
            <div className="w-full max-w-4xl px-4">
                <div className="flex flex-col">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
