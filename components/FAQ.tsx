"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="text-lg font-medium text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">{question}</span>
                <ChevronDown className={`w-5 h-5 text-[var(--muted)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-[var(--muted)] leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Are you available for Full-time or contract work?",
            answer: "Absolutely! I'm open to both full-time positions and contract opportunities where I can grow, contribute to impactful projects, and collaborate effectively within a driven team. Feel free to reach out to discuss how we can collaborate."
        },
        {
            question: "Can you share your resume?",
            answer: "Certainly! You can download my resume directly from the 'Download CV' button located in the hero section of my portfolio website. It contains detailed information about my skills, projects, experience, and education."
        },
        {
            question: "What is your development process like?",
            answer: "I follow a systematic approach to data and AI projects, starting with problem definition and data exploration, followed by model development, testing, and deployment. I prioritize clear communication and iterative feedback to ensure solutions meet business goals."
        },
        {
            question: "What roles are you primarily interested in?",
            answer: "I'm primarily interested in roles such as Data Scientist, Data Engineer, Data Analyst, AI Engineer, and Machine Learning Engineer where I can leverage my skills in data analysis, model development, and data pipeline construction to drive business insights and solutions."
        }
    ];

    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-20" id="faq">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-10 font-[var(--font-outfit)] text-center">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Questions</span>
            </h2>

            <div className="w-full max-w-3xl px-4 glass-panel rounded-2xl">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} index={index} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;