export default function SiteFooter() {
  return (
    <footer className="bg-[var(--slate)] text-[#f3f1ea]">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-16">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#f3f1ea]" />
          <span className="text-[17px] font-bold tracking-tight">
            Logo / název
          </span>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-10 text-[14.5px]">
          <Col title="Menu">
            <a href="#">Co nabízím</a>
            <a href="#o-biorezonanci">O biorezonanci</a>
            <a href="#o-biorezonanci">O biorezonanci</a>
            <a href="#faq">FAQ</a>
          </Col>
          <Col title="Kontakt">
            <a href="tel:123456789">123-456-7890</a>
            <a href="mailto:info@mysite.com">info@mysite.com</a>
            <a href="mailto:info@mysite.com">info@mysite.com</a>
          </Col>
          <Col title="Adresa">
            <p>500 Terry Francine Street.</p>
            <p>San Francisco, CA 94158</p>
            <p>San Francisco, CA 94158</p>
          </Col>
          <Col title="Social">
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </Col>
        </div>

        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[13px] text-white/80">
          <p>Zpracování osobních údajů – napíšu</p>
          <p>© 2035 by JMÉNO</p>
        </div>
      </div>
    </footer>
  );
}

function Col({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-[12px] tracking-[0.18em] uppercase font-bold mb-4">
        {title}
      </p>
      <div className="flex flex-col gap-2 text-white/85">{children}</div>
    </div>
  );
}
