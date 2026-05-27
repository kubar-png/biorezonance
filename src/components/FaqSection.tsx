"use client";

import { useMemo, useState } from "react";

type Cat = "obecne" | "prvni" | "pojistovna";

type Faq = {
  q: string;
  cat: Cat;
  a: React.ReactNode;
};

const faqs: Faq[] = [
  { q: "Jak dlouho trvá sezení?", cat: "prvni", a: <>První návštěva 120-150 minut. Kontrolní sezení kolem 90 minut. U dětí první návštěva 60-90 minut, kontrolní hodinka. Akutní ošetření na konkrétní problém (nejčastěji infekce) zhruba hodinu.</> },
  { q: "Kolikrát budu muset přijít?", cat: "obecne", a: <>Záleží na tom, co spolu řešíme. Když se něco eliminuje, jsou potřeba zhruba tři sezení. Udržovací harmonizace po 3-6 měsících. Akutní alergie 3× po týdnu. Hubnutí 12× po týdnu. <strong>Odvykání kouření - když opravdu chcete přestat - stačí jednou.</strong></> },
  { q: "Kolik to stojí?", cat: "pojistovna", a: <>První sezení 2 500 Kč (dospělí) / 1 500 Kč (děti). Kontrolní 1 500 Kč / 1 000 Kč. Konzultace 1 500 Kč. Akutní ošetření 1 500 Kč/hod. Příplatek za víkend nebo domácí prostředí 1 000 Kč. Nosné médium (niklová destička, kapky) 200 Kč. Množstevní slevy a barter po domluvě.</> },
  { q: "Bude to bolet?", cat: "prvni", a: <>Ne. Můžete cítit brnění nebo mravenčení v drahách, někdy horkost, únavu nebo lehké točení hlavy. Většinou pomůže napít se vody, případně sezení na chvíli přerušíme.</> },
  { q: "Proč to nehradí pojišťovna?", cat: "pojistovna", a: <>To je dotaz na pojišťovnu. V Německu a Švýcarsku je ošetření na Bicomu hrazeno ze zdravotního připojištění - v Česku zatím nikoli.</> },
  { q: "Proč to nepoužívají všichni lékaři?", cat: "obecne", a: <>Bicom je registrovaný zdravotnický prostředek. Své místo v klasické západní medicíně si ale hledá těžko - ta nehledá holistický přístup. Dnes už ho ale v Česku najdete v ambulancích praktiků, stomatologů nebo internistů.</> },
  { q: "Zvládnou děti sezení v délce hodiny až dvou?", cat: "prvni", a: <>Ke každému dítěti přistupuji individuálně. Děti mají nachystaný koberec, hračky, knížky a dobrůtku. Na konci si vyberou malý dárek. Sezení nebývá problém - a děti samy si často říkají o další návštěvu.</> },
  { q: "Můžu být u sezení s dítětem nebo partnerem?", cat: "prvni", a: <>U malých dětí je přítomnost jednoho rodiče žádoucí, u starších dětí se domluvíme. Adolescenti většinou absolvují sezení sami. Přítomnost partnera má smysl, pokud obtíže výrazně souvisí s vaším vztahem - jinak ne, brání to uvolnění.</> },
  { q: "Kdy Bicom nelze použít?", cat: "obecne", a: <>U žen v prvním trimestru těhotenství a u osob s implantovaným kardiostimulátorem nebo defibrilátorem. Jinak je metoda bez kontraindikací.</> },
];

const tabs: { id: Cat | "vse"; label: string }[] = [
  { id: "vse", label: "Vše" },
  { id: "obecne", label: "Obecné" },
  { id: "prvni", label: "První návštěva" },
  { id: "pojistovna", label: "Pojišťovna" },
];

export default function FaqSection() {
  const [active, setActive] = useState<Cat | "vse">("vse");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      if (active !== "vse" && f.cat !== active) return false;
      if (!q) return true;
      return f.q.toLowerCase().includes(q);
    });
  }, [active, query]);

  return (
    <section className="faq" id="faq">
      <div className="shell">
        <div className="faq-intro">
          <span className="tag-pill">Časté dotazy</span>
          <h2 className="h-section" style={{ marginTop: 18 }}>Otázky, které <span className="rose">slýchám&nbsp;denně.</span></h2>
          <p className="lede" style={{ marginTop: 20, fontSize: 16, maxWidth: 640 }}>Pokud něco nenajdete, napište na WhatsApp +420&nbsp;777&nbsp;874&nbsp;067 - odpovím co nejdřív. Během sezení mám mobil vypnutý, ale reaguji ještě tentýž den.</p>
        </div>

        <div className="faq-grid">
          <div className="faq-side">
            <div className="tabs" role="tablist">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  className={active === t.id ? "active" : ""}
                  type="button"
                  role="tab"
                  aria-selected={active === t.id}
                  onClick={() => setActive(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--muted)" }}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
              <input
                type="search"
                placeholder="Hledat v dotazech…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Hledat v dotazech"
              />
            </div>
            <div className="pic" aria-hidden="true">
              <div className="annot">Cesta zpátky k&nbsp;sobě začíná otázkou.<span>OC Javor · Brno-Bystrc</span></div>
            </div>
          </div>

          <div className="faq-items">
            {filtered.length === 0 ? (
              <div className="faq-item" style={{ padding: "22px 24px", fontSize: 14.5, color: "var(--muted)" }}>
                Nic odpovídajícího jsem nenašla. Zkuste jiné slovo nebo napište na WhatsApp.
              </div>
            ) : (
              filtered.map((f, i) => (
                <details key={`${active}-${query}-${f.q}`} className="faq-item" open={i === 0}>
                  <summary><span className="q">{f.q}</span><span className="ico">＋</span></summary>
                  <div className="a">{f.a}</div>
                </details>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
