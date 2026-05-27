"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok" }
  | { kind: "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "sending" || status.kind === "ok") return;

    setStatus({ kind: "sending" });
    const fd = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        setStatus({ kind: "ok" });
        return;
      }

      setStatus({
        kind: "error",
        message:
          data.message ??
          "Odeslání se nepodařilo. Zkuste to prosím znovu, nebo napište přímo na vladimira@vnbiorezonance.cz.",
      });
    } catch {
      setStatus({
        kind: "error",
        message:
          "Nastala chyba spojení. Napište mi prosím přímo na vladimira@vnbiorezonance.cz nebo na WhatsApp.",
      });
    }
  }

  const sent = status.kind === "ok";
  const sending = status.kind === "sending";

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="fn">Jméno a&nbsp;příjmení *</label>
        <input id="fn" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="dob">Datum narození *</label>
        <input id="dob" name="dob" type="date" autoComplete="bday" required />
      </div>
      <div className="field">
        <label htmlFor="em">E-mail *</label>
        <input id="em" name="email" type="email" autoComplete="email" inputMode="email" required />
      </div>
      <div className="field">
        <label htmlFor="ph">Telefon *</label>
        <input id="ph" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+420" required />
      </div>

      <div className="field full">
        <label htmlFor="type">Jaký je váš stav?</label>
        <select id="type" name="type" defaultValue="dlouhodobý">
          <option value="akutní">Akutní - řeším něco, co se nedávno objevilo</option>
          <option value="dlouhodobý">Dlouhodobý - táhne se to měsíce nebo roky</option>
          <option value="prevence">Prevence / harmonizace bez konkrétních obtíží</option>
          <option value="koureni">Odvykání kouření</option>
          <option value="hubnuti">Hubnutí</option>
        </select>
      </div>

      <div className="field full">
        <label htmlFor="topic">Co byste si chtěl/a řešit? *</label>
        <textarea id="topic" name="topic" required placeholder="Klidně pár vět - jak dlouho to trvá, co jste už zkusil/a, co vás přivedlo na biorezonanci." />
      </div>

      <div className="field full" style={{ background: "rgba(165,190,120,.12)", padding: "18px 20px", borderRadius: 14, border: "1px solid rgba(165,190,120,.3)" }}>
        <span style={{ fontSize: 12, letterSpacing: ".04em", color: "var(--sage-deep)", fontWeight: 700, textTransform: "uppercase" }}>Kontraindikace · prosím zkontrolujte</span>
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6, fontSize: 15 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "10px 4px", minHeight: 44, lineHeight: 1.45 }}>
            <input type="checkbox" name="ks" style={{ width: 22, height: 22, flexShrink: 0, accentColor: "var(--sage-deep)" }} /> <span>Mám implantovaný <strong>kardiostimulátor nebo defibrilátor</strong></span>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "10px 4px", minHeight: 44, lineHeight: 1.45 }}>
            <input type="checkbox" name="te" style={{ width: 22, height: 22, flexShrink: 0, accentColor: "var(--sage-deep)" }} /> <span>Jsem v&nbsp;<strong>prvním trimestru těhotenství</strong></span>
          </label>
          <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 4, lineHeight: 1.5 }}>
            U&nbsp;obou stavů Bicom nepoužíváme - pokud jste zaškrtl/a, ráda probereme jiné možnosti.
          </p>
        </div>
      </div>

      {status.kind === "error" && (
        <div className="field full" role="alert" style={{ background: "rgba(161,79,66,.08)", border: "1px solid rgba(161,79,66,.3)", borderRadius: 14, padding: "16px 18px", fontSize: 14.5, color: "var(--rose-deep)", lineHeight: 1.55 }}>
          {status.message}
        </div>
      )}

      <div className="submit">
        <p className="note">
          Odesláním souhlasíte se <a href="/zpracovani-osobnich-udaju">zpracováním osobních údajů</a>. Data nikomu nepředávám, slouží jen k&nbsp;naší komunikaci.
        </p>
        <button className="btn" type="submit" disabled={sending || sent}>
          {sent ? "✓ Děkuji, ozvu se do 24 hodin" : sending ? "Odesílám…" : "Odeslat poptávku →"}
        </button>
      </div>
    </form>
  );
}
