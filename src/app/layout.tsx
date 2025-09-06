import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Intro } from "./_components/intro";
import Container from "./_components/container";

const monteserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Introvertka na cestách`,
  description: `O tichém cestování bez příkras a s respektem k přírodě.`,
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
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
