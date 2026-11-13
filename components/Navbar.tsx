"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/**
 * Desktop: no bar over the hero — a slim, centred link bar slides in once the
 *          visitor scrolls past it.
 * Phone:   a small floating menu button (top-right) that slides in a side drawer.
 * Both:    thin yellow scroll-progress line at the very top.
 */
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      // Show the desktop bar once most of the hero has scrolled away.
      setPastHero(hero ? hero.getBoundingClientRect().bottom < 120 : window.scrollY > 400);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        // On-screen position: offsetTop is relative to the animated wrapper.
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Phone drawer: close on Escape; keep the page from scrolling behind it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 h-[1.5px] z-[100] origin-left bg-accent"
        style={{ width: progressWidth }}
      />

      {/* ── Desktop: link bar, only after the hero ── */}
      <nav
        aria-label="Sections"
        aria-hidden={!pastHero}
        className={`hidden md:block fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          pastHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex items-center gap-6 px-6 py-2.5 rounded-full bg-[#090a0c]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/50">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  tabIndex={pastHero ? 0 : -1}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-xs font-mono transition-colors ${
                    isActive ? "text-accent font-medium" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── Phone: menu button — two lines that morph into an × ── */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className="md:hidden group fixed top-4 right-4 z-[60] flex items-center justify-center w-11 h-11 rounded-full bg-[#090a0c]/80 backdrop-blur-md border border-white/10 hover:border-white/25 transition-colors"
      >
        <span className="relative block w-5 h-3">
          <span
            className={`absolute right-0 h-[1.5px] rounded-full transition-all duration-300 ease-out ${
              menuOpen
                ? "top-1/2 w-5 -translate-y-1/2 rotate-45 bg-white"
                : "top-0 w-5 bg-zinc-300 group-hover:bg-white"
            }`}
          />
          <span
            className={`absolute right-0 h-[1.5px] rounded-full transition-all duration-300 ease-out ${
              menuOpen
                ? "top-1/2 w-5 -translate-y-1/2 -rotate-45 bg-white"
                : "top-[calc(100%-1.5px)] w-3 bg-zinc-300 group-hover:w-5 group-hover:bg-white"
            }`}
          />
        </span>
      </button>

      {/* ── Phone: slide-in drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dimmed, blurred page behind — tap to close */}
            <motion.button
              aria-label="Close menu"
              tabIndex={-1}
              data-lenis-prevent
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden fixed inset-0 z-[54] bg-black/60 backdrop-blur-sm cursor-default"
            />

            <motion.aside
              id="mobile-menu"
              aria-label="Site menu"
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 40 }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-[55] w-[80%] max-w-xs flex flex-col px-7 pt-24 pb-8 bg-[#0c0d10] border-l border-white/10"
            >
              <motion.ul
                className="flex flex-col gap-1"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } } }}
              >
                <motion.li
                  variants={{ hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0 } }}
                  className="mb-3 text-[11px] font-mono uppercase tracking-[0.2em] text-accent"
                >
                  Menu
                </motion.li>
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.li
                      key={link.label}
                      variants={{ hidden: { opacity: 0, x: 16 }, show: { opacity: 1, x: 0 } }}
                    >
                      <button
                        onClick={() => handleNav(link.href)}
                        aria-current={isActive ? "true" : undefined}
                        className={`group/link w-full flex items-baseline gap-4 py-2 text-left transition-colors ${
                          isActive ? "text-accent" : "text-zinc-200 hover:text-white"
                        }`}
                      >
                        <span
                          className={`text-[11px] font-mono ${isActive ? "text-accent/70" : "text-zinc-500"}`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-lg font-semibold tracking-tight font-[var(--font-outfit)] group-hover/link:translate-x-1 transition-transform">
                          {link.label}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-5"
              >
                <a
                  href="/pranav.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-tag card-link self-start inline-flex items-center gap-1.5"
                >
                  View Resume
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2.5">
                  {[
                    { href: "https://github.com/pranavsraja", icon: Github, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/pranavsraja/", icon: Linkedin, label: "LinkedIn" },
                    { href: "mailto:pranavsunilraja@gmail.com", icon: Mail, label: "Email" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-zinc-400 hover:text-accent hover:border-accent transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                <p className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Currently at SymphonyAI
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
