import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kogen.example.com"),
  title: {
    default: "Kōgen 光玄 — Omakase em São Paulo",
    template: "%s · Kōgen 光玄",
  },
  description:
    "Omakase de 18 tempos nos Jardins, São Paulo. Vinte lugares, balcão único, peixe do dia. Reservas pelo site. / Eighteen-course omakase in Jardins, São Paulo.",
  keywords: [
    "omakase",
    "sushi",
    "restaurante japonês",
    "São Paulo",
    "Jardins",
    "kaiseki",
    "fine dining",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    siteName: "Kōgen 光玄",
    title: "Kōgen 光玄 — Omakase em São Paulo",
    description:
      "Dezoito tempos. Um só balcão. Omakase nos Jardins, São Paulo.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0907",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable}`}
    >
      <body className="grain min-h-screen">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
