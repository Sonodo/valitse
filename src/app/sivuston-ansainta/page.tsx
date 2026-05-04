import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sivuston ansainta — näin Valitse-verkosto ansaitsee rahaa',
  description: `Miten ${SITE_NAME}-verkosto valitsee tarjoajat, järjestää tarjoukset ja ansaitsee rahaa. Avoin selvitys palkkioista ja siitä mitä emme tee verkostotason linjana.`,
  alternates: { canonical: `${SITE_URL}/sivuston-ansainta` },
  robots: { index: true, follow: true },
};

export default function SivustonAnsaintaPage() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Verkostotason linja
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Sivuston ansainta
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {SITE_NAME} on suomalaisten vertailupalvelujen verkosto. Tämä sivu
            kertoo verkostotason linjan: miten valitsemme tarjoajat, miten
            järjestämme tarjoukset ja miten ansaitsemme rahaa. Vertikaalikohtaiset
            yksityiskohdat (esim. tarkat järjestyskriteerit) löytyvät kunkin
            spoken omalta luotettavuus-sivulta.
          </p>
        </header>

        <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Verkostomme periaatteet</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            {SITE_NAME}-verkostoa operoi <strong>Sonodo</strong> (Y-tunnus
            2887416-4). Koko verkosto noudattaa samoja toimituksellisia
            periaatteita riippumatta siitä, mistä vertikaalista on kyse.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              <span>
                <strong>Pay-for-placement on kielletty.</strong> Yhdelläkään
                spoke-sivulla palkkio ei vaikuta tarjouksen sijoitukseen
                järjestyksessä.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              <span>
                <strong>Kattavuus ennen rahaa.</strong> Sisällytämme listoille
                aina alan merkittävät toimijat — myös ne, joiden kanssa meillä
                ei ole sopimusta.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              <span>
                <strong>Yhtenäinen ulkoasu.</strong> Kumppani- ja
                ei-kumppanitarjoukset näkyvät vertailussa identtisesti — sama
                ulkoasu, sama järjestyslogiikka. Kumppanilinkit merkitään
                hakukoneille teknisellä rel=&quot;sponsored&quot; -määreellä,
                mutta käyttäjälle näkyvä kortti ei poikkea.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-600">✓</span>
              <span>
                <strong>Avoin algoritmi.</strong> Kunkin spoken
                järjestysalgoritmi on kuvattu spoken omalla
                Sivuston ansainta -sivulla.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Miten ansaitsemme rahaa</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Saamme komission osasta verkostoomme kuuluvien spokejen
            kumppaneilta — esimerkiksi sähköyhtiöiltä, lainanantajilta,
            vakuutusyhtiöiltä ja teleoperaattoreilta. Komissio maksetaan vasta
            kun käyttäjä siirtyy kumppanin sivulle ja tekee sopimuksen.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Tämä komissio <strong>ei vaikuta sinun maksamaasi hintaan</strong> eikä
            siihen, järjestetäänkö tarjous korkeammalle vai matalammalle. Ilman
            tätä tulonlähdettä emme voisi ylläpitää maksutonta vertailupalvelua.
          </p>
        </section>

        <section className="mb-10 rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Vertikaalikohtaiset Sivuston ansainta -sivut</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Kukin spoke julkaisee oman, syvällisemmän kuvauksen
            järjestysalgoritmistaan, mukana olevista ja pois jätetyistä
            tarjoajista sekä päivitysvälistään.
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>
              <a
                href="https://valitsesahko.fi/sivuston-ansainta"
                className="text-[#0891B2] underline hover:text-[#0891B2]/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Valitse Sähkö — Lue lisää →
              </a>
            </li>
            <li>
              <a
                href="https://valitselaina.fi/sivuston-ansainta"
                className="text-[#0891B2] underline hover:text-[#0891B2]/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Valitse Laina — Lue lisää →
              </a>
            </li>
            <li>
              <a
                href="https://valitsevakuutus.fi/sivuston-ansainta"
                className="text-[#0891B2] underline hover:text-[#0891B2]/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Valitse Vakuutus — Lue lisää →
              </a>
            </li>
            <li>
              <a
                href="https://valitseliittyma.fi/sivuston-ansainta"
                className="text-[#0891B2] underline hover:text-[#0891B2]/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                Valitse Liittymä — Lue lisää →
              </a>
            </li>
          </ul>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Kysymyksiä?</h2>
          <p className="mt-2 text-slate-700">
            Lue lisää{' '}
            <Link href="/toimituksen-periaatteet" className="text-[#0891B2] underline hover:text-[#0891B2]/80">
              toimituksen periaatteista
            </Link>{' '}
            tai{' '}
            <Link href="/yhteystiedot" className="text-[#0891B2] underline hover:text-[#0891B2]/80">
              ota yhteyttä
            </Link>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
