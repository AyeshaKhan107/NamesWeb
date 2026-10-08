"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Loader2, Search, X } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import { useLocale } from "@/components/LocaleProvider";

type SearchResult = {
  title: string;
  subtitle?: string;
  href: string;
  type: "Name" | "Region" | "Category" | "Page";
};

const typeColors: Record<SearchResult["type"], string> = {
  Name: "bg-sage/10 text-sage",
  Region: "bg-blue-50 text-blue-600",
  Category: "bg-amber-50 text-amber-600",
  Page: "bg-slate-100 text-slate-600",
};

const navLinks = [
  { href: "/", label: "nav.home" },
  { href: "/about", label: "nav.about" },
  { href: "#regions", label: "nav.regions" },
  { href: "#categories", label: "nav.categories" },
  { href: "#popular", label: "nav.popular" },
];

export default function Header() {
  const { t } = useLocale();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trimmed = query.trim();
    const controller = new AbortController();

    if (!trimmed) {
      setResults([]);
      setLoading(false);
      return () => controller.abort();
    }

    setLoading(true);
    const timeout = window.setTimeout(async () => {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(trimmed)}`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Search request failed with status ${response.status}`);
        const data: unknown = await response.json();
        if (!Array.isArray(data)) throw new Error("Search response was not an array");
        setResults(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 250);

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-5 py-4 md:gap-4">
        <Link href="/" className="group shrink-0 text-2xl font-black tracking-tight text-ink" aria-label="NameWorlds home">
          <span className="inline-block transition-transform duration-500 group-hover:translate-y-[-1px]">Name</span><span className="inline-block text-sage transition-colors duration-500 group-hover:text-ink">Worlds</span>
          <span className="inline-block text-sage transition-transform duration-500 group-hover:rotate-90">.</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 md:flex" aria-label={t("nav.main")}>
          {navLinks.map((item) => <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition hover:bg-white hover:text-sage hover:shadow-sm">{t(item.label)}</Link>)}
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:flex-none md:gap-3">
          <LanguageSelector />
          <div ref={searchRef} className="relative min-w-0 flex-1 md:flex-none">
            <div className="flex min-w-0 items-center gap-2 rounded-xl bg-ink px-3 py-2.5 text-white transition focus-within:bg-sage md:w-auto">
              {loading ? <Loader2 size={17} className="animate-spin" /> : <Search size={17} />}
              <input type="text" value={query} onChange={(event) => { setQuery(event.target.value); setIsOpen(true); }} onFocus={() => setIsOpen(true)} placeholder={t("nav.search")} className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-white/70 md:w-28 md:flex-none sm:w-52" />
              {query && <button onClick={() => { setQuery(""); setResults([]); setIsOpen(false); }} aria-label={t("nav.clear")} className="text-white/80 hover:text-white"><X size={15} /></button>}
            </div>
            {isOpen && query.trim() && <div className="absolute right-0 top-14 z-20 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
              {loading ? <p className="px-4 py-3 text-sm text-slate-500">{t("nav.searching")}</p> : results.length ? <ul className="max-h-96 overflow-y-auto py-1">
                {results.map((result) => <li key={`${result.type}-${result.href}`}><Link href={result.href} onClick={() => { setIsOpen(false); setQuery(""); setResults([]); }} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-mint">
                  <span className="min-w-0"><span className="block truncate font-semibold text-ink">{result.title}</span>{result.subtitle && <span className="block truncate text-xs text-slate-500">{result.subtitle}</span>}</span>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${typeColors[result.type]}`}>{t(`nav.type.${result.type}`)}</span>
                </Link></li>)}
              </ul> : <p className="px-4 py-3 text-sm text-slate-500">{t("nav.noResults", { query })}</p>}
            </div>}
          </div>

          <div className="relative md:hidden">
            <button onClick={() => setMobileMenuOpen((open) => !open)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-ink" aria-expanded={mobileMenuOpen}>{t("nav.menu")}</button>
            {mobileMenuOpen && <nav className="absolute right-0 top-12 z-10 grid min-w-44 gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-lg" aria-label={t("nav.main")}>
              {navLinks.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-mint">{t(item.label)}</Link>)}
            </nav>}
          </div>
        </div>
      </div>
    </header>
  );
}
