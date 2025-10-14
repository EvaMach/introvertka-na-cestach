import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Intro from "./_components/intro";
import Container from "./_components/container";

const monteserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Introvertka na cestách`,
  description: `Průvodce a deník z cest. Tipy na solo cestování, trekkování, camping a dobrodružství v přírodě bez příkras.`,
  keywords: [
    "introvertka na cestách",
    "solo cestování",
    "trekking průvodce",
    "hiking Skandinávie",
    "outdoor blog",
    "cestovní deník",
    "kungsleden průvodce česky",
    "švédsko trekking",
    "sama na cestách",
    "trekkingové trasy",
  ],
  authors: [{ name: "Eva Machová" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://introvertkanacestach.cz/",
    siteName: "Introvertka na cestách",
    title: "Introvertka na cestách",
    description: "O tichém cestování bez příkras a s respektem k přírodě.",
    locale: "cs_CZ",
    images: [
      {
        url: "https://introvertkanacestach.cz/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Introvertka na cestách logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: "https://introvertkanacestach.cz/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={monteserrat.className}>
        <div className="min-h-screen">
          <main>
            <Container>
              <Intro />
              {children}
            </Container>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
