import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Photography from "./components/Photography";
import Achievements from "./components/Achievements";

const projects = [
  {
    title: "Maritime Operations & Crew Analytics Platform",
    type: "Featured Analytics Project",
    description:
      "A data analytics project built to organize maritime crew, ship, maintenance, incident, and operations data into a simple reporting system.",
    tech: ["Python", "PostgreSQL", "Pandas", "SQL", "Data Analytics"],
  },
  {
    title: "Proplytics Logistics Intelligence Platform",
    type: "Logistics Analytics Project",
    description:
      "A logistics analytics project built to study shipment tracking, carrier performance, route delays, incidents, and operational KPIs using large structured datasets.",
    tech: ["Python", "Pandas", "SQLite", "Dash", "Plotly"],
  },
  {
    title: "Word-Level Sign Language Recognition",
    type: "Machine Learning Project",
    description:
      "A machine learning project that uses computer vision methods to recognize word-level sign language gestures.",
    tech: ["Python", "YOLOv5", "MediaPipe", "SVM", "Machine Learning"],
  },
  {
    title: "Fake Currency Detection",
    type: "Classification Project",
    description:
      "A classification project that studies currency data patterns to help identify whether a note is genuine or fake.",
    tech: ["Python", "Machine Learning", "Classification", "Data Analysis"],
  },
  {
    title: "Maze Pathfinding Algorithm Visualizer",
    type: "Algorithm Experiment",
    description:
      "An experimental project built with Matplotlib to test and compare five maze pathfinding algorithms, including A* and a Genetic Algorithm, to understand how each approach performs.",
    tech: ["Python", "Matplotlib", "Algorithms", "A*", "Genetic Algorithm"],
  },
];

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.45, margin: "-60px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-[200px] cursor-pointer [perspective:1000px] sm:h-[190px] md:h-[200px]"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""} hover:[transform:rotateY(180deg)]`}
      >
        <div className="absolute inset-0 flex flex-col justify-center rounded-3xl border border-zinc-800 bg-black/95 p-5 backdrop-blur-sm [backface-visibility:hidden] transition duration-500 sm:p-6">
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-red-400 sm:text-xs sm:tracking-[0.3em]">
            {project.type}
          </p>

          <h3 className="text-base font-black leading-tight text-white sm:text-lg md:text-xl">
            {project.title}
          </h3>

          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Tap to read more
          </p>
        </div>

        <div className="absolute inset-0 rounded-3xl border border-red-400/60 bg-black/95 p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-red-400 sm:text-xs sm:tracking-[0.3em]">
            {project.type}
          </p>

          <p className="text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-red-400/20 bg-red-400/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-wide text-red-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 px-6 py-16 text-white md:px-12 md:py-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_35%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-6">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-red-400 sm:text-sm sm:tracking-[0.3em]">
            Projects
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-4xl">
            Projects I Have <span className="text-red-400">Worked On</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
            A few projects where I practiced data analytics, machine learning, algorithms, and problem solving through hands-on work.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <ProjectsSection />
      <Skills />
      <Photography />
      <Contact />
    </div>
  );
}

export default App;