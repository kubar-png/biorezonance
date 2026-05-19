import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import MobileNav from "@/components/MobileNav";

const services = [
  {
    n: "01",
    name: "Biorezonance Bicom-Optima 2",
    desc: "Hodina až dvě a půl, ve kterých přístroj prochází vaše elektromagnetické pole a hledá místa, kde se rozladilo. Pro fyzické i psychické obtíže — od dětí po seniory. Vlajková služba.",
    price: "2 500 / 1 500 Kč",
    note: "dospělí / děti · první návštěva",
  },
  {
    n: "02",
    name: "Odvykání kouření",
    desc: "Jediná návštěva — pokud opravdu chcete přestat. Žádný balíček deseti sezení, žádné napodruhé.",
    price: "1 500 Kč",
    note: "jednorázová návštěva",
  },
  {
    n: "03",
    name: "Konzultace",
    desc: "Hodina, ve které spolu projdeme váš příběh, dosavadní vyšetření a uvážíme, jestli má smysl jít dál. Bez závazku.",
    price: "1 000 Kč",
    note: "60 minut · telefonem nebo osobně",
  },
  {
    n: "04",
    name: "Asyrská bezkontaktní masáž",
    desc: "Práce v energetickém poli bez doteku. Doplněk pro klienty, kteří chtějí jít hlouběji než s přístrojem.",
    price: "dle domluvy",
    note: "doplňková služba",
  },
];

// PLACEHOLDER — reálné reference doplníme po souhlasu klientek.
const refs = [
  { av: "", text: ["Lorem ipsum dolor sit amet, ", "consectetur adipiscing elit", "."], note: "placeholder · krátká" },
  { av: "b", text: ["Sed do eiusmod tempor incididunt ut labore et dolore magna ", "aliqua ut enim", " ad minim veniam, quis nostrud exercitation."], note: "placeholder · střední" },
  { av: "c", text: ["Ullamco laboris nisi ut aliquip ex ea commodo ", "consequat", "."], note: "placeholder · krátká", dark: true },
  { av: "d", text: ["Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ", "cupidatat non proident", ", sunt in culpa qui officia deserunt mollit anim id est laborum."], note: "placeholder · delší" },
  { av: "e", text: ["At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas ", "molestias excepturi", " sint occaecati cupiditate."], note: "placeholder · delší" },
  { av: "f", text: ["Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo ", "minus id quod maxime placeat", "."], note: "placeholder · střední" },
];

const faqs = [
  { q: "Jak dlouho trvá sezení?", a: <>První návštěva 120–150 minut. Kontrolní sezení kolem 90 minut. U dětí první návštěva 60–90 minut, kontrolní hodinka. Akutní ošetření na konkrétní problém (nejčastěji infekce) zhruba hodinu.</> },
  { q: "Kolikrát budu muset přijít?", a: <>Záleží na tom, co spolu řešíme. Když se něco eliminuje, jsou potřeba zhruba tři sezení. Udržovací harmonizace po 3–6 měsících. Akutní alergie 3× po týdnu. Hubnutí 12× po týdnu. <strong>Odvykání kouření — když opravdu chcete přestat — stačí jednou.</strong></> },
  { q: "Kolik to stojí?", a: <>První sezení 2 500 Kč (dospělí) / 1 500 Kč (děti). Kontrolní 1 500 Kč / 1 000 Kč. Konzultace 1 000 Kč. Akutní ošetření 1 500 Kč/hod. Příplatek za víkend nebo domácí prostředí 1 000 Kč. Nosné médium (niklová destička, kapky) 200 Kč. Množstevní slevy a barter po domluvě.</> },
  { q: "Bude to bolet?", a: <>Ne. Můžete cítit brnění nebo mravenčení v drahách, někdy horkost, únavu nebo lehké točení hlavy. Většinou pomůže napít se vody, případně sezení na chvíli přerušíme.</> },
  { q: "Proč to nehradí pojišťovna?", a: <>To je dotaz na pojišťovnu. V Německu a Švýcarsku je ošetření na bicomu hrazeno ze zdravotního připojištění — v Česku zatím nikoli.</> },
  { q: "Proč to nepoužívají všichni lékaři?", a: <>Bicom je registrovaný zdravotnický prostředek. Své místo v klasické západní medicíně si ale hledá těžko — ta nehledá holistický přístup. Dnes už ho ale v Česku najdete v ambulancích praktiků, stomatologů nebo internistů.</> },
  { q: "Zvládnou děti sezení v délce hodiny až dvou?", a: <>Ke každému dítěti přistupuji individuálně. Děti mají nachystaný koberec, hračky, knížky a dobrůtku. Na konci si vyberou malý dárek. Sezení nebývá problém — a děti samy si často říkají o další návštěvu.</> },
  { q: "Můžu být u sezení s dítětem nebo partnerem?", a: <>U malých dětí je přítomnost jednoho rodiče žádoucí, u starších dětí se domluvíme. Adolescenti většinou absolvují sezení sami. Přítomnost partnera má smysl, pokud obtíže výrazně souvisí s vaším vztahem — jinak ne, brání to uvolnění.</> },
  { q: "Kdy bicom nelze použít?", a: <>U žen v prvním trimestru těhotenství a u osob s implantovaným kardiostimulátorem nebo defibrilátorem. Jinak je metoda bez kontraindikací.</> },
];

