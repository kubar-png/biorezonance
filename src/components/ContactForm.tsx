"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field">
        <label htmlFor="fn">Jméno a&nbsp;příjmení *</label>
        <input id="fn" name="name" required />
      </div>
      <div className="field">
        <label htmlFor="dob">Datum narození *</label>
        <input id="dob" name="dob" type="date" required />
      </div>
      <div className="field">
        <label htmlFor="em">E-mail *</label>
        <input id="em" name="email" type="email" required />
      </div>
      <div className="field">
        <label htmlFor="ph">Telefon *</label>
        <input id="ph" name="phone" type="tel" placeholder="+420" required />
      </div>

      <div className="field full">
        <label htmlFor="type">Jaký je váš stav?</label>
        <select id="type" name="type" defaultValue="dlouhodobý">
          <option value="akutní">Akutní — řeším něco, co se nedávno objevilo</option>
          <option value="dlouhodobý">Dlouhodobý — táhne se to měsíce nebo roky</option>
          <option value="prevence">Prevence / harmonizace bez konkrétních obtíží</option>
          <option value="koureni">Odvykání kouření</option>
          <option value="hubnuti">Hubnutí</option>
        </select>
      </div>

      <div className="field full">
        <label htmlFor="topic">Co byste si chtěl/a řešit? *</label>
        <textarea id="topic" name="topic" required placeholder="Klidně pár vět — jak dlouho to trvá, co jste už zkusil/a, co vás přivedlo na biorezonanci." />
      </div>

      <div className="field full" style={{ background: "rgba(165,190,120,.12)", padding: "18px 20px", borderRadius: 14, border: "1px solid rgba(165,190,120,.3)" }}>
        <span style={{ fontSize: 12, letterSpacing: ".04em", color: "var(--sage-deep)", fontWeight: 700, textTransform: "uppercase" }}>Kontraindikace · prosím zkontrolujte</span>
        <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <input type="checkbox" name="ks" /> Mám implantovaný <strong>kardiostimulátor nebo defibrilátor</strong>
          </label>
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <input type="checkbox" name="te" /> Jsem v&nbsp;<strong>prvním trimestru těhotenství</strong>
          </label>
          <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 4, lineHeight: 1.5 }}>
            U&nbsp;obou stavů bicom nepoužíváme — pokud jste zaškrtl/a, ráda probereme jiné možnosti.
          </p>
        </div>
      </div>

      <div className="submit">
        <p className="note">
          Odesláním souhlasíte se <a href="#">zpracováním osobních údajů</a>. Data nikomu nepředávám, slouží jen k&nbsp;naší komunikaci.
        </p>
        <button className="btn" type="submit" disabled={sent}>
          {sent ? "✓ Děkuji, ozvu se do 24 hodin" : "Odeslat poptávku →"}
        </button>
      </div>
    </form>
  );
}
