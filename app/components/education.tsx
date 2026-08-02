"use client";

import educationData from "../data/education.json";
import type { EducationEntry } from "../types/content";
import { useReveal } from "../hooks/use-reveal";

const educationEntries = educationData as EducationEntry[];

export default function Education() {
  useReveal(".education-box");

  return (
    <section
      id="education"
      className="education-section section border-t border-[var(--border)] bg-[var(--bg-elevated)]"
    >
      <div className="section-inner">
        <p className="section-label">Education</p>
        <h2 className="section-title mb-12 sm:mb-16">Where I studied</h2>

        <div className="timeline">
          {educationEntries.map((education) => (
            <article
              key={education.id}
              className="education-box reveal-item timeline-item"
            >
              <time className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--accent)] sm:text-sm">
                {education.period}
              </time>
              <h3 className="mt-2 font-display text-xl font-medium text-[var(--ink)] sm:text-2xl">
                {education.institution}
              </h3>
              <p className="mt-1 text-[var(--muted)]">{education.degree}</p>

              <div className="mt-5 space-y-4">
                {education.majors && (
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--ink)]">
                      Majors
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {education.majors.map((major) => (
                        <span key={major} className="chip">
                          {major}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {education.minors && (
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--ink)]">
                      Minors
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {education.minors.map((minor) => (
                        <span key={minor} className="chip">
                          {minor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--ink)]">
                    Relevant coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCoursework.map((course) => (
                      <span key={course} className="chip">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {education.awardsAndActivities && (
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--ink)]">
                      Awards & activities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {education.awardsAndActivities.map((award) => (
                        <span key={award} className="chip">
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
