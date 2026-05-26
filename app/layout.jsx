import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
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
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
