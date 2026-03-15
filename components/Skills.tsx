"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "Zustand"]
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Express.js", "Spring Boot", "Spring Security", "Spring Data JPA", "MS SQL", "MongoDB", "Prisma", "REST APIs", "Firebase"]
  },
  {
    title: "Cloud & Tooling",
    items: ["GCP", "AWS", "Google Analytics", "Google Maps", "Auth0", "Git", "GitHub", "CI/CD", "Webpack", "Vite"]
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-slate-800/60 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.13),_transparent_60%),_#020617] py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Skills & Tech Stack
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              A pragmatic, product-focused engineer working confidently across
              the stack — from design-ready interfaces to production APIs and
              cloud deployments.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-950/70 to-slate-950/30 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.75)]"
            >
              <h3 className="text-sm font-semibold text-slate-50">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-100/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

