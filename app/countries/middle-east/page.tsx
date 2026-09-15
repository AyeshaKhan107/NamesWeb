import CountryDirectory from "@/components/CountryDirectory";
import { middleEasternCountries } from "@/lib/countries";

export default function MiddleEastPage() {
  return (
    <CountryDirectory
      region="Middle East"
      slug="middle-east"
      description="Discover names, meanings, origins, religions, lucky numbers and naming traditions from across the Middle East."
      countries={middleEasternCountries}
    />
  );
}
