import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-[var(--color-muted)]">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Link href="/tietoa" className="hover:text-[var(--color-foreground)] transition-colors">
          Tietoa Valitsesta
        </Link>
        <span className="opacity-30">&middot;</span>
        <Link href="/miten-toimimme" className="hover:text-[var(--color-foreground)] transition-colors">
          Miten toimimme
        </Link>
        <span className="opacity-30">&middot;</span>
        <Link href="/tietosuoja" className="hover:text-[var(--color-foreground)] transition-colors">
          Tietosuoja
        </Link>
        <span className="opacity-30">&middot;</span>
        <Link href="/kayttoehdot" className="hover:text-[var(--color-foreground)] transition-colors">
          Käyttöehdot
        </Link>
      </div>
      <p className="mt-3 opacity-70">&copy; 2026 Valitse — Sonodo</p>
    </footer>
  );
}
