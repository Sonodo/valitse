import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_TAGLINE } from '@/lib/constants';
import { generateFAQSchema } from '@/lib/seo';
import HomeContent from './home-content';
import { SiteDisclosureBar } from '@/components/disclosure';

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'fi_FI',
  },
};

/**
 * Visible FAQ block lives in HomeContent (client component, framer-motion accordion).
 * Mirror the Q/A here for FAQPage JSON-LD so search engines see the structured data
 * even though the visible answers are conditionally rendered.
 */
const homepageFaqs = [
  {
    question: 'Mitä Valitse on?',
    answer:
      'Valitse on suomalainen vertailupalveluverkosto, johon kuuluu hub-sivusto valitse.fi ja neljä erikoistunutta vertailusivustoa: Valitse Sähkö, Valitse Laina, Valitse Vakuutus ja Valitse Liittymä. Operaattorina toimii Sonodo (Y-tunnus 2887416-4).',
  },
  {
    question: 'Maksaako vertailu?',
    answer:
      'Ei. Valitse on täysin ilmainen käyttää — ei maksuja, ei rekisteröitymistä, ei sitoumusta. Kaikki vertailupalvelut ovat avoimia kaikille.',
  },
  {
    question: 'Miten tienaatte rahaa?',
    answer:
      'Affiliate-yhteistyöllä: saamme palkkion, jos käyttäjä siirtyy sivustoltamme yhteistyökumppanin palveluun ja tekee sopimuksen. Tämä ei vaikuta vertailutulosten järjestykseen — kaikki palveluntarjoajat saavat sijoituksensa samojen kriteerien perusteella. Lue tarkemmin Toimituksen periaatteet -sivulta.',
  },
  {
    question: 'Onko data tuoretta?',
    answer:
      'Sähkön spot-hinnat päivittyvät 15 minuutin välein, lainakorot ja vakuutusmaksut päivittäin, kiinteät sähköhinnat ja liittymähinnat viikoittain. Tarkat päivitysrytmit on listattu Toimituksen periaatteet -sivulla.',
  },
  {
    question: 'Miten valitsen oikean palvelun?',
    answer:
      'Aloita siitä, mitä haluat vertailla. Sähköön valitsesahko.fi, lainoihin valitselaina.fi, vakuutuksiin valitsevakuutus.fi, liittymiin valitseliittyma.fi. Etusivulta löydät kaikki neljä yhdellä klikkauksella. Lue myös oppaat-osiomme cross-categorical-aiheista.',
  },
];

export default function HomePage() {
  const faqSchema = generateFAQSchema(homepageFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteDisclosureBar />
      <HomeContent />
    </>
  );
}
