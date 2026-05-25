const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-zinc-950 px-6 py-24 text-white md:px-12 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
          About Me
        </p>

        <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Computer Science,
          <span className="text-yellow-400"> Analytics & Creativity</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-base leading-8 text-zinc-300 sm:text-lg">
              I am a Computer Science graduate student at St. Francis Xavier
              University with interests across analytics, technology, photography,
              and travel. I enjoy learning by building, exploring new ideas, and
              creating work that feels useful, clean, and meaningful.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
              My technical interests are focused on data analytics, dashboards,
              SQL, Python, machine learning, and practical business solutions.
              At the same time, photography helps me see details, composition,
              people, places, and stories from a more creative perspective.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5">
            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
              <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                Education
              </h3>

              <p className="mt-3 text-zinc-300">
                Master of Applied Computer Science
              </p>

              <p className="text-sm text-zinc-500">
                St. Francis Xavier University
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
              <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                Technical Side
              </h3>

              <p className="mt-3 text-zinc-300">
                Python • SQL • Power BI • React • Machine Learning • Data Analytics
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
              <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                Creative Side
              </h3>

              <p className="mt-3 text-zinc-300">
                Photography • Travel • Wildlife • Visual Storytelling • Design • Exploration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;