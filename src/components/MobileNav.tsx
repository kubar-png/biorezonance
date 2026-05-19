"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#sluzby", label: "Co nabízím" },
  { href: "#o-mne", label: "O mně" },
  { href: "#benefity", label: "Proč si mě vybrat" },
  { href: "#reference", label: "Reference" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        aria-expanded={open}
        className="nav-burger"
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <path d="M5 5l12 12" />
              <path d="M17 5L5 17" />
            </>
          ) : (
            <>
              <path d="M3 7h16" />
              <path d="M3 15h16" />
            </>
          )}
        </svg>
      </button>

      <div
        className={`mobile-drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-label="Hlavní menu"
        aria-hidden={!open}
      >
        <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)} />
        <div className="mobile-drawer-panel">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontakt"
            className="btn"
            onClick={() => setOpen(false)}
            style={{ marginTop: 24, width: "100%", justifyContent: "center" }}
          >
            Objednat se →
          </a>
          <div className="mobile-drawer-foot">
            <a href="tel:+420777874067">+420 777 874 067</a>
            <span>Út · Čt · Pá &nbsp;9—21 hod.</span>
          </div>
        </div>
      </div>
    </>
  );
}
