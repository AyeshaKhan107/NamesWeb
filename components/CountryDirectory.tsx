import Link from "next/link";
import { ArrowLeft, ArrowRight, Globe2, MapPin, Sparkles } from "lucide-react";
import type { Country } from "@/lib/countries";

type CountryDirectoryProps = {
  region: string;
  slug: string;
  description: string;
  countries: Country[];
};

export default function CountryDirectory({
  region,
  slug,
  description,
  countries,
}: CountryDirectoryProps) {
  return (
    <main className="min-h-screen bg-[#F8FAF8]">
      <section className="border-b border-[#E3E9E4] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B806F] transition hover:text-[#304A3A]"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="mt-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E7F0E9] px-4 py-2 text-sm font-semibold text-[#304A3A]">
              <Sparkles size={16} />
              Explore {region}
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#172019] md:text-6xl">
              {region} Countries
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#6B746D]">{description}</p>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#E3E9E4] bg-[#F8FAF8] p-5">
              <Globe2 className="text-[#304A3A]" size={22} />
              <p className="mt-3 text-2xl font-black text-[#172019]">{countries.length}</p>
              <p className="text-sm text-[#6B746D]">Countries</p>
            </div>
            <div className="rounded-2xl border border-[#E3E9E4] bg-[#F8FAF8] p-5">
              <MapPin className="text-[#304A3A]" size={22} />
              <p className="mt-3 text-2xl font-black text-[#172019]">{region}</p>
              <p className="text-sm text-[#6B746D]">Region</p>
            </div>
            <div className="hidden rounded-2xl border border-[#E3E9E4] bg-[#F8FAF8] p-5 sm:block">
              <Sparkles className="text-[#304A3A]" size={22} />
              <p className="mt-3 text-2xl font-black text-[#172019]">Names</p>
              <p className="text-sm text-[#6B746D]">Explore</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#6B806F]">Countries</p>
          <h2 className="mt-2 text-3xl font-black text-[#172019]">Choose a country</h2>
          <p className="mt-2 text-[#6B746D]">Select a country to explore its names and naming traditions.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.map((country) => (
            <Link key={country.slug} href={`/countries/${slug}/${country.slug}`} className="group">
              <article className="flex h-full items-center justify-between rounded-2xl border border-[#E3E9E4] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F1E8] text-2xl">
                    {country.flag}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#172019]">{country.name}</h3>
                    <p className="mt-1 text-xs text-[#6B746D]">Explore Names</p>
                  </div>
                </div>
                <ArrowRight size={18} className="text-[#9AA49D] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#304A3A]" />
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}