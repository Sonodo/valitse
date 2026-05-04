/**
 * Disclosure copy — shared affiliate-disclosure strings for the Valitse hub.
 *
 * Per Chairman directive 2026-05-04: match Sähkövertailu.fi level only.
 * No per-card labels, no above-results banners, no differentiated CTA text.
 * Disclosure lives on /sivuston-ansainta and via rel="sponsored" on outbound links.
 *
 * The hub doesn't display per-card pricing — it directs users to spokes.
 * Per-spoke ranking criteria are described on each spoke's own /sivuston-ansainta.
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
  /** Uniform CTA text — same regardless of partner status. */
  cta: 'Siirry tarjoajan sivulle',
  /** Footer link text to /sivuston-ansainta. */
  footerLinkLabel: 'Sivuston ansainta',
} as const;
