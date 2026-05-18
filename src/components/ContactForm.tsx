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
      <div className="field"><label htmlFor="fn">Jméno *</label><input id="fn" name="firstName" required /></div>
      <div className="field"><label htmlFor="ln">Příjmení *</label><input id="ln" name="lastName" required /></div>
      <div className="field"><label htmlFor="em">E-mail *</label><input id="em" name="email" type="email" required /></div>
      <div className="field"><label htmlFor="ph">Telefon</label><input id="ph" name="phone" type="tel" placeholder="+420" /></div>
      <div className="field full">
        <label htmlFor="topic">Co vás trápí?</label>
        <select id="topic" name="topic" defaultValue="Nevím přesně">
          <option>Nevím přesně, chci si o tom popovídat</option>
          <option>Únava, mlha, nespavost</option>
          <option>Alergie a intolerance</option>
          <option>Trávení, GIT</option>
          <option>Migrény a bolesti hlavy</option>
          <option>Chronické bolesti</option>
          <option>Něco jiného</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="msg">Napište nám pár vět</label>
        <textarea id="msg" name="message" placeholder="Jak dlouho to trvá, co jste už zkusili, kdy se vám hodí přijít…" />
      </div>
      <div className="submit">
        <p className="note">
          Odesláním souhlasíte se <a href="#">zpracováním osobních údajů</a>. Vaše data nikomu nepředáváme.
        </p>
        <button className="btn" type="submit" disabled={sent}>
          {sent ? "✓ Děkujeme, ozveme se" : "Odeslat zprávu →"}
        </button>
      </div>
    </form>
  );
}
