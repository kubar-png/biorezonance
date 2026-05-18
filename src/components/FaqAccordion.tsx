"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

const tabs = ["General", "Setting up FAQs"] as const;
type Tab = (typeof tabs)[number];

const data: Record<Tab, Faq[]> = {
  General: [
    {
      q: "What is an FAQ section?",
      a: "An FAQ section can be used to quickly answer common questions about your business like \"Where do you ship to?\", \"What are your opening hours?\", or \"How can I book a service?\".",
    },
    { q: "Why do FAQs matter?", a: "FAQs reduce friction and answer the most common buyer objections." },
    { q: "Where can I add my FAQs?", a: "You can add FAQs anywhere on your site, but they work best near the contact section." },
  ],
  "Setting up FAQs": [
    { q: "How do I add a question?", a: "Click the add button and type your question and answer." },
    { q: "Can I reorder questions?", a: "Yes, drag and drop them into your preferred order." },
  ],
};

export default function FaqAccordion() {
  const [tab, setTab] = useState<Tab>("General");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="w-full">
      <div className="flex items-start gap-10">
        <div className="text-[13px] leading-[1.35] text-[var(--ink)] font-semibold pt-3 max-w-[110px]">
          Nejča-
          <br />
          stější
          <br />
          dotazy
        </div>
        <label className="flex-1">
          <input
            type="text"
            placeholder="Hledáte něco?"
            className="w-full bg-transparent border-b border-[#b9b5b0] py-3 outline-none focus:border-[var(--ink)] text-[15px]"
          />
        </label>
      </div>

      <div className="mt-8 flex gap-6 border-b border-[#cfcad8]">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={
              "pb-3 text-[15px] transition-colors " +
              (tab === t
                ? "text-[var(--ink)] font-semibold border-b-2 border-[var(--ink)] -mb-px"
                : "text-[var(--muted)] hover:text-[var(--ink)]")
            }
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {data[tab].map((it, i) => {
          const isOpen = open === i;
          return (
            <div
              key={it.q}
              className="rounded-[14px] border border-[#cfcad8] bg-[var(--cream)] overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-5 py-4 text-left"
              >
                <span className="text-[15px] text-[var(--ink)]">{it.q}</span>
                <span
                  className={
                    "text-[var(--muted)] transition-transform " +
                    (isOpen ? "rotate-180" : "")
                  }
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path
                      d="M3 5 L7 9 L11 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={
                  "grid transition-[grid-template-rows] duration-300 ease-out " +
                  (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
                }
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-[14.5px] leading-[1.65] text-[var(--muted)]">
                    {it.a}
                    <div className="mt-4 flex items-center gap-3 text-[var(--muted)]">
                      <SocialIcon name="facebook" />
                      <SocialIcon name="x" />
                      <SocialIcon name="linkedin" />
                      <SocialIcon name="link" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SocialIcon({ name }: { name: "facebook" | "x" | "linkedin" | "link" }) {
  const common = "w-4 h-4 hover:text-[var(--ink)] transition-colors";
  switch (name) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.4v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 3h-2.2v6.9A10 10 0 0 0 22 12z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M18 2h3l-7.5 8.6L22 22h-6.9l-5.4-7-6.2 7H.5l8-9.1L0 2h7l4.9 6.5L18 2zm-2.4 18h1.9L7.5 4H5.5l10.1 16z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6 1.12 6 0 4.88 0 3.5S1.12 1 2.5 1c1.37 0 2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.34 0h4.37v1.9h.06c.6-1.1 2.1-2.27 4.32-2.27 4.62 0 5.47 3.04 5.47 7v7.37h-4.56V15.4c0-1.69-.03-3.86-2.36-3.86-2.36 0-2.72 1.84-2.72 3.74V22H7.56V8z" />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={common}>
          <path d="M10 14a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-1.5 1.5" />
          <path d="M14 10a5 5 0 0 1 0 7l-3 3a5 5 0 0 1-7-7l1.5-1.5" />
        </svg>
      );
  }
}
