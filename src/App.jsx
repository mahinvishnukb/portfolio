import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Photography from "./components/Photography";
import Experience from "./components/Experience";
import Ethos from "./components/Ethos";

const projects = [
  {
    title: "Enterprise GenAI Operations Assistant",
    type: "Featured AI / GenAI Project",
    description:
      "A production-grade multi-agent AI platform with RAG (vector search over documents), NL2SQL (natural language to database queries), analytics, and conversation agents — all auto-routed through a single chat interface. Built with FastAPI, React, ChromaDB, SQLAlchemy, and supports OpenAI/Anthropic/mock providers.",
    tech: ["Python", "FastAPI", "React", "TypeScript", "RAG", "NL2SQL", "Multi-Agent", "ChromaDB", "SQLAlchemy"],
    link: "https://enterprise-genai-ops-assistant-git-master-mahinvishnu.vercel.app",
    github: "https://github.com/mahinvishnukb/enterprise-genai-ops-assistant",
  },
  {
    title: "CloudScale FleetOps",
    type: "Featured Cloud / Full-Stack Project",
    description:
      "A maritime fleet operations platform built on .NET 8 Clean Architecture with an Angular 22 front end — real-time IoT vessel telemetry over SignalR and event-driven cargo manifest processing on AWS Lambda. Provisioned with Terraform, containerised for Kubernetes, and covered by 186 automated tests.",
    tech: [".NET 8", "Angular 22", "PostgreSQL", "AWS Lambda", "Kubernetes", "Terraform", "SignalR", "Docker"],
    link: "https://cloudscale-fleetops.vercel.app",
    github: "https://github.com/mahinvishnukb/cloudscale-fleetops",
  },
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
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-black/95 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.07)] sm:p-6"
    >
      <p className="text-[10px] uppercase tracking-[0.22em] text-yellow-400 sm:text-xs sm:tracking-[0.28em]">
        {project.type}
      </p>

      <h3 className="mt-2 text-base font-black leading-tight text-white sm:text-lg md:text-xl">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-6">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-yellow-300"
          >
            {item}
          </span>
        ))}
      </div>

      {(project.link || project.github) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-yellow-400/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-yellow-400 transition-colors hover:bg-yellow-400 hover:text-black"
            >
              Live Demo →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:bg-zinc-800"
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-950 px-6 py-16 text-white md:px-12 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.10),transparent_35%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-yellow-400 sm:text-sm sm:tracking-[0.3em]">
            Projects
          </p>

          <h2 className="text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
            Projects I Have <span className="text-yellow-400">Worked On</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
            Projects spanning GenAI, multi-agent systems, data analytics, machine learning, and algorithm design — built for real-world problems.
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
      <ProjectsSection />
      <Experience />
      <Ethos />
      <Skills />
      <Photography />
      <Contact />
    </div>
  );
}

export default App;