import type { Metadata } from "next";
import Link from "next/link";
import { verticals } from "@/data/verticals";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sivukartta — Vertaile",
  description: "Vertaile.fi sivukartta. Kaikki vertailukategoriat ja sivut.",
};

export default function SivukarttaPage() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-2xl mx-auto px-4 py-16 flex-1">
        <Link href="/" className="text-blue-500 hover:text-blue-600 text-sm mb-8 inline-block">
          &larr; Takaisin etusivulle
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Sivukartta</h1>

        <div className="space-y-8 text-[var(--color-foreground)]">
          <section>
            <h2 className="text-lg font-semibold mb-3">Sivut</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-500 hover:text-blue-600">Etusivu</Link>
              </li>
              <li>
                <Link href="/tietoa" className="text-blue-500 hover:text-blue-600">Tietoa</Link>
              </li>
              <li>
                <Link href="/tietosuoja" className="text-blue-500 hover:text-blue-600">Tietosuojaseloste</Link>
              </li>
              <li>
                <Link href="/kayttoehdot" className="text-blue-500 hover:text-blue-600">Käyttöehdot</Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Vertailukategoriat</h2>
            <ul className="space-y-3">
              {verticals.map((v) => (
                <li key={v.id} className="flex items-center gap-3">
                  <span className="text-xl">{v.icon}</span>
                  <div>
                    {v.live ? (
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 font-medium"
                      >
                        {v.name}
                      </a>
                    ) : (
                      <span className="font-medium text-[var(--color-foreground)] opacity-60">
                        {v.name}
                        <span className="ml-2 text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full">
                          Tulossa
                        </span>
                      </span>
                    )}
                    <p className="text-sm text-[var(--color-muted)]">{v.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
