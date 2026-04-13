# Vertaile (Valitse Hub) — Status

**Project**: Vertaile — Finnish Comparison Hub (Valitse brand)
**Status**: LIVE (Vercel default URL)
**Health**: GREEN
**GA4**: G-YZJZQWR330 (active)
**Last Updated**: Session #087 — 2026-04-12

## Overview
Central hub for the Valitse comparison platform ecosystem. Acts as the spoke-and-hub center linking to all vertical comparison sites (sähkö, laina, vakuutus, puhelin).

## Current State — LIVE

- **GA4**: G-YZJZQWR330 active
- **GSC**: Verification tag added
- **OG image**: Regenerated (was old/stale)
- **Spoke links**: Updated from unpurchased domains → live Vercel URLs → custom domains (valitsesahko.fi, valitselaina.fi, valitsevakuutus.fi, valitseliittyma.fi)
- **Broken links fixed**, typos corrected throughout
- **lucide-react dependency added**: Was missing, caused build failures

## Recent Changes

### Session #087 — V-brand Logo, Cookie Canonicalization, Valitse-ID Infra (2026-04-12)
- **New V-brand logo deployed to production**: Unified Valitse brand mark live on Vertaile Hub
- **Cookie consent canonicalized**: Single source of truth for GDPR cookie banner across the hub
- **Elämänmuutokset dropdown added**: New navigation dropdown in Vertaile Hub linking to life-change pages
- **Valitse-ID infrastructure provisioned**: Shared Neon Postgres DB + Google OAuth app + AUTH_SECRET set across all Valitse Vercel projects
- **Vercel redeployed**: Production redeploy completed with updated env vars
- **Pending**: Frontend Valitse-ID auth code — login button, token verification, shared user table wiring, session cookie handling

### Session #082 — TypeScript Build Fix (2026-04-09)
- **Fixed TypeScript build error**: Added `window.gtag` type declaration to `CookieConsent.tsx`
- **Pushed to deploy repo**: Sonodo/vertaile — Vercel should rebuild automatically

### Session #080 — Compliance Audit (2026-04-07)
- **Cookie consent added**: GDPR-compliant cookie banner implemented
- **Search improved**: Better fuzzy matching and keyword coverage
- **Nav fixed**: Navigation links corrected across the hub
- **Deployed**: Changes pushed to production

### Session #079 — Link Updates + Fixes (2026-04-07)
- **GA4 G-YZJZQWR330 active**: Tracking confirmed
- **GSC verification tag added**: Google Search Console ready
- **OG image regenerated**: Updated from old version
- **Spoke links updated**: First from unpurchased domains to live Vercel URLs, then to custom domains as they were purchased
- **Broken links fixed**: Various dead links corrected across the site
- **Typos corrected**: Content quality pass
- **lucide-react added**: Missing dependency that was causing build errors

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- Deploy: Vercel

## Next Steps

1. **Wire frontend Valitse-ID auth** — login button, token verification, shared user table, session cookie
2. **Register custom domain** for the hub itself (valitse.fi or similar)
3. **Submit sitemap to Google Search Console** — accelerate indexing
4. **Apply for AdSense** — organic traffic monetization
5. **Add more spoke sites** as verticals launch

## Blockers

- No custom domain yet — hub is on Vercel default URL
- Valitse-ID frontend auth code not yet implemented (infra is ready)
