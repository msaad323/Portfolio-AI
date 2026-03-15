"use client";

import { motion } from "framer-motion";

const roles = [
  {
    company: "Mobiuso Technologies Pvt. Ltd",
    title: "Software Engineer",
    period: "Oct 2022 – Present",
    location: "Remote / India",
    highlights: [
      "Engineered core modules for a large-scale subscription-based video platform including onboarding and service booking flows.",
      "Built and maintained RESTful APIs with Node.js and Express.js, integrating Google Cloud Storage for secure video at scale.",
      "Contributed to system design decisions across MongoDB/SQL data models, service decomposition, and API versioning."
    ],
    stack: ["React", "Next.js", "Node.js", "TypeScript", "GCS", "MongoDB", "SQL"]
  },
  {
    company: "GlobalLogic Inc",
    title: "Associate Software Engineer",
    period: "Jun 2021 – May 2022",
    location: "Gurugram, India",
    highlights: [
      "Delivered a production-grade finance dashboard with React and Chart.js, closely matching complex Figma specs.",
      "Improved task completion time by ~20% through thoughtful UX and real-time data visualizations.",
      "Collaborated with backend teams to streamline API contracts and improve data flow efficiency."
    ],
    stack: ["React", "Chart.js", "REST APIs"]
  },
  {
    company: "Miniventure Lab Pvt. Ltd",
    title: "Software Engineer Intern",
    period: "May 2022 – Aug 2022",
    location: "Remote",
    highlights: [
      "Built a student dashboard and subscription flow for an EdTech SaaS platform with React, Node.js, and MySQL.",
      "Integrated Google Analytics and custom tracking to improve funnel visibility by 60%."
    ],
    stack: ["React", "Node.js", "MySQL", "Google Analytics"]
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-800/70 bg-slate-950/70 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Experience
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              A track record of shipping production features in fast-moving,
              product-led teams across SaaS, AI, and financial domains.
            </p>
          </div>
          <p className="text-xs text-slate-400">
            4+ years · Full-stack · Subscription platforms · Dashboards
          </p>
        </div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="mt-10 space-y-6"
        >
          {roles.map((role, index) => (
            <motion.li
              key={role.company}
              variants={item}
              className="relative rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 md:p-6 shadow-[0_16px_40px_rgba(15,23,42,0.9)]"
            >
              <div className="absolute left-4 top-5 h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-400 opacity-70 blur-xl" />
              <div className="relative flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-semibold text-slate-50">
                      {role.title}
                    </p>
                    <span className="text-xs text-slate-400">·</span>
                    <p className="text-xs font-medium text-sky-300">
                      {role.company}
                    </p>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {role.period} · {role.location}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-200/90">
                    {role.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-slate-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-1 flex flex-wrap gap-1.5 md:mt-0 md:max-w-[190px] md:justify-end">
                  {role.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-slate-700/90 bg-slate-900/70 px-2.5 py-1 text-[10px] font-medium text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {index !== roles.length - 1 && (
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700/80 to-transparent" />
              )}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

