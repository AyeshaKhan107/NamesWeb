
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Search,
  Sparkles,
} from "lucide-react";
import type { Country } from "@/lib/countries";

type Category = "girls" | "boys" | "both";

type CountryName = {
  name: string;
  category: Category;
  meaning: string;
  origin: string;
};

export default function CountryDetails({
  country,
  region,
  regionSlug,
}: {
  country: Country;
  region: string;
  regionSlug: string;
}) {
  const [category, setCategory] = useState<Category>("girls");
  const [search, setSearch] = useState("");

  const names = (country as Country & { names?: CountryName[] }).names ?? [];

  const filteredNames = useMemo(() => {
    return names.filter((item) => {
      const matchesCategory = item.category === category;

      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [names, category, search]);

  return (
    <main className="min-h-screen bg-[#F8FAF8]">
      {/* HERO */}
      <section className="border-b border-[#E3E9E4] bg-white">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <Link
            href={`/countries/${regionSlug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B806F] transition hover:text-[#304A3A]"
          >
            <ArrowLeft size={17} />
            Back to {region}
          </Link>

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[#F5F1E8] text-5xl shadow-sm">
              {country.flag}
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#6B806F]">
                {region}
              </p>

              <h1 className="mt-2 text-4xl font-black tracking-tight text-[#172019] md:text-6xl">
                {country.name}
              </h1>

              <p className="mt-3 text-lg text-[#6B746D]">
                Explore names and naming traditions from {country.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NAMES SECTION */}
      <section className="mx-auto max-w-5xl px-5 py-14">
        <div className="rounded-3xl border border-[#E3E9E4] bg-white p-7 shadow-sm md:p-10">
          {/* TITLE */}
          <div className="flex items-center gap-3 text-[#304A3A]">
            <Sparkles size={20} />

            <p className="text-sm font-bold uppercase tracking-wider">
              Names from {country.name}
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-black text-[#172019] md:text-4xl">
            Discover names that tell a story.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-[#6B746D]">
            Explore beautiful names, their meanings and origins from{" "}
            {country.name}.
          </p>

          {/* SEARCH */}
          <div className="relative mt-8 max-w-xl">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B806F]"
            />

            <input
              type="text"
              placeholder={`Search names in ${country.name}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-[#DCE5DE] bg-[#F8FAF8] py-4 pl-12 pr-4 text-[#172019] outline-none transition placeholder:text-[#8A968D] focus:border-[#9DB5A2] focus:ring-4 focus:ring-[#E7F0E9]"
            />
          </div>

          {/* CATEGORY TABS */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setCategory("girls")}
              className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
                category === "girls"
                  ? "bg-[#304A3A] text-white shadow-sm"
                  : "bg-[#E7F0E9] text-[#304A3A] hover:bg-[#DCE9DF]"
              }`}
            >
              Girls
            </button>

            <button
              onClick={() => setCategory("boys")}
              className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
                category === "boys"
                  ? "bg-[#304A3A] text-white shadow-sm"
                  : "bg-[#E7F0E9] text-[#304A3A] hover:bg-[#DCE9DF]"
              }`}
            >
              Boys
            </button>

            <button
              onClick={() => setCategory("both")}
              className={`rounded-xl px-6 py-3 text-sm font-bold transition ${
                category === "both"
                  ? "bg-[#304A3A] text-white shadow-sm"
                  : "bg-[#E7F0E9] text-[#304A3A] hover:bg-[#DCE9DF]"
              }`}
            >
              Both
            </button>
          </div>

          {/* RESULTS COUNT */}
          <div className="mt-8 flex items-center justify-between">
            <h3 className="text-xl font-black capitalize text-[#172019]">
              {category} names
            </h3>

            <span className="rounded-full bg-[#F1F5F1] px-4 py-2 text-sm font-bold text-[#6B806F]">
              {filteredNames.length} names
            </span>
          </div>

          {/* NAMES GRID */}
          {filteredNames.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredNames.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="group rounded-2xl border border-[#E3E9E4] bg-[#FCFDFC] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#B9CDBD] hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-xl font-black text-[#172019]">
                      {item.name}
                    </h4>

                    <span className="rounded-lg bg-[#E7F0E9] px-2.5 py-1 text-xs font-bold text-[#304A3A]">
                      {item.category === "girls"
                        ? "Girl"
                        : item.category === "boys"
                          ? "Boy"
                          : "Both"}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#6B746D]">
                    {item.meaning}
                  </p>

                  <div className="mt-4 border-t border-[#E8EEE9] pt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#8A968D]">
                      Origin
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#4E6255]">
                      {item.origin}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="mt-8 rounded-2xl border border-dashed border-[#C9D7CC] bg-[#F8FAF8] px-6 py-12 text-center">
              <Compass className="mx-auto text-[#6B806F]" size={32} />

              <h3 className="mt-4 text-xl font-black text-[#172019]">
                No names found
              </h3>

              <p className="mt-2 text-sm text-[#6B746D]">
                Try another search or choose a different category.
              </p>
            </div>
          )}

          {/* BOTTOM INFO */}
          <div className="mt-10 flex items-center gap-2 rounded-xl bg-[#E7F0E9] px-5 py-3 font-bold text-[#304A3A]">
            <Compass size={18} />

            <span>
              Explore more names and naming traditions from {country.name}
            </span>

            <ArrowRight size={18} className="ml-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}
