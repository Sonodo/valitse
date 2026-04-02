import SearchBar from "@/components/SearchBar";
import CategoryChips from "@/components/CategoryChips";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl mx-auto text-center -mt-16">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[var(--color-foreground)]">
            <span className="text-blue-500">V</span>ertaile
          </h1>
          <p className="mt-2 text-[var(--color-muted)] text-base sm:text-lg">
            Vertaa ja säästä — kaikki vertailut yhdestä paikasta
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Category Chips */}
        <CategoryChips />
      </div>

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  );
}
