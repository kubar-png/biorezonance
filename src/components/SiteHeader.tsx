export default function SiteHeader() {
  return (
    <div className="w-full bg-[var(--cream-2)] border-b border-[var(--line)]">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 py-3 flex items-center justify-center">
        <p className="text-[12px] tracking-wide text-[var(--muted)]">
          Vytvořeno ve <span className="font-bold text-[var(--ink)]">WIX</span>
          <span className="ml-1">STUDIO</span>
        </p>
      </div>
    </div>
  );
}
