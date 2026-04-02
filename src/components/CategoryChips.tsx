import { verticals } from "@/data/verticals";

export default function CategoryChips() {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
      {verticals.map((v) => {
        const classes =
          "inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors";

        if (v.live) {
          return (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${classes} hover:bg-[var(--color-border)]`}
            >
              <span className="text-base">{v.icon}</span>
              <span className="text-[var(--color-foreground)]">{v.shortName}</span>
            </a>
          );
        }

        return (
          <span
            key={v.id}
            className={`${classes} opacity-60 cursor-default`}
          >
            <span className="text-base">{v.icon}</span>
            <span className="text-[var(--color-foreground)]">{v.shortName}</span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400">
              tulossa
            </span>
          </span>
        );
      })}
    </div>
  );
}
