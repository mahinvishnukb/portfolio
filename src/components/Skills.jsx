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
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex h-screen items-center overflow-hidden bg-black px-6 py-6 text-white md:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-5 max-w-2xl">
          <p className="mb-2 text-xs uppercase tracking-[0.28em] text-yellow-400">
            Skills
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Skills Behind
            <span className="text-yellow-400"> My Work</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
            A focused mix of technical, analytical, and creative skills that
            support the way I build projects and present ideas clearly.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div key={skill.name} className="group h-28 [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950 p-3 text-center shadow-2xl [backface-visibility:hidden]">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg border border-yellow-400/25 bg-yellow-400/10 text-sm font-black text-yellow-300 shadow-[0_0_16px_rgba(250,204,21,0.10)]">
                    {skill.logo}
                  </div>

                  <h3 className="text-sm font-black leading-tight text-white">
                    {skill.name}
                  </h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center rounded-2xl border border-yellow-400/40 bg-zinc-950 p-3 text-center shadow-[0_0_24px_rgba(250,204,21,0.14)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-[10px] font-medium leading-4 text-zinc-200">
                    {skill.meaning}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;