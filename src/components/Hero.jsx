import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src="/images/hero/hero-main2.png"
        alt="Mahin Vishnu portfolio hero"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] opacity-100 brightness-[1.2] contrast-[1.08] saturate-[1.1] scale-[1.02] md:object-right md:brightness-[1.45] md:contrast-[1.15] md:saturate-[1.15]"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(250,204,21,0.10),transparent_36%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 md:px-10 md:py-28"
      >
        <div className="w-full max-w-3xl pt-14 sm:pt-20 md:pt-0">
          <p className="mb-5 text-xs italic tracking-[0.2em] text-zinc-300 sm:text-sm md:text-lg">
            Built with discipline. Driven by growth.
          </p>

          <h1 className="text-[4rem] font-black uppercase leading-[0.82] tracking-tight sm:text-[5.2rem] md:text-8xl lg:text-9xl">
            <span className="block text-yellow-400 drop-shadow-[0_0_24px_rgba(250,204,21,0.25)]">
              Ambition
            </span>
            <span className="block text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.18)]">
              Focus
            </span>
            <span className="block text-yellow-400 drop-shadow-[0_0_24px_rgba(250,204,21,0.25)]">
              Impact
            </span>
          </h1>

          <div className="my-8 h-1 w-20 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] sm:my-10 sm:w-24" />

          <p className="max-w-xl text-base leading-7 text-zinc-200 sm:text-lg sm:leading-8 md:text-xl">
            I build practical data and technology solutions with a focus on
            <span className="font-bold text-yellow-400"> clarity</span>,
            <span className="font-bold text-yellow-400"> consistency</span>, and
            <span className="font-bold text-yellow-400"> real-world impact</span>.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
            <a
              href="#projects"
              className="flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-black shadow-[0_0_30px_rgba(250,204,21,0.25)] transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center rounded-full border border-yellow-400 px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-black"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-7 sm:mt-16 sm:gap-6 sm:pt-8">
            <div className="flex flex-col items-center border-r border-white/10 pr-4 text-center sm:pr-6">
              <div className="mb-3 text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="h-9 w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-black text-yellow-400 sm:text-4xl">
                5+
              </h3>

              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300 sm:text-xs">
                Projects
              </p>
            </div>

            <div className="flex flex-col items-center border-r border-white/10 px-4 text-center sm:px-6">
              <div className="mb-3 text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="h-9 w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5v13.5H3.75V5.25Zm4.5 3h7.5m-7.5 3h7.5m-7.5 3h4.5"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-black text-yellow-400 sm:text-4xl">
                10+
              </h3>

              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300 sm:text-xs">
                Technologies
              </p>
            </div>

            <div className="flex flex-col items-center pl-4 text-center sm:pl-6">
              <div className="mb-3 text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="h-9 w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12.75 2.25 2.25L15 9.75m6 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-black text-yellow-400 sm:text-4xl">
                3+
              </h3>

              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300 sm:text-xs">
                Leadership Roles
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;