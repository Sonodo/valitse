import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Miten Valitse toimii — Valitse",
  description: "Valitse on puolueeton ja ilmainen vertailupalvelu. Lue miten toimimme ja miten ansaitsemme.",
};

export default function MitenToimimme() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="max-w-2xl mx-auto px-4 py-16 flex-1">
        <Link href="/" className="text-[var(--color-brand)] hover:opacity-80 text-sm mb-8 inline-block">
          &larr; Takaisin etusivulle
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[var(--color-foreground)]">
          Miten Valitse toimii
        </h1>

        <div className="space-y-8 text-[var(--color-foreground)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">Puolueeton vertailu</h2>
            <p>
              Valitse näyttää aina kaikki vaihtoehdot tasapuolisesti. Emme piilota
              palveluntarjoajia emmekä nosta maksavia kumppaneita hakutuloksissa.
              Vertailutulokset perustuvat tuotteiden ominaisuuksiin ja hintoihin.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Miten ansaitsemme</h2>
            <p>
              Valitse on sinulle aina ilmainen. Ansaitsemme, kun valitset palveluntarjoajan
              vertailusivustomme kautta ja solmit sopimuksen. Palveluntarjoaja maksaa meille
              välityspalkkion. Tämä ei vaikuta vertailutuloksiin eikä sinulle koituvaan hintaan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Mitä vertailemme</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: "⚡", name: "Sähkösopimukset", desc: "Pörssisähkö, määräaikaiset, toistaiseksi voimassa olevat" },
                { icon: "💰", name: "Lainat", desc: "Asuntolainat, kulutusluotot, autolainat, yritysrahoitus" },
                { icon: "🛡️", name: "Vakuutukset", desc: "Auto-, koti-, matka-, henki- ja lemmikkivakuutukset" },
                { icon: "📱", name: "Puhelinliittymät", desc: "Mobiililiittymät, laajakaistat, 5G-yhteydet" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3 p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-[var(--color-muted)]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Riippumattomuus</h2>
            <p>
              Valitse on suomalainen, riippumaton palvelu. Emme ole minkään pankin,
              vakuutusyhtiön tai energiayhtiön omistuksessa. Toimituksellinen sisältömme
              on erillään kaupallisesta toiminnastamme.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Tietojesi turva</h2>
            <p>
              Hakutoiminto toimii kokonaan selaimessasi — emme lähetä hakutietojasi
              palvelimelle. Keräämme vain välttämättömät analytiikkatiedot palvelun
              kehittämiseksi. Lue lisää{" "}
              <Link href="/tietosuoja" className="text-[var(--color-brand)] hover:opacity-80">
                tietosuojaselosteestamme
              </Link>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
