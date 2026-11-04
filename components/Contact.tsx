"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Github, Linkedin, Copy, Check } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "pranavsunilraja@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 flex flex-col items-center justify-center relative z-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2 block font-medium">
          Contact
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-[var(--font-outfit)] text-zinc-100">
          Hit Me Up
        </h2>
        <p className="text-zinc-400 mt-3 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
          Open to discussions on database internals, distributed data architectures, and applied AI systems.
        </p>
      </motion.div>

      {/* Main Contact Card */}
      <div className="w-full max-w-xl px-4">
        <div className="glass-panel rounded-2xl p-8 sm:p-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Direct Inquiries</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 mb-3 font-[var(--font-outfit)]">
            {email}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 bg-white text-zinc-950 font-medium py-2.5 px-6 rounded-full hover:bg-zinc-200 transition-colors text-sm group"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] text-zinc-300 font-medium py-2.5 px-5 rounded-full hover:border-white/20 hover:text-white transition-colors text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-xs">Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/[0.08]">
            <a
              href="https://github.com/pranavsraja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href="https://www.linkedin.com/in/pranavsraja/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full text-center text-zinc-600 mt-20 text-xs font-mono">
        &copy; {new Date().getFullYear()} Pranav Sunil Raja
      </footer>
    </section>
  );
};

export default Contact;
