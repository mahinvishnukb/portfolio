const jobs = [
  {
    where: "GQBAY Software",
    what: "Project Engineer, then Junior Project Engineer",
    when: "2024 – 2026",
    note: "Linux and Windows servers, shell automation, Python and SQL, Power BI reporting.",
  },
  {
    where: "St. Francis Xavier University",
    what: "X-Patrol — Lead, then General Member",
    when: "2024 – 2026",
    note: "Built a network intrusion-detection system on the student ID door-access system. XP of the Year.",
  },
  {
    where: "StFX Students' Union",
    what: "Constituency Director, and Co-Chair of Budget & Finance",
    when: "2025 – 2026",
    note: "Representing international students, and the union's money. Volunteer of the Year.",
  },
];

const school = [
  ["Master of Applied Computer Science", "St. Francis Xavier University", "2024 – 2026"],
  ["BE Computer Science", "Kongu Engineering College", "2020 – 2024"],
];

const photos = [
  ...Array.from({ length: 10 }, (_, i) => `/images/photography/Wildlife/wildlife-${i + 1}.jpg`),
  ...Array.from({ length: 2 }, (_, i) => `/images/photography/portraits/portrait-${i + 1}.jpg`),
];

const A = ({ href, children }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="text-amber-400 underline decoration-amber-400/30 underline-offset-[3px] transition-colors hover:decoration-amber-400"
  >
    {children}
  </a>
);

const H = ({ children }) => (
  <h2 className="mb-5 flex items-center gap-3 font-serif text-sm uppercase tracking-[0.18em] text-amber-400/80">
    {children}
    <span className="h-px flex-1 bg-amber-400/15" />
  </h2>
);

export default function App() {
  return (
    <main className="mx-auto max-w-[38rem] px-6 py-16 sm:py-24">
      {/* Who */}
      <header>
        <img
          src="/portrait.jpg"
          alt="Mahin Vishnu K B"
          width="96"
          height="96"
          className="mb-7 h-24 w-24 rounded-full object-cover"
        />

        <h1 className="font-serif text-[2rem] leading-tight text-stone-100 sm:text-[2.4rem]">
          Mahin Vishnu K B
        </h1>

        <p className="mt-1 text-stone-400">
          Systems and software.{" "}
          <span className="text-amber-400/90">Halifax, Nova Scotia.</span>
        </p>
      </header>

      {/* Hello */}
      <section className="mt-10 space-y-5 text-[1.0625rem] leading-[1.75] text-stone-300">
        <p>
          I keep servers running and write scripts so people don&rsquo;t have to do
          dull things by hand. Mostly Linux, Python and SQL, and turning messy
          operational data into something a person can actually read.
        </p>
        <p>
          I did that full time for two years at a software company back home in
          India before I moved here for my master&rsquo;s. I still build things
          on my own time &mdash; most of them end up on{" "}
          <A href="https://github.com/mahinvishnukb">GitHub</A>.
        </p>
        <p>
          I take photographs too. Same camera since I was about fifteen.
        </p>
      </section>

      {/* Jobs */}
      <section className="mt-16">
        <H>Where I&rsquo;ve worked</H>
        <ul className="space-y-6">
          {jobs.map((j) => (
            <li key={j.where}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium text-stone-100">{j.where}</h3>
                <span className="text-sm text-stone-500">{j.when}</span>
              </div>
              <p className="text-[0.95rem] text-stone-400">{j.what}</p>
              <p className="mt-1 text-[0.95rem] leading-[1.7] text-stone-500">
                {j.note}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* School */}
      <section className="mt-16">
        <H>School</H>
        <ul className="space-y-3">
          {school.map(([degree, place, years]) => (
            <li
              key={degree}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <span className="text-stone-300">
                {degree}
                <span className="text-stone-500">, {place}</span>
              </span>
              <span className="text-sm text-stone-500">{years}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Photos */}
      <section className="mt-16">
        <H>Photographs</H>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {photos.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="photo aspect-square w-full rounded-sm object-cover"
            />
          ))}
        </div>
      </section>

      {/* Hello again */}
      <footer className="mt-16 border-t border-stone-800 pt-7">
        <p className="text-[1.0625rem] leading-[1.75] text-stone-300">
          Always happy to talk shop &mdash; servers, scripts, cameras, whatever.
        </p>
        <p className="mt-4 text-[0.95rem] text-stone-400">
          <A href="mailto:mahinvishnukb@gmail.com">mahinvishnukb@gmail.com</A>
          <span className="px-2 text-stone-700">·</span>
          <A href="https://github.com/mahinvishnukb">GitHub</A>
          <span className="px-2 text-stone-700">·</span>
          <A href="https://www.linkedin.com/in/mahin-vishnu-k-b-b53b45222">LinkedIn</A>
        </p>
      </footer>
    </main>
  );
}
