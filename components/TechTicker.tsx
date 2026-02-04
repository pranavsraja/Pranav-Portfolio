"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code,
    Server,
    Database,
    Cloud,
    Package,
    Terminal,
    Zap,
    Layers,
    Layout,
    GitBranch,
    Cpu,
    Triangle,
    Settings,
    Flame,
    BarChart3
} from "lucide-react";

const techItems = [
    { name: "Python", icon: Code, color: "text-blue-400" },
    { name: "React", icon: Zap, color: "text-cyan-400" },
    { name: "Next.js", icon: Triangle, color: "text-white" },
    { name: "TypeScript", icon: Code, color: "text-blue-600" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "TailwindCSS", icon: Layout, color: "text-cyan-400" },
    { name: "PyTorch", icon: Flame, color: "text-red-500" },
    { name: "TensorFlow", icon: BarChart3, color: "text-orange-500" },
    { name: "Pandas", icon: Database, color: "text-blue-500" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-500" },
    { name: "AWS", icon: Cloud, color: "text-orange-400" },
    { name: "Docker", icon: Package, color: "text-blue-400" },
    { name: "Git", icon: GitBranch, color: "text-red-500" },
    { name: "Linux", icon: Terminal, color: "text-yellow-500" },
];

const TechTicker = () => {
    return (
        <div className="w-full relative z-20">
            {/* Header */}
            <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-[var(--foreground)] font-[var(--font-outfit)]">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Tech Stack</span>
                </h3>
                <p className="text-[var(--muted)] text-sm mt-2">
                    Tools and technologies I use across Data, AI, and Web Development
                </p>
            </div>

            {/* Marquee */}
            <div className="py-8 overflow-hidden bg-gradient-to-r from-purple-900/5 via-transparent to-cyan-900/5 backdrop-blur-sm border-t border-b border-[var(--glass-border)]/30">
                {/* Left fade */}
                <div className="absolute inset-0 z-10 w-20 bg-gradient-to-r from-[var(--background)] to-transparent left-0" />
                {/* Right fade */}
                <div className="absolute inset-0 z-10 w-20 bg-gradient-to-l from-[var(--background)] to-transparent right-0" />

                <motion.div
                    className="flex gap-12 w-max"
                    animate={{ x: [0, -1800] }}
                    transition={{
                        repeat: Infinity,
                        duration: 35,
                        ease: "linear"
                    }}
                >
                    {[...techItems, ...techItems, ...techItems].map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <div 
                                key={index} 
                                className="flex items-center gap-2 min-w-max group px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                            >
                                <IconComponent className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                                <span className="text-sm font-medium text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default TechTicker;