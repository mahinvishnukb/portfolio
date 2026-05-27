import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src="/images/hero/hero-main1.png"
        alt="Mahin Vishnu portfolio hero"
        onError={(e) => {
          const fallbackImages = [
            "/images/hero/hero-main.png",
            "/images/hero/hero-main1.jpg",
            "/images/hero/hero-main1.jpeg",
          ];

          const currentIndex = Number(e.currentTarget.dataset.fallbackIndex || 0);

          if (currentIndex < fallbackImages.length) {
            e.currentTarget.dataset.fallbackIndex = currentIndex + 1;
            e.currentTarget.src = fallbackImages[currentIndex];
          }
        }}
        className="absolute inset-0 h-full w-full translate-x-[26vw] scale-[1.18] object-cover object-center opacity-55 brightness-[0.82] contrast-[1.04] saturate-[0.95] sm:translate-x-[18vw] sm:scale-[1.08] sm:opacity-75 md:translate-x-[10vw] md:scale-[1.01] md:opacity-100 md:brightness-[1.05] md:contrast-[1.03] md:saturate-[1.03]"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent md:via-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(250,204,21,0.10),transparent_36%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-24 sm:px-6 md:px-10 md:py-28"
      >
        <div className="w-full max-w-[92vw] pt-16 sm:max-w-3xl sm:pt-20 md:pt-0">
          <p className="mb-4 max-w-[90vw] text-[11px] italic tracking-[0.18em] text-zinc-300 sm:mb-5 sm:text-sm md:text-lg">
            Built with discipline. Driven by growth.
          </p>

          <h1 className="text-[3.7rem] font-black uppercase leading-[0.84] tracking-tight min-[390px]:text-[4.15rem] sm:text-[5.2rem] md:text-8xl lg:text-9xl">
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

          <p className="max-w-[92vw] text-base leading-7 text-zinc-200 sm:max-w-xl sm:text-lg sm:leading-8 md:text-xl">
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

          <div className="mt-12 grid max-w-[92vw] grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:mt-16 sm:max-w-2xl sm:gap-6 sm:pt-8">
            <div className="flex flex-col items-center border-r border-white/10 pr-4 text-center sm:pr-6">
              <div className="mb-3 text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.7}
                  stroke="currentColor"
                  className="h-7 w-7 sm:h-9 sm:w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl">
                5+
              </h3>

              <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-300 sm:text-xs sm:tracking-[0.18em]">
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
                  className="h-7 w-7 sm:h-9 sm:w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5v13.5H3.75V5.25Zm4.5 3h7.5m-7.5 3h7.5m-7.5 3h4.5"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl">
                10+
              </h3>

              <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-300 sm:text-xs sm:tracking-[0.18em]">
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
                  className="h-7 w-7 sm:h-9 sm:w-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12.75 2.25 2.25L15 9.75m6 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl">
                3+
              </h3>

              <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.12em] text-zinc-300 sm:text-xs sm:tracking-[0.18em]">
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