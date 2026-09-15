import { notFound } from "next/navigation";
import CountryDirectory from "@/components/CountryDirectory";
import { countryRegions } from "@/lib/countries";

const descriptions: Record<string, string> = {
  europe: "Explore names, meanings, origins and naming traditions from countries across Europe.",
  "middle-east": "Discover names, meanings, origins and naming traditions from across the Middle East.",
  "south-asia": "Explore names and traditions from Pakistan, India, Bangladesh, Sri Lanka, Nepal, Bhutan, Afghanistan and Maldives.",
  "east-asia": "Discover names and heritage from China, Japan, Korea, Taiwan and Mongolia.",
  "southeast-asia": "Explore names from Indonesia, Malaysia, Thailand, the Philippines, Vietnam and more.",
  "central-asia": "Discover names and heritage from Kazakhstan, Uzbekistan, Turkmenistan, Tajikistan and Kyrgyzstan.",
  africa: "Explore names from North Africa and Sub-Saharan Africa.",
  "north-america": "Discover names from the United States, Canada and Mexico.",
  "latin-america": "Explore names across Latin America, South America and Central America.",
  caribbean: "Discover vibrant names and traditions from the Caribbean.",
  "oceania-australia": "Explore names from Australia, New Zealand and Oceania.",
};

export function generateStaticParams() {
  return Object.keys(countryRegions).map((regionSlug) => ({ regionSlug }));
}

export default function RegionPage({ params }: { params: { regionSlug: string } }) {
  const region = countryRegions[params.regionSlug as keyof typeof countryRegions];

  if (!region) {
    notFound();
  }

  return (
    <CountryDirectory
      region={region.name}
      slug={params.regionSlug}
      description={descriptions[params.regionSlug] ?? `Explore names from ${region.name}.`}
      countries={region.countries}
    />
  );
}