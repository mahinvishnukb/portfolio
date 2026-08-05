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
        className="absolute inset-0 h-full w-full translate-x-0 scale-[1.05] object-cover object-[65%_top] opacity-75 brightness-[0.85] contrast-[1.08] saturate-[1.02] sm:translate-x-[18vw] sm:scale-[1.08] sm:opacity-85 md:translate-x-[10vw] md:scale-[1.01] md:opacity-100 md:brightness-[1.18] md:contrast-[1.08] md:saturate-[1.06]"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/20 md:from-black md:via-black/30 md:to-transparent" />
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
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-24 sm:px-6 md:px-10 md:py-28"
      >
        <div className="w-full max-w-[92vw] pt-16 sm:max-w-3xl sm:pt-20 md:pt-0">

          <div className="space-y-2">
            <p className="max-w-3xl text-[1.15rem] font-medium leading-[1.6] text-yellow-400 sm:text-[1.6rem] sm:leading-[1.5] md:text-[1.95rem]">
              &ldquo;Don&rsquo;t read success stories, you will only get a message.{" "}
              <span className="text-white">
                Read failure stories, you will get some ideas to get success.&rdquo;
              </span>
            </p>

            <div className="flex max-w-3xl justify-end">
              <p className="text-xs tracking-[0.22em] text-zinc-500 sm:text-sm">
                — Dr. A.P.J. Abdul Kalam
              </p>
            </div>
          </div>

          <div className="my-8 h-1 w-20 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] sm:my-10 sm:w-24" />

          <p className="max-w-[92vw] text-base leading-7 text-zinc-200 sm:max-w-xl sm:text-lg sm:leading-8 md:text-xl">
            Applied Computer Science graduate building practical software and data systems &mdash; from multi-agent AI platforms to analytics pipelines that turn raw operational data into decisions.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:gap-4">
            <a
              href="#projects"
              className="flex min-h-[52px] flex-1 items-center justify-center whitespace-nowrap rounded-full bg-yellow-400 px-6 py-3.5 text-center text-xs font-black uppercase tracking-wide text-black shadow-[0_0_30px_rgba(250,204,21,0.25)] transition duration-300 hover:bg-yellow-300 sm:flex-none sm:px-7 sm:text-sm"
            >
              View My Work →
            </a>

            <a
              href="/Mahin-Vishnu-KB-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[52px] flex-1 items-center justify-center whitespace-nowrap rounded-full border border-yellow-400 px-6 py-3.5 text-center text-xs font-black uppercase tracking-wide text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-black sm:flex-none sm:px-7 sm:text-sm"
            >
              Download Resume ↓
            </a>

            <a
              href="#contact"
              className="flex min-h-[52px] flex-1 items-center justify-center whitespace-nowrap rounded-full border border-zinc-700 px-6 py-3.5 text-center text-xs font-black uppercase tracking-wide text-zinc-300 transition duration-300 hover:border-zinc-500 hover:text-white sm:flex-none sm:px-7 sm:text-sm"
            >
              Contact Me
            </a>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
            className="mt-10 w-full border-t border-white/10 pt-5 sm:mt-16 sm:pt-8"
          >
            <div className="flex flex-col items-center border-r border-white/10 px-2 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="mb-2 h-5 w-5 text-yellow-400 sm:h-8 sm:w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
              </svg>
              <span className="text-xl font-black text-yellow-400 sm:text-4xl">7</span>
              <span className="mt-1 flex min-h-[2.1em] items-start justify-center text-center text-[9px] font-medium uppercase leading-tight tracking-wide text-zinc-400 sm:text-xs">Projects Shipped</span>
            </div>

            <div className="flex flex-col items-center border-r border-white/10 px-2 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="mb-2 h-5 w-5 text-yellow-400 sm:h-8 sm:w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5v13.5H3.75V5.25Zm4.5 3h7.5m-7.5 3h7.5m-7.5 3h4.5" />
              </svg>
              <span className="text-xl font-black text-yellow-400 sm:text-4xl">2</span>
              <span className="mt-1 flex min-h-[2.1em] items-start justify-center text-center text-[9px] font-medium uppercase leading-tight tracking-wide text-zinc-400 sm:text-xs">Yrs Engineering</span>
            </div>

            <div className="flex flex-col items-center px-2 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="mb-2 h-5 w-5 text-yellow-400 sm:h-8 sm:w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 2.25 2.25L15 9.75m6 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-xl font-black text-yellow-400 sm:text-4xl">3</span>
              <span className="mt-1 flex min-h-[2.1em] items-start justify-center text-center text-[9px] font-medium uppercase leading-tight tracking-wide text-zinc-400 sm:text-xs">Leadership Roles</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;