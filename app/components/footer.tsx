import introData from "../data/intro.json";
import type { IntroData } from "../types/content";

const intro = introData as IntroData;

export default function Footer() {
  return (
    <footer className="footer-section w-full border-t border-white/10 bg-[var(--hero-bg)] text-[var(--hero-ink)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:px-12">
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight">
            {intro.name}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--hero-muted)] sm:text-base">
            Software engineer focused on reliable product and data systems.
            Open to SWE roles and interesting problems.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={intro.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--hero-muted)] transition-colors hover:text-[var(--hero-ink)]"
            >
              GitHub
            </a>
            <a
              href={intro.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--hero-muted)] transition-colors hover:text-[var(--hero-ink)]"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${intro.email}`}
              className="text-sm text-[var(--hero-muted)] transition-colors hover:text-[var(--hero-ink)]"
            >
              Email
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            <li>
              <a
                href={`mailto:${intro.email}`}
                className="text-[var(--hero-muted)] transition-colors hover:text-[var(--hero-ink)]"
              >
                {intro.email}
              </a>
            </li>
            <li className="text-[var(--hero-muted)]">New Jersey, USA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
