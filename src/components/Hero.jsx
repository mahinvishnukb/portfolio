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
        className="absolute inset-0 h-full w-full translate-x-[26vw] scale-[1.18] object-cover object-center opacity-65 brightness-[0.92] contrast-[1.08] saturate-[1.02] sm:translate-x-[18vw] sm:scale-[1.08] sm:opacity-85 md:translate-x-[10vw] md:scale-[1.01] md:opacity-100 md:brightness-[1.18] md:contrast-[1.08] md:saturate-[1.06]"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent md:via-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(250,204,21,0.10),transparent_36%)]" />

      {/* Soft Background Depth Elements */}
      <div className="absolute left-[12%] top-[22%] h-72 w-72 rounded-full bg-yellow-400/5 blur-3xl" />
      <div className="absolute bottom-[12%] left-[35%] h-56 w-56 rounded-full bg-white/[0.03] blur-3xl" />
      <div className="absolute right-[18%] top-[30%] h-80 w-80 rounded-full bg-yellow-500/[0.04] blur-[140px]" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:120px_120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-24 sm:px-6 md:px-10 md:py-28"
      >
        <div className="w-full max-w-[92vw] pt-16 sm:max-w-3xl sm:pt-20 md:pt-0">

          <div className="space-y-1">
            <div className="space-y-1">
              <p className="max-w-3xl text-[1.05rem] font-medium leading-[1.8] text-yellow-400 sm:text-[1.7rem] md:text-[2.1rem]">
                தெய்வத்தான் ஆகா தெனினும் முயற்சிதன் மெய்வருத்தக் கூலி தரும்.
              </p>

              <div className="flex justify-end max-w-3xl">
                <p className="text-xs tracking-[0.22em] text-zinc-500 sm:text-sm">
                  திருவள்ளுவர் · குறள் 619
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="max-w-3xl text-[1rem] leading-[1.9] text-zinc-200 sm:text-[1.2rem] md:text-[1.35rem]">
                Even if god has given up, perseverance will pay the wages for one's efforts.
              </p>

              <div className="flex justify-end max-w-3xl">
                <p className="text-xs tracking-[0.22em] text-zinc-500 sm:text-sm">
                  — Thiruvalluvar · Kural 619
                </p>
              </div>
            </div>
          </div>

          <div className="my-8 h-1 w-20 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] sm:my-10 sm:w-24" />

          <p className="max-w-[92vw] text-base leading-7 text-zinc-200 sm:max-w-xl sm:text-lg sm:leading-8 md:text-xl">
            Building practical projects while continuously learning and improving through experience.
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

          <div className="mt-12 grid max-w-[92vw] !grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:mt-16 sm:max-w-2xl sm:gap-6 sm:pt-8">
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

              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.1em] text-zinc-300 sm:text-xs sm:tracking-[0.18em]">
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

              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.1em] text-zinc-300 sm:text-xs sm:tracking-[0.18em]">
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

              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.1em] text-zinc-300 sm:text-xs sm:tracking-[0.18em]">
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