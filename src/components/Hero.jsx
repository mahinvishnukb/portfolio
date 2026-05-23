import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src="/images/hero/hero-main.png"
        alt="Mahin Vishnu portfolio hero"
        className="absolute inset-0 h-full w-full object-cover object-right opacity-100 brightness-[1.45] contrast-[1.15] saturate-[1.15] scale-[1.02]"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(250,204,21,0.10),transparent_36%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 md:px-10"
      >
        <div className="max-w-3xl">
          <p className="mb-6 text-sm italic tracking-wide text-zinc-300 md:text-lg">
            Built with discipline. Driven by growth.
          </p>

          <h1 className="text-7xl font-black uppercase leading-[0.85] tracking-tight md:text-8xl lg:text-9xl">
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

          <div className="my-10 h-1 w-24 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)]" />

          <p className="max-w-xl text-lg leading-8 text-zinc-200 md:text-xl">
            I build practical data and technology solutions with a focus on
            <span className="font-bold text-yellow-400"> clarity</span>,
            <span className="font-bold text-yellow-400"> consistency</span>, and
            <span className="font-bold text-yellow-400"> real-world impact</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="rounded-full bg-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_30px_rgba(250,204,21,0.25)] transition duration-300 hover:scale-105 hover:bg-yellow-300"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-yellow-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-black"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <h3 className="text-4xl font-black text-yellow-400">5+</h3>
              <p className="mt-1 text-xs font-semibold uppercase text-white">
                Projects
              </p>
            </div>

            <div className="border-l border-white/15 pl-6">
              <h3 className="text-4xl font-black text-yellow-400">3+</h3>
              <p className="mt-1 text-xs font-semibold uppercase text-white">
                Leadership Roles
              </p>
            </div>

            <div className="border-l border-white/15 pl-6">
              <h3 className="text-4xl font-black text-yellow-400">100%</h3>
              <p className="mt-1 text-xs font-semibold uppercase text-white">
                Commitment
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;