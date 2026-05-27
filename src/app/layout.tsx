import type { Metadata, Viewport } from "next";
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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://vnbiorezonance.vercel.app");
const SITE_NAME = "MUDr. Vladimíra Nezvalová · Biorezonance Brno-Bystrc";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Biorezonance Brno-Bystrc · MUDr. Nezvalová · Bicom-Optima 2",
    template: "%s · MUDr. Nezvalová · Biorezonance Brno",
  },
  description:
    "Biorezonance v Brně-Bystrci. Lékařka MUDr. Nezvalová, 17 let v západní medicíně, Bicom-Optima 2. Alergie, odvykání kouření, akutní obtíže. Děti od 3 let. Út, čt, pá 9-21.",
  keywords: [
    "biorezonance Brno",
    "biorezonance Brno-Bystrc",
    "Bicom-Optima 2",
    "Bicom Brno",
    "MUDr. Nezvalová",
    "biorezonance lékařka",
    "biorezonance alergie",
    "odvykání kouření Brno",
    "biorezonance děti",
    "celostní medicína Brno",
    "biorezonanční terapie",
    "holistická medicína Brno",
    "OC Javor Bystrc",
  ],
  authors: [{ name: "MUDr. Vladimíra Nezvalová" }],
  creator: "MUDr. Vladimíra Nezvalová",
  publisher: "MUDr. Vladimíra Nezvalová",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Biorezonance Brno-Bystrc · MUDr. Vladimíra Nezvalová",
    description:
      "Bicom-Optima 2, 17 let v západní medicíně a 5 let v biorezonanci - v jedné ordinaci v Brně-Bystrci. Hledám příčinu vašich obtíží, ne jen jejich projevy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biorezonance Brno-Bystrc · MUDr. Vladimíra Nezvalová",
    description:
      "Bicom-Optima 2, 17 let v západní medicíně a 5 let v biorezonanci. Alergie, odvykání kouření, akutní obtíže. Děti od 3 let.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f5f0e7",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Biorezonance MUDr. Vladimíra Nezvalová",
    description:
      "Ordinace biorezonance v Brně-Bystrci. Bicom-Optima 2, lékařka se 17 lety praxe v západní medicíně a 5 lety v biorezonanci. Alergie, odvykání kouření, akutní i chronické obtíže, dospělí i děti od 3 let.",
    url: SITE_URL,
    telephone: "+420777874067",
    priceRange: "1 000-2 500 Kč",
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Náměstí 28. dubna 2",
      addressLocality: "Brno",
      addressRegion: "Jihomoravský kraj",
      postalCode: "635 00",
      addressCountry: "CZ",
    },
    geo: { "@type": "GeoCoordinates", latitude: 49.2235, longitude: 16.5161 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Thursday", "Friday"], opens: "09:00", closes: "21:00" },
    ],
    medicalSpecialty: ["AlternativeMedicine", "PreventiveMedicine"],
    areaServed: { "@type": "City", name: "Brno" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/#physician`,
    name: "MUDr. Vladimíra Nezvalová",
    jobTitle: "Lékařka · biorezonanční terapeutka",
    description:
      "17 let praxe v západní medicíně (chirurgie, urologie, hospicová péče). Posledních 5 let provozuje biorezonanční ordinaci na přístroji Bicom-Optima 2.",
    image: `${SITE_URL}/opengraph-image`,
    worksFor: { "@id": `${SITE_URL}/#business` },
    alumniOf: "Lékařská fakulta · promovala 1996",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "cs-CZ",
    publisher: { "@id": `${SITE_URL}/#business` },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Jak dlouho trvá sezení?", acceptedAnswer: { "@type": "Answer", text: "První návštěva 120-150 minut. Kontrolní sezení kolem 90 minut. U dětí první návštěva 60-90 minut, kontrolní hodinka. Akutní ošetření zhruba hodinu." } },
      { "@type": "Question", name: "Kolikrát budu muset přijít?", acceptedAnswer: { "@type": "Answer", text: "Záleží na tom, co spolu řešíme. Eliminace zhruba 3 sezení. Udržovací harmonizace po 3-6 měsících. Akutní alergie 3× po týdnu. Hubnutí 12× po týdnu. Odvykání kouření stačí jednou." } },
      { "@type": "Question", name: "Kolik to stojí?", acceptedAnswer: { "@type": "Answer", text: "První sezení 2 500 Kč (dospělí) / 1 500 Kč (děti). Kontrolní 1 500 Kč / 1 000 Kč. Konzultace 1 500 Kč. Akutní ošetření 1 500 Kč/hod." } },
      { "@type": "Question", name: "Bude to bolet?", acceptedAnswer: { "@type": "Answer", text: "Ne. Můžete cítit brnění nebo mravenčení v drahách, někdy horkost, únavu nebo lehké točení hlavy." } },
      { "@type": "Question", name: "Proč to nehradí pojišťovna?", acceptedAnswer: { "@type": "Answer", text: "To je dotaz na pojišťovnu. V Německu a Švýcarsku je ošetření na Bicomu hrazeno ze zdravotního připojištění - v Česku zatím nikoli." } },
      { "@type": "Question", name: "Proč to nepoužívají všichni lékaři?", acceptedAnswer: { "@type": "Answer", text: "Bicom je registrovaný zdravotnický prostředek. Své místo v klasické západní medicíně si ale hledá těžko - ta nehledá holistický přístup. Dnes už ho ale v Česku najdete v ambulancích praktiků, stomatologů nebo internistů." } },
      { "@type": "Question", name: "Zvládnou děti sezení v délce hodiny až dvou?", acceptedAnswer: { "@type": "Answer", text: "Ke každému dítěti přistupuji individuálně. Děti mají nachystaný koberec, hračky, knížky a dobrůtku. Na konci si vyberou malý dárek. Sezení nebývá problém - a děti samy si často říkají o další návštěvu." } },
      { "@type": "Question", name: "Můžu být u sezení s dítětem nebo partnerem?", acceptedAnswer: { "@type": "Answer", text: "U malých dětí je přítomnost jednoho rodiče žádoucí, u starších dětí se domluvíme. Adolescenti většinou absolvují sezení sami. Přítomnost partnera má smysl, pokud obtíže výrazně souvisí s vaším vztahem - jinak ne, brání to uvolnění." } },
      { "@type": "Question", name: "Kdy Bicom nelze použít?", acceptedAnswer: { "@type": "Answer", text: "U žen v prvním trimestru těhotenství a u osob s implantovaným kardiostimulátorem nebo defibrilátorem. Jinak je metoda bez kontraindikací." } },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${albert.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
