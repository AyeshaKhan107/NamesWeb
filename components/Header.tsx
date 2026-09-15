"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Search, X, Loader2 } from "lucide-react";

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
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "#regions", label: "Regions" },
  { href: "#categories", label: "Categories" },
  { href: "#popular", label: "Popular Names" },
];

export default function Header() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Debounced dynamic search
  useEffect(() => {
    const trimmed = query.trim();
    const controller = new AbortController();

    if (trimmed.length === 0) {
      setResults([]);
      setLoading(false);
      return () => controller.abort();
    }

    setLoading(true);
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/search?q=${encodeURIComponent(trimmed)}`,
          { signal: controller.signal },
        );

        if (!res.ok) {
          throw new Error(`Search request failed with status ${res.status}`);
        }

        const data: unknown = await res.json();
        if (!Array.isArray(data)) {
          throw new Error("Search response was not an array");
        }

        setResults(data);
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        console.error("Search failed:", err);
        setResults([]);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 250); // debounce

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-5 py-4 md:gap-4">
        {/* Logo */}
        <Link href="/" className="shrink-0 text-2xl font-black tracking-tight text-ink">
          Names<span className="text-sage">Hub</span>
          <span className="text-sage">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1"
          aria-label="Main navigation"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition hover:bg-white hover:text-sage hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search + Mobile menu */}
        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 md:flex-none">
          {/* Global Dynamic Search */}
          <div ref={searchRef} className="relative min-w-0 flex-1 md:flex-none">
            <div className="flex min-w-0 items-center gap-2 rounded-xl bg-ink px-3 py-2.5 text-white transition focus-within:bg-sage md:w-auto">
              {loading ? (
                <Loader2 size={17} className="animate-spin" />
              ) : (
                <Search size={17} />
              )}
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Search anything..."
                className="min-w-0 flex-1 bg-transparent text-sm font-semibold placeholder:text-white/70 outline-none md:w-28 md:flex-none sm:w-52"
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    setResults([]);
                    setIsOpen(false);
                  }}
                  aria-label="Clear search"
                  className="text-white/80 hover:text-white"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Dropdown results */}
            {isOpen && query.trim().length > 0 && (
              <div className="absolute right-0 top-14 z-20 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                {loading ? (
                  <p className="px-4 py-3 text-sm text-slate-500">Searching...</p>
                ) : results.length > 0 ? (
                  <ul className="max-h-96 overflow-y-auto py-1">
                    {results.map((r) => (
                      <li key={`${r.type}-${r.href}`}>
                        <Link
                          href={r.href}
                          onClick={() => {
                            setIsOpen(false);
                            setQuery("");
                            setResults([]);
                          }}
                          className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-mint"
                        >
                          <span className="min-w-0">
                            <span className="block truncate font-semibold text-ink">
                              {r.title}
                            </span>
                            {r.subtitle && (
                              <span className="block truncate text-xs text-slate-500">
                                {r.subtitle}
                              </span>
                            )}
                          </span>
                          <span
                            className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${typeColors[r.type]}`}
                          >
                            {r.type}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="px-4 py-3 text-sm text-slate-500">
                    No results found for "{query}"
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu */}
          <div className="relative md:hidden">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-ink"
              aria-expanded={mobileMenuOpen}
            >
              Menu
            </button>
            {mobileMenuOpen && (
              <nav
                className="absolute right-0 top-12 z-10 grid min-w-44 gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
                aria-label="Mobile navigation"
              >
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-mint"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}