import { notFound } from "next/navigation";
import CountryDetails from "@/components/CountryDetails";
import { countryRegions, findCountry } from "@/lib/countries";

export function generateStaticParams() {
  return Object.entries(countryRegions).flatMap(([regionSlug, region]) =>
    region.countries.map(({ slug: countrySlug }) => ({
      regionSlug,
      countrySlug,
    })),
  );
}

export default function CountryPage({
  params,
}: {
  params: { regionSlug: string; countrySlug: string };
}) {
  const region = countryRegions[params.regionSlug as keyof typeof countryRegions];
  const country = region && findCountry(region.countries, params.countrySlug);

  if (!region || !country) {
    notFound();
  }

  return (
    <CountryDetails
      country={country}
      region={region.name}
      regionSlug={params.regionSlug}
    />
  );
}
