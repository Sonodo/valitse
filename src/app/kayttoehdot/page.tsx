import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Käyttöehdot — Valitse",
  description: "Valitse.fi käyttöehdot.",
};

export default function KayttoehdotPage() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-2xl mx-auto px-4 py-16 flex-1">
        <Link href="/" className="text-[var(--color-brand)] hover:opacity-80 text-sm mb-8 inline-block">
          &larr; Takaisin etusivulle
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">Käyttöehdot</h1>

        <div className="space-y-6 text-[var(--color-foreground)] leading-relaxed text-sm">
          <p className="text-[var(--color-muted)]">Voimassa: 2.4.2026 alkaen</p>

          <section>
            <h2 className="text-lg font-semibold mb-2">1. Palvelun kuvaus</h2>
            <p>
              Valitse.fi on ilmainen ja puolueeton vertailupalvelu, joka auttaa käyttäjiä
              vertailemaan sähkö-, laina-, vakuutus- ja puhelinliittymäsopimuksia sekä
              löytämään muita hyödyllisiä palveluita. Palvelu ohjaa käyttäjät
              asianomaisten vertailusivustojen omille sivuille.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">2. Palvelun käyttö</h2>
            <p>
              Palvelu on ilmainen eikä vaadi rekisteröitymistä. Käyttämällä palvelua
              hyväksyt nämä käyttöehdot.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">3. Ansaintamalli</h2>
            <p>
              Valitse.fi saattaa saada välityspalkkion, kun käyttäjä siirtyy
              vertailusivustomme kautta palveluntarjoajan sivuille ja solmii sopimuksen.
              Tämä ei vaikuta vertailutuloksiin eikä käyttäjälle koituvaan hintaan.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">4. Vastuunrajoitus</h2>
            <p>
              Valitse.fi tarjoaa linkkejä ulkoisiin palveluihin. Emme vastaa ulkoisten
              sivustojen sisällöstä, hinnoittelusta, saatavuudesta tai toiminnallisuudesta.
              Valitse.fi ei anna taloudellista, juridista tai muuta ammatillista neuvontaa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">5. Tietojen tarkkuus</h2>
            <p>
              Pyrimme pitämään sivustolla olevat tiedot ajantasaisina, mutta emme takaa
              tietojen oikeellisuutta tai kattavuutta. Tarkista aina ajantasaiset tiedot
              suoraan palveluntarjoajan sivuilta.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">6. Immateriaalioikeudet</h2>
            <p>
              Valitse.fi:n sisältö, ulkoasu ja koodi ovat tekijänoikeudella suojattuja.
              Sivuston sisällön kopioiminen tai levittäminen ilman lupaa on kielletty.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">7. Ehtojen muuttaminen</h2>
            <p>
              Pidätämme oikeuden muuttaa näitä käyttöehtoja. Muutokset tulevat voimaan
              heti kun päivitetyt ehdot julkaistaan sivustolla.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">8. Sovellettava laki</h2>
            <p>
              Näihin käyttöehtoihin sovelletaan Suomen lakia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">9. Yhteystiedot</h2>
            <p>
              Sonodo — Henri Linnainmaa<br />
              Helsinki, Suomi<br />
              Sähköposti: info@valitse.fi
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
