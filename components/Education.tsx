"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationCard = ({ degree, institution, year, desc, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex gap-6 pb-12 last:pb-0"
        >
            <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center shadow-lg z-10">
                    <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div className="w-1 h-full bg-white/10 mt-2 rounded-full" />
            </div>

            <div className="glass-panel p-6 rounded-xl flex-1 hover:bg-[var(--foreground)]/5 transition-colors border border-[var(--glass-border)]">
                <span className="text-sm text-cyan-400 font-mono mb-2 block">{year}</span>
                <h3 className="text-xl font-bold text-[var(--foreground)] font-[var(--font-outfit)]">{degree}</h3>
                <h4 className="text-lg text-[var(--muted)] mb-4">{institution}</h4>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {desc}
                </p>
            </div>
        </motion.div>
    )
}

const Education = () => {
    const education = [
        {
            degree: "MSc. Data Science (with Specialization in AI)",
            institution: "Newcastle University, United Kingdom",
            year: "2024 - 2025",
            desc: "Graduated with Merit and completed an industry focused dissertation."
        },
        {
            degree: "B.E. Electronics and Communication Engineering",
            institution: "Visvesvaraya Technological University, India",
            year: "2020 - 2024",
            desc: "Foundation in engineering principles and computational problem solving."
        }
    ];

    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-20" id="education">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-16 font-[var(--font-outfit)]">
                My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Education</span>
            </h2>

            <div className="w-full max-w-4xl px-4">
                {education.map((edu, index) => (
                    <EducationCard key={index} {...edu} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Education;
