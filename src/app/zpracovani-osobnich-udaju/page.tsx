import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zpracování osobních údajů",
  description:
    "Jak nakládám s údaji z kontaktního formuláře a s cookies na webu vnbiorezonance.cz. Stručně a srozumitelně, v souladu s GDPR.",
  alternates: { canonical: "/zpracovani-osobnich-udaju" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <div className="shell">
        <div className="legal-head">
          <Link href="/" className="back">← Zpět na úvod</Link>
          <span className="tag-pill">Ochrana soukromí</span>
          <h1>Zpracování <span className="rose">osobních údajů.</span></h1>
          <p className="lede">
            Krátké a srozumitelné shrnutí toho, jak nakládám s údaji, které mi pošlete přes kontaktní formulář, a s cookies na tomto webu. V souladu s nařízením GDPR (EU 2016/679).
          </p>
          <p className="meta">Účinnost od 11. června 2026</p>
        </div>

        <article className="legal-body">
          <section>
            <h2>1. Kdo údaje zpracovává</h2>
            <p><strong>MUDr. Vladimíra Nezvalová</strong> - lékařka, biorezonanční terapeutka.</p>
            <ul>
              <li>IČO: 29665043</li>
              <li>Adresa ordinace: OC Javor, Náměstí 28. dubna 2, 635 00 Brno-Bystrc</li>
              <li>E-mail: <a href="mailto:vladimira@vnbiorezonance.cz">vladimira@vnbiorezonance.cz</a></li>
              <li>Telefon: <a href="tel:+420777874067">+420 777 874 067</a></li>
            </ul>
          </section>

          <section>
            <h2>2. Údaje z kontaktního formuláře</h2>
            <p>Když mi přes formulář na webu napíšete, dostanu od vás:</p>
            <ul>
              <li>jméno a příjmení,</li>
              <li>datum narození,</li>
              <li>e-mail a telefon,</li>
              <li>čeho se to týká a co byste chtěl/a řešit,</li>
              <li>případné kontraindikace, které zaškrtnete (kardiostimulátor, těhotenství).</li>
            </ul>
            <p>Tyto údaje používám jen ke dvěma věcem: abych se vám mohla ozvat zpět a domluvit termín, a abych posoudila, jestli je pro vás biorezonance vhodná a bezpečná (k tomu slouží údaj o kontraindikacích). Něco z toho se může týkat vašeho zdraví - zpracovávám to výhradně na základě vašeho souhlasu, který mi dáváte odesláním formuláře. Souhlas můžete kdykoli odvolat.</p>
          </section>

          <section>
            <h2>3. Jak dlouho údaje držím</h2>
            <p>Jen po nezbytně nutnou dobu. Pokud se neozvete zpět nebo nezačneme spolupracovat, údaje z formuláře smažu nejpozději do 6 měsíců od posledního kontaktu. Pokud spolupracovat začneme, držím je po dobu naší spolupráce.</p>
          </section>

          <section>
            <h2>4. Komu se údaje dostanou</h2>
            <p>Vaše údaje <strong>neprodávám</strong> a nevyužívám k marketingu. Technicky se k nim dostanou jen služby, na kterých web a komunikace běží: zprávu z formuláře mi doručuje e-mailová služba Resend a web je provozován na platformě Vercel. Obě fungují pouze jako zpracovatelé - data nepoužívají pro sebe. Dál je nikomu nepředávám, s výjimkou případů, kdy mi to ukládá zákon.</p>
          </section>

          <section>
            <h2>5. Cookies a analytika</h2>
            <p>Tento web nepoužívá žádné analytické ani marketingové cookies. Nesleduji vaše chování, nedělám remarketing ani profilování. Platforma Vercel, na které web běží, může z bezpečnostních důvodů ukládat technické logy o přístupu (IP adresa, čas přístupu) - ty já neukládám ani nezpracovávám.</p>
          </section>

          <section>
            <h2>6. Vaše práva</h2>
            <p>Ve vztahu k vašim údajům máte právo:</p>
            <ul>
              <li>vědět, jaké údaje o vás vedu, a získat k nim přístup,</li>
              <li>nechat si chybné údaje opravit,</li>
              <li>nechat údaje smazat („být zapomenut"),</li>
              <li>omezit jejich zpracování nebo vznést námitku,</li>
              <li>kdykoli odvolat souhlas s účinkem do budoucna,</li>
              <li>podat stížnost u Úřadu pro ochranu osobních údajů (<a href="https://www.uoou.cz" target="_blank" rel="noopener">uoou.cz</a>).</li>
            </ul>
            <p>Stačí mi napsat na <a href="mailto:vladimira@vnbiorezonance.cz">vladimira@vnbiorezonance.cz</a> nebo zavolat na <a href="tel:+420777874067">+420 777 874 067</a>. Ozvu se nejpozději do 30 dnů.</p>
          </section>

          <section>
            <h2>7. Změny tohoto dokumentu</h2>
            <p>Tento dokument mohu v budoucnu aktualizovat. Aktuální verze je vždy zde a datum účinnosti najdete v záhlaví.</p>
          </section>
        </article>

        <div className="legal-foot">
          <Link href="/" className="back">← Zpět na úvod</Link>
        </div>
      </div>
    </main>
  );
}
