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
  title: "omcreativos | Diseño web, identidad y software",
  description:
    "Landing de omcreativos recreada con una dirección visual clara, modular y lista para completar con fondos finales.",
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
