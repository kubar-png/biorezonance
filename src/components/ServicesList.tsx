const items = [
  { n: "01", title: "Jméno služby" },
  { n: "02", title: "Jméno služby" },
  { n: "03", title: "Jméno služby" },
  { n: "04", title: "Jméno služby" },
  { n: "05", title: "Jméno služby" },
];

export default function ServicesList() {
  return (
    <ul className="divide-y divide-[#cfcad8]">
      {items.map((it) => (
        <li
          key={it.n}
          className="grid grid-cols-12 gap-6 py-8 sm:py-10 group"
        >
          <div className="col-span-3 sm:col-span-2">
            <span className="h-display text-[36px] sm:text-[44px] text-[var(--ink)]">
              {it.n}
            </span>
          </div>
          <div className="col-span-9 sm:col-span-4">
            <h3 className="h-display text-[22px] sm:text-[26px] mt-1">
              {it.title}
            </h3>
          </div>
          <div className="col-span-12 sm:col-span-6">
            <p className="text-[14.5px] leading-[1.7] text-[var(--muted)] max-w-[480px]">
              Tady popíšeme službu podrobněji v jednom odstavci. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam.
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
