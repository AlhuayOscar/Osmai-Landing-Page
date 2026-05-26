import {
  Bungee_Shade,
  Ewert,
  Fascinate_Inline,
  Manrope,
  Monoton,
  Pirata_One,
  Rubik_Glitch,
  Rubik_Moonrocks,
  Space_Grotesk,
  UnifrakturMaguntia,
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

const bungeeShade = Bungee_Shade({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee-shade",
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-monoton",
});

const rubikMoonrocks = Rubik_Moonrocks({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-moonrocks",
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-glitch",
});

const pirataOne = Pirata_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pirata-one",
});

const ewert = Ewert({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ewert",
});

const fascinateInline = Fascinate_Inline({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fascinate-inline",
});

const unifraktur = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-unifraktur",
});

export const metadata = {
  title: "omcreativos | Diseno web, identidad y software",
  description:
    "Landing de omcreativos recreada con una direccion visual clara, modular y lista para completar con fondos finales.",
  icons: {
    icon: "/img/favicon/favicon.png",
    shortcut: "/img/favicon/favicon.png",
    apple: "/img/favicon/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} ${bungeeShade.variable} ${monoton.variable} ${rubikMoonrocks.variable} ${rubikGlitch.variable} ${pirataOne.variable} ${ewert.variable} ${fascinateInline.variable} ${unifraktur.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
