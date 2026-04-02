import type { Metadata } from "next";
import Link from "next/link";
import { verticals } from "@/data/verticals";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tietoa — Valitse",
  description: "Valitse on puolueeton suomalainen vertailupalvelu. Autamme sinua löytämään parhaat sopimukset.",
};

export default function TietoaPage() {
  const coreVerticals = verticals.filter((v) => v.core);
  const otherVerticals = verticals.filter((v) => !v.core);

  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-2xl mx-auto px-4 py-16 flex-1">
        <Link href="/" className="text-[var(--color-brand)] hover:opacity-80 text-sm mb-8 inline-block">
          &larr; Takaisin etusivulle
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Tietoa Valitsesta</h1>

        <div className="space-y-6 text-[var(--color-foreground)] leading-relaxed">
          <p>
            <strong>Valitse</strong> on puolueeton suomalainen vertailupalvelu. Autamme sinua
            vertailemaan ja valitsemaan parhaat sopimukset yhdestä paikasta — ilmaiseksi.
          </p>

          <p>
            Kokoamme sähkö-, laina-, vakuutus- ja puhelinliittymävertailut yhteen,
            jotta sinun ei tarvitse etsiä tietoja kymmeniltä eri sivustoilta. Näytämme
            aina kaikki vaihtoehdot tasapuolisesti.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Vertailupalvelut</h2>

          <div className="space-y-4">
            {coreVerticals.map((v) => (
              <div key={v.id} className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{v.icon}</span>
                <div>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--color-brand)] hover:opacity-80"
                  >
                    {v.name}
                  </a>
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">{v.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">Muut palvelut</h2>

          <div className="space-y-4">
            {otherVerticals.map((v) => (
              <div key={v.id} className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{v.icon}</span>
                <div>
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--color-brand)] hover:opacity-80"
                  >
                    {v.name}
                  </a>
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">{v.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">Riippumattomuus ja läpinäkyvyys</h2>

          <p>
            Valitse on riippumaton palvelu. Emme suosi mitään palveluntarjoajaa, vaan näytämme
            aina kaikki vaihtoehdot tasapuolisesti. Lue lisää{" "}
            <Link href="/miten-toimimme" className="text-[var(--color-brand)] hover:opacity-80">
              miten toimimme
            </Link>.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
