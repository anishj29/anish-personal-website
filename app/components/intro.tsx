"use client";

import type { MouseEvent } from "react";
import introData from "../data/intro.json";
import type { IntroData } from "../types/content";

const intro = introData as IntroData;

export default function Intro() {
  const handleDownloadResume = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = intro.resume.url;
    link.download = intro.resume.filename;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="intro-section section bg-[var(--bg)]">
      <div className="section-inner">
        <p className="section-label">About</p>
        <h2 className="section-title mb-12 sm:mb-16">Get to know me</h2>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-16">
          <aside className="space-y-6">
            <div>
              <h3 className="font-display text-2xl font-medium text-[var(--ink)]">
                {intro.name}
              </h3>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-[var(--muted)]">
                {intro.title}
              </p>
            </div>

            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href={`mailto:${intro.email}`}
                  className="link-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {intro.email}
                </a>
              </li>
              <li className="text-[var(--muted)]">{intro.phone}</li>
              <li>
                <a
                  href={intro.linkedin.url}
                  className="link-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {intro.linkedin.label}
                </a>
              </li>
              <li>
                <a
                  href={intro.github.url}
                  className="link-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {intro.github.label}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleDownloadResume}
                  className="link-accent cursor-pointer text-left"
                >
                  {intro.resume.label}
                </button>
              </li>
            </ul>
          </aside>

          <div className="space-y-10">
            <div>
              <h3 className="mb-4 border-b border-[var(--border)] pb-2 font-display text-xl font-medium text-[var(--ink)]">
                {intro.aboutMe.title}
              </h3>
              <div className="space-y-4">
                {intro.aboutMe.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="prose-block">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 border-b border-[var(--border)] pb-2 font-display text-xl font-medium text-[var(--ink)]">
                {intro.beyondTheCode.title}
              </h3>
              <div className="space-y-4">
                {intro.beyondTheCode.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="prose-block">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
