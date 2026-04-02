import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://vertaile.fi"),
  title: "Vertaile — Vertaa hintoja ja löydä paras sopimus",
  description:
    "Suomen kattavin vertailupalvelu. Vertaa sähkö-, vakuutus-, laina-, puhelin- ja laajakaistasopimuksia yhdestä paikasta.",
  openGraph: {
    title: "Vertaile — Vertaa hintoja ja löydä paras sopimus",
    description:
      "Suomen kattavin vertailupalvelu. Vertaa sähkö-, vakuutus-, laina-, puhelin- ja laajakaistasopimuksia yhdestä paikasta.",
    url: "https://vertaile.fi",
    siteName: "Vertaile",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vertaile — Vertaa ja säästä",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vertaile.fi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vertaile",
    url: "https://vertaile.fi",
    description:
      "Suomen kattavin vertailupalvelu. Vertaa sähkö-, vakuutus-, laina-, puhelin- ja laajakaistasopimuksia yhdestä paikasta.",
  };

  return (
    <html lang="fi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark'||(!localStorage.getItem('theme')&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
