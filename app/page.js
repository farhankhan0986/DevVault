"use client";

import dynamic from "next/dynamic";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const MotionDiv = dynamic(
  () => import("@/lib/MotionClient").then((mod) => mod.default.div),
  { ssr: false },
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <main className="bg-background text-foreground">
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-20">
          <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <About />
          </MotionDiv>
        </section>

        <section id="experience" className="scroll-mt-20">
          <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Experience />
          </MotionDiv>
        </section>

        <section id="projects" className="scroll-mt-20">
          <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Projects />
          </MotionDiv>
        </section>

        <section id="skills" className="scroll-mt-20">
          <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Skills />
          </MotionDiv>
        </section>

        <section id="education" className="scroll-mt-20">
          <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Education />
          </MotionDiv>
        </section>

        <section id="contact" className="scroll-mt-20">
          <MotionDiv variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Contact />
          </MotionDiv>
        </section>
      </main>

      <Footer />
    </>
  );
}
