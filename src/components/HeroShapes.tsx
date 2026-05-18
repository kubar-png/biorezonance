export default function HeroShapes() {
  // 6-column x 3-row grid, mirroring the screenshot layout precisely.
  // Each shape is a placeholder (gradient pill / circle / rounded rect).
  return (
    <div className="relative w-full aspect-[1/1.05] max-w-[640px] mx-auto select-none">
      <style>{`
        .g-lav-soft { background: linear-gradient(180deg, #e7e5f0 0%, #d6d3e2 100%); }
        .g-lav-mid  { background: linear-gradient(180deg, #ddd9e7 0%, #b6b2c4 100%); }
        .g-gray     { background: linear-gradient(180deg, #b9b6c2 0%, #a5a1b0 100%); }
        .g-gray-2   { background: linear-gradient(180deg, #c4c1cd 0%, #ada9b8 100%); }
        .g-olive    { background: linear-gradient(180deg, #e3e1d2 0%, #c8c5b0 100%); }
        .g-lemon    { background: linear-gradient(160deg, #e9e6f0 0%, #ede9c8 100%); }
      `}</style>

      <div
        className="absolute inset-0 grid gap-2.5"
        style={{
          gridTemplateColumns: "1fr 1.6fr 1.8fr 0.9fr",
          gridTemplateRows: "1.2fr 1.1fr 1.1fr",
        }}
      >
        {/* ROW 1 */}
        {/* col1: empty white sliver */}
        <div className="bg-[var(--cream)]" />
        {/* col2: tombstone-shape — rounded only at top */}
        <div className="g-lav-soft" style={{ borderRadius: "200px 200px 24px 24px" }} />
        {/* col3: large rounded rect — rounded top + bottom-left big */}
        <div
          className="g-lav-soft"
          style={{ borderRadius: "24px 200px 24px 24px" }}
        />
        {/* col4: tall narrow rectangle, solid gray */}
        <div className="g-gray" style={{ borderRadius: "0 0 0 0" }} />

        {/* ROW 2 */}
        {/* big horizontal pill spans cols 1–3 */}
        <div
          className="col-span-3 g-gray-2"
          style={{ borderRadius: "999px" }}
        />
        {/* circle col4 (olive) */}
        <div className="g-olive" style={{ borderRadius: "9999px" }} />

        {/* ROW 3 */}
        {/* lavender-lemon rectangle (cols 1–2) */}
        <div className="col-span-2 g-lemon" style={{ borderRadius: "24px" }} />
        {/* long horizontal pill (cols 3–4) */}
        <div
          className="col-span-2 g-lav-soft"
          style={{ borderRadius: "999px" }}
        />
      </div>
    </div>
  );
}
