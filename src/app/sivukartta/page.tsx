import type { Metadata } from "next";
import Link from "next/link";
import { verticals } from "@/data/verticals";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sivukartta — Valitse",
  description: "Valitse.fi sivukartta. Kaikki vertailukategoriat ja sivut.",
};

export default function SivukarttaPage() {
  const coreVerticals = verticals.filter((v) => v.core);
  const otherVerticals = verticals.filter((v) => !v.core);

  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-2xl mx-auto px-4 py-16 flex-1">
        <Link href="/" className="text-[var(--color-brand)] hover:opacity-80 text-sm mb-8 inline-block">
          &larr; Takaisin etusivulle
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Sivukartta</h1>

        <div className="space-y-8 text-[var(--color-foreground)]">
          <section>
            <h2 className="text-lg font-semibold mb-3">Sivut</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[var(--color-brand)] hover:opacity-80">Etusivu</Link>
              </li>
              <li>
                <Link href="/tietoa" className="text-[var(--color-brand)] hover:opacity-80">Tietoa Valitsesta</Link>
              </li>
              <li>
                <Link href="/miten-toimimme" className="text-[var(--color-brand)] hover:opacity-80">Miten toimimme</Link>
              </li>
              <li>
                <Link href="/tietosuoja" className="text-[var(--color-brand)] hover:opacity-80">Tietosuojaseloste</Link>
              </li>
              <li>
                <Link href="/kayttoehdot" className="text-[var(--color-brand)] hover:opacity-80">Käyttöehdot</Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Vertailupalvelut</h2>
            <ul className="space-y-3">
              {coreVerticals.map((v) => (
                <li key={v.id} className="flex items-center gap-3">
                  <span className="text-xl">{v.icon}</span>
                  <div>
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-brand)] hover:opacity-80 font-medium"
                    >
                      {v.name}
                    </a>
                    <p className="text-sm text-[var(--color-muted)]">{v.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Muut palvelut</h2>
            <ul className="space-y-3">
              {otherVerticals.map((v) => (
                <li key={v.id} className="flex items-center gap-3">
                  <span className="text-xl">{v.icon}</span>
                  <div>
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-brand)] hover:opacity-80 font-medium"
                    >
                      {v.name}
                    </a>
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
