import HeroShapes from "@/components/HeroShapes";
import DropShape from "@/components/DropShape";
import BenefitCloud from "@/components/BenefitCloud";
import ServicesList from "@/components/ServicesList";
import AboutShapes from "@/components/AboutShapes";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SoftGradient from "@/components/SoftGradient";

const SHELL = "mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-20";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="bg-[var(--cream)]">
        <div className={`${SHELL} pt-16 lg:pt-24 pb-24 lg:pb-32`}>
          <div className="grid md:grid-cols-12 gap-12 md:gap-10 lg:gap-16 items-center">
            <div className="md:col-span-6 reveal">
              <h1 className="h-display text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px] leading-[0.98]">
                Hlavní nadpis
                <br />
                webové stránky
              </h1>
              <p className="mt-8 text-[17px] sm:text-[19px] leading-[1.55] text-[var(--muted)] max-w-[520px]">
                Tady přivítáme návštěvníky webu a v rychlosti představíme, co
                na webu najdou. Vpravo tvoje fotka.
              </p>
              <a
                href="#kontakt"
                className="btn-pill mt-10"
                aria-label="Objednejte se"
              >
                Objednejte se
              </a>
            </div>
            <div className="md:col-span-6">
              <HeroShapes />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="sluzby" className="bg-[var(--lavender)]">
        <div className={`${SHELL} py-24 lg:py-32`}>
          <div className="grid md:grid-cols-12 gap-10 lg:gap-20">
            <div className="md:col-span-4">
              <span className="tag">Co nabízím</span>
              <h2 className="h-display mt-6 text-[44px] sm:text-[60px] lg:text-[72px]">
                Sekce
                <br />
                služby
              </h2>
            </div>
            <div className="md:col-span-8">
              <ServicesList />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="o-biorezonanci" className="bg-[var(--cream)]">
        <div className={`${SHELL} py-24 lg:py-32`}>
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="md:col-span-7">
              <span className="tag">About</span>
              <h2 className="h-display mt-6 text-[44px] sm:text-[60px] lg:text-[72px]">
                O biorezonanci / O&nbsp;mě
              </h2>
              <div className="mt-10 space-y-5 text-[15.5px] leading-[1.75] text-[var(--muted)] max-w-[640px]">
                <p>
                  Tady je prostor pro větší povídání o tobě, o tom co děláš,
                  ideálně sem vymyslíme nějaký příběh, jak ses k tomu dostala
                  apod. – to funguje nejlíp.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.
                </p>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur?
                </p>
              </div>
            </div>
            <div className="md:col-span-5 md:pt-12">
              <AboutShapes />
            </div>
          </div>
        </div>
      </section>

      {/* PRISTUP */}
      <section className="bg-[var(--lavender)]">
        <div className={`${SHELL} py-24 lg:py-32`}>
          <span className="tag">Přístup</span>
          <h2 className="h-display mt-6 text-[44px] sm:text-[60px] lg:text-[72px]">
            Sekce &ldquo;Můj přístup&rdquo;
          </h2>
          <div className="mt-12 relative">
            <div
              className="relative bg-[var(--slate)] text-[#f3f1ea] p-12 sm:p-16 lg:p-24 overflow-hidden"
              style={{ borderRadius: "28px 240px 28px 28px" }}
            >
              <p className="max-w-[820px] text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.55] font-light">
                Sekce &ldquo;můj přístup&rdquo; nám poslouží k zosobnění webu.
                Do tohoto šedého boxu vymyslíme nějakou citaci od tebe, která
                tě návštěvníkům dobře představí v pár větách. Půjde spíš o
                osobnost, než o faktické věci jako schopnosti atd.
              </p>
              <div className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full bg-white/5 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITY */}
      <section id="benefity" className="bg-[var(--cream)]">
        <div className={`${SHELL} py-24 lg:py-32 space-y-24 lg:space-y-32`}>
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="grid grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center"
            >
              <div className="col-span-7">
                <span className="tag">Benefity</span>
                <h2 className="h-display mt-6 text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.02]">
                  Sekce &ldquo;proč si mě<br />vybrat&rdquo;
                </h2>
              </div>
              <div className="col-span-5 flex flex-col items-start lg:items-center">
                <h3 className="h-display text-[26px] sm:text-[32px] lg:text-[40px] mb-5">
                  Benefit
                </h3>
                <div className="relative w-[200px] sm:w-[240px] lg:w-[280px]">
                  <BenefitCloud />
                  <p className="relative px-6 py-10 text-center text-[12.5px] sm:text-[13.5px] leading-[1.55] text-[var(--ink-soft)]">
                    Najdeme ideálně 3 benefity které můžeš nabídnout oproti
                    konkurenci.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REFERENCE */}
      <section id="reference" className="bg-[var(--lavender)]">
        <div className={`${SHELL} py-24 lg:py-32`}>
          <span className="tag">Reference</span>
          <h2 className="h-display mt-6 text-[44px] sm:text-[60px] lg:text-[72px]">
            Sekce referencí
          </h2>

          <div className="mt-14 grid grid-cols-3 border-t border-l border-[#cfcad8]">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="border-r border-b border-[#cfcad8] p-6 sm:p-10 lg:p-14 bg-[var(--lavender)] flex flex-col items-center text-center min-h-[420px] lg:min-h-[480px]"
              >
                <DropShape rotate={(i % 3) * 20 - 10} />
                <p className="mt-7 text-[14.5px] leading-[1.65] text-[var(--ink-soft)] max-w-[260px]">
                  Osobní reference nejlíp funguou s fotkou – máš někoho
                  (přátelé, rodina) kdo by referenci poskytl a nevadilo by mu
                  mít foto na webu?
                </p>
                <p className="mt-6 text-[14.5px] font-semibold tracking-wide">
                  Jméno klienta
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[var(--cream)]">
        <div className={`${SHELL} py-24 lg:py-32`}>
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="md:col-span-5">
              <span className="tag">FAQ</span>
              <h2 className="h-display mt-6 text-[44px] sm:text-[60px] lg:text-[72px]">
                Sekce
                <br />
                časté dotazy
              </h2>
              <div className="mt-12 hidden md:block">
                <SoftGradient />
              </div>
            </div>
            <div className="md:col-span-7">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="bg-[var(--lavender)]">
        <div className={`${SHELL} py-24 lg:py-32`}>
          <h2 className="h-display text-[44px] sm:text-[64px] lg:text-[88px] max-w-[900px]">
            Sekce kontakt + formulář
          </h2>
          <div className="mt-14 max-w-[920px]">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
