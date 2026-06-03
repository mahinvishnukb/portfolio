import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const achievements = [
  {
    title: "XP of the Year",
    description:
      "Received the XP of the Year award at St. Francis Xavier University for leadership, responsibility, teamwork, and contribution while working with X-Patrol and supporting campus operations.",
  },
  {
    title: "Volunteer of the Year",
    description:
      "Recognized for active volunteering, student engagement, event support, and contribution to campus activities through leadership and collaborative involvement.",
  },
  {
    title: "Student Leadership",
    description:
      "Served as Constituency Director for International Students and Co-Chair of the Budget & Finance Committee, participating in governance, planning discussions, and student representation initiatives.",
  },
];

const achievementPhotos = [
  "/images/IMG_6378.jpg",
  "/images/IMG_7610.JPG",
  "/images/IMG_7780.JPG",
  "/images/IMG_8195 2.jpg",
  "/images/PHOTO-2025-03-27-19-50-51.jpg",
];

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievementPhotos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="achievements"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 py-10 text-white md:px-12 md:py-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-6 max-w-3xl md:mb-7">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
            Achievements
          </p>

          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            Leadership & Experience
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            A few experiences and recognitions from my campus work, student leadership, volunteering, and governance involvement.
          </p>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 shadow-[0_0_80px_rgba(0,0,0,0.45)] sm:h-[360px] md:h-[420px] lg:h-[455px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={achievementPhotos[activeIndex]}
                src={achievementPhotos[activeIndex]}
                alt="Achievement"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.03 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>

          <div className="grid gap-4 lg:-mt-4">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group h-[135px] [perspective:1000px] md:h-[145px]"
              >
                <div className="relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 [backface-visibility:hidden] transition duration-300 group-hover:border-yellow-400/50 md:p-6">
                    <div className="mb-4 h-1 w-14 rounded-full bg-yellow-400" />

                    <h3 className="text-xl font-bold text-yellow-400 md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Hover to read more
                    </p>
                  </div>

                  <div className="absolute inset-0 rounded-3xl border border-yellow-400/50 bg-zinc-950 p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-6">
                    <p className="text-sm leading-7 text-zinc-300 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;