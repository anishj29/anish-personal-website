import projectsData from "../data/projects.json";
import type { ProjectEntry } from "../types/content";

const projects = projectsData as ProjectEntry[];

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section section border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="section-inner">
        <p className="section-label">Projects</p>
        <h2 className="section-title mb-3">Selected work</h2>
        <p className="prose-block mb-12 max-w-2xl sm:mb-16">
          Product and research builds I&apos;ve shipped — open any card for the
          live link or write-up.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-colors duration-200 hover:border-[var(--accent)] sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-medium text-[var(--ink)] transition-colors group-hover:text-[var(--accent)] sm:text-2xl">
                  {project.name}
                </h3>
                <span
                  className="mt-1 text-[var(--muted)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                  aria-hidden
                >
                  →
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {project.description}
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.12em] text-[var(--ink)]/70">
                {project.techStack}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <a
            href="https://github.com/anishj29"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View GitHub profile
          </a>
        </div>
      </div>
    </section>
  );
}
