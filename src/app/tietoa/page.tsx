import type { Metadata } from "next";
import Link from "next/link";
import { verticals } from "@/data/verticals";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tietoa — Vertaile",
  description: "Vertaile on riippumaton suomalainen vertailupalvelu. Autamme sinua löytämään parhaat sopimukset.",
};

export default function TietoaPage() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-2xl mx-auto px-4 py-16 flex-1">
        <Link href="/" className="text-blue-500 hover:text-blue-600 text-sm mb-8 inline-block">
          &larr; Takaisin etusivulle
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Tietoa Vertailesta</h1>

        <div className="space-y-6 text-[var(--color-foreground)] leading-relaxed">
          <p>
            <strong>Vertaile</strong> on riippumaton suomalainen vertailupalvelu. Autamme sinua
            löytämään parhaat sopimukset ja palvelut yhdestä paikasta.
          </p>

          <p>
            Tavoitteenamme on tehdä vertailusta mahdollisimman helppoa. Sen sijaan, että joutuisit
            etsimään eri vertailusivustoja erikseen, Vertaile kokoaa kaikki vertailut yhteen paikkaan.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Vertailukategoriat</h2>

          <div className="space-y-4">
            {verticals.map((v) => (
              <div key={v.id} className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{v.icon}</span>
                <div>
                  {v.live ? (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-500 hover:text-blue-600"
                    >
                      {v.name}
                    </a>
                  ) : (
                    <span className="font-semibold text-[var(--color-foreground)] opacity-60">
                      {v.name}
                      <span className="ml-2 text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-0.5 rounded-full">
                        Tulossa
                      </span>
                    </span>
                  )}
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">{v.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">Riippumattomuus</h2>

          <p>
            Vertaile on riippumaton palvelu. Emme suosi mitään palveluntarjoajaa, vaan näytämme
            aina kaikki vaihtoehdot tasapuolisesti. Tavoitteenamme on auttaa suomalaisia tekemään
            parempia päätöksiä vertailemalla.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
