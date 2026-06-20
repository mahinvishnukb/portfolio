const skills = [
  {
    name: "Python",
    logo: "PY",
    meaning: "Automation, analytics, and machine learning workflows.",
  },
  {
    name: "SQL",
    logo: "SQL",
    meaning: "Queries, joins, validation, and reporting.",
  },
  {
    name: "PostgreSQL",
    logo: "PG",
    meaning: "Relational database design and structured data storage.",
  },
  {
    name: "Power BI",
    logo: "BI",
    meaning: "Dashboards, KPIs, and visual reporting.",
  },
  {
    name: "React",
    logo: "⚛",
    meaning: "Interactive and responsive web interfaces.",
  },
  {
    name: "Tailwind CSS",
    logo: "TW",
    meaning: "Clean layouts, spacing, and modern styling.",
  },
  {
    name: "Pandas",
    logo: "PD",
    meaning: "Data cleaning, transformation, and analysis.",
  },
  {
    name: "Excel",
    logo: "XL",
    meaning: "Quick analysis, reports, and summaries.",
  },
  {
    name: "GitHub",
    logo: "GH",
    meaning: "Version control and project documentation.",
  },
  {
    name: "Analytics",
    logo: "📈",
    meaning: "Turning raw data into clear insights.",
  },
  {
    name: "Databases",
    logo: "DB",
    meaning: "Relationships, validation, and reporting flow.",
  },
  {
    name: "Photography",
    logo: "📷",
    meaning: "Composition, storytelling, and presentation.",
  },
];

import { useState } from "react";

function SkillCard({ skill }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-44 cursor-pointer [perspective:1000px] sm:h-52"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""} hover:[transform:rotateY(180deg)]`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950 p-5 text-center shadow-2xl [backface-visibility:hidden]">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-400/25 bg-yellow-400/10 text-lg font-black text-yellow-300 sm:mb-4 sm:h-16 sm:w-16 sm:text-2xl">
            {skill.logo}
          </div>

          <h3 className="text-base font-black text-white sm:text-xl">
            {skill.name}
          </h3>

          <p className="mt-1.5 text-[9px] uppercase tracking-[0.18em] text-zinc-600">
            Tap to learn
          </p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-yellow-400/50 bg-zinc-950 p-5 text-center shadow-[0_0_45px_rgba(250,204,21,0.16)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-sm font-semibold leading-6 text-zinc-200 sm:text-base sm:leading-7">
            {skill.meaning}
          </p>
        </div>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Skills
          </p>

          <h2 className="text-2xl font-black sm:text-4xl md:text-6xl">
            Skills Behind
            <span className="text-yellow-400"> My Work</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-lg sm:leading-8">
            A focused mix of technical, analytical, and creative skills that
            support the way I build projects and present ideas clearly.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;