"use client";

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import TechTicker from "../components/TechTicker";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const RevealSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
    viewport={{ once: true, margin: "-80px" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-0">
        <section id="home">
          <Hero />
        </section>
        {/* Each component renders its own <section id="..."> for nav anchors */}
        <RevealSection>
          <Experience />
        </RevealSection>
        <RevealSection>
          <Skills />
        </RevealSection>
        <RevealSection>
          <Projects />
        </RevealSection>
        <RevealSection>
          <Education />
        </RevealSection>
        <TechTicker />
        <RevealSection>
          <Contact />
        </RevealSection>
      </div>
    </main>
  );
}
