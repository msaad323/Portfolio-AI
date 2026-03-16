"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const roles = [
  {
    company: "Mobiuso Technologies Pvt. Ltd",
    title: "Software Engineer",
    period: "Oct 2022 – Present",
    location: "Remote",
    isCurrent: true,
    highlights: [
      "Engineered core modules for a large-scale subscription-based video platform including onboarding and service booking flows.",
      "Leveraged Spring Boot to build robust backend services, ensuring high availability and scalability for enterprise-grade applications.",
      "Contributed to system design decisions across MongoDB/MS SQL data models, service decomposition, and API versioning."
    ],
    stack: ["React.js", "Next.js", "Node.js", "Spring Boot", "TypeScript", "Java", "GCP", "MongoDB", "MS SQL"]
  },
  {
    company: "Miniventure Lab Pvt. Ltd",
    title: "Software Engineer Intern",
    period: "May 2022 – Aug 2022",
    location: "Remote",
    highlights: [
      "Built a student dashboard and subscription flow for an EdTech SaaS platform with React, Node.js, and MS SQL.",
      "Integrated Google Analytics and custom tracking to improve funnel visibility by 60%."
    ],
    stack: ["React.js", "Node.js", "MS SQL", "Google Analytics"]
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
    stack: ["React.js", "Chart.js", "REST APIs"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function Experience() {
  const [visibleCount, setVisibleCount] = useState(1);

  const showMore = () => {
    if (visibleCount < roles.length) {
      setVisibleCount(prev => prev + 1);
    }
  };

  return (
    <section
      id="experience"
      className="border-t border-slate-200/70 bg-white dark:border-slate-800/70 dark:bg-slate-950 pt-20 pb-16 md:pt-28 md:pb-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 text-center uppercase tracking-widest">
            Experience Timeline
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm text-slate-600 dark:text-slate-400 text-center leading-relaxed">
            A track record of shipping production features in fast-moving,
            product-led teams across SaaS, AI, and financial domains.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-sky-500 via-emerald-400 to-slate-200 dark:to-slate-800 md:left-1/2 md:-ml-[1px]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-12"
          >
            <AnimatePresence mode="popLayout">
              {roles.slice(0, visibleCount).map((role, index) => (
                <motion.div
                  key={role.company}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  exit="hidden"
                  className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12"
                >
                  {/* Left Side (Desktop: Content or Period) */}
                  <div className={`hidden md:flex flex-col ${index % 2 === 0 ? "order-3 items-start text-left" : "order-1 items-end text-right"}`}>
                    <p className="text-[10px] font-bold text-slate-800 dark:text-slate-100 uppercase tracking-[0.2em]">{role.period}</p>
                    <p className="text-[10px] text-slate-500 mt-2 font-medium tracking-wide">{role.location}</p>
                  </div>

                  {/* Timeline Node Column */}
                  <div className="relative order-1 md:order-2 flex justify-start md:justify-center">
                    <div className="z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-950">
                      <div className={`h-3 w-3 rounded-full border-2 border-white dark:border-slate-950 ${role.isCurrent ? "bg-emerald-500 shadow-[0_0_15px_rgba(52,211,153,0.4)] dark:shadow-[0_0_15px_rgba(52,211,153,0.6)]" : "bg-sky-500"}`} />
                      {role.isCurrent && (
                        <div className="absolute h-6 w-6 animate-ping rounded-full bg-emerald-500/10 dark:bg-emerald-400/20" />
                      )}
                    </div>
                  </div>

                  {/* Right Side (Desktop: Content or Period) */}
                  <div className={`order-3 ml-12 md:ml-0 w-full ${index % 2 === 0 ? "md:order-1" : "md:order-3"}`}>
                    <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-1 hover:border-sky-500/30 dark:border-slate-700/50 dark:bg-slate-900/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:hover:shadow-sky-500/15">
                      <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-xs font-bold text-slate-900 dark:text-slate-50 uppercase tracking-widest">
                            {role.title}
                          </h3>
                          <span className="md:hidden text-[9px] font-bold text-sky-600 dark:text-sky-400/80 bg-sky-500/5 px-2 py-0.5 rounded-full border border-sky-500/10 dark:border-sky-500/20 uppercase tracking-tighter">
                            {role.period}
                          </span>
                        </div>
                        <p className="text-[11px] font-bold text-sky-600 dark:text-sky-400 mt-1">
                          {role.company}
                        </p>
                        <p className="md:hidden text-[10px] text-slate-400 italic mt-0.5">
                          {role.location}
                        </p>
                      </div>

                      <ul className="mt-4 space-y-2.5 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        {role.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-sky-500/30 dark:bg-sky-500/40" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {role.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] font-medium text-slate-500 dark:border-slate-800/80 dark:bg-slate-800/30 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-300 hover:border-sky-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>


          {/* Show More Button */}
          {visibleCount < roles.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative mt-20 flex justify-center"
            >
              <button
                onClick={showMore}
                className="group relative z-20 flex flex-col items-center gap-2 bg-white dark:bg-slate-950 px-6 text-slate-400 dark:text-slate-500 transition-all hover:text-sky-600 dark:hover:text-sky-400"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Previous Work</span>
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-8 w-8 rounded-full bg-sky-500/5 animate-pulse" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-y-1"
                  >
                    <path d="m7 13 5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </div>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

