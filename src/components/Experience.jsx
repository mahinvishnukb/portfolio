import { motion } from "framer-motion";

const experience = [
  {
    company: "St. Francis Xavier University Students' Union",
    href: "https://www.linkedin.com/company/91594968/",
    meta: "Antigonish, Nova Scotia · On-site · Part-time",
    span: "9 mos",
    roles: [
      {
        title: "Constituency Director — International Students",
        period: "Sep 2025 – May 2026 · 9 mos",
        award: "Volunteer of the Year",
        points: [
          "Championed the voice of international students within the Students' Union, advocating for their academic and social concerns at the decision-making table.",
          "Partnered with university administration and student groups to strengthen inclusivity, engagement, and support services across campus.",
        ],
        skills: ["Leadership", "Student Advocacy"],
      },
      {
        title: "Co-Chair — Budget & Finance Committee",
        period: "Sep 2025 – May 2026 · 9 mos",
        points: [
          "Guided budgeting, reporting, and operational discussions alongside committee members and university stakeholders.",
          "Reviewed financial updates, governance documents, and committee reports to support informed, forward-looking decisions.",
          "Weighed in on funding initiatives, policy updates, and campus advocacy that shaped student operations.",
        ],
        skills: ["Leadership", "Budgeting", "Governance", "+3"],
      },
      {
        title: "Photo Team Member",
        period: "Sep 2025 – May 2026 · 9 mos",
        award: "Media X Award",
        points: [
          "Captured and edited photography for campus events and university campaigns.",
          "Collaborated with the marketing team to craft engaging content for social media and promotions.",
        ],
        skills: ["Photography", "Adobe Lightroom"],
      },
    ],
  },
  {
    company: "St. Francis Xavier University",
    href: "https://www.linkedin.com/school/45494/",
    meta: "Antigonish, Nova Scotia · On-site · Part-time",
    span: "1 yr 8 mos",
    roles: [
      {
        title: "Lead — X-Patrol",
        period: "Sep 2025 – May 2026 · 9 mos",
        award: "XP of the Year",
        points: [
          "Built a network intrusion-detection system on top of the student ID door-access system.",
          "Trained and mentored new team members, and acted as liaison between leadership and the team.",
          "Coordinated coverage, incident reporting, and escalation during events and daily operations.",
        ],
        skills: ["Network Security", "Intrusion Detection", "Access Control", "Team Leadership"],
      },
      {
        title: "General Member — X-Patrol",
        period: "Oct 2024 – May 2026 · 1 yr 8 mos",
        points: [
          "Monitored campus activity and access points; responded to and documented incidents.",
          "Assisted students and staff calmly in high-pressure situations.",
        ],
        skills: ["Incident Response", "Documentation", "Communication"],
      },
    ],
  },
  {
    company: "GQBAY Software Pvt Ltd",
    href: "https://www.linkedin.com/company/104954769/",
    meta: "Hyderabad, Telangana, India · Remote · Full-time",
    span: "2 yrs",
    roles: [
      {
        title: "Project Engineer",
        period: "Apr 2025 – Apr 2026 · 1 yr 1 mo",
        points: [
          "Set up and maintained Linux and Windows servers and virtual machines; installed, configured, and patched operating systems.",
          "Wrote shell scripts and automation for user access, scheduled permission changes, and routine tasks — cutting turnaround from hours to minutes.",
          "Applied access controls and role-based permissions, and coordinated on system and network security.",
          "Developed Python and SQL software and web functionality, and built Power BI reporting pipelines.",
          "Supported and documented systems for non-technical users.",
        ],
        skills: ["Linux", "Shell", "Python", "SQL", "VMs", "Power BI", "Git"],
      },
      {
        title: "Junior Project Engineer",
        period: "May 2024 – Apr 2025 · 1 yr",
        points: [
          "Automated data-handling and system tasks with Python and shell scripts.",
          "Supported applications on Linux servers: configuration, permissions, logs, and troubleshooting.",
          "Wrote and optimized SQL queries, and built Power BI reports.",
          "Maintained technical documentation and picked up new platforms as projects required.",
        ],
        skills: ["Python", "SQL", "Linux", "Shell", "Power BI"],
      },
    ],
  },
];

function RoleCard({ role }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 backdrop-blur-sm transition duration-300 hover:border-yellow-400/40 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h4 className="text-sm font-bold text-white sm:text-base">{role.title}</h4>
        {role.award && (
          <span className="shrink-0 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-yellow-400">
            ★ {role.award}
          </span>
        )}
      </div>

      <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-zinc-500">
        {role.period}
      </p>

      <ul className="mt-3 space-y-2">
        {role.points.map((point, i) => (
          <li key={i} className="flex gap-2 text-xs leading-5 text-zinc-300 sm:text-sm sm:leading-6">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-yellow-400/70" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {role.skills && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-700/70 bg-zinc-900 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-zinc-400"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ExperienceGroup({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: Math.min(index, 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 sm:pl-10"
    >
      {/* Timeline line + node */}
      <span className="absolute left-[6px] top-2 h-full w-px bg-gradient-to-b from-yellow-400/60 via-zinc-800 to-transparent sm:left-[7px]" />
      <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-yellow-400 bg-black shadow-[0_0_12px_rgba(250,204,21,0.5)]" />

      <div className="mb-4">
        <a
          href={group.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-black leading-tight text-white transition hover:text-yellow-400 sm:text-xl"
        >
          {group.company}
        </a>
        <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-zinc-500 sm:text-xs">
          {group.meta} · {group.span}
        </p>
      </div>

      <div className="space-y-3">
        {group.roles.map((role) => (
          <RoleCard key={role.title} role={role} />
        ))}
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-black px-6 py-16 text-white md:px-12 md:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="mb-10 max-w-3xl md:mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-400">
            Experience
          </p>

          <h2 className="text-2xl font-black leading-tight sm:text-4xl md:text-5xl">
            The Road So Far
          </h2>

          <p className="mt-3 max-w-2xl text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7">
            A journey across engineering, analytics, campus leadership, and student governance — building, leading, and problem-solving in fast-paced, real-world environments.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {experience.map((group, index) => (
            <ExperienceGroup key={group.company} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
