import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tietosuojaseloste — Valitse",
  description: "Valitse.fi tietosuojaseloste. Lue miten käsittelemme henkilötietoja.",
};

export default function TietosuojaPage() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-2xl mx-auto px-4 py-16 flex-1">
        <Link href="/" className="text-[var(--color-brand)] hover:opacity-80 text-sm mb-8 inline-block">
          &larr; Takaisin etusivulle
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Tietosuojaseloste</h1>

        <div className="space-y-6 text-[var(--color-foreground)] leading-relaxed text-sm">
          <p className="text-[var(--color-muted)]">Päivitetty: 2.4.2026</p>

          <section>
            <h2 className="text-lg font-semibold mb-2">1. Rekisterinpitäjä</h2>
            <p>
              Sonodo — Henri Linnainmaa<br />
              Helsinki, Suomi<br />
              Sähköposti: info@valitse.fi
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Kerättävät tiedot</h2>
            <p>
              Valitse.fi toimii pääosin staattisesti. Hakutoiminto toimii kokonaan selaimessa
              eikä lähetä tietoja palvelimelle. Sivusto saattaa käyttää analytiikkapalveluita
              kävijäliikenteen ymmärtämiseksi. Mahdolliset evästeet kerrotaan erikseen
              evästebannerin yhteydessä.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Evästeet</h2>
            <p>
              Selaimen paikallista tallennustilaa (localStorage) käytetään teemavalinnan
              (tumma/vaalea) tallentamiseen. Mikäli sivustolle lisätään analytiikka- tai
              markkinointievästeitä, niistä ilmoitetaan erillisellä evästebannerin yhteydessä
              ja niihin pyydetään suostumus.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Ulkoiset linkit</h2>
            <p>
              Valitse.fi sisältää linkkejä ulkoisiin vertailusivustoihin. Emme vastaa näiden
              sivustojen tietosuojakäytännöistä. Suosittelemme tutustumaan kunkin palvelun omaan
              tietosuojaselosteeseen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Tietojen siirto EU:n ulkopuolelle</h2>
            <p>
              Mikäli käytämme analytiikkapalveluita, tietoja saatetaan siirtää EU:n tai
              ETA-alueen ulkopuolelle palveluntarjoajan toimesta. Tällöin siirto perustuu
              EU:n hyväksymiin siirtomekanismeihin.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Rekisteröidyn oikeudet</h2>
            <p>
              Sinulla on oikeus pyytää pääsy tietoihisi, oikaista niitä, pyytää niiden
              poistamista sekä rajoittaa niiden käsittelyä. Voit käyttää oikeuksiasi
              ottamalla yhteyttä: info@valitse.fi
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Muutokset tietosuojaselosteeseen</h2>
            <p>
              Pidätämme oikeuden muuttaa tätä tietosuojaselostetta. Muutokset tulevat voimaan
              heti kun päivitetty seloste julkaistaan sivustolla.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Yhteystiedot</h2>
            <p>
              Tietosuojaa koskevissa kysymyksissä voit ottaa yhteyttä: info@valitse.fi
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
