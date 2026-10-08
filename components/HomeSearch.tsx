"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, Sparkles, X } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

type SearchItem = {
  key: string;
  label: string;
  href: string;
  detail?: string;
  type?: "Name" | "Country" | "Region" | "Category";
  gender?: string;
  meaning?: string;
  category?: string;
  country?: string;
  region?: string;
  origin?: string;
};

type HomeSearchProps = {
  items: SearchItem[];
};

export default function HomeSearch({ items }: HomeSearchProps) {
  const { t } = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const matches = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return [];
    return items
      .filter((item) =>
        [item.label, item.meaning, item.country, item.region, item.origin, item.gender, item.category, item.detail, item.type]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery),
      )
      .sort((first, second) => {
        const firstNameMatch = first.label.toLowerCase().includes(normalizedQuery) ? 0 : 1;
        const secondNameMatch = second.label.toLowerCase().includes(normalizedQuery) ? 0 : 1;
        return firstNameMatch - secondNameMatch;
      })
      .slice(0, 12);
  }, [items, query]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return;

    const exactName = items.find(
      (item) => item.meaning !== undefined && item.label.toLowerCase() === normalizedQuery,
    );
    const firstMatch = matches[0];
    const destination = exactName ?? firstMatch;
    const href = destination?.href ?? `/name/${normalizedQuery.replace(/[^a-z0-9-]+/g, "-")}`;
    router.push(exactName && exactName.href.startsWith("/countries/")
      ? `${href}?name=${encodeURIComponent(exactName.label)}`
      : href);
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
          aria-label={t("search.label")}
          className="min-w-0 flex-1 bg-transparent px-2 py-3 text-base text-ink outline-none placeholder:text-slate-400"
          placeholder={t("search.placeholder")}
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
          {t("search.button")}
        </button>
      </form>

      {query.trim() && (
        <div className="absolute left-0 right-0 top-full z-20 mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 text-left shadow-xl">
          {matches.length > 0 ? (
            <div className="grid max-h-[min(60vh,28rem)] gap-1 overflow-y-auto">
              {matches.map((item) => (
                <Link key={item.key} href={item.meaning !== undefined && item.href.startsWith("/countries/") ? `${item.href}?name=${encodeURIComponent(item.label)}` : item.href} className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition hover:bg-mint">
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-sage"><Sparkles size={16} /></span>
                    <span>
                      <span className="block font-bold text-ink">{item.label}</span>
                      <span className="block text-xs text-slate-500">
                        {[item.meaning, item.gender, item.category, item.country, item.region, item.origin, item.detail ?? item.type]
                          .filter(Boolean)
                          .join(" · ")}
                      </span>
                    </span>
                  </span>
                  <ArrowRight size={17} className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-sage" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-5">
              <p className="text-sm font-semibold text-ink">{t("search.notFound")}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                {t("search.description")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/#categories" className="rounded-lg bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-sage">{t("search.explore")}</Link>
                <Link href="/" className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-ink transition hover:bg-mint">{t("search.goHome")}</Link>
              </div>
            </div>
          )}
        </div>
      )}

      {submitted && !query.trim() && <p className="mt-3 text-sm text-slate-500">{t("search.start")}</p>}
    </div>
  );
}
