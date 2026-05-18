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
  title: "MUDr. Vladimíra Nezvalová · Biorezonance Bicom-Optima 2 · Brno-Bystrc",
  description:
    "Biorezonance v Brně-Bystrci na přístroji Bicom-Optima 2. Lékařka se sedmnácti lety praxe v chirurgii, urologii a hospicu. Pro fyzické i psychické obtíže, děti od 3 let. Út, čt, pá 9–21.",
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
