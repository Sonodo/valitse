import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ScrollText, Scale, Globe } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: `Toimituksen periaatteet — ${SITE_NAME}`,
  description:
    'Toimituksellinen vastuu Valitse-verkostosta on Sonodolla (Y-tunnus 2887416-4). Vertailumetodologia, datalähteet, sponsoroidun sisällön merkintä ja oikaisupolitiikka koko Valitse-verkostossa.',
  alternates: { canonical: `${SITE_URL}/toimituksen-periaatteet` },
};

const NETWORK_BRANDS = [
  { name: 'Valitse', url: 'https://valitse.fi', role: 'Hub / verkoston keskus' },
  {
    name: 'Valitse Sähkö',
    url: 'https://valitsesahko.fi',
    role: 'Sähkösopimukset',
  },
  {
    name: 'Valitse Laina',
    url: 'https://valitselaina.fi',
    role: 'Lainat ja luotot',
  },
  {
    name: 'Valitse Vakuutus',
    url: 'https://valitsevakuutus.fi',
    role: 'Vakuutukset',
  },
  {
    name: 'Valitse Liittymä',
    url: 'https://valitseliittyma.fi',
    role: 'Mobiili- ja laajakaistaliittymät',
  },
];

export default function ToimituksenPeriaatteetPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Toimituksen periaatteet', url: '/toimituksen-periaatteet' },
  ]);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sonodo',
    legalName: 'Sonodo',
    url: SITE_URL,
    taxID: '2887416-4',
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'FI Y-tunnus',
      value: '2887416-4',
    },
    description:
      'Sonodo on Valitse-vertailupalveluverkoston operaattori. Verkostoon kuuluvat valitse.fi, valitsesahko.fi, valitselaina.fi, valitsevakuutus.fi ja valitseliittyma.fi.',
    knowsAbout: [
      'Sähkösopimusten vertailu',
      'Lainavertailu ja todelliset vuosikorot',
      'Vakuutustuotteiden vertailu',
      'Mobiili- ja laajakaistaliittymien vertailu',
      'Kuluttajansuoja ja vertailupalveluiden läpinäkyvyys',
    ],
    brand: NETWORK_BRANDS.map((b) => ({
      '@type': 'Brand',
      name: b.name,
      url: b.url,
    })),
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'FI',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Toimituksen periaatteet' }]} />

        <section className="mb-12 mt-6">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0891B2]/10">
            <ScrollText className="h-8 w-8 text-[#0891B2]" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1F3F] sm:text-4xl lg:text-5xl">
            Toimituksen periaatteet
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Avoimet periaatteet, jotka ohjaavat Valitse-verkoston
            vertailutoimintaa: vertailumetodologia, datalähteet,
            kaupallisten yhteistyökumppanien merkintä ja oikaisupolitiikka.
          </p>
        </section>

        {/* Toimituksellinen vastuu */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-[#0B1F3F]">
            Toimituksellinen vastuu
          </h2>
          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Toimituksellinen vastuu Valitse-verkoston sisällöstä on{' '}
              <strong className="text-slate-900">Sonodolla</strong> (Y-tunnus
              2887416-4), joka toimii koko verkoston operaattorina.
            </p>
            <p>
              Valitse-verkoston vertailumetodologia päivitetään säännöllisesti.
              Jokainen rankkauskriteeri on ennalta määritelty ja dokumentoitu,
              ja datan tuoreutta seurataan mittareilla. Hintatieto kerätään
              automaattisesti palveluntarjoajien lähteistä, normalisoidaan ja
              päivitetään vertikaalikohtaisella rytmillä.
            </p>
            <p>
              Toimituksellinen ja kaupallinen toiminto on erotettu toisistaan:
              affiliate-yhteistyö ei vaikuta vertailutulosten järjestykseen,
              eikä yksittäisellä yhteistyökumppanilla ole oikeutta tarkistaa
              tai muuttaa toimituksellista sisältöä ennen sen julkaisua.
            </p>
          </div>
        </section>

        {/* Vertailumetodologia */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-[#0B1F3F]">
            1. Vertailumetodologia
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Valitse-verkoston rankkaukset perustuvat <strong>objektiivisiin,
              vertikaalikohtaisiin kriteereihin</strong>. Sama metodologia
              koskee jokaista palveluntarjoajaa saman alan sisällä, eikä
              kaupallinen yhteistyö nosta tuotetta korkeammalle listalla.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Sähkö</strong>: vuosikustannus annetulla
                kulutuksella, sopimustyyppi (kiinteä/pörssi/hybridi),
                sopimusaika, irtisanomisehdot.
              </li>
              <li>
                <strong>Laina</strong>: todellinen vuosikorko (TVK),
                maksuajan vaikutus kokonaiskustannukseen, lyhennysjousto,
                ennenaikaisen takaisinmaksun ehdot.
              </li>
              <li>
                <strong>Vakuutus</strong>: vuosihinta määritellyllä
                kohteella, kattavuus, omavastuu, korvauspäätösten saatavuus.
              </li>
              <li>
                <strong>Liittymä</strong>: 24 kk kokonaiskustannus, datapaketin koko, nopeus, sopimuksen joustavuus.
              </li>
            </ul>
            <p>
              Tarkemmat kriteerit ja painotukset löydät{' '}
              <Link
                href="/menetelma"
                className="text-[#0891B2] hover:underline"
              >
                menetelmäsivulta
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Sponsoroitu sisältö */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-[#0B1F3F]">
            2. Sponsoroitu sisältö ja affiliate-yhteistyö
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Valitse-verkosto rahoittuu pääosin <strong>affiliate-yhteistyöllä</strong>:
              saamme palkkion, jos käyttäjä siirtyy sivustolta yhteistyökumppanin
              palveluun ja tekee sopimuksen. Tämä ei vaikuta vertailutulosten
              järjestykseen.
            </p>
            <p>
              Käytämme <strong>verkostonlaajuista sivustotason avoimuuslauseketta</strong>:
              jokaisella verkoston sivustolla on selkeä maininta affiliate-tulomallista.
              Affiliate-linkit merkitään HTML-tasolla{' '}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
                rel=&quot;sponsored&quot;
              </code>{' '}
              -attribuutilla, kuten Googlen ohjeistus edellyttää.
            </p>
            <p>
              Yksittäisiä tuotteita ei merkitä &quot;Mainos&quot;-tagilla, koska kaikki
              samaan kategoriaan kuuluvat tuotteet käsitellään samalla logiikalla
              riippumatta yhteistyösuhteesta.
            </p>
          </div>
        </section>

        {/* Datan päivitysrytmi */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-[#0B1F3F]">
            3. Datan päivitysrytmi
          </h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-4 py-3">Vertikaali</th>
                  <th className="px-4 py-3">Päivitysrytmi</th>
                  <th className="px-4 py-3">Lähde</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium">Sähkön spot-hinnat</td>
                  <td className="px-4 py-3">15 min</td>
                  <td className="px-4 py-3">Nord Pool</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Sähkön kiinteät hinnat</td>
                  <td className="px-4 py-3">Viikoittain</td>
                  <td className="px-4 py-3">Palveluntarjoajien hinnastot</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Lainakorot</td>
                  <td className="px-4 py-3">Päivittäin</td>
                  <td className="px-4 py-3">Pankkien lainakalkulaattorit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Vakuutusmaksut</td>
                  <td className="px-4 py-3">Päivittäin</td>
                  <td className="px-4 py-3">Vakuutusyhtiöiden tariffit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Liittymähinnat</td>
                  <td className="px-4 py-3">Viikoittain</td>
                  <td className="px-4 py-3">Operaattoreiden hinnastot</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Oikaisupolitiikka */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-[#0B1F3F]">
            4. Reklamaatiot ja oikaisupolitiikka
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Jos kohtaat virheellistä hintatietoa tai sisältövirhettä missä
              tahansa Valitse-verkoston sivustolla, käytä{' '}
              <Link
                href="/yhteystiedot"
                className="text-[#0891B2] hover:underline"
              >
                yhteydenottolomakettamme
              </Link>
              . Käsittelemme palautteet 1–2 arkipäivän kuluessa.
            </p>
            <p>
              Mikäli päivitämme julkaistua artikkelia tai opasta sen jälkeen
              kun se on julkaistu, merkitsemme oikaisun selvästi tekstiin
              ja päivitämme metatietojen modifiointiajan. Pieniä muutoksia
              (esim. typo-korjauksia) ei kuitenkaan merkitä erikseen.
            </p>
          </div>
        </section>

        {/* Valvovat viranomaiset */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-[#0B1F3F]">
            5. Valvovat viranomaiset
          </h2>
          <p className="mb-4 text-slate-700 leading-relaxed">
            Noudatamme suomalaisten valvovien viranomaisten ohjeistuksia
            jokaisella vertikaalilla:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-slate-700">
            <li>
              <strong>Kilpailu- ja kuluttajavirasto (KKV)</strong> — yleinen
              kuluttajansuoja, mainonnan merkitseminen, vertailupalveluiden
              ohjeistukset
            </li>
            <li>
              <strong>Finanssivalvonta (FIN-FSA)</strong> — laina- ja
              vakuutusmainonta, kuluttajien tiedonsaanti
            </li>
            <li>
              <strong>Energiavirasto</strong> — sähkösopimusten myyntiehdot
            </li>
            <li>
              <strong>Traficom</strong> — viestintäpalveluiden mainonta,
              laajakaista- ja liittymätietojen totuudellisuus
            </li>
            <li>
              <strong>Tietosuojavaltuutettu</strong> — GDPR-vaatimukset,
              evästekäytännöt
            </li>
          </ul>
        </section>

        {/* Verkoston brändit */}
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-[#0B1F3F]">
            6. Valitse-verkosto
          </h2>
          <p className="mb-6 text-slate-700 leading-relaxed">
            Valitse-verkostoon kuuluu hub-sivusto valitse.fi ja neljä
            spesialistivertailua, joista jokainen julkaisee oman
            sanaston ja toimituspolitiikkansa.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {NETWORK_BRANDS.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <p className="font-semibold text-slate-900 group-hover:text-[#0891B2]">
                  {brand.name}
                </p>
                <p className="mt-1 text-sm text-slate-500">{brand.role}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Operaattori */}
        <section className="rounded-2xl bg-slate-50 p-8">
          <h2 className="mb-3 text-xl font-bold text-[#0B1F3F]">
            Operaattori
          </h2>
          <div className="space-y-1 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Sonodo</p>
            <p>Y-tunnus: 2887416-4</p>
            <p>
              Yhteydenotot:{' '}
              <Link
                href="/yhteystiedot"
                className="text-[#0891B2] hover:underline"
              >
                yhteystiedot
              </Link>
            </p>
          </div>
        </section>

        {/* Trust pillars */}
        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Scale,
              title: 'Puolueeton',
              desc: 'Sama metodologia jokaiselle palveluntarjoajalle.',
            },
            {
              icon: Shield,
              title: 'Avoin',
              desc: 'Affiliate-yhteistyö merkitty rel=sponsored.',
            },
            {
              icon: Globe,
              title: 'Suomalainen',
              desc: 'Sonodo, Y-tunnus 2887416-4. Suomenkielinen toimitus.',
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-slate-200 bg-white p-5 text-center"
            >
              <pillar.icon className="mx-auto h-8 w-8 text-[#0891B2]" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{pillar.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
