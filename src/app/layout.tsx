import type { Metadata } from "next";
import { Playfair_Display, Albert_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const albert = Albert_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vladimíra Nezvalová · Biorezonance Brno",
  description:
    "Biorezonance v Brně — solo praxe Vladimíry Nezvalové. Jemná diagnostika a terapie pro únavu, alergie, migrény a funkční potíže. Hodina ticha, jeden klient, jeden přístroj.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${albert.variable}`}>
      <body>{children}</body>
    </html>
  );
}
