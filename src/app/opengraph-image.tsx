import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "MUDr. Vladimíra Nezvalová · Biorezonance Bicom-Optima 2 · Brno-Bystrc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f5f0e7";
const INK = "#16140f";
const MUTED = "#5e574e";
const ROSE_DEEP = "#a14f42";
const SAGE_DEEP = "#3f5524";
const SAGE = "#c8d9a3";

export default async function OpengraphImage() {
  const fontDisplay = await readFile(
    join(process.cwd(), "assets/PlayfairDisplay-500.woff"),
  );
  const fontDisplayBold = await readFile(
    join(process.cwd(), "assets/PlayfairDisplay-700.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          backgroundImage: [
            "radial-gradient(ellipse 78% 95% at 6% 18%, rgba(165,190,120,0.62) 0%, rgba(165,190,120,0) 62%)",
            "radial-gradient(ellipse 60% 85% at 100% 42%, rgba(247,216,208,0.92) 0%, rgba(247,216,208,0) 60%)",
            "radial-gradient(ellipse 55% 60% at 28% 108%, rgba(200,217,163,0.58) 0%, rgba(200,217,163,0) 62%)",
          ].join(","),
          color: INK,
          fontFamily: "Playfair",
          padding: "56px 72px 64px",
          position: "relative",
        }}
      >
        {/* Decorative dashed orbital arc bleeding off the right edge */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -360,
            width: 820,
            height: 820,
            borderRadius: "50%",
            border: "1px dashed rgba(22,20,15,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -280,
            width: 660,
            height: 660,
            borderRadius: "50%",
            border: "1px dashed rgba(22,20,15,0.07)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 142,
            right: 46,
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: ROSE_DEEP,
            boxShadow: "0 0 18px rgba(247,216,208,0.95)",
            display: "flex",
          }}
        />

        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "-0.005em",
            color: INK,
          }}
        >
          <span>Vladimíra Nezvalová</span>
          <span style={{ color: ROSE_DEEP, fontWeight: 400 }}>·</span>
          <span style={{ color: MUTED }}>biorezonance</span>
        </div>

        {/* HEADLINE — two stacked lines */}
        <div
          style={{
            fontFamily: "Playfair",
            fontSize: 104,
            fontWeight: 500,
            lineHeight: 0.98,
            letterSpacing: "-0.028em",
            margin: "56px 0 0",
            color: INK,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <span>Biorezonance</span>
          </div>
          <div style={{ display: "flex", marginTop: 6 }}>
            <span style={{ color: ROSE_DEEP }}>Brno-Bystrc</span>
          </div>
        </div>

        {/* LEDE */}
        <p
          style={{
            fontSize: 22,
            lineHeight: 1.55,
            color: MUTED,
            fontFamily: "sans-serif",
            margin: "28px 0 0",
            maxWidth: 820,
          }}
        >
          Bicom-Optima 2, sedmnáct let v západní medicíně a pět let v
          biorezonanci. Hledám příčinu vašich obtíží, ne jen jejich projevy.
        </p>

        {/* CARDS — two separate cards with a real gap */}
        <div
          style={{
            marginTop: 56,
            display: "flex",
            gap: 20,
            width: "100%",
          }}
        >
          {/* Hours — sage green (matches .hero-mini-card.sage) */}
          <div
            style={{
              flex: 1,
              background: "rgba(63,85,36,0.94)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 24,
              padding: "26px 30px",
              display: "flex",
              flexDirection: "column",
              boxShadow:
                "0 24px 56px -22px rgba(80,40,30,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: SAGE,
                fontWeight: 700,
                fontFamily: "sans-serif",
              }}
            >
              Otevřeno
            </span>
            <div
              style={{
                fontSize: 30,
                fontWeight: 500,
                marginTop: 10,
                lineHeight: 1.12,
                letterSpacing: "-0.008em",
                color: "#fff",
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <span>Út · Čt · Pá</span>
              <span style={{ color: SAGE }}>9–21 h</span>
            </div>
            <span
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.78)",
                marginTop: 8,
                fontFamily: "sans-serif",
                letterSpacing: "0.005em",
              }}
            >
              Víkend po domluvě
            </span>
          </div>

          {/* Phone — white glass */}
          <div
            style={{
              flex: 1,
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(255,255,255,0.72)",
              borderRadius: 24,
              padding: "26px 30px",
              display: "flex",
              flexDirection: "column",
              boxShadow:
                "0 24px 56px -22px rgba(80,40,30,0.28), inset 0 1px 0 rgba(255,255,255,0.7)",
            }}
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: ROSE_DEEP,
                fontWeight: 700,
                fontFamily: "sans-serif",
              }}
            >
              Telefon · WhatsApp
            </span>
            <div
              style={{
                fontSize: 30,
                fontWeight: 500,
                marginTop: 10,
                lineHeight: 1.12,
                letterSpacing: "-0.008em",
                color: INK,
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <span style={{ color: MUTED }}>+420</span>
              <span>777 874 067</span>
            </div>
            <span
              style={{
                fontSize: 14,
                color: MUTED,
                marginTop: 8,
                fontFamily: "sans-serif",
                letterSpacing: "0.005em",
              }}
            >
              OC Javor · Nám. 28. dubna 2 · Brno-Bystrc
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair", data: fontDisplay, style: "normal", weight: 500 },
        {
          name: "Playfair",
          data: fontDisplayBold,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
