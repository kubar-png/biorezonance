import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";

const services = [
  { n: "01", name: "Vstupní diagnostika", desc: "Šestidesátiminutové měření, ve kterém přístroj prochází vaše tělo a hledá místa zvýšeného napětí. Výstupem je písemný závěr a plán další péče." },
  { n: "02", name: "Terapeutická série", desc: "5–10 sezení, ve kterých přístroj jemnými signály pomáhá tělu obnovit rovnováhu. Doplněk, ne náhrada klasické medicíny." },
  { n: "03", name: "Detox & metabolika", desc: "Cílený program pro chronickou únavu, oslabenou imunitu a zatížení z prostředí. Spolupráce s nutričním poradcem zdarma." },
  { n: "04", name: "Alergie & intolerance", desc: "Testování více než 600 alergenů a potravinových intolerancí. Hotový výsledek na konci jediné návštěvy, bez krve." },
  { n: "05", name: "Konzultace zdarma", desc: "15 minutový online hovor, ve kterém zjistíme, jestli má biorezonance ve vašem případě smysl. Bez závazku, bez prodejních triků." },
];

const refs = [
  { av: "", who: "Tereza V., 38", role: "klientka od 2022 · migrény", quote: ["Po deseti letech denních migrén jsem konečně ", "klidná.", " Nepotřebuji tabletky každý den."], n: "6 sezení", dark: false },
  { av: "b", who: "Markéta H., 41", role: "klientka od 2021 · únava", quote: ["Konečně někdo, kdo se zeptal ", "proč", " — ne jen co mě bolí. To už mi pomohlo samo o sobě."], n: "8 sezení", dark: true },
  { av: "c", who: "Petr K., 52", role: "klient od 2023 · alergie", quote: ["Na jarní alergii beru léky 20 let. Letos jsem je ", "vůbec nepotřeboval.", ""], n: "5 sezení", dark: false },
  { av: "d", who: "Lucie K., 35", role: "klientka od 2023 · úzkost", quote: ["Tady jsem se konečně ", "rozdýchala.", " Doslova. A ne na chvilku."], n: "4 sezení", dark: false },
  { av: "e", who: "Adam D., 44", role: "klient od 2020 · trávení", quote: ["Můj gastroenterolog mě sem poslal. Po třech letech vyšetření, na kterých nic nebylo. ", "Tady na něco přišli.", ""], n: "10 sezení", dark: false },
  { av: "f", who: "Jana M., 60", role: "klientka od 2019 · regenerace", quote: ["Chodím sem dvakrát do roka jako na ", "servis auta.", " Tělo to ocení víc, než si připouštíme."], n: "průběžně", dark: false },
];

