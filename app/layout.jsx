import {
  Manrope,
  Monoton,
  Rubik_Glitch,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monoton",
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-glitch",
});

export const metadata = {
  title: "OMCreativos. Seamos creativos",
  description:
    "OMCreativos crea sitios web, identidad visual y soluciones de software para empresas que quieren mejorar su presencia, vender más y trabajar mejor.",
  keywords: [
    "diseño web",
    "identidad visual",
    "desarrollo web",
    "software a medida",
    "OMCreativos",
  ],
  icons: {
    icon: "/img/favicon/favicon.png",
    shortcut: "/img/favicon/favicon.png",
    apple: "/img/favicon/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} ${monoton.variable} ${rubikGlitch.variable}`}>
        {children}
      </body>
    </html>
  );
}
