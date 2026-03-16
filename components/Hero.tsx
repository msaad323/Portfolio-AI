"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-sky-500/[0.08] dark:bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/[0.05] dark:bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-sky-500/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="grid items-start gap-12 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)]"
        >
          <motion.div
            variants={heroVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-700 dark:text-sky-100 shadow-[0_0_30px_rgba(56,189,248,0.2)] dark:shadow-[0_0_30px_rgba(56,189,248,0.3)]">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available for full-time · Remote friendly
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-[3.2rem]">
              Designing{" "}
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent dark:from-sky-400 dark:via-cyan-300 dark:to-emerald-300">
                reliable
              </span>{" "}
              systems & crafted interfaces.
            </h1>
            <p className="mt-5 max-w-xl text-sm md:text-base text-slate-600 dark:text-slate-300">
              I&apos;m Mohd Saad, a Full-Stack Engineer specialized in high-performance SaaS platforms, enterprise dashboards, and scalable backend systems with 4+ years of experience.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-2.5 text-sm font-medium text-white dark:text-slate-950 shadow-lg shadow-sky-500/20 dark:shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span>View work</span>
                <span className="text-base">↗</span>
              </Link>
              <a
                href="/resume.pdf"
                download="Mohd_Saad_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white dark:border-slate-700/80 dark:bg-slate-900/60 px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-100 backdrop-blur-sm transition hover:border-sky-400 hover:text-sky-600 dark:hover:border-sky-400 dark:hover:text-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span>Download Resume</span>
                <span className="text-xs text-slate-400">PDF</span>
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/5 px-6 py-2.5 text-sm font-medium text-sky-700 dark:text-sky-100 backdrop-blur-sm transition hover:bg-sky-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span>Contact me</span>
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 dark:border-slate-700/70 dark:bg-slate-900/60 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open to full-time & remote roles
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 dark:border-slate-800 dark:bg-slate-900/70 px-3 py-1">
                4+ years experience · React · Next.js · Node.js
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={heroVariants}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-10 rounded-[2.5rem] bg-sky-500/10 dark:bg-sky-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.05)] dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-[0_25px_80px_rgba(15,23,42,0.95)]">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-emerald-400/0 dark:via-sky-500/60" />

              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                    Snapshot
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-700 dark:text-slate-100/90">
                    Impact across product, performance & delivery
                  </p>
                </div>
                <span className="rounded-full border border-sky-500/50 bg-sky-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-200">
                  Proven
                </span>
              </div>

              <div className="mt-5 grid gap-3 text-xs text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800/80 dark:bg-slate-900/60">
                  <p className="text-[11px] font-semibold text-slate-900 dark:text-slate-100">
                    Subscription platforms & dashboards
                  </p>
                  <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-300/90">
                    Built and maintained large-scale subscription flows, room
                    configurators, and financial dashboards with React,
                    TypeScript, and Node.js.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800/80 dark:bg-slate-900/60">
                  <p className="text-[11px] font-semibold text-slate-900 dark:text-slate-100">
                    Performance & reliability
                  </p>
                  <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-300/90">
                    Increased application speed by 30% and reduced data
                    retrieval times by 40% through API, caching, and build
                    optimizations.
                  </p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 text-[11px] text-slate-600 dark:text-slate-300 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-3 dark:border-slate-800/80 dark:bg-slate-900/70">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Delivery</p>
                  <p className="mt-1 text-slate-500 dark:text-slate-300/90">
                    Shipped 4+ agile projects to production while maintaining
                    ~90% client satisfaction and tight delivery timelines.
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-3 dark:border-slate-800/80 dark:bg-slate-900/70">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">Stack</p>
                  <p className="text-slate-500 dark:text-slate-300/90">
                    TypeScript · Next.js · Node.js · Spring Boot · MS SQL · AWS/GCP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

