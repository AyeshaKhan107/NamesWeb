import { notFound } from "next/navigation";
import CountryDetails from "@/components/CountryDetails";
import { findCountry, middleEasternCountries } from "@/lib/countries";

export function generateStaticParams() {
  return middleEasternCountries.map(({ slug }) => ({ country: slug }));
}

export default function MiddleEastCountryPage({ params }: { params: { country: string } }) {
  const country = findCountry(middleEasternCountries, params.country);

  if (!country) {
    notFound();
  }

  return <CountryDetails country={country} region="Middle East" regionSlug="middle-east" />;
}
