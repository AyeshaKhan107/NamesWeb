import CountryDirectory from "@/components/CountryDirectory";
import { europeanCountries } from "@/lib/countries";

export default function EuropePage() {
  return (
    <CountryDirectory
      region="Europe"
      slug="europe"
      description="Explore names, meanings, origins, religions, lucky numbers and popular naming traditions from countries across Europe."
      countries={europeanCountries}
    />
  );
}
