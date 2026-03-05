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

// Client-only Motion wrapper
const MotionDiv = dynamic(
  () => import("@/lib/MotionClient").then((mod) => mod.default.div),
  { ssr: false },
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden bg-background text-foreground">
        {/* Ambient background glows */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute top-0 left-[10%] w-[600px] h-[600px] bg-[rgb(var(--primary))] opacity-[0.04] rounded-full blur-[120px]" />
          <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-[rgb(var(--accent))] opacity-[0.03] rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[rgb(var(--primary))] opacity-[0.03] rounded-full blur-[100px]" />
        </div>

        {/* HOME */}
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-16">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <About />
          </MotionDiv>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-16">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Experience />
          </MotionDiv>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-16">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Projects />
          </MotionDiv>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-16">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Skills />
          </MotionDiv>
        </section>

        {/* EDUCATION */}
        <section id="education" className="scroll-mt-16">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Education />
          </MotionDiv>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-16">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Contact />
          </MotionDiv>
        </section>

        <Footer />
      </main>
    </>
  );
}
