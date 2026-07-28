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
  "/images/IMG_8195-2.jpg",
  "/images/PHOTO-2025-03-27-19-50-51.jpg",
];

function AchievementCard({ item, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className={`flip-card h-[130px] cursor-pointer sm:h-[140px] md:h-[150px] ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${item.title} — reveal details`}
    >
      <div className="flip-inner rounded-3xl">
        <div className="flip-face rounded-3xl border border-zinc-800 bg-zinc-950 p-5 md:p-6">
          <div className="mb-3 h-1 w-14 rounded-full bg-yellow-400" />

          <h3 className="text-base font-bold text-yellow-400 sm:text-xl md:text-2xl">
            {item.title}
          </h3>

          <p className="mt-2 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <span aria-hidden="true">↻</span>
            <span className="flip-hint-hover">Hover to read more</span>
            <span className="flip-hint-tap">Tap to read more</span>
          </p>
        </div>

        <div className="flip-face flip-face-back rounded-3xl border border-yellow-400/50 bg-zinc-950 p-5 md:p-6">
          <p className="text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % achievementPhotos.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-black px-6 py-14 text-white md:px-12 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="mb-8 max-w-3xl md:mb-7">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
            Achievements
          </p>

          <h2 className="text-2xl font-black leading-tight sm:text-4xl md:text-5xl">
            Leadership & Experience
          </h2>

          <p className="mt-3 max-w-2xl text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7">
            A few experiences and recognitions from my campus work, student leadership, volunteering, and governance involvement.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[260px] overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 shadow-[0_0_80px_rgba(0,0,0,0.45)] sm:h-[340px] md:h-[420px] lg:h-[455px]"
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={achievementPhotos[activeIndex]}
                src={achievementPhotos[activeIndex]}
                alt={`Achievement ${activeIndex + 1}`}
                onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1.06 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 2.3, ease: "easeInOut" },
                  scale: { duration: 7, ease: "linear" },
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
          </motion.div>

          <div className="grid gap-3 lg:-mt-4">
            {achievements.map((item, index) => (
              <AchievementCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;