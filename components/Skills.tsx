"use client";

import { motion } from "framer-motion";

const skills = {
  productStack: {
    title: "Product Stack",
    description: "Core technologies I use to build scalable, production-ready applications.",
    items: ["React.js", "Next.js", "TypeScript", "Node.js", "Spring Boot", "Tailwind CSS"]
  },
  backend: {
    title: "Backend & Systems",
    items: ["Express.js", "Spring Security", "Spring Data JPA", "MS SQL", "MongoDB", "Prisma", "REST APIs", "Auth0"]
  },
  cloud: {
    title: "Cloud & DevOps",
    items: ["GCP", "AWS", "Firebase", "Git", "GitHub", "CI/CD", "Docker"]
  },
  tooling: {
    title: "Tools & Languages",
    items: ["JavaScript (ES6+)", "Java", "Python", "Redux", "Zustand", "Webpack", "Vite", "Google Analytics"]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-800/60 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_60%),_#020617] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
            Expertise & Tech Stack
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
            A specialized toolkit focused on building high-performance SaaS platforms,
            enterprise dashboards, and reliable full-stack systems.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2"
        >
          {/* Main Product Stack - Featured Bento Card */}
          <motion.div
            variants={itemVariants}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 md:col-span-4 md:row-span-1"
          >
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-sky-400">
                {skills.productStack.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400 max-w-sm">
                {skills.productStack.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skills.productStack.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-100 shadow-[0_0_15px_rgba(56,189,248,0.1)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl transition-all group-hover:bg-sky-500/20" />
          </motion.div>

          {/* Backend Card */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col rounded-3xl border border-slate-800/80 bg-slate-900/30 p-6 md:col-span-2 md:row-span-1"
          >
            <h3 className="text-sm font-semibold text-slate-100">
              {skills.backend.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.backend.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-2 py-1 text-[10px] font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages & Tooling */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col rounded-3xl border border-slate-800/80 bg-slate-900/30 p-6 md:col-span-3 md:row-span-1"
          >
            <h3 className="text-sm font-semibold text-slate-100">
              {skills.tooling.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.tooling.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-2.5 py-1 text-[10px] font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cloud & DevOps */}
          <motion.div
            variants={itemVariants}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/40 to-slate-950 p-6 md:col-span-3 md:row-span-1"
          >
            <div className="relative z-10">
              <h3 className="text-sm font-semibold text-slate-100">
                {skills.cloud.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.cloud.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[10px] font-medium text-emerald-100/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

