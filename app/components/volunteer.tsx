"use client";

import { useReveal } from "../hooks/use-reveal";

export default function Volunteer() {
  useReveal(".volunteer-box");

  return (
    <section
      id="volunteer"
      className="volunteer-section section border-t border-[var(--border)] bg-[var(--bg-elevated)]"
    >
      <div className="section-inner">
        <p className="section-label">Volunteer</p>
        <h2 className="section-title mb-12 sm:mb-16">Giving back</h2>

        <div className="timeline">
          <article className="volunteer-box reveal-item timeline-item">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <time className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm">
                September 2020 - Present
              </time>
              <span className="chip w-fit">Leadership</span>
            </div>
            <h3 className="mt-2 font-display text-xl font-medium text-[var(--ink)] sm:text-2xl">
              <a
                href="https://snugglesforchildren.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--accent)]"
              >
                Snuggles for Children
              </a>
            </h3>
            <p className="mt-1 text-[var(--muted)]">
              Director of Technology and Policy
            </p>

            <ul className="mt-5 space-y-3">
              <li className="flex gap-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                  aria-hidden
                />
                <span>
                  Built a donation website using Squarespace, CSS, and HTML to
                  support initiatives such as sending care packages, distributing
                  books and clothes, and awarding college scholarships.
                </span>
              </li>
              <li className="flex gap-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                  aria-hidden
                />
                <span>
                  Increased website traffic by 300% via the Google Ad Grant
                  program, winning $120,000 in ad credits.
                </span>
              </li>
            </ul>

            <a
              href="https://snugglesforchildren.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent mt-6 inline-flex items-center gap-1.5 text-sm font-medium"
            >
              Visit Snuggles for Children
              <span aria-hidden>→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
