"use client";

import { useEffect } from "react";

// Jemný reveal při scrollu. Hero má vlastní CSS nástup, prvky v prvním viewportu nechává být (žádné probliknutí).
// Animují se přímo skleněné karty, ne jejich rodiče - opacity na rodiči rozbíjí backdrop-filter.
const TARGETS = [
  ".services-head > *",
  ".svc-list > .svc",
  ".about-text > .tag-pill, .about-text > h2, .about-text > .body",
  ".about-stats > .card",
  ".portrait",
  ".pristup-card",
  ".ben-head > *",
  ".ben-grid > .ben",
  ".ref-head",
  ".ref-grid > .ref",
  ".faq-intro",
  ".faq-side",
  ".faq-items > .faq-item",
  ".contact-card",
  ".foot-grid > *",
].join(",");

export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS))
      .filter((el) => el.getBoundingClientRect().top > window.innerHeight);

    const io = new IntersectionObserver((entries) => {
      // co vjede naráz, nastupuje postupně
      entries.filter((e) => e.isIntersecting).forEach((e, i) => {
        const el = e.target as HTMLElement;
        el.style.setProperty("--rv-d", `${Math.min(i, 5) * 90}ms`);
        el.dataset.rv = "in";
        io.unobserve(el);
      });
    }, { rootMargin: "0px 0px -8% 0px" });

    els.forEach((el) => { el.dataset.rv = ""; io.observe(el); });
    return () => io.disconnect();
  }, []);

  return null;
}
