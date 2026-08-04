import { motion } from "framer-motion";

const principles = [
  {
    no: "01",
    title: "Pressure goes somewhere",
    body: "When something weighs on me, I don't sit in it — I put it into work. Most of what I've built started as a bad week I decided to convert into something that would outlast it.",
  },
  {
    no: "02",
    title: "Everything has a reason under it",
    body: "The world isn't doing random things to you. There's usually logic beneath the parts that don't go your way. Finding it doesn't remove the difficulty, but it gives you somewhere to stand.",
  },
  {
    no: "03",
    title: "A word given is a word kept",
    body: "When someone trusts you, that trust is a promise — even when nobody said it out loud. I don't break those. It's the single rule I hold hardest.",
  },
  {
    no: "04",
    title: "Clean surface, clear head",
    body: "I don't like mess — real or digital. Clutter is just work arriving late. If something stops being useful, I let it go, and the thinking gets easier.",
  },
  {
    no: "05",
    title: "Take the advice, then make your own call",
    body: "Experienced people can only guide you from their own road — their timing, their circumstances. Collect the opinions, then decide what actually suits you. If you're going to lose, lose on your own call.",
  },
  {
    no: "06",
    title: "The hard part is the price of the good part",
    body: "The most difficult stretch I've been through is also the one I look back on most warmly. Struggle is what makes the memory worth keeping. If nothing's competing, the goal was never worth much.",
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
            A résumé shows what I&rsquo;ve done. These are the things underneath it &mdash; the rules I actually operate by, learned the slow way.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {principles.map((item, index) => (
            <PrincipleCard key={item.no} item={item} index={index} />
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl border-l-2 border-yellow-400/60 pl-5 sm:mt-16 sm:pl-6"
        >
          <p className="text-base font-medium leading-relaxed text-zinc-200 sm:text-xl sm:leading-relaxed">
            &ldquo;The road doesn&rsquo;t end &mdash; but neither do you.&rdquo;
          </p>
          <footer className="mt-2 text-xs tracking-[0.22em] text-zinc-500 sm:text-sm">
            — Mahin
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

export default Ethos;
