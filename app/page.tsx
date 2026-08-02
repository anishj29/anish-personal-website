import Nav from "./components/nav";
import Intro from "./components/intro";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Volunteer from "./components/volunteer";
import PortfolioChat from "./components/portfolio-chat";
import introData from "./data/intro.json";
import type { IntroData } from "./types/content";

const intro = introData as IntroData;

const PHOTO_URL =
  "https://anish-jha-personal-site.s3.us-east-1.amazonaws.com/1784083668224.png";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Nav />

      <section
        id="hero"
        aria-label="Introduction"
        className="hero-surface relative flex min-h-[88vh] w-full items-center overflow-hidden pt-20"
      >
        <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-14 lg:px-12 lg:py-20">
          <div>
            <p className="hero-animate section-label !text-[var(--accent)]">
              Software engineer · Rutgers CS
            </p>
            <h1 className="hero-animate-delay font-display text-5xl font-medium tracking-tight text-[var(--hero-ink)] sm:text-6xl md:text-7xl">
              Anish Jha
            </h1>
            <p className="hero-animate-delay-2 mt-5 max-w-xl text-base leading-relaxed text-[var(--hero-muted)] sm:text-lg">
              Building reliable product and data systems — currently a SWE Intern
              at Wells Fargo on AI-driven workforce forecasting.
            </p>
            <div className="hero-animate-delay-2 mt-8 flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary">
                View experience
              </a>
              <a
                href={intro.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="hero-animate-delay-2 relative mx-auto w-full max-w-sm md:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO_URL}
              alt="Anish Jha"
              className="aspect-[4/5] w-full object-cover object-center grayscale-[20%] contrast-[1.05]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--hero-bg)]/50 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-sm text-[var(--hero-muted)] transition-colors hover:text-[var(--hero-ink)]"
        >
          Scroll
        </a>
      </section>

      <Intro />
      <Education />
      <Experience />
      <Volunteer />
      <Projects />
      <PortfolioChat />
      <Footer />
    </div>
  );
}
