"use client";

import { FormEvent, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setErrorMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data?.error || "Something went wrong. Please try again shortly."
        );
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-slate-200/70 bg-slate-50 dark:border-slate-800/70 dark:bg-slate-950 py-16 md:py-20 transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1100px] px-4">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Let&apos;s build something
            </h2>
            <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-slate-300">
              Open to full-time roles and impactful collaborations in product
              engineering, especially around SaaS platforms, dashboards, and
              AI-assisted workflows.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Get in touch:</p>
              <a
                href="mailto:saad500nbd@gmail.com"
                className="flex items-center gap-2 text-sky-600 dark:text-sky-300 transition hover:text-sky-500 dark:hover:text-sky-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                <span>saad500nbd@gmail.com</span>
              </a>
              <a
                href="tel:+917017315418"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-300 transition hover:text-slate-900 dark:hover:text-slate-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span>+91 70173 15418</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-300">
              <Link
                href="https://linkedin.com/in/saad-se"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-sky-400 dark:hover:text-sky-100"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </Link>
              <Link
                href="https://github.com/msaad323"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-sky-400 dark:hover:text-sky-100"
              >
                <span>GitHub</span>
                <span>↗</span>
              </Link>
              <a
                href="/Mohd_Saad_Resume.pdf"
                download="Mohd_Saad_Resume.pdf"
                className="inline-flex items-center gap-1 rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1.5 text-sky-700 dark:border-sky-500/60 dark:bg-sky-500/15 dark:text-sky-100 hover:bg-sky-500/10 dark:hover:bg-sky-500/25"
              >
                <span>Download Resume</span>
                <span className="text-[10px] text-sky-500 dark:text-sky-200">PDF</span>
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-5 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] dark:border-slate-800/80 dark:bg-slate-900/40 dark:shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Contact form
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Share a question, idea, or opportunity and I&apos;ll get back to
              you by email.
            </p>

            <div className="mt-5 space-y-4 text-sm">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none ring-sky-500/50 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none ring-sky-500/50 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Share a bit about what you're looking for…"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none ring-sky-500/50 placeholder:text-slate-400 focus:border-sky-500 focus:ring-1 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-4 py-2.5 text-xs font-medium text-white dark:text-slate-950 shadow-lg shadow-sky-500/20 dark:shadow-sky-500/40 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>

            {status === "success" && (
              <p className="mt-3 text-xs text-emerald-600 dark:text-emerald-400">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-xs text-rose-600 dark:text-rose-400">
                {errorMessage ??
                  "Something went wrong while sending your message."}
              </p>
            )}
          </motion.form>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800/80 pt-5 text-[11px] text-slate-500 md:flex-row">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
            <p>© {new Date().getFullYear()} Mohd Saad. All rights reserved.</p>
            <span className="hidden h-1 w-1 rounded-full bg-slate-200 dark:bg-slate-700 md:block" />
            <p className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              New Delhi, India
            </p>
          </div>
          <p className="text-slate-400 dark:text-slate-600">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </section>
  );
}

