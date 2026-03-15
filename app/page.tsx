import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#020617] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_55%)]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:pt-8">
        <header className="flex items-center justify-between gap-4 rounded-full border border-slate-800/80 bg-slate-950/80 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 text-slate-900 shadow-lg shadow-sky-500/50">
              <span className="text-sm font-extrabold">MS</span>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide text-slate-100">
                Mohd Saad
              </p>
              <p className="text-[11px] text-slate-400">
                Software Engineer · New Delhi, India
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs text-slate-300 md:flex">
            <a href="#skills" className="hover:text-sky-300">
              Skills
            </a>
            <a href="#experience" className="hover:text-sky-300">
              Experience
            </a>
            <a href="#projects" className="hover:text-sky-300">
              Projects
            </a>
            <a
              href="https://github.com/msaad323"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/saad-se"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[11px] font-medium hover:border-sky-400 hover:text-sky-100"
            >
              LinkedIn
            </a>
          </nav>
        </header>
      </div>

      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

