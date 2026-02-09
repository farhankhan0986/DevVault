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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden bg-background text-foreground">
        {/* subtle background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(99,102,241,0.12),transparent_40%)]"
        />

        <section className="min-h-screen bg-background text-foreground">
          {/* HOME */}
          <section id="home">
            <Hero />
          </section>

          {/* ABOUT */}
          <section id="about">
            <MotionDiv
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <About />
            </MotionDiv>
          </section>
          
          <section id="experience">
            <MotionDiv
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Experience />
            </MotionDiv>
          </section>

          <section id="education">
            <MotionDiv
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Education />
            </MotionDiv>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <MotionDiv
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Projects />
            </MotionDiv>
          </section>

          {/* SKILLS */}
          <section id="skills">
            <MotionDiv
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Skills />
            </MotionDiv>
          </section>

          {/* CONTACT */}
          <section id="contact">
            <MotionDiv
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Contact />
            </MotionDiv>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
