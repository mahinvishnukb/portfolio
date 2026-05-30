import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-1.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-2.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-3.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-4.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-5.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-6.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-7.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-8.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-9.jpg",
  },
  {
    title: "Wildlife Frame",
    type: "Wildlife",
    image: "/images/photography/Wildlife/wildlife-10.jpg",
  },
  {
    title: "Portrait Moment",
    type: "Portrait",
    image: "/images/photography/portraits/portrait-1.jpg",
  },
  {
    title: "Portrait Moment",
    type: "Portrait",
    image: "/images/photography/portraits/portrait-2.jpg",
  },
  {
    title: "Portrait Moment",
    type: "Portrait",
    image: "/images/photography/portraits/portrait-3.jpg",
  },
  {
    title: "Portrait Moment",
    type: "Portrait",
    image: "/images/photography/portraits/portrait-4.jpg",
  },
];

const shuffledPhotos = (items) => {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
};

const Photography = () => {
  const mixedPhotos = useMemo(() => shuffledPhotos(photos), []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mixedPhotos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [mixedPhotos.length]);

  return (
    <section
      id="photography"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 py-16 text-white md:px-12 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.12),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 w-full max-w-2xl lg:order-2"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-teal-300 sm:text-sm sm:tracking-[0.35em]">
            Photography
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Stories I Notice
            <span className="text-amber-300"> Through My Lens</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:leading-8">
            Photography is where I slow down and pay attention. Whether it is a
            quiet wildlife frame, a natural portrait, or a moment from travel, I
            enjoy capturing the small details that make a scene feel alive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -45 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 relative h-[420px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-zinc-950 shadow-[0_0_80px_rgba(0,0,0,0.5)] sm:h-[520px] sm:rounded-[2rem] md:h-[590px] lg:order-1 lg:h-[620px]"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={mixedPhotos[activeIndex].image}
              src={mixedPhotos[activeIndex].image}
              alt={mixedPhotos[activeIndex].title}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-700"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Photography;