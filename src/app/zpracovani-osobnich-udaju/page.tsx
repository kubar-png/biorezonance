import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zpracování osobních údajů",
  description:
    "Informace o zpracování osobních údajů v ordinaci MUDr. Vladimíry Nezvalové, Brno-Bystrc. Co s daty děláme, jak dlouho je držíme, jaká máte práva.",
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
            Tato informace popisuje, jak nakládám s osobními údaji, které mi poskytnete přes kontaktní formulář nebo telefon. Dokument je sepsán v souladu s nařízením GDPR (EU 2016/679).
          </p>
          <p className="meta">Účinnost od 27. května 2026</p>
        </div>

        <article className="legal-body">
          <section>
            <h2>1. Kdo údaje zpracovává</h2>
            <p><strong>MUDr. Vladimíra Nezvalová</strong> - lékařka, biorezonanční terapeutka.</p>
            <ul>
              <li>Adresa ordinace: OC Javor, Náměstí 28. dubna 2, 635 00 Brno-Bystrc</li>
              <li>E-mail: <a href="mailto:vladimira@vnbiorezonance.cz">vladimira@vnbiorezonance.cz</a></li>
              <li>Telefon: <a href="tel:+420777874067">+420 777 874 067</a></li>
            </ul>
            <p>Správce nejmenoval pověřence pro ochranu osobních údajů - není to pro tento rozsah zpracování povinné.</p>
          </section>

          <section>
            <h2>2. Jaké údaje zpracovávám</h2>
            <p>Přes kontaktní formulář na tomto webu shromažďuji:</p>
            <ul>
              <li>jméno a příjmení</li>
              <li>e-mailovou adresu</li>
              <li>telefonní číslo</li>
              <li>datum narození</li>
              <li>popis vašich obtíží a důvodu návštěvy</li>
              <li>údaj o kontraindikacích (kardiostimulátor, těhotenství)</li>
            </ul>
            <p>Údaje o zdravotním stavu jsou tzv. zvláštní kategorií osobních údajů. Zpracovávám je výhradně proto, abych mohla posoudit vhodnost biorezonanční terapie a domluvit s vámi termín.</p>
          </section>

          <section>
            <h2>3. Proč údaje zpracovávám</h2>
            <ul>
              <li><strong>Komunikace a domluvení termínu</strong> - abych vás mohla kontaktovat zpět a domluvit návštěvu.</li>
              <li><strong>Posouzení vhodnosti terapie</strong> - abych mohla vyhodnotit, zda je biorezonance pro vás vhodná a bezpečná.</li>
              <li><strong>Vedení zdravotnické dokumentace</strong> - pokud se stanete mým klientem, ze zákona vedu zdravotnickou dokumentaci.</li>
            </ul>
          </section>

          <section>
            <h2>4. Na základě čeho údaje zpracovávám</h2>
            <ul>
              <li><strong>Souhlas</strong> (čl. 6 odst. 1 písm. a GDPR) - odesláním formuláře dáváte souhlas se zpracováním údajů pro účely kontaktování zpět.</li>
              <li><strong>Plnění smlouvy / poskytování péče</strong> (čl. 6 odst. 1 písm. b GDPR) - jakmile začneme spolupracovat.</li>
              <li><strong>Zákonná povinnost</strong> (čl. 6 odst. 1 písm. c GDPR + zákon č. 372/2011 Sb., o zdravotních službách) - u vedení zdravotnické dokumentace.</li>
            </ul>
          </section>

          <section>
            <h2>5. Jak dlouho údaje držím</h2>
            <ul>
              <li><strong>Pokud se nestanete klientem:</strong> údaje z formuláře smažu nejpozději do 6 měsíců od posledního kontaktu.</li>
              <li><strong>Pokud se stanete klientem:</strong> zdravotnickou dokumentaci uchovávám po dobu stanovenou vyhláškou č. 98/2012 Sb. (zpravidla 10 let od posledního výkonu).</li>
            </ul>
          </section>

          <section>
            <h2>6. Komu údaje předávám</h2>
            <p><strong>Nikomu.</strong> Údaje nepředávám třetím stranám, neprodávám je, ani je nevyužívám k marketingovým účelům. Nezpracovávám je mimo Evropskou unii.</p>
            <p>Výjimkou jsou pouze případy, kdy mi to ukládá zákon (např. orgány činné v trestním řízení nebo zdravotní pojišťovna při zákonné kontrole).</p>
          </section>

          <section>
            <h2>7. Cookies a analytika</h2>
            <p>Tento web nepoužívá žádné analytické ani marketingové cookies. Nesleduji vaše chování, neprovozuji remarketing ani profilování. Web je hostován na platformě Vercel, která může ukládat technické logy o přístupu (IP adresa, čas přístupu) z důvodu bezpečnosti - tyto údaje neukládám ani nezpracovávám já.</p>
          </section>

          <section>
            <h2>8. Vaše práva</h2>
            <p>V souvislosti se zpracováním vašich údajů máte tato práva:</p>
            <ul>
              <li><strong>Právo na přístup</strong> - vědět, jaké údaje o vás vedu.</li>
              <li><strong>Právo na opravu</strong> - chybné údaje opravit.</li>
              <li><strong>Právo na výmaz</strong> („být zapomenut") - s výjimkou údajů, které musím ze zákona uchovat.</li>
              <li><strong>Právo na omezení zpracování</strong>.</li>
              <li><strong>Právo na přenositelnost údajů</strong>.</li>
              <li><strong>Právo vznést námitku</strong> proti zpracování.</li>
              <li><strong>Právo odvolat souhlas</strong> kdykoli s účinkem do budoucna.</li>
              <li><strong>Právo podat stížnost</strong> u Úřadu pro ochranu osobních údajů (<a href="https://www.uoou.cz" target="_blank" rel="noopener">uoou.cz</a>).</li>
            </ul>
            <p>Pro uplatnění jakéhokoli práva mě stačí kontaktovat na <a href="mailto:vladimira@vnbiorezonance.cz">vladimira@vnbiorezonance.cz</a> nebo na telefonu <a href="tel:+420777874067">+420 777 874 067</a>. Odpovím nejpozději do 30 dnů.</p>
          </section>

          <section>
            <h2>9. Změny tohoto dokumentu</h2>
            <p>Tento dokument mohu v budoucnu aktualizovat. Aktuální verze bude vždy dostupná na této stránce. Datum poslední aktualizace najdete v záhlaví dokumentu.</p>
          </section>
        </article>

        <div className="legal-foot">
          <Link href="/" className="back">← Zpět na úvod</Link>
        </div>
      </div>
    </main>
  );
}
