/**
 * Disclosure copy — shared affiliate-disclosure strings for the Valitse hub.
 *
 * The hub doesn't display per-card pricing — it directs users to spokes.
 * Per-spoke ranking criteria are described on each spoke's own /luotettavuus.
 */

export type DisclosureSiteConfig = {
  siteName: string;
  rankingCriteria: string;
};

export const SITE_CONFIG: DisclosureSiteConfig = {
  siteName: 'Valitse',
  rankingCriteria: 'palvelukohtaisesti — kukin spoke kuvaa oman algoritminsa',
};

export const DISCLOSURE_COPY = {
  badgePartner: 'Kumppanitarjous',
  badgeMarket: 'Markkinahinta',
  ctaPartner: 'Siirry kumppanin sivulle',
  ctaMarket: 'Siirry tarjoajan sivulle',
  barText: 'Valitse-verkoston vertailut sisältävät kumppanitarjouksia',
  barLinkText: 'näin ansaitsemme rahaa',
  partnerTooltip: (siteName: string) =>
    `Tämä on ${siteName}-verkoston kaupallinen kumppani. Saamme palkkion solmituista sopimuksista. Spoke-sivut järjestävät tarjoukset hinnan mukaan, eivät palkkion.`,
  marketTooltip:
    'Tätä tarjoajaa ei makseta esiin nostamisesta.',
} as const;