const faqs = [
  { q: "Je biorezonance vědecky podložená?", a: <>Biorezonance je doplňková metoda, která pracuje s elektromagnetickými signály těla. Studie v ČR i zahraničí ukazují přínos zejména u funkčních a chronických potíží. Nenahrazuje klasickou medicínu — naopak, <a href="#">spolupracujeme s více než 40 lékaři</a> v Praze.</> },
  { q: "Jak dlouho trvá jedno sezení?", a: <>První návštěva trvá 60 minut a zahrnuje rozhovor, vlastní měření a společný plán další péče. Následná sezení 45 minut.</> },
  { q: "Bolí to? Jsou nějaké vedlejší účinky?", a: <>Vyšetření je naprosto bezbolestné — měření probíhá přes elektrody umístěné na pokožce. Mezi sezeními se vracíte k běžnému životu okamžitě. Vedlejší účinky nejsou popisovány.</> },
  { q: "Kolik sezení budu potřebovat?", a: <>Záleží na obtíži. U akutních problémů často 3–5, u chronických 8–10. Po vstupní diagnostice vám dáme realistický odhad — nikdy „nakupujete kupon" předem.</> },
  { q: "Proplácí to zdravotní pojišťovna?", a: <>Biorezonance není hrazená z veřejného zdravotního pojištění. Některé pojišťovny ji zařazují do bonusových programů — vystavíme vám potřebné potvrzení.</> },
  { q: "Můžu přijít s dětmi?", a: <>Ano, biorezonanci provádíme od 3 let věku. U dětí spolupracujeme úzce s dětským lékařem rodiny.</> },
];

export default function Home() {
  return (
    <>
      <div className="wash"><div className="l l1" /><div className="l l2" /><div className="l l3" /></div>
      <div className="grain" />

      {/* NAV */}
      <nav className="top">
        <div className="inner">
          <a href="#" className="logo"><span className="mark" /> Květina <span className="sep">·</span> klinika</a>
          <ul>
            <li><a href="#sluzby">Co nabízím</a></li>
            <li><a href="#o-mne">O&nbsp;biorezonanci</a></li>
            <li><a href="#benefity">Proč si mě vybrat</a></li>
            <li><a href="#reference">Reference</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="#kontakt" className="pill-cta">Objednat se →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="shell">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Klinika biorezonance · Praha 2 · od 2011</span>
              <h1>Když tělo <span className="rose">šeptá,</span><br />my <span className="sage">posloucháme.</span></h1>
              <p className="lede">Hodina ticha s&nbsp;přístrojem, který rozumí elektromagnetickým signálům těla. A&nbsp;terapeut, který umí přeložit, co bylo slyšet.</p>
              <div className="ctas">
                <a href="#kontakt" className="btn">Objednat se →</a>
                <a href="#" className="btn-2">▶ 90s o nás</a>
              </div>
            </div>

            <div className="fan" aria-hidden="true">
              <div className="orbit">
                <span className="satellite" /><span className="satellite s2" /><span className="satellite s3" />
              </div>
              <span className="moment">Tady &amp; teď.<span>← váš následující krok</span></span>

              <article className="petal p1">
                <div className="label">i. Konzultace</div>
                <h4>15 min, <span className="accent">zdarma.</span></h4>
                <p>Online hovor. Bez prodejních triků — řekneme rovnou, jestli to má smysl.</p>
              </article>
              <article className="petal p2">
                <div className="label">ii. Klientka</div>
                <h4>&ldquo;Po deseti letech <span className="accent">klidná.</span>&rdquo;</h4>
                <p>Tereza V., 38. Migrény z denních na měsíční po šesti sezeních.</p>
              </article>
              <article className="petal p3">
                <div className="label">iii. Co řešíme</div>
                <h4>Únava · alergie · <span className="accent">mlha</span></h4>
                <p>Funkční potíže, kterým klasická vyšetření říkají „nic vám není". A&nbsp;vy víte své.</p>
              </article>
              <article className="petal p4">
                <div className="label">iv. Otevřeno</div>
                <h4>+420 777 234 100</h4>
                <p>Po–Pá 8–18, So po dohodě. Recepce zvedá osobně.</p>
              </article>
            </div>
          </div>

          <div className="hero-foot">
            <div className="row">
              <span><b>14 let</b> praxe</span>
              <span><b>4 200+</b> klientů</span>
              <span><b>★ 4.94 / 5</b> · 312 recenzí</span>
              <span>Certifikovaní terapeuti SBT</span>
            </div>
            <span><b>Praha 2</b> · Trojická 14</span>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="sluzby">
        <div className="shell">
          <div className="services-head">
            <div>
              <span className="tag-pill"><span className="num">01</span> Co nabízím</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Pět <span className="rose">jemných cest</span><br />k&nbsp;rovnováze.</h2>
            </div>
            <div className="right">
              <p>Každá služba má svůj klidný rytmus. Hodina, dvě, nebo série — vždy s&nbsp;časem na rozhovor a&nbsp;přesvědčivý plán dál.</p>
            </div>
          </div>

          <ul className="svc-list">
            {services.map((s) => (
              <li key={s.n} className="svc">
                <span className="num-big">{s.n}</span>
                <div><div className="name">{s.name}</div></div>
                <div className="desc">{s.desc}</div>
                <a href="#" className="arr" aria-label={`Detail služby ${s.name}`}>→</a>
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
              <span className="tag-pill"><span className="num">02</span> O&nbsp;biorezonanci · o&nbsp;mně</span>
              <h2 className="h-section">Klasická lékařka, která <span className="rose">neuměla&nbsp;odpovědět.</span></h2>
              <div className="body">
                <p>Před patnácti lety jsem byla doktorka v&nbsp;rušné pražské nemocnici. Tenkrát se mi v&nbsp;ordinaci scházeli lidi, kterým ve výsledcích nic nebylo — a&nbsp;přesto trpěli. Říkala jsem jim, že jsou „v&nbsp;pořádku", a&nbsp;věděla, že to není pravda.</p>
                <p>Biorezonance pro mě byla zprvu zvědavost, později pokora a&nbsp;dnes přesný nástroj, který doplňuje vše, co jsem se naučila ve škole. Není to alternativa. Je to druhá kapitola.</p>
                <p>Klinika Květina vznikla v&nbsp;roce 2011 kolem jedné myšlenky — že pacient si zaslouží být v&nbsp;ordinaci slyšen aspoň tak dlouho, jak dlouho je sám se svou bolestí doma. Hodina, dvě, někdy i&nbsp;déle.</p>
              </div>
              <div className="about-stats">
                <div className="card"><div className="big">14 <span className="accent">let</span></div><div className="lbl">specializované praxe v ČR</div></div>
                <div className="card"><div className="big">4&nbsp;200<span className="accent">+</span></div><div className="lbl">odbavených klientů</div></div>
                <div className="card"><div className="big">92 <span className="accent">%</span></div><div className="lbl">klientů se k nám vrací</div></div>
              </div>
            </div>

            <div className="about-side">
              <div className="portrait">
                <span className="badge">MUDr. Hana Novotná</span>
                <div className="caption">„Tělo umí mluvit. My máme jenom zpomalit." <span>— rozhovor pro Forbes Zdraví, 2024</span></div>
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
                <span className="tag-pill"><span className="num">03</span> Můj přístup</span>
                <h2>Jemnost není <span style={{ color: "#dde9c2" }}>slabost</span>. Je to&nbsp;přesnost.</h2>
              </div>
              <div>
                <blockquote>&ldquo;V&nbsp;ordinaci nepospícháme. Když přijdete poprvé, dáme si&nbsp;čaj a&nbsp;já si poslechnu i&nbsp;to, co byste lékaři za běžných okolností <span className="accent">neřekli</span>. Tělo si pamatuje všechno — i&nbsp;to, co jste dávno chtěli zapomenout. Naším úkolem je to laskavě přečíst a&nbsp;ukázat cestu&nbsp;dál.&rdquo;</blockquote>
                <cite>
                  <span className="av" />
                  <span><b>MUDr. Hana Novotná</b><span>vedoucí lékařka · interna, biorezonance</span></span>
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
              <span className="tag-pill"><span className="num">04</span> Proč si&nbsp;mě vybrat</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Tři důvody, které <span className="rose">vidíte hned.</span></h2>
            </div>
            <div className="right">
              <p>Tři benefity, na kterých klinika stojí už od&nbsp;roku 2011. Nepřidáváme čtvrtý — radši ty první tři dotahujeme.</p>
            </div>
          </div>

          <div className="ben-grid">
            <article className="ben">
              <div className="ico">⌖</div>
              <h3>Hodina ticha, ne <span className="accent">deset&nbsp;minut</span> ve&nbsp;spěchu.</h3>
              <p>Jedno sezení = jeden klient = jeden přístroj. Žádné překlápění mezi pacienty, žádné překřikování fronty.</p>
              <div className="pin">i. Vždy 60 minut</div>
            </article>
            <article className="ben">
              <div className="ico">✿</div>
              <h3>Bez injekcí. Bez chemie. <span className="accent">Bez vedlejších</span> účinků.</h3>
              <p>Měření přes elektrody, žádné vpichy, žádné léky na předpis. Mezi sezeními se vrátíte k&nbsp;běžnému životu okamžitě.</p>
              <div className="pin">ii. Bezbolestné</div>
            </article>
            <article className="ben">
              <div className="ico">✦</div>
              <h3>Doplněk klasické medicíny, ne <span className="accent">místo&nbsp;ní.</span></h3>
              <p>Pokud potřebujete antibiotika, pošleme vás pro ně. U&nbsp;nás řešíme to, čemu lékaři říkají „funkční potíže".</p>
              <div className="pin">iii. Spolupracujeme</div>
            </article>
          </div>
        </div>
      </section>

      {/* REFERENCE */}
      <section className="reference" id="reference">
        <div className="shell">
          <div className="ref-head">
            <div>
              <span className="tag-pill"><span className="num">05</span> Reference</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>312 lidí, kteří <span className="rose">odešli&nbsp;klidnější.</span></h2>
            </div>
            <div className="ref-meta">
              <span><b>★ 4.94 / 5</b></span>
              <span className="stars">★★★★★</span>
              <span>na Heuréce &amp; Google Reviews</span>
            </div>
          </div>

          <div className="ref-grid">
            {refs.map((r, i) => (
              <article key={i} className={`ref${r.dark ? " dark" : ""}`}>
                <div className="top"><span className={`av ${r.av}`} /><div className="who"><b>{r.who}</b><span>{r.role}</span></div></div>
                <blockquote>&ldquo;{r.quote[0]}<span className="accent">{r.quote[1]}</span>{r.quote[2]}&rdquo;</blockquote>
                <div className="bottom"><span className="stars">★★★★★</span><span>{r.n}</span></div>
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
              <span className="tag-pill"><span className="num">06</span> Časté dotazy</span>
              <h2 className="h-section" style={{ marginTop: 18 }}>Otázky, které <span className="rose">slýcháme&nbsp;denně.</span></h2>
              <p className="lede" style={{ marginTop: 20, fontSize: 16 }}>Pokud něco nenajdete, zavolejte +420&nbsp;777&nbsp;234&nbsp;100 — odpovíme hned, ne&nbsp;za 48&nbsp;hodin přes formulář.</p>

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
                <div className="annot">Cesta zpátky k&nbsp;sobě začíná otázkou.<span>Klinika Květina · Praha 2</span></div>
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
              <span className="tag-pill"><span className="num">07</span> Kontakt &amp; rezervace</span>
              <h2 className="h-section">Napište nám. <span className="rose">Nebo&nbsp;rovnou zavolejte.</span></h2>
              <p style={{ fontSize: 15.5, color: "var(--muted)", lineHeight: 1.65 }}>Odpovíme do 24&nbsp;hodin, většinou rychleji. Telefon zvedá Lenka — naše recepční, ne robot.</p>
              <div className="info">
                <a className="row" href="tel:+420777234100"><span className="ic">☎</span><div><b>+420 777 234 100</b><span>Po–Pá 8:00–18:00 · So po dohodě</span></div></a>
                <a className="row" href="mailto:ahoj@kvetina-klinika.cz"><span className="ic">✉</span><div><b>ahoj@kvetina-klinika.cz</b><span>odpovídáme do 24 hodin</span></div></a>
                <div className="row"><span className="ic">⌂</span><div><b>Trojická 14, Praha 2</b><span>3 min od metra Karlovo náměstí</span></div></div>
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
              <div className="logo"><span className="mark" /> Květina <span className="sep">·</span> klinika</div>
              <p>Klinika biorezonance v&nbsp;Praze 2. Otevřena 2011. Přijímáme dospělé, dorost i&nbsp;děti od&nbsp;3 let.</p>
              <Newsletter />
            </div>
            <div className="foot-col">
              <h5>Menu</h5>
              <ul>
                <li><a href="#sluzby">Co nabízím</a></li>
                <li><a href="#o-mne">O&nbsp;biorezonanci</a></li>
                <li><a href="#benefity">Proč si mě vybrat</a></li>
                <li><a href="#reference">Reference</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Kontakt</h5>
              <ul>
                <li><a href="tel:+420777234100">+420 777 234 100</a></li>
                <li><a href="mailto:ahoj@kvetina-klinika.cz">ahoj@kvetina-klinika.cz</a></li>
                <li><a href="#kontakt">Rezervace</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Adresa</h5>
              <ul>
                <li>Trojická 14</li>
                <li>120 00 Praha 2</li>
                <li>3 min od metra Karlovo&nbsp;n.</li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Otevírací doba</h5>
              <ul>
                <li>Po–Pá &nbsp;8:00–18:00</li>
                <li>So &nbsp;&nbsp;&nbsp;po dohodě</li>
                <li>Ne &nbsp;&nbsp;&nbsp;zavřeno</li>
              </ul>
            </div>
          </div>

          <div className="foot-strip">
            <span>© 2026 Klinika Květina · IČO 123 456 78 · <a href="#">Zpracování osobních údajů</a></span>
            <div className="socials">
              <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.41-2.22C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.4 2.2 8.8 2.2 12 2.2z" /></svg></a>
              <a href="#" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9V15h-2.4v-3h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12h2.6l-.4 3h-2.2v6.9A10 10 0 0 0 22 12z" /></svg></a>
              <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6 1.12 6 0 4.88 0 3.5S1.12 1 2.5 1c1.37 0 2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.34 0h4.37v1.9h.06c.6-1.1 2.1-2.27 4.32-2.27 4.62 0 5.47 3.04 5.47 7v7.37h-4.56V15.4c0-1.69-.03-3.86-2.36-3.86-2.36 0-2.72 1.84-2.72 3.74V22H7.56V8z" /></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
