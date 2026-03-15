"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    name: "GIDE.AI",
    subtitle: "AI-driven EdTech platform for student career & university guidance",
    year: "2022",
    url: "https://web.gide.ai/",
    role: "Full-stack feature development",
    description:
      "Contributed to an AI-powered guidance platform built on the MERN stack and MySQL, focusing on dashboards, authentication, and data integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "MySQL", "AI-driven workflows"]
  },
  {
    name: "NWN.ai Room Configurator",
    subtitle: "AI-powered workplace configuration tool",
    year: "2023 – Present",
    url: "https://dev-configurator.nwncarousel.video/",
    role: "Client & admin interfaces",
    description:
      "Built interactive UIs and backend APIs for configuring modern workplaces, ensuring a smooth experience across client-facing and admin views.",
    tech: ["React", "Node.js", "MongoDB", "REST APIs"]
  },
  {
    name: "Portfolio Website",
    subtitle: "Personal portfolio & contact hub",
    year: "2023",
    url: "https://portfolio-wd4y.onrender.com",
    role: "Full-stack owner",
    description:
      "Designed and built a full-stack portfolio with React and Node.js + Nodemailer, handling contact emails and deployment on Render.",
    tech: ["React", "Node.js", "Nodemailer", "Render"]
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800/70 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),_#020617] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Real-world platforms where I shipped features end-to-end – from
              dashboards to configuration tools and portfolio infrastructure.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-9 grid gap-6 md:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={card}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-[0_22px_60px_rgba(8,47,73,0.95)]"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-500/25 via-sky-500/0 to-transparent opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
                    {project.year}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-slate-50">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-400">
                    {project.subtitle}
                  </p>
                </div>
                <span className="rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-[10px] font-medium text-slate-200">
                  {project.role}
                </span>
              </div>

              <p className="relative mt-3 text-xs text-slate-200/90">
                {project.description}
              </p>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-[10px] font-medium text-slate-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-4 flex items-center justify-between text-[11px] text-sky-300">
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-sky-200"
                >
                  <span>Live demo</span>
                  <span>↗</span>
                </Link>
                <span className="text-slate-500">
                  Production | Impact-focused
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

