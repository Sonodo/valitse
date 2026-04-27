import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { oppaat } from '@/data/oppaat';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: `Oppaat — ${SITE_NAME}`,
  description:
    'Cross-categorical-vertailuoppaat: sähkö, laina, vakuutus, liittymä — yhteinen tarkistuslista, sopimusten ABC, vuosikellotyökalu ja AI-aikakauden vertailu.',
  alternates: { canonical: `${SITE_URL}/oppaat` },
  openGraph: {
    title: `Oppaat — ${SITE_NAME}`,
    description:
      'Cross-categorical-vertailuoppaat ja toimituksellinen sisältö koko verkostosta.',
    url: `${SITE_URL}/oppaat`,
  },
};

export default function OppaatIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Oppaat', url: '/oppaat' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        <section className="bg-[#0B1F3F] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Oppaat' }]} />
            <div className="mt-6 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                <BookOpen className="h-3.5 w-3.5" />
                Cross-categorical
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Vertailuoppaat
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Sähkö, laina, vakuutus ja liittymä saman katon alla.
                Toimituksellisia oppaita, jotka käyvät läpi yhteisiä päätöksiä
                koko Valitse-verkostossa.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {oppaat.map((guide) => (
              <Link
                key={guide.slug}
                href={`/oppaat/${guide.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-1 bg-[#0891B2]" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 inline-block self-start rounded-full bg-[#0891B2]/10 px-3 py-1 text-xs font-semibold text-[#0891B2]">
                    {guide.category}
                  </span>
                  <h2 className="text-lg font-semibold text-slate-900 group-hover:text-[#0891B2] transition-colors">
                    {guide.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-3">
                    {guide.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {guide.readTime} min
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#0891B2]">
                      Lue opas
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
