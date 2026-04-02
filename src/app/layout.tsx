import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://valitse.fi"),
  title: "Valitse — Vertaile ja valitse paras sopimus",
  description:
    "Puolueeton suomalainen vertailupalvelu. Vertaa sahko-, vakuutus-, laina- ja puhelinliittymasopimuksia yhdesta paikasta. Aina ilmainen.",
  openGraph: {
    title: "Valitse — Vertaile ja valitse paras sopimus",
    description:
      "Puolueeton suomalainen vertailupalvelu. Vertaa sahko-, vakuutus-, laina- ja puhelinliittymasopimuksia yhdesta paikasta.",
    url: "https://valitse.fi",
    siteName: "Valitse",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Valitse — Vertaile ja valitse",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://valitse.fi",
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
    name: "Valitse",
    url: "https://valitse.fi",
    description:
      "Puolueeton suomalainen vertailupalvelu. Vertaa sahko-, vakuutus-, laina- ja puhelinliittymasopimuksia yhdesta paikasta.",
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
