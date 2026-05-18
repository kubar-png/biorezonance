"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="nl"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        placeholder="Váš e-mail pro klidnější dopis 1× měsíčně"
        required
        disabled={done}
      />
      <button type="submit">{done ? "✓ Hotovo" : "Odebírat"}</button>
    </form>
  );
}
