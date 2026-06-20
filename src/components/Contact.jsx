const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-yellow-400">
            Contact
          </p>

          <h2 className="text-2xl font-black leading-tight sm:text-4xl md:text-6xl">
            Let’s Connect
            <span className="text-yellow-400"> and Create</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            I’m open to conversations around data, analytics, web projects,
            photography, and opportunities where I can learn, contribute, and
            build meaningful work.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-8 backdrop-blur-sm md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
              Reach Me
            </p>

            <h3 className="text-3xl font-black text-white">
              I’d be happy to hear from you.
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              Whether it is a role, referral, project idea, collaboration, or a
              simple conversation, feel free to reach out.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="mailto:mahinvishnukb@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Mahin,"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-800 bg-black/70 p-5 transition duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
              >
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                    Email
                  </p>
                  <p className="mt-2 truncate text-base font-semibold text-zinc-100 sm:text-lg">
                    mahinvishnukb@gmail.com
                  </p>
                </div>
                <span className="shrink-0 text-2xl text-yellow-400 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/mahin-vishnu-k-b-b53b45222"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-zinc-800 bg-black/70 p-5 transition duration-300 hover:border-yellow-400/60 hover:bg-yellow-400/10"
              >
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
                    LinkedIn
                  </p>

                  <p className="mt-2 truncate text-base font-semibold text-zinc-100 sm:text-lg">
                    mahin-vishnu-k-b
                  </p>
                  <p className="text-xs text-zinc-500">
                    linkedin.com/in/mahin-vishnu-k-b-b53b45222
                  </p>
                </div>

                <span className="shrink-0 text-2xl text-yellow-400 transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-8 shadow-[0_0_70px_rgba(250,204,21,0.08)] md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-400">
              Open To
            </p>

            <h3 className="text-3xl font-black text-white">
              Opportunities where data, technology, and creativity meet.
            </h3>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              I enjoy building practical solutions, understanding real problems,
              and presenting work in a way that is clear and useful. My interests
              sit across analytics, machine learning, web development, and visual
              storytelling.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Data Analytics",
                "Machine Learning",
                "Web Development",
                "Photography",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-yellow-400/20 bg-black/50 px-5 py-4 text-sm font-bold uppercase tracking-wide text-yellow-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-10 text-zinc-400">
              Open to opportunities, collaborations, and projects across different locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;