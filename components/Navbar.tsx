"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 1px Minimal Hairline Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[1.5px] z-[100] origin-left bg-zinc-400"
        style={{ width: progressWidth }}
      />

      <nav
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl transition-all duration-300 rounded-full ${
          scrolled
            ? "bg-[#090a0c]/85 backdrop-blur-md border border-white/10 shadow-xl shadow-black/50"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="px-5 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNav("#home")}
            className="text-sm font-semibold tracking-tight text-zinc-100 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>PSR</span>
            <span className="text-[11px] font-mono text-zinc-500 font-normal">
              / Data & AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`text-xs font-mono transition-colors ${
                      isActive
                        ? "text-white font-medium"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="/pranav.pdf"
              download
              className="hidden md:inline-flex items-center text-xs font-mono px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:text-white transition-colors"
            >
              Resume
            </a>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[1.5px] w-4 bg-zinc-300 transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-zinc-300 transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-zinc-300 transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-5 pb-4 pt-1 flex flex-col gap-2.5 border-t border-white/10 bg-[#090a0c] rounded-b-2xl">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className={`text-left text-xs font-mono py-1.5 transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white font-medium"
                    : "text-zinc-400"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/pranav.pdf"
              download
              className="mt-1 text-center text-xs font-mono py-2 rounded-lg border border-white/10 bg-white/[0.03] text-zinc-200"
            >
              Download Resume
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
