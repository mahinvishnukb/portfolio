const About = () => {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-6 py-28 text-white md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
          About Me
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          Computer Science,
          <span className="text-yellow-400"> Analytics & Creativity</span>
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-zinc-300">
              I am a Computer Science graduate student at St. Francis Xavier
              University with interests across analytics, technology, photography,
              and travel. I enjoy learning by building, exploring new ideas, and
              creating work that feels useful, clean, and meaningful.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              My technical interests are focused on data analytics, dashboards,
              SQL, Python, machine learning, and practical business solutions.
              At the same time, photography helps me see details, composition,
              people, places, and stories from a more creative perspective.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="rounded-2xl border border-zinc-800 bg-black p-6 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)]">
              <h3 className="text-xl font-bold text-yellow-400">
                Education
              </h3>

              <p className="mt-3 text-zinc-300">
                Master of Applied Computer Science
              </p>

              <p className="text-sm text-zinc-500">
                St. Francis Xavier University
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-6 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)]">
              <h3 className="text-xl font-bold text-yellow-400">
                Technical Side
              </h3>

              <p className="mt-3 text-zinc-300">
                Python • SQL • Power BI • React • Machine Learning • Data Analytics
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-6 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)]">
              <h3 className="text-xl font-bold text-yellow-400">
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