export default function Home() {
  return (
    <>
      <div className="wash"><div className="l l1" /><div className="l l2" /><div className="l l3" /></div>
      <div className="grain" />

      {/* NAV */}
      <nav className="top">
        <div className="inner">
          <a href="#" className="logo">
            <span className="mark" />
            <span className="logo-full">Vladimíra Nezvalová <span className="sep">·</span> biorezonance</span>
            <span className="logo-short">V. Nezvalová <span className="sep">·</span> biorez.</span>
          </a>
          <ul>
            <li><a href="#sluzby">Co nabízím</a></li>
            <li><a href="#o-mne">O&nbsp;mně</a></li>
            <li><a href="#benefity">Proč si&nbsp;mě vybrat</a></li>
            <li><a href="#reference">Reference</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="#kontakt" className="pill-cta">Objednat se →</a>
          <MobileNav />
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="shell">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Biorezonance · Brno-Bystrc</span>

              {/* MOBILE-ONLY mini cards under eyebrow */}
              <div className="hero-mobile-cards">
                <article className="hero-mini-card">
                  <div className="label">Začít</div>
                  <h4>Konzultace <span className="accent">zdarma.</span></h4>
                  <p>15 min telefonem nebo na WhatsAppu.</p>
                </article>
                <article className="hero-mini-card sage">
                  <div className="label">Otevřeno</div>
                  <h4>Út · Čt · Pá</h4>
                  <p>9—21 hod. Víkend po&nbsp;domluvě.</p>
                </article>
              </div>

              <h1>Vaše obtíže <span className="rose">mají adresu.</span><br />Pomůžu vám&nbsp;ji <span className="sage">najít.</span></h1>
              <p className="lede">Bicom-Optima 2 a sedmnáct let medicínské praxe — v&nbsp;jedné ordinaci. Hledám epicentrum vašich obtíží, ne jen jejich projevy.</p>
              <div className="ctas">
                <a href="#kontakt" className="btn">Objednat se →</a>
                <a href="#o-mne" className="btn-2">Víc o&nbsp;mně →</a>
              </div>
            </div>

            <div className="fan" aria-hidden="true">
              <div className="orbit">
                <span className="satellite" /><span className="satellite s2" /><span className="satellite s3" />
              </div>
              <div className="orbit-center-mobile">
                <div className="device">Bicom-Optima&nbsp;<span className="accent">2</span></div>
                <span className="small">nejnovější model</span>
              </div>
              <article className="petal p1">
                <div className="label">Začít</div>
                <h4>Konzultace <span className="accent">na telefonu.</span></h4>
                <p>Zavolejte nebo napište na WhatsApp +420&nbsp;777&nbsp;874&nbsp;067. Probereme, jestli má smysl jít dál.</p>
              </article>
              <article className="petal p2">
                <div className="label">Co řeším</div>
                <h4>Únava · alergie · <span className="accent">hubnutí · kouření</span></h4>
                <p>Fyzické i&nbsp;psychické obtíže. Od&nbsp;dětí po seniory, akutní i&nbsp;dlouhodobé.</p>
              </article>
              <article className="petal p3">
                <div className="label">Otevírací doba</div>
                <h4>Út · Čt · Pá&nbsp;<span className="accent">9—21&nbsp;hod.</span></h4>
                <p>Ostatní dny a&nbsp;víkend po&nbsp;domluvě. V&nbsp;indikovaných případech ošetření v&nbsp;domácím prostředí — přístroj je&nbsp;mobilní.</p>
              </article>
            </div>
          </div>

          <div className="hero-foot">
            <div className="row">
              <span><b>MUDr.</b> · promovala 1996</span>
              <span><b>5. rok</b> s&nbsp;Bicomem · stovky ošetření</span>
              <span><b>Bicom-Optima 2</b> · nejnovější model</span>
            </div>
            <span><b>OC Javor</b> · Nám. 28.&nbsp;dubna 2 · Brno-Bystrc</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="sluzby">
        <div className="shell">
          <div className="services-head">
            <div>
              <span className="tag-pill">Co nabízím</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Čtyři způsoby, jak <span className="rose">začít.</span></h2>
            </div>
            <div className="right">
              <p>Vlajkou je biorezonance na Bicom-Optima 2. Ostatní služby ji doplňují — někteří chodí jen na konzultaci, jiní na jednorázové odvykání kouření.</p>
            </div>
          </div>

          <ul className="svc-list">
            {services.map((s) => (
              <li key={s.n} className="svc">
                <span className="num-big">{s.n}</span>
                <div>
                  <div className="name">{s.name}</div>
                  <div style={{ fontSize: 12.5, color: "var(--rose-deep)", fontWeight: 600, marginTop: 4 }}>{s.price} <span style={{ color: "var(--muted)", fontWeight: 400 }}>· {s.note}</span></div>
                </div>
                <div className="desc">{s.desc}</div>
                <a href="#kontakt" className="arr" aria-label={`Objednat se na ${s.name}`}>→</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="o-mne">
        <div className="shell">
          <div className="about-grid">
            <div className="about-text">
              <span className="tag-pill">O&nbsp;biorezonanci · o&nbsp;mně</span>
              <h2 className="h-section">Sedmnáct let v&nbsp;klasické medicíně. <span className="rose">Pět&nbsp;s&nbsp;bicomem.</span></h2>
              <div className="body">
                <p>Před patnácti lety jsme v&nbsp;rodině rok a&nbsp;půl řešili obtíž, na kterou neurologie ani urologie nepřišly. Pomohla nám bývalá spolužačka z&nbsp;medicíny — anestezioložka s&nbsp;bicomem. Po třech sezeních obtíž zmizela. Od&nbsp;té doby jsme do&nbsp;bicomu jezdili při každé větší věci.</p>
                <p>Pět let zpátky jsem si k&nbsp;té zkušenosti dodělala školení a&nbsp;začala bicom dělat sama. Předtím sedmnáct let v&nbsp;klasické medicíně — chirurgie, urologie, hospicová péče. Promovala jsem v&nbsp;roce 1996.</p>
                <p>Nepřišla jsem o&nbsp;úctu k&nbsp;tomu, co západní medicína umí. Naopak. Tahle praxe stojí na tom, kde se ty dva světy <strong>doplňují</strong> — ne kde se přebíjejí.</p>
              </div>
              <div className="about-stats">
                <div className="card"><div className="big">17 <span className="accent">let</span></div><div className="lbl">v&nbsp;klasické medicíně</div></div>
                <div className="card"><div className="big">5 <span className="accent">let</span></div><div className="lbl">s&nbsp;Bicom-Optima 2</div></div>
                <div className="card"><div className="big">1996</div><div className="lbl">promoce z&nbsp;medicíny</div></div>
              </div>
            </div>

            <div className="about-side">
              <div className="portrait">
                <span className="badge">MUDr. Vladimíra Nezvalová</span>
                <div className="caption">„Tělo umí mluvit. My ho máme jenom přestat přebíjet." <span>— místo na fotku · doplníme</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRISTUP */}
      <section className="pristup">
        <div className="shell">
          <div className="pristup-card">
            <div className="inner">
              <div>
                <span className="tag-pill">Můj přístup</span>
                <h2>Otevřeně. Bez <span style={{ color: "#dde9c2" }}>velkých slibů.</span></h2>
              </div>
              <div>
                <blockquote>&ldquo;Ke klientům přistupuju otevřeně. Věřím, že jim mohu pomoci nastartovat samoléčící a&nbsp;samoregulační procesy — ale o&nbsp;<span className="accent">výsledku rozhodnou sami</span>. Mou rolí je přijmout své místo v&nbsp;jejich příběhu a&nbsp;správně ho uchopit.&rdquo;</blockquote>
                <cite>
                  <span className="av" />
                  <span><b>MUDr. Vladimíra Nezvalová</b><span>biorezonance · Brno-Bystrc</span></span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITY */}
      <section className="benefity" id="benefity">
        <div className="shell">
          <div className="ben-head">
            <div>
              <span className="tag-pill">Proč si&nbsp;mě vybrat</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Klidný a&nbsp;<span className="rose">otevřený přístup.</span></h2>
            </div>
            <div className="right">
              <p>Tři věci, které u&nbsp;běžné ordinace nedostanete. Žádná fronta, žádná desetiminutovka, žádné &bdquo;objednejte se za pět&nbsp;týdnů".</p>
            </div>
          </div>

          <div className="ben-grid">
            <article className="ben">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3>Lékařka, která <span className="accent">přidala&nbsp;bicom.</span></h3>
              <p>Sedmnáct let v&nbsp;chirurgii, urologii a&nbsp;hospicu mi dalo úctu k&nbsp;tomu, co se dá vyšetřit a&nbsp;operovat. Pět let bicomu mi ukázalo, co ne. Dostanete oba pohledy v&nbsp;jedné ordinaci.</p>
              <div className="pin">MUDr. od roku 1996</div>
            </article>
            <article className="ben">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3>Termíny, <span className="accent">kdy můžete vy.</span></h3>
              <p>Úterý, čtvrtek, pátek od&nbsp;9 do&nbsp;21 hodin. Víkend po domluvě. Když to nejde jinak, ošetření doma — přístroj je&nbsp;mobilní.</p>
              <div className="pin">Večer i&nbsp;víkend</div>
            </article>
            <article className="ben">
              <div className="ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M5 19l2.5-2.5M16.5 7.5 19 5" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Hodina až dvě a&nbsp;půl. Ne <span className="accent">deset&nbsp;minut.</span></h3>
              <p>První návštěva 120–150 minut. Žádné překlápění mezi pacienty, žádná fronta. Není kam pospíchat.</p>
              <div className="pin">1 klient = 1 sezení</div>
            </article>
          </div>
        </div>
      </section>

      {/* REFERENCE */}
      <section className="reference" id="reference">
        <div className="shell">
          <div className="ref-head">
            <div>
              <span className="tag-pill">Reference</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Podívejte se, <span className="rose">co o&nbsp;mně říkají klienti.</span></h2>
              <p style={{ marginTop: 12, fontSize: 14.5, color: "var(--muted)", lineHeight: 1.6, maxWidth: 580 }}>
                Reálné reference s&nbsp;fotkami a&nbsp;jmény doplníme s&nbsp;jejich souhlasem — než přijdou, držím anonymitu.
              </p>
            </div>
          </div>

          <div className="ref-grid">
            {refs.map((r, i) => (
              <article key={i} className={`ref${r.dark ? " dark" : ""}`}>
                <div className="top">
                  <span className={`av ${r.av}`} />
                  <div className="who"><b>Jana Nováková</b><span>{r.note}</span></div>
                </div>
                <blockquote>&ldquo;{r.text[0]}<span className="accent">{r.text[1]}</span>{r.text[2]}&rdquo;</blockquote>
                <div className="bottom"><span>ze zpětné vazby</span><span>—</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="shell">
          <div className="faq-grid">
            <div className="faq-side">
              <span className="tag-pill">Časté dotazy</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Otázky, které <span className="rose">slýchám&nbsp;denně.</span></h2>
              <p className="lede" style={{ marginTop: 20, fontSize: 16 }}>Pokud něco nenajdete, napište na WhatsApp +420&nbsp;777&nbsp;874&nbsp;067 — odpovídám hned, ne za&nbsp;48 hodin přes formulář.</p>

              <div className="tabs" role="tablist">
                <button className="active" type="button">Obecné</button>
                <button type="button">První návštěva</button>
                <button type="button">Pojišťovna</button>
              </div>
              <div className="search">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--muted)" }}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                <input type="search" placeholder="Hledat v dotazech…" />
              </div>
              <div className="pic" aria-hidden="true">
                <div className="annot">Cesta zpátky k&nbsp;sobě začíná otázkou.<span>OC Javor · Brno-Bystrc</span></div>
              </div>
            </div>

            <div className="faq-items">
              {faqs.map((f, i) => (
                <details key={i} className="faq-item" open={i === 0}>
                  <summary><span className="q">{f.q}</span><span className="ico">＋</span></summary>
                  <div className="a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="kontakt">
        <div className="shell">
          <div className="contact-card">
            <div className="contact-head">
              <span className="tag-pill">Kontakt &amp; rezervace</span>
              <h2 className="h-section">Napište. <span className="rose">Nebo&nbsp;rovnou zavolejte.</span></h2>
              <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.65 }}>Nejrychleji se mi dovoláte přes WhatsApp. Telefon zvedám osobně — pokud nestihnu, ozvu se do několika hodin.</p>
              <div className="info">
                <a className="row" href="tel:+420777874067">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
                  </span>
                  <div><b>+420 777 874 067</b><span>WhatsApp · Po–Pá osobně</span></div>
                </a>
                <a className="row" href="mailto:vnbiorezonance@gmail.com">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                  </span>
                  <div><b>vnbiorezonance@&nbsp;[doména TBD]</b><span>odpovídám do 24 hodin</span></div>
                </a>
                <a className="row" href="https://maps.google.com/?q=OC+Javor+Brno+Bystrc" target="_blank" rel="noopener">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  <div><b>OC Javor · Nám. 28. dubna 2</b><span>635 00 Brno-Bystrc</span></div>
                </a>
                <div className="row" style={{ background: "rgba(165,190,120,.15)", borderColor: "rgba(165,190,120,.35)" }}>
                  <span className="ic" style={{ background: "var(--sage)", color: "var(--sage-deep)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2 2" /><path d="M9 2h6" /><path d="M12 5V2" /></svg>
                  </span>
                  <div><b>Út · Čt · Pá &nbsp;9—21 hod.</b><span>Ostatní dny a&nbsp;víkend po&nbsp;domluvě</span></div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="shell">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="logo"><span className="mark" /> MUDr. Vladimíra Nezvalová <span className="sep">·</span> biorezonance</div>
              <p>Solo praxe biorezonance Bicom-Optima 2 v&nbsp;Brně-Bystrci. Přijímám dospělé, dorost i&nbsp;děti od&nbsp;3 let. V&nbsp;indikovaných případech ošetření v&nbsp;domácím prostředí.</p>
              <Newsletter />
            </div>
            <div className="foot-col">
              <h5>Menu</h5>
              <ul>
                <li><a href="#sluzby">Co nabízím</a></li>
                <li><a href="#o-mne">O&nbsp;biorezonanci</a></li>
                <li><a href="#benefity">Proč si&nbsp;mě vybrat</a></li>
                <li><a href="#reference">Reference</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Kontakt</h5>
              <ul>
                <li><a href="tel:+420777874067">+420 777 874 067</a></li>
                <li><a href="https://wa.me/420777874067">WhatsApp</a></li>
                <li><a href="#kontakt">Formulář</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Adresa</h5>
              <ul>
                <li>OC Javor</li>
                <li>Nám. 28. dubna 2</li>
                <li>635 00 Brno-Bystrc</li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Otevřeno</h5>
              <ul>
                <li>Út · Čt · Pá &nbsp;9—21</li>
                <li>Ostatní dny dle domluvy</li>
                <li>Víkend dle domluvy</li>
              </ul>
            </div>
          </div>

          <div className="foot-strip">
            <span>© 2026 MUDr. Vladimíra Nezvalová · IČO&nbsp;[TBD] · <a href="#">Zpracování osobních údajů</a></span>
            <div className="socials">
              {/* Sociální sítě zatím nejsou — Vladimíra zvažuje FB časem */}
              <a href="https://wa.me/420777874067" aria-label="WhatsApp" title="WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
