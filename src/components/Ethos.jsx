import { motion } from "framer-motion";

const principles = [
  {
    no: "01",
    title: "Ownership is a commitment",
    body: "When someone hands me a piece of work, I treat it as a promise — whether or not it was framed that way. Deadlines, handovers, follow-through: I don't need to be chased for them.",
  },
  {
    no: "02",
    title: "Find the reason underneath",
    body: "Most problems have logic under them. Before I patch a symptom I want to understand why it happened — it's the difference between a fix that holds and one that comes back next week.",
  },
  {
    no: "03",
    title: "Delivery is the only outcome",
    body: "I learned this on construction sites before I learned it in software. Conditions change, scope shifts, something always goes wrong — a project still has to ship. Finishing is the job.",
  },
];

function PrincipleCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 transition duration-300 hover:border-yellow-400/40 hover:shadow-[0_0_35px_rgba(250,204,21,0.06)] sm:p-6"
    >
      <span className="text-[11px] font-black tracking-[0.25em] text-yellow-400/70">
        {item.no}
      </span>

      <h3 className="mt-2 text-base font-bold leading-snug text-white sm:text-lg">
        {item.title}
      </h3>

      <p className="mt-2.5 text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-6">
        {item.body}
      </p>
    </motion.div>
  );
}

function Ethos() {
  return (
    <section
      id="ethos"
      className="relative overflow-hidden bg-zinc-950 px-6 py-16 text-white md:px-12 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.07),transparent_40%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mb-10 max-w-3xl md:mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
            What I Stand On
          </p>

          <h2 className="text-2xl font-black leading-tight sm:text-4xl md:text-5xl">
            How I Work
          </h2>

          <p className="mt-3 max-w-2xl text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7">
            A résumé lists what I&rsquo;ve delivered. These are the working principles behind it &mdash; how I approach a problem, a team, and a deadline.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {principles.map((item, index) => (
            <PrincipleCard key={item.no} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Ethos;
