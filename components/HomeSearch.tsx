"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, Sparkles, X } from "lucide-react";

type SearchItem = {
  label: string;
  type: "Name" | "Country" | "Region" | "Category";
  href: string;
  detail: string;
};

type HomeSearchProps = {
  items: SearchItem[];
};

export default function HomeSearch({ items }: HomeSearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const matches = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return items
      .filter((item) => `${item.label} ${item.detail} ${item.type}`.toLowerCase().includes(normalizedQuery))
      .slice(0, 6);
  }, [items, query]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return;

    const exactName = items.find(
      (item) => item.type === "Name" && item.label.toLowerCase() === normalizedQuery,
    );
    const firstMatch = matches[0];
    router.push(exactName?.href ?? firstMatch?.href ?? `/name/${normalizedQuery.replace(/[^a-z0-9-]+/g, "-")}`);
  }

  function clearSearch() {
    setQuery("");
    setSubmitted(false);
  }

  return (
    <div id="search" className="relative mx-auto mt-9 max-w-2xl">
      <form onSubmit={handleSubmit} className="card flex items-center gap-2 bg-white p-2 transition focus-within:border-sage focus-within:ring-4 focus-within:ring-mint">
        <Search aria-hidden="true" className="ml-3 shrink-0 text-slate-400" size={21} />
        <input
          aria-label="Search names, meanings, countries or origins"
          className="min-w-0 flex-1 bg-transparent px-2 py-3 text-base text-ink outline-none placeholder:text-slate-400"
          placeholder="Search a name, meaning, country or origin..."
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setSubmitted(false);
          }}
        />
        {query && (
          <button aria-label="Clear search" className="rounded-lg p-2 text-slate-400 transition hover:bg-mint hover:text-ink" onClick={clearSearch} type="button">
            <X size={18} />
          </button>
        )}
        <button className="shrink-0 rounded-xl bg-ink px-5 py-3 font-semibold text-white transition hover:bg-sage" type="submit">
          Search
        </button>
      </form>

      {query.trim() && (
        <div className="absolute left-0 right-0 top-full z-20 mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 text-left shadow-xl">
          {matches.length > 0 ? (
            <div className="grid gap-1">
              {matches.map((item) => (
                <Link key={`${item.type}-${item.label}`} href={item.href} className="group flex items-center justify-between rounded-xl px-4 py-3 transition hover:bg-mint">
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-sage"><Sparkles size={16} /></span>
                    <span>
                      <span className="block font-bold text-ink">{item.label}</span>
                      <span className="block text-xs text-slate-500">{item.type} · {item.detail}</span>
                    </span>
                  </span>
                  <ArrowRight size={17} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-sage" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-5">
              <p className="text-sm font-semibold text-ink">Name not found</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                We couldn&apos;t find that name. Try another spelling or explore the full collection.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/#categories" className="rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-sage">Explore Names</Link>
                <Link href="/" className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:bg-mint">Go Home</Link>
              </div>
            </div>
          )}
        </div>
      )}

      {submitted && !query.trim() && <p className="mt-3 text-sm text-slate-500">Start typing to search the Names collection.</p>}
    </div>
  );
}
