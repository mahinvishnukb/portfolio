const About = () => {
  return (
    <section
      id="about"
      className="overflow-hidden bg-zinc-950 px-6 py-16 text-white md:px-12 md:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-[0.28em] text-yellow-400 sm:text-sm">
          About Me
        </p>

        <h2 className="max-w-4xl text-2xl font-black leading-tight sm:text-4xl md:text-6xl">
          A Builder, A Watcher,
          <span className="text-yellow-400"> A Guy With A Camera</span>
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7 md:text-lg">
              I picked computer science as a teenager in Coimbatore and never stopped picking it. Not because I was the top of the class &mdash; I wasn&rsquo;t &mdash; but because every time I went deeper, it opened up bigger. That pull is still what gets me to the desk.
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-300 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
              Some of what I know didn&rsquo;t come from a classroom. I grew up around my father&rsquo;s construction business, and working alongside him taught me the things a syllabus can&rsquo;t: patience, how to read people, how to keep a promise to a client, and how to finish what you started even when conditions fall apart.
            </p>

            <p className="mt-4 text-sm leading-6 text-zinc-300 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
              Now I&rsquo;m in Canada with a master&rsquo;s in Applied Computer Science, building things that solve real problems &mdash; and, in between, watching the world through a camera I&rsquo;ve had since the tenth grade.
            </p>
          </div>

          <div className="mt-2 grid gap-4 sm:gap-5 md:-mt-12">
            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
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

            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
              <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                Technical Side
              </h3>

              <p className="mt-3 text-zinc-300">
                Python • SQL • React • PostgreSQL • Machine Learning • Data Analytics
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] sm:p-6">
              <h3 className="text-lg font-bold text-yellow-400 sm:text-xl">
                Creative Side
              </h3>

              <p className="mt-3 text-zinc-300">
                Photography • Student Leadership • Team Coordination • Travel • Wildlife
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                Shooting on the same Nikon D5200 since tenth grade. I see the world in frames.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;