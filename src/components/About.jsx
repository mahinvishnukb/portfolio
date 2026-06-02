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
          <span className="text-yellow-400"> Technology & Learning</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-base leading-8 text-zinc-300 sm:text-lg">
              I am a Master of Applied Computer Science student at St. Francis Xavier University. I enjoy working on practical projects, learning through experience, and building skills in analytics, software, and problem solving.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">
              Outside academics, I have been involved in student leadership, campus activities, photography, and collaborative projects. I enjoy working with people, taking responsibility, and continuously improving through experience.
            </p>
          </div>

          <div className="-mt-10 grid gap-4 sm:-mt-14 sm:gap-5 md:-mt-20">
            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
              <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                Education
              </h3>

              <p className="mt-2 text-zinc-300">
                Master of Applied Computer Science
              </p>

              <p className="text-sm text-zinc-500">
                St. Francis Xavier University
              </p>

              <p className="mt-2 text-zinc-300">
                Bachelor of Engineering in Computer Science
              </p>

              <p className="text-sm text-zinc-500">
                Kongu Engineering College
              </p>

            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
              <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                Technical Side
              </h3>

              <p className="mt-3 text-zinc-300">
                Python • SQL • React • PostgreSQL • Machine Learning • Data Analytics
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
              <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                Creative Side
              </h3>

              <p className="mt-3 text-zinc-300">
                Photography • Student Leadership • Team Coordination • Travel • Wildlife
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;