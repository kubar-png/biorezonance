"use client";

import { useState } from "react";

const links = [
  { href: "#sluzby", label: "Co nabízím" },
  { href: "#o-biorezonanci", label: "O biorezonanci" },
  { href: "#benefity", label: "Benefity" },
  { href: "#reference", label: "Reference" },
  { href: "#faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[var(--cream)]/85 backdrop-blur-md border-b border-[#e7e3da]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-[var(--ink)]" />
          <span className="text-[17px] font-bold tracking-tight">
            Logo / název
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[14.5px] text-[var(--ink-soft)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[var(--ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#kontakt" className="hidden md:inline-flex btn-pill !py-3 !px-6 text-[14px]">
          Objednejte se
        </a>
        <button
          aria-label="Otevřít menu"
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h16M3 11h16M3 16h16" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#e7e3da] bg-[var(--cream)]">
          <div className="px-6 py-4 flex flex-col gap-3 text-[15px]">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-pill mt-2 self-start" onClick={() => setOpen(false)}>
              Objednejte se
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
