"use client";

import { useEffect } from "react";

/** Observes elements matching `selector` and adds `.visible` when they enter the viewport. */
export function useReveal(selector: string) {
  useEffect(() => {
    const nodes = document.querySelectorAll(selector);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [selector]);
}
