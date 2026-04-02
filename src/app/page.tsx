import SearchBar from "@/components/SearchBar";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl mx-auto text-center -mt-12">
        {/* Brand mark */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-brand)] mb-5">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <path d="M6 16 L13 24 L26 8" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[var(--color-foreground)]">
            Valitse
          </h1>
          <p className="mt-3 text-[var(--color-muted)] text-base sm:text-lg max-w-md mx-auto">
            Vertaile ja valitse — puolueeton vertailupalvelu
          </p>
        </div>

        {/* Search */}
        <div className="mb-10">
          <SearchBar />
        </div>

        {/* Core comparison verticals */}
        <CategoryCards />

        {/* Trust strip */}
        <div className="trust-strip mt-10 flex items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[var(--color-muted)]">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Puolueeton vertailu</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Aina ilmainen</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm6.5-15v1" />
            </svg>
            <span>Suomalainen palvelu</span>
          </div>
        </div>
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  );
}
