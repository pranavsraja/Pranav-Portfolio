"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Briefcase, Users, Target } from "lucide-react";
import Magnetic from "./ui/Magnetic";

const Contact = () => {
    const contactReasons = [
        { icon: Briefcase, text: "Data & AI Projects" },
        { icon: Users, text: "Collaboration" },
        { icon: Target, text: "Opportunities" }
    ];

    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-20" id="contact">
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-4 font-[var(--font-outfit)] text-center">
                Ready to Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Something Great?</span>
            </h2>
            <p className="text-[var(--muted)] mb-12 text-center max-w-[600px] text-lg">
                Let&apos;s create data driven solutions that make an impact. Reach out today.
            </p>

            <div className="w-full max-w-3xl px-4 flex flex-col items-center justify-center">
                {/* Main CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <div className="relative w-full bg-gradient-to-br from-purple-900/30 via-purple-900/10 to-black/40 rounded-3xl border border-[var(--glass-border)] overflow-hidden light-mode-gradient p-8 sm:p-12">
                        {/* Animated background elements */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
                        />

                        <div className="relative z-10">
                            {/* Contact Reasons */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                                {contactReasons.map((reason, idx) => {
                                    const IconComponent = reason.icon;
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className="text-center p-4 rounded-xl border border-[var(--glass-border)]/50 hover:border-purple-500/50 transition-all hover:bg-purple-500/10"
                                        >
                                            <div className="flex items-center justify-center mb-2">
                                                <IconComponent className="w-6 h-6 text-purple-400" />
                                            </div>
                                            <p className="text-[var(--muted)] text-sm font-medium">{reason.text}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Main CTA */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4 font-[var(--font-outfit)]">
                                    Prefer Email?
                                </h3>
                                <p className="text-[var(--muted)] mb-8">
                                    Drop me a message. I typically respond within 24 hours.
                                </p>
                            </div>

                            {/* Email CTA Button - Centered */}
                            <div className="flex flex-col items-center justify-center w-full">
                                <Magnetic strength={0.4}>
                                    <a 
                                        href="mailto:pranavsunilraja@gmail.com" 
                                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-4 px-10 rounded-full hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] transition-all hover:scale-105 border border-purple-400/50 group"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Send me an email
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Magnetic>

                                {/* Alternative text - Centered */}
                                <p className="text-[var(--muted)] text-sm mt-6">
                                    <span className="font-mono text-purple-400">pranavsunilraja@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 text-center text-sm text-[var(--muted)]"
                >
                    <p> Available for projects, collaborations & opportunities</p>
                </motion.div>
            </div>

            <footer className="w-full text-center text-gray-500 mt-20 pb-10 text-sm">
                &copy; {new Date().getFullYear()} Pranav Sunil Raja. All rights reserved.
            </footer>
        </section>
    );
};

export default Contact;