import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Photography from "./components/Photography";

const projects = [
  {
    title: "Maritime Operations & Crew Analytics Platform",
    type: "Featured Analytics Project",
    description:
      "An end-to-end analytics project focused on maritime crew operations, ship data, maintenance logs, incident reports, and operational KPI tracking.",
    tech: ["Python", "PostgreSQL", "Pandas", "SQL", "Data Analytics"],
  },
  {
    title: "Word-Level Sign Language Recognition",
    type: "Machine Learning Project",
    description:
      "A machine learning project built to support communication accessibility through computer vision and gesture recognition techniques.",
    tech: ["Python", "YOLOv5", "MediaPipe", "SVM", "Machine Learning"],
  },
  {
    title: "Fake Currency Detection",
    type: "Classification Project",
    description:
      "A classification project focused on identifying genuine and fake currency patterns using structured data analysis.",
    tech: ["Python", "Machine Learning", "Classification", "Data Analysis"],
  },
  {
    title: "Photography Portfolio",
    type: "Creative Work",
    description:
      "A visual collection focused on portrait photography, wildlife photography, travel, composition, and creative storytelling.",
    tech: ["Photography", "Visual Storytelling", "Editing", "Composition"],
  },
];

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-950 px-6 py-28 text-white md:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.12),transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-400">
            Projects
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Practical Work with <span className="text-red-400">Real Purpose</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A selection of analytics, machine learning, and creative work that reflects my technical and visual interests.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
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
              className="rounded-3xl border border-zinc-800 bg-black/95 backdrop-blur-sm p-8 will-change-transform transition-shadow duration-500 hover:border-red-400/70 hover:shadow-[0_0_60px_rgba(239,68,68,0.22)]"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-red-400">
                {project.type}
              </p>

              <h3 className="text-2xl font-black text-white">
                {project.title}
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-red-400/20 bg-red-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-red-300"
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
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
      <Skills />
      <Photography />
      <Contact />
    </div>
  );
}

export default App;