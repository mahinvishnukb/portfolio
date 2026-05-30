import { motion } from "framer-motion";
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

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-950 px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_35%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-red-400 sm:text-sm sm:tracking-[0.3em]">
            Projects
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Projects I Have <span className="text-red-400">Worked On</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            A few projects where I practiced data analytics, machine learning, algorithms, and problem solving through hands-on work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.75, y: 130, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55, margin: "-80px 0px -80px 0px" }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-3xl border border-zinc-800 bg-black/95 p-5 backdrop-blur-sm will-change-transform transition-shadow duration-500 hover:border-red-400/70 hover:shadow-[0_0_60px_rgba(239,68,68,0.22)] sm:p-8"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-red-400 sm:text-xs sm:tracking-[0.3em]">
                {project.type}
              </p>

              <h3 className="text-xl font-black leading-tight text-white sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-red-300 sm:px-4 sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
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