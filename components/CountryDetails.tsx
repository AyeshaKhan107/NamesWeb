
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Compass,
  Search,
  Share2,
  Sparkles,
  Star,
} from "lucide-react";
import type { Country } from "@/lib/countries";
import type { Name, NameGender } from "@/lib/names/types";

type Category = NameGender;

const supportedLanguages = [
  { key: "english", label: "English" },
  { key: "urdu", label: "اردو" },
  { key: "arabic", label: "العربية" },
  { key: "chinese", label: "中文" },
  { key: "french", label: "Français" },
  { key: "german", label: "Deutsch" },
  { key: "spanish", label: "Español" },
  { key: "italian", label: "Italiano" },
  { key: "turkish", label: "Türkçe" },
] as const;

type MeaningLanguage = (typeof supportedLanguages)[number]["key"];

const getAvailableMeanings = (item: Name) =>
  supportedLanguages.flatMap(({ key, label }) => {
    const legacyMeaning = key === "english"
      ? item.englishMeaning
      : key === "urdu"
        ? item.urduMeaning
        : undefined;
    const meaning = item.meanings?.[key] ?? legacyMeaning;

    return meaning?.trim() ? [{ key, label, meaning }] : [];
  });

const writeToClipboard = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }
};

function NameCard({ item, countryName }: { item: Name; countryName: string }) {
  const availableMeanings = getAvailableMeanings(item);
  const [selectedLanguage, setSelectedLanguage] = useState<MeaningLanguage>(
    availableMeanings[0]?.key ?? "english",
  );
  const [copyState, setCopyState] = useState<"idle" | "copied">("idle");
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const activeMeaning =
    availableMeanings.find(({ key }) => key === selectedLanguage) ?? availableMeanings[0];
  const genderLabel = item.gender === "girl" ? "Girl" : item.gender === "boy" ? "Boy" : "Both";
  const actualCountry = item.country || countryName;

  const getCardText = () => [
    `Name: ${item.name}`,
    `Gender: ${genderLabel}`,
    activeMeaning && `Meaning${activeMeaning.label ? ` (${activeMeaning.label})` : ""}: ${activeMeaning.meaning}`,
    item.origin && `Origin: ${item.origin}`,
    item.religion && `Religion: ${item.religion}`,
    item.popularity && `Popularity: ${item.popularity}`,
    item.luckyNumber !== undefined && `Lucky Number: ${item.luckyNumber}`,
    actualCountry && `Country: ${actualCountry}`,
  ].filter((line): line is string => Boolean(line)).join("\n");

  const handleCopy = async () => {
    await writeToClipboard(getCardText());
    setCopyState("copied");
    window.setTimeout(() => setCopyState("idle"), 1800);
  };

  const handleShare = async () => {
    const text = getCardText();

    if (navigator.share) {
      try {
        await navigator.share({ title: item.name, text, url: window.location.href });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    await writeToClipboard(`${text}\nLink: ${window.location.href}`);
    setShareState("copied");
    window.setTimeout(() => setShareState("idle"), 1800);
  };

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E3E9E4] bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#B9CDBD] hover:shadow-lg sm:p-6">
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="break-words text-2xl font-black leading-tight text-[#172019] sm:text-3xl">
            {item.name}
          </h4>
          {item.origin && (
            <p className="mt-2 text-sm font-semibold text-[#6B806F]">{item.origin}</p>
          )}
        </div>
        <span className="shrink-0 rounded-full bg-[#E7F0E9] px-3 py-1.5 text-xs font-bold text-[#304A3A]">
          {genderLabel}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-[#E8EEE9] py-4">
        {actualCountry && (
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-[#8A968D]">Country</p>
            <p className="mt-1 break-words text-sm font-semibold text-[#304A3A]">{actualCountry}</p>
          </div>
        )}
        {item.religion && (
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-[#8A968D]">Religion</p>
            <p className="mt-1 break-words text-sm font-semibold text-[#304A3A]">{item.religion}</p>
          </div>
        )}
        {item.popularity && (
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase text-[#8A968D]">Popularity</p>
            <p className="mt-1 break-words text-sm font-semibold text-[#304A3A]">{item.popularity}</p>
          </div>
        )}
      </div>

      {item.luckyNumber !== undefined && (
        <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#F5F1E8] px-4 py-3 text-[#304A3A]">
          <Star size={20} fill="currentColor" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase">Lucky Number</p>
            <p className="text-xl font-black">{item.luckyNumber}</p>
            <p className="text-xs text-[#6B806F]">Traditional belief</p>
          </div>
        </div>
      )}

      {activeMeaning && (
        <section className="mt-5 min-w-0" aria-label={`Meaning of ${item.name}`}>
          <h5 className="text-sm font-bold text-[#172019]">Meaning</h5>
          <div className="mt-2 flex flex-wrap gap-1.5" aria-label="Meaning language">
            {availableMeanings.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedLanguage(key)}
                aria-pressed={activeMeaning.key === key}
                className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B806F] focus-visible:ring-offset-2 ${
                  activeMeaning.key === key
                    ? "bg-[#304A3A] text-white"
                    : "bg-[#F8FAF8] text-[#304A3A] hover:bg-[#E7F0E9]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <p
            className="mt-3 break-words text-base leading-7 text-[#4E6255]"
            dir={activeMeaning.key === "urdu" || activeMeaning.key === "arabic" ? "rtl" : "auto"}
          >
            {activeMeaning.meaning}
          </p>
        </section>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy details for ${item.name}`}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-[#DCE5DE] px-3 py-2 text-sm font-bold text-[#304A3A] transition hover:bg-[#F8FAF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B806F] focus-visible:ring-offset-2"
        >
          {copyState === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
          {copyState === "copied" ? "Copied ✓" : "Copy"}
        </button>
        <button
          type="button"
          onClick={handleShare}
          aria-label={`Share ${item.name}`}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#E7F0E9] px-3 py-2 text-sm font-bold text-[#304A3A] transition hover:bg-[#DCE9DF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B806F] focus-visible:ring-offset-2"
        >
          {shareState === "copied" ? <Check size={16} aria-hidden="true" /> : <Share2 size={16} aria-hidden="true" />}
          {shareState === "copied" ? "Link copied" : "Share"}
        </button>
      </div>
      <span className="sr-only" aria-live="polite">
        {copyState === "copied" ? "Name details copied" : shareState === "copied" ? "Share details copied" : ""}
      </span>
    </article>
  );
}

export default function CountryDetails({
  country,
  region,
  regionSlug,
}: {
  country: Country;
  region: string;
  regionSlug: string;
}) {
  const [category, setCategory] = useState<Category>("girl");
  const [search, setSearch] = useState("");
  const [religion, setReligion] = useState("");
  const [origin, setOrigin] = useState("");
  const [popularity, setPopularity] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const names: Name[] = country.names ?? [];

  const origins = Array.from(new Set(names.map((item) => item.origin))).sort();
  const religions = Array.from(
    new Set(names.map((item) => item.religion).filter(Boolean)),
  ).sort();
  const popularities = Array.from(
    new Set(names.map((item) => item.popularity).filter(Boolean)),
  ).sort();
  const states = Array.from(
    new Set(names.map((item) => item.state).filter(Boolean)),
  ).sort() as string[];
  const cities = Array.from(
    new Set(names.map((item) => item.city).filter(Boolean)),
  ).sort() as string[];
  const filterOptions: Array<{
    label: string;
    value: string;
    setValue: (value: string) => void;
    options: string[];
  }> = [
    { label: "Religion", value: religion, setValue: setReligion, options: religions as string[] },
    { label: "Origin", value: origin, setValue: setOrigin, options: origins },
    { label: "Popularity", value: popularity, setValue: setPopularity, options: popularities as string[] },
    { label: "State", value: state, setValue: setState, options: states },
    { label: "City", value: city, setValue: setCity, options: cities },
  ].filter((filter) => filter.options.length > 0);

  const matchingNames = useMemo(() => {
    return names.filter((item) => {
      const searchableText = [
        item.name,
        ...getAvailableMeanings(item).map(({ meaning }) => meaning),
        item.origin,
        item.country || country.name,
        item.religion,
        item.state,
        item.city,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(search.toLowerCase());
      const matchesReligion = !religion || item.religion === religion;
      const matchesOrigin = !origin || item.origin === origin;
      const matchesPopularity = !popularity || item.popularity === popularity;
      const matchesState = !state || item.state === state;
      const matchesCity = !city || item.city === city;

      return (
        matchesSearch &&
        matchesReligion &&
        matchesOrigin &&
        matchesPopularity &&
        matchesState &&
        matchesCity
      );
    });
  }, [names, country.name, search, religion, origin, popularity, state, city]);

  const filteredNames = matchingNames.filter((item) => item.gender === category);
  const nameCounts: Record<Category, number> = {
    girl: matchingNames.filter((item) => item.gender === "girl").length,
    boy: matchingNames.filter((item) => item.gender === "boy").length,
    both: matchingNames.filter((item) => item.gender === "both").length,
  };

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
          <div className="mt-8 inline-flex max-w-full flex-wrap gap-1 rounded-xl border border-[#E3E9E4] bg-[#F8FAF8] p-1" role="group" aria-label="Filter names by gender">
            {([
              { key: "girl", label: "Girls" },
              { key: "boy", label: "Boys" },
              { key: "both", label: "Both" },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setCategory(key)}
                aria-pressed={category === key}
                className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B806F] focus-visible:ring-offset-2 ${
                  category === key
                    ? "bg-[#304A3A] text-white shadow-sm"
                    : "text-[#304A3A] hover:bg-[#E7F0E9]"
                }`}
              >
                {label}
                <span className={`rounded-full px-2 py-0.5 text-xs ${category === key ? "bg-white/15 text-white" : "bg-white text-[#6B806F]"}`}>
                  {nameCounts[key]}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {filterOptions.map(({ label, value, setValue, options }) => (
              <label key={label} className="text-sm font-bold text-[#4E6255]">
                {label}
                <select
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#DCE5DE] bg-[#F8FAF8] px-3 py-3 font-normal text-[#172019] outline-none focus:border-[#9DB5A2] focus:ring-4 focus:ring-[#E7F0E9]"
                >
                  <option value="">All</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          {/* RESULTS COUNT */}
          <div className="mt-8 flex items-center justify-between">
            <h3 className="text-xl font-black capitalize text-[#172019]">
              {category === "girl" ? "Girls" : category === "boy" ? "Boys" : "Both"} names
            </h3>

            <span className="rounded-full bg-[#F1F5F1] px-4 py-2 text-sm font-bold text-[#6B806F]">
              {filteredNames.length} names
            </span>
          </div>

          {/* NAMES GRID */}
          {filteredNames.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredNames.map((item, index) => (
                <NameCard key={`${item.name}-${item.country ?? country.name}-${index}`} item={item} countryName={country.name} />
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
