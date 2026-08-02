"use client";

import { useEffect, useState } from "react";
import introData from "../data/intro.json";
import type { IntroData } from "../types/content";

const intro = introData as IntroData;

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#projects", label: "Projects" },
] as const;

export default function Nav() {
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the hero no longer covers the top of the viewport, switch to light nav
        setOnLight(!entry.isIntersecting);
      },
      {
        // Account for sticky nav height so the swap happens as light sections begin
        rootMargin: "-72px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        onLight
          ? "border-b border-[var(--border)] bg-[var(--bg-elevated)]"
          : "border-b border-white/10 bg-[var(--hero-bg)]"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className={`font-display shrink-0 text-lg font-medium tracking-tight transition-colors duration-200 hover:opacity-80 ${
            onLight ? "text-[var(--ink)]" : "text-[var(--hero-ink)]"
          }`}
        >
          Anish Jha
        </a>

        <div className="ml-auto flex min-w-0 items-center gap-1 sm:gap-2">
          <div className="flex min-w-0 items-center gap-1 overflow-x-auto scrollbar-none sm:gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`shrink-0 rounded-md px-2.5 py-1.5 text-sm transition-colors duration-200 ${
                  onLight
                    ? "text-[var(--muted)] hover:text-[var(--ink)]"
                    : "text-[var(--hero-muted)] hover:text-[var(--hero-ink)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={intro.resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-1 shrink-0 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
              onLight
                ? "border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent-soft)]"
                : "border-[var(--accent)]/50 bg-[var(--accent)]/15 text-[var(--hero-ink)] hover:bg-[var(--accent)]/25"
            }`}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
