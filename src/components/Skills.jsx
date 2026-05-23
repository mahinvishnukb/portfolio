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

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Skills
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Skills Behind
            <span className="text-yellow-400"> My Work</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A focused mix of technical, analytical, and creative skills that
            support the way I build projects and present ideas clearly.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.name} className="group h-56 [perspective:1000px]">
              <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-center shadow-2xl [backface-visibility:hidden]">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-yellow-400/25 bg-yellow-400/10 text-3xl font-black text-yellow-300 shadow-[0_0_28px_rgba(250,204,21,0.10)]">
                    {skill.logo}
                  </div>

                  <h3 className="text-2xl font-black text-white">
                    {skill.name}
                  </h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center rounded-3xl border border-yellow-400/50 bg-zinc-950 p-8 text-center shadow-[0_0_45px_rgba(250,204,21,0.16)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <p className="text-lg font-semibold leading-8 text-zinc-200">
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