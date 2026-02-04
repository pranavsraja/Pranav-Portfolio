"use client";

import Hero from "../components/Hero";
import StarBackground from "../components/StarBackground";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import TechTicker from "../components/TechTicker";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

const RevealSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 70 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden transition-colors duration-500">
      <div className="flex flex-col gap-20">
        <section id="home"><Hero /></section>
        <RevealSection><section id="skills"><Skills /></section></RevealSection>
        <RevealSection><section id="experience"><Experience /></section></RevealSection>
        <RevealSection><section id="projects"><Projects /></section></RevealSection>
        <RevealSection><section id="education"><Education /></section></RevealSection>
        <RevealSection><section id="faq"><FAQ /></section></RevealSection>
        <RevealSection><section id="contact"><Contact /></section></RevealSection>
        <TechTicker />
      </div>
    </main>
  );
}
