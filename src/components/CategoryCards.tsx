import { verticals } from "@/data/verticals";

export default function CategoryCards() {
  const coreVerticals = verticals.filter((v) => v.core);
  const otherVerticals = verticals.filter((v) => !v.core);

  return (
    <div>
      {/* Core comparison verticals — prominent cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
        {coreVerticals.map((v) => (
          <a
            key={v.id}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 p-4 sm:p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-brand)] hover:shadow-md transition-all duration-200"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
              {v.icon}
            </span>
            <span className="text-sm font-semibold text-[var(--color-foreground)]">
              {v.shortName}
            </span>
            <span className="text-xs text-[var(--color-muted)] text-center leading-tight hidden sm:block">
              {v.description}
            </span>
          </a>
        ))}
      </div>

      {/* Other services — compact row */}
      <div className="flex flex-wrap justify-center gap-2 mt-5 max-w-2xl mx-auto">
        {otherVerticals.map((v) => (
          <a
            key={v.id}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-border)] transition-colors"
          >
            <span>{v.icon}</span>
            <span className="text-[var(--color-foreground)]">{v.shortName}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
