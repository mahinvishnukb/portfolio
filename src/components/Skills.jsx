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

function SkillCard({ skill }) {
  return (
    <div className="flex h-full items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition duration-300 hover:border-yellow-400/40 sm:gap-4 sm:p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-400/25 bg-yellow-400/10 text-sm font-black text-yellow-300 sm:h-12 sm:w-12 sm:text-base">
        {skill.logo}
      </div>

      <div className="min-w-0">
        <h3 className="text-sm font-black leading-tight text-white sm:text-base">
          {skill.name}
        </h3>

        <p className="mt-1 text-xs leading-5 text-zinc-400 sm:text-sm sm:leading-6">
          {skill.meaning}
        </p>
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-12 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-10">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
            Skills
          </p>

          <h2 className="text-2xl font-black leading-tight sm:text-4xl md:text-5xl">
            Skills Behind
            <span className="text-yellow-400"> My Work</span>
          </h2>

          <p className="mt-3 text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7">
            A focused mix of technical, analytical, and creative skills that
            support the way I build projects and present ideas clearly.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;