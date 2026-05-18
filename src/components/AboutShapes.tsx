export default function AboutShapes() {
  // 3-column x 2-row arrangement matching the screenshot:
  //  row 1: dark-square | big light circle | big light circle (slightly cut on right)
  //  row 2: light shape rounded top-left | light shape with rounded top | cream square
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-[1/0.95] select-none">
      <style>{`
        .a-dark   { background: linear-gradient(180deg, #6e6976 0%, #5a5667 100%); }
        .a-soft   { background: linear-gradient(180deg, #cfccd9 0%, #b9b5c6 100%); }
        .a-soft-2 { background: linear-gradient(180deg, #c9c5d3 0%, #b3afc1 100%); }
        .a-cream  { background: linear-gradient(180deg, #ecead8 0%, #d4d1bd 100%); }
      `}</style>
      <div
        className="absolute inset-0 grid gap-2.5"
        style={{
          gridTemplateColumns: "1fr 1.4fr 1.2fr",
          gridTemplateRows: "1.2fr 1fr",
        }}
      >
        {/* ROW 1 */}
        {/* dark square - very slightly rounded top-left only (almost no rounding visible) */}
        <div className="a-dark" style={{ borderRadius: "12px 0 0 0" }} />
        {/* big circle */}
        <div className="a-soft" style={{ borderRadius: "9999px" }} />
        {/* big circle (right) */}
        <div className="a-soft" style={{ borderRadius: "9999px" }} />

        {/* ROW 2 */}
        {/* rounded top-left only (quarter circle look) */}
        <div
          className="a-soft-2"
          style={{ borderRadius: "9999px 0 0 0" }}
        />
        {/* rounded top corners (half pill bottom) */}
        <div
          className="a-soft"
          style={{ borderRadius: "9999px 9999px 0 0" }}
        />
        {/* cream square */}
        <div className="a-cream" style={{ borderRadius: "12px" }} />
      </div>
    </div>
  );
}
