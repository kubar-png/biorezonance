import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await readFile(join(process.cwd(), "assets/PlayfairDisplay-700.woff"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#c8d9a3 0%,#f7d8d0 100%)",
          fontFamily: "Playfair",
          color: "#16140f",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        VN
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Playfair", data: font, style: "normal", weight: 700 }],
    },
  );
}
