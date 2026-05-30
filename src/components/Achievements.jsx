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
      className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
            Achievements
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Leadership & Experience
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            A few experiences and recognitions that reflect my involvement in leadership, volunteering, and student governance.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 shadow-[0_0_80px_rgba(0,0,0,0.45)] md:h-[560px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={achievementPhotos[activeIndex]}
                src={achievementPhotos[activeIndex]}
                alt="Achievement"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </motion.div>

          <div className="grid gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:border-yellow-400/50"
              >
                <div className="mb-5 h-1 w-14 rounded-full bg-yellow-400" />

                <h3 className="text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-zinc-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;