import { notFound } from "next/navigation";
import CountryDetails from "@/components/CountryDetails";
import { europeanCountries, findCountry } from "@/lib/countries";

export function generateStaticParams() {
  return europeanCountries.map(({ slug }) => ({ country: slug }));
}

export default function EuropeanCountryPage({ params }: { params: { country: string } }) {
  const country = findCountry(europeanCountries, params.country);

  if (!country) {
    notFound();
  }

  return <CountryDetails country={country} region="Europe" regionSlug="europe" />;
}
