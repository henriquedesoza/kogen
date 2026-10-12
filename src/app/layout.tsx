import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import "./globals.css";

// same font pair as the other Sites projects (loja, site-clinica, portfolio-dev, landing-financeiro)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="grain min-h-screen">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
