"use client";

import experienceData from "../data/experience.json";
import type { ExperienceEntry } from "../types/content";
import { useReveal } from "../hooks/use-reveal";

const experienceEntries = experienceData as ExperienceEntry[];

function bulletsFor(entry: ExperienceEntry): string[] {
  return [
    entry.description,
    entry.additionalDescription,
    entry.thirdDescription,
    entry.fourthDescription,
    entry.fifthDescription,
    entry.sixthDescription,
  ].filter((b): b is string => Boolean(b));
}

export default function Experience() {
  useReveal(".experience-box");

  return (
    <section
      id="experience"
      className="experience-section section border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="section-inner">
        <p className="section-label">Experience</p>
        <h2 className="section-title mb-12 sm:mb-16">Where I&apos;ve worked</h2>

        <div className="timeline">
          {experienceEntries.map((experience) => (
            <article
              key={experience.id}
              className="experience-box reveal-item timeline-item"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <time className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm">
                  {experience.period}
                </time>
                <span className="chip w-fit">{experience.category}</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-medium text-[var(--ink)] sm:text-2xl">
                {experience.company}
              </h3>
              <p className="mt-1 text-[var(--muted)]">{experience.position}</p>

              <ul className="mt-5 space-y-3">
                {bulletsFor(experience).map((bullet) => (
                  <li
                    key={bullet.slice(0, 48)}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
