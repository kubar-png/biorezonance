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

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 pt-14 pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6 reveal">
              <h1 className="h-display text-[44px] leading-[1.05] sm:text-[64px] lg:text-[76px]">
                Hlavní nadpis
                <br />
                webové stránky
              </h1>
              <p className="mt-7 text-[17px] sm:text-[19px] leading-[1.55] text-[var(--muted)] max-w-[460px]">
                Tady přivítáme návštěvníky webu a v rychlosti představíme, co
                na webu najdou. Vpravo tvoje fotka.
              </p>
              <a
                href="#kontakt"
                className="btn-pill mt-9"
                aria-label="Objednejte se"
              >
                Objednejte se
              </a>
            </div>
            <div className="lg:col-span-6">
              <HeroShapes />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[var(--lavender)]">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="tag">Co nabízím</span>
              <h2 className="h-display mt-6 text-[40px] sm:text-[52px] lg:text-[60px]">
                Sekce
                <br />
                služby
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ServicesList />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="o-biorezonanci" className="bg-[var(--cream)]">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="tag">About</span>
              <h2 className="h-display mt-6 text-[40px] sm:text-[52px] lg:text-[60px]">
                O biorezonanci / O mě
              </h2>
              <div className="mt-8 space-y-5 text-[15.5px] leading-[1.75] text-[var(--muted)] max-w-[640px]">
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
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <AboutShapes />
            </div>
          </div>
        </div>
      </section>

      {/* PRISTUP */}
      <section className="bg-[var(--lavender)]">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 lg:py-28">
          <span className="tag">Přístup</span>
          <h2 className="h-display mt-6 text-[40px] sm:text-[52px] lg:text-[60px]">
            Sekce &ldquo;Můj přístup&rdquo;
          </h2>
          <div className="mt-10 relative">
            <div className="relative rounded-tr-[180px] rounded-[28px] bg-[var(--slate)] text-[#f3f1ea] p-10 sm:p-16 lg:p-20 overflow-hidden">
              <p className="max-w-[760px] text-[18px] sm:text-[22px] leading-[1.65] font-light">
                Sekce &ldquo;můj přístup&rdquo; nám poslouží k zosobnění webu.
                Do tohoto šedého boxu vymyslíme nějakou citaci od tebe, která
                tě návštěvníkům dobře představí v pár větách. Půjde spíš o
                osobnost, než o faktické věci jako schopnosti atd.
              </p>
              <div className="pointer-events-none absolute -top-12 -right-8 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITY — heading + benefit row pattern repeated 3 times */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 lg:py-28 space-y-24">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="grid grid-cols-12 gap-6 sm:gap-10 items-start"
            >
              <div className="col-span-7">
                <span className="tag">Benefity</span>
                <h2 className="h-display mt-6 text-[26px] sm:text-[40px] lg:text-[52px] leading-[1.05]">
                  Sekce &ldquo;proč si mě<br />vybrat&rdquo;
                </h2>
              </div>
              <div className="col-span-5">
                <h3 className="h-display text-[22px] sm:text-[28px] mb-4">
                  Benefit
                </h3>
                <div className="relative w-[180px] sm:w-[220px]">
                  <BenefitCloud />
                  <p className="relative px-6 py-8 text-center text-[12.5px] sm:text-[13px] leading-[1.55] text-[var(--ink-soft)]">
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
      <section className="bg-[var(--lavender)]">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 lg:py-28">
          <span className="tag">Reference</span>
          <h2 className="h-display mt-6 text-[40px] sm:text-[52px] lg:text-[60px]">
            Sekce referencí
          </h2>

          <div className="mt-12 grid grid-cols-3 border-t border-l border-[#cfcad8]">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="border-r border-b border-[#cfcad8] p-5 sm:p-8 bg-[var(--lavender)] flex flex-col items-center text-center min-h-[380px]"
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
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="tag">FAQ</span>
              <h2 className="h-display mt-6 text-[40px] sm:text-[52px] lg:text-[60px]">
                Sekce
                <br />
                časté dotazy
              </h2>
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion />
            </div>
          </div>
          <div className="mt-20">
            <SoftGradient />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="bg-[var(--lavender)]">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-24 lg:py-28">
          <h2 className="h-display text-[44px] sm:text-[60px] lg:text-[72px] max-w-[760px]">
            Sekce kontakt + formulář
          </h2>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
