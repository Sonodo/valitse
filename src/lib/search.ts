import { verticals, Vertical } from "@/data/verticals";

/**
 * Normalize Finnish text for matching:
 * - lowercase
 * - trim whitespace
 */
function normalize(text: string): string {
  return text.toLowerCase().trim();
}

/**
 * Check if a keyword fuzzy-matches the query.
 * Supports:
 * - Exact substring match
 * - Start-of-word match
 * - Handles common Finnish character variations (ä/a, ö/o)
 */
function fuzzyMatch(query: string, keyword: string): number {
  const q = normalize(query);
  const k = normalize(keyword);

  if (!q) return 0;

  // Exact match — highest score
  if (k === q) return 100;

  // Keyword starts with query
  if (k.startsWith(q)) return 90;

  // Query starts with keyword (user typed more than the keyword)
  if (q.startsWith(k)) return 80;

  // Keyword contains the query as a substring
  if (k.includes(q)) return 70;

  // Query contains the keyword as a substring
  if (q.includes(k)) return 60;

  // Try without Finnish special chars (ä→a, ö→o)
  const qSimple = q.replace(/ä/g, "a").replace(/ö/g, "o");
  const kSimple = k.replace(/ä/g, "a").replace(/ö/g, "o");

  if (kSimple === qSimple) return 50;
  if (kSimple.startsWith(qSimple)) return 45;
  if (kSimple.includes(qSimple)) return 40;
  if (qSimple.includes(kSimple)) return 35;

  return 0;
}

export interface SearchResult {
  vertical: Vertical;
  score: number;
  matchedKeyword: string;
}

/**
 * Search verticals by query string.
 * Returns matched verticals sorted by relevance score.
 */
export function searchVerticals(query: string): SearchResult[] {
  if (!query || !query.trim()) return [];

  const results: SearchResult[] = [];

  for (const vertical of verticals) {
    let bestScore = 0;
    let bestKeyword = "";

    // Check against vertical name and shortName too
    const allKeywords = [
      ...vertical.keywords,
      vertical.name.toLowerCase(),
      vertical.shortName.toLowerCase(),
    ];

    for (const keyword of allKeywords) {
      const score = fuzzyMatch(query, keyword);
      if (score > bestScore) {
        bestScore = score;
        bestKeyword = keyword;
      }
    }

    if (bestScore > 0) {
      results.push({
        vertical,
        score: bestScore,
        matchedKeyword: bestKeyword,
      });
    }
  }

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);

  return results;
}
