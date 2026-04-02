"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { searchVerticals, SearchResult } from "@/lib/search";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
    if (value.trim().length > 0) {
      setResults(searchVerticals(value));
    } else {
      setResults([]);
    }
  }, []);

  // Keyboard shortcut: "/" to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      {/* Search input */}
      <div
        className={`relative flex items-center rounded-full border-2 transition-all duration-200 bg-[var(--color-background)] ${
          isFocused
            ? "border-[var(--color-brand)] shadow-lg shadow-blue-500/10"
            : "border-[var(--color-border)] shadow-md hover:shadow-lg"
        }`}
      >
        <div className="pl-5 opacity-40">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Etsi vertailua — sähkö, laina, vakuutus..."
          className="search-input w-full px-4 py-4 text-lg rounded-full bg-transparent placeholder:text-[var(--color-muted)]"
          autoComplete="off"
        />
      </div>

      {/* Search results dropdown */}
      {results.length > 0 && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl shadow-xl overflow-hidden z-40">
          {results.map((result, index) => (
            <a
              key={result.vertical.id}
              href={result.vertical.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`result-enter flex items-center gap-4 px-5 py-4 hover:bg-[var(--color-surface)] transition-colors ${
                index < results.length - 1 ? "border-b border-[var(--color-border)]" : ""
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-2xl flex-shrink-0">
                {result.vertical.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-[var(--color-foreground)]">
                  {result.vertical.name}
                </div>
                <div className="text-sm text-[var(--color-muted)] truncate">
                  {result.vertical.description}
                </div>
              </div>
              <span className="text-sm text-[var(--color-brand)] font-medium whitespace-nowrap flex-shrink-0">
                Siirry &rarr;
              </span>
            </a>
          ))}
        </div>
      )}

      {/* No results */}
      {query.trim().length > 1 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl shadow-xl p-6 text-center z-40 result-enter">
          <p className="text-[var(--color-muted)]">
            Ei tuloksia haulle &ldquo;{query}&rdquo;
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Kokeile esim. sähkö, vakuutus, laina tai liittymä
          </p>
        </div>
      )}
    </div>
  );
}
