
"use client";

import Link from "next/link";
import { Globe2, MapPin, ArrowRight } from "lucide-react";
import { countryRegions } from "@/lib/countries";
import { useLocale } from "@/components/LocaleProvider";
import { displayCountry } from "@/lib/i18n";

const regions = [
  { ...countryRegions.europe, slug: "europe", description: "Explore names from countries across Europe." },
  { ...countryRegions["middle-east"], slug: "middle-east", description: "Discover names and cultures from the Middle East." },
  { ...countryRegions["south-asia"], slug: "south-asia", description: "Explore names and traditions from South Asia." },
  { ...countryRegions["east-asia"], slug: "east-asia", description: "Discover names rooted in East Asian cultures." },
  { ...countryRegions["southeast-asia"], slug: "southeast-asia", description: "Explore names from the diverse cultures of Southeast Asia." },
  { ...countryRegions["central-asia"], slug: "central-asia", description: "Discover names and heritage from Central Asia." },
  { ...countryRegions.africa, slug: "africa", description: "Explore names from North Africa and Sub-Saharan Africa." },
  { ...countryRegions["north-america"], slug: "north-america", description: "Discover names from the United States, Canada and Mexico." },
  { ...countryRegions["latin-america"], slug: "latin-america", description: "Explore names across Latin America, South America and Central America." },
  { ...countryRegions.caribbean, slug: "caribbean", description: "Discover vibrant names and traditions from the Caribbean." },
  { ...countryRegions["oceania-australia"], slug: "oceania-australia", description: "Explore names from Australia, New Zealand and Oceania." },
];

export default function Countries() {
  const { t, locale } = useLocale();
  const regionKeys: Record<string, string> = {
    europe: "europe", "middle-east": "middleEast", "south-asia": "southAsia", "east-asia": "eastAsia",
    "southeast-asia": "southeastAsia", "central-asia": "centralAsia", africa: "africa",
    "north-america": "northAmerica", "latin-america": "latinAmerica", caribbean: "caribbean",
    "oceania-australia": "oceania",
  };

  return (
    <section className="w-full py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7F0E9] text-[#304A3A] text-sm font-semibold">
            <Globe2 size={16} />
            {t("home.exploreRegion")}
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#172019]">
            {t("home.discoverWorld")}
          </h2>

          <p className="mt-4 text-[#6B746D] text-lg">
            {t("home.regionDescription")}
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/countries/${region.slug}`}
              className="group min-w-0"
            >
              <article className="h-full min-w-0 bg-white border border-[#E3E9E4] rounded-3xl p-7 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Card Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#E7F0E9] flex items-center justify-center">
                      <Globe2
                        size={27}
                        className="text-[#304A3A]"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-2xl font-black text-[#172019]">
                        {t(`region.${regionKeys[region.slug]}`)}
                      </h3>

                      <p className="text-sm text-[#6B746D] mt-1">
                        {t("home.countriesCount", { count: region.countries.length })}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#E3E9E4] flex items-center justify-center group-hover:bg-[#304A3A] group-hover:text-white transition">
                    <ArrowRight size={18} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#6B746D] mt-6 leading-relaxed">
                  {t("home.regionDescription")}
                </p>

                {/* Countries Preview */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {region.countries.slice(0, 10).map((country) => (
                    <span
                      key={country.slug}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F1E8] border border-[#E8E2D5] text-sm text-[#304A3A]"
                    >
                      <MapPin size={13} />
                      {displayCountry(country.name, locale, country.flag)}
                    </span>
                  ))}

                  {region.countries.length > 10 && (
                    <span className="px-3 py-1.5 text-sm font-bold text-[#304A3A]">
                      {t("home.more", { count: region.countries.length - 10 })}
                    </span>
                  )}
                </div>

                {/* Bottom CTA */}
                <div className="mt-7 pt-5 border-t border-[#E3E9E4] flex items-center justify-between">
                  <span className="font-bold text-[#304A3A]">
                    {t("home.exploreMore", { region: t(`region.${regionKeys[region.slug]}`) })}
                  </span>

                  <ArrowRight
                    size={19}
                    className="text-[#304A3A] group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}