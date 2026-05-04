import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Building2 } from 'lucide-react';
import { oppaat, getOppaatBySlug, SONODO_PUBLISHER } from '@/data/oppaat';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export function generateStaticParams() {
  return oppaat.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getOppaatBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `${SITE_URL}/oppaat/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [SONODO_PUBLISHER.name],
    },
  };
}

export default async function OpasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getOppaatBySlug(slug);

  if (!guide) {
    notFound();
  }

  const otherGuides = oppaat.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Oppaat', url: '/oppaat' },
    { name: guide.title },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Sonodo',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sonodo',
      url: SITE_URL,
      taxID: '2887416-4',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'FI Y-tunnus',
        value: '2887416-4',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/oppaat/${guide.slug}`,
    },
    inLanguage: 'fi-FI',
  };

  const faqSchema = generateFAQSchema(guide.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        <section className="bg-[#0B1F3F] text-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Oppaat', href: '/oppaat' },
                { label: guide.title },
              ]}
            />
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article>
            <Link
              href="/oppaat"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-[#0891B2] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Takaisin oppaisiin
            </Link>

            <div className="mb-8">
              <span className="inline-block rounded-full bg-[#0891B2]/10 px-3 py-1 text-xs font-semibold text-[#0891B2]">
                {guide.category}
              </span>
              <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                {guide.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {guide.readTime} min lukuaika
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" />
                  Sonodo (Valitse-verkoston operaattori)
                </span>
                <span>
                  Tarkistettu{' '}
                  {new Date(guide.updatedAt).toLocaleDateString('fi-FI')}
                </span>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-[#0891B2] prose-a:no-underline hover:prose-a:underline prose-li:text-slate-700 prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />

            {/* FAQ block */}
            <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Usein kysytyt kysymykset
              </h2>
              <div className="mt-6 divide-y divide-slate-200">
                {guide.faqs.map((faq, i) => (
                  <div key={i} className="py-5">
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      {faq.question}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Editorial note */}
            <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-600">
                Toimituksellinen vastuu Valitse-verkostosta on{' '}
                <strong className="text-slate-900">Sonodolla</strong>{' '}
                (Y-tunnus 2887416-4). {SONODO_PUBLISHER.description} Lue{' '}
                <Link
                  href="/toimituksen-periaatteet"
                  className="text-[#0891B2] hover:underline"
                >
                  toimituksen periaatteet
                </Link>
                .
              </p>
            </section>
          </article>

          {otherGuides.length > 0 && (
            <section className="mt-16 border-t border-slate-200 pt-12">
              <h2 className="mb-8 text-2xl font-bold text-slate-900">
                Lue myös
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {otherGuides.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/oppaat/${other.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="h-0.5 bg-[#0891B2]" />
                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-2 inline-block self-start rounded-full bg-[#0891B2]/10 px-3 py-1 text-xs font-semibold text-[#0891B2]">
                        {other.category}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0891B2] transition-colors">
                        {other.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-2">
                        {other.description}
                      </p>
                      <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {other.readTime} min
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16">
            <div className="rounded-2xl bg-[#0B1F3F] p-8 text-center sm:p-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Aloita vertailu
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-300">
                Valitse-verkosto tarjoaa puolueettomat vertailut kaikille keskeisille kotitalouden sopimuksille.
              </p>
              <Link
                href="/palvelut"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0891B2] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0891B2]/90"
              >
                Tutustu palveluihin
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
