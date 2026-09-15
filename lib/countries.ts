export type Country = {
  name: string;
  slug: string;
  flag: string;
};

const country = (name: string, flag: string): Country => ({
  name,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  flag,
});

export const europeanCountries: Country[] = [
  country("Albania", "🇦🇱"),
  country("Andorra", "🇦🇩"),
  country("Austria", "🇦🇹"),
  country("Belarus", "🇧🇾"),
  country("Belgium", "🇧🇪"),
  country("Bosnia and Herzegovina", "🇧🇦"),
  country("Bulgaria", "🇧🇬"),
  country("Croatia", "🇭🇷"),
  country("Cyprus", "🇨🇾"),
  country("Czechia", "🇨🇿"),
  country("Denmark", "🇩🇰"),
  country("Estonia", "🇪🇪"),
  country("Finland", "🇫🇮"),
  country("France", "🇫🇷"),
  country("Germany", "🇩🇪"),
  country("Greece", "🇬🇷"),
  country("Hungary", "🇭🇺"),
  country("Iceland", "🇮🇸"),
  country("Ireland", "🇮🇪"),
  country("Italy", "🇮🇹"),
  country("Latvia", "🇱🇻"),
  country("Liechtenstein", "🇱🇮"),
  country("Lithuania", "🇱🇹"),
  country("Luxembourg", "🇱🇺"),
  country("Malta", "🇲🇹"),
  country("Moldova", "🇲🇩"),
  country("Monaco", "🇲🇨"),
  country("Montenegro", "🇲🇪"),
  country("Netherlands", "🇳🇱"),
  country("North Macedonia", "🇲🇰"),
  country("Norway", "🇳🇴"),
  country("Poland", "🇵🇱"),
  country("Portugal", "🇵🇹"),
  country("Romania", "🇷🇴"),
  country("Russia", "🇷🇺"),
  country("San Marino", "🇸🇲"),
  country("Serbia", "🇷🇸"),
  country("Slovakia", "🇸🇰"),
  country("Slovenia", "🇸🇮"),
  country("Spain", "🇪🇸"),
  country("Sweden", "🇸🇪"),
  country("Switzerland", "🇨🇭"),
  country("Ukraine", "🇺🇦"),
  country("United Kingdom", "🇬🇧"),
  country("Vatican City", "🇻🇦"),
];

export const middleEasternCountries: Country[] = [
  country("Bahrain", "🇧🇭"),
  country("Cyprus", "🇨🇾"),
  country("Egypt", "🇪🇬"),
  country("Iran", "🇮🇷"),
  country("Iraq", "🇮🇶"),
  country("Israel", "🇮🇱"),
  country("Jordan", "🇯🇴"),
  country("Kuwait", "🇰🇼"),
  country("Lebanon", "🇱🇧"),
  country("Oman", "🇴🇲"),
  country("Palestine", "🇵🇸"),
  country("Qatar", "🇶🇦"),
  country("Saudi Arabia", "🇸🇦"),
  country("Syria", "🇸🇾"),
  country("Turkey", "🇹🇷"),
  country("United Arab Emirates", "🇦🇪"),
  country("Yemen", "🇾🇪"),
];

export const southAsianCountries: Country[] = [
  country("Pakistan", "🇵🇰"),
  country("India", "🇮🇳"),
  country("Bangladesh", "🇧🇩"),
  country("Sri Lanka", "🇱🇰"),
  country("Nepal", "🇳🇵"),
  country("Bhutan", "🇧🇹"),
  country("Afghanistan", "🇦🇫"),
  country("Maldives", "🇲🇻"),
];

export const eastAsianCountries: Country[] = [
  country("China", "🇨🇳"),
  country("Japan", "🇯🇵"),
  country("South Korea", "🇰🇷"),
  country("North Korea", "🇰🇵"),
  country("Taiwan", "🇹🇼"),
  country("Mongolia", "🇲🇳"),
];

export const southeastAsianCountries: Country[] = [
  country("Indonesia", "🇮🇩"),
  country("Malaysia", "🇲🇾"),
  country("Thailand", "🇹🇭"),
  country("Philippines", "🇵🇭"),
  country("Vietnam", "🇻🇳"),
  country("Singapore", "🇸🇬"),
  country("Myanmar", "🇲🇲"),
  country("Cambodia", "🇰🇭"),
  country("Laos", "🇱🇦"),
  country("Brunei", "🇧🇳"),
];

export const centralAsianCountries: Country[] = [
  country("Kazakhstan", "🇰🇿"),
  country("Uzbekistan", "🇺🇿"),
  country("Turkmenistan", "🇹🇲"),
  country("Tajikistan", "🇹🇯"),
  country("Kyrgyzstan", "🇰🇬"),
];

export const africanCountries: Country[] = [
  country("Egypt", "🇪🇬"),
  country("Libya", "🇱🇾"),
  country("Tunisia", "🇹🇳"),
  country("Algeria", "🇩🇿"),
  country("Morocco", "🇲🇦"),
  country("Nigeria", "🇳🇬"),
  country("Kenya", "🇰🇪"),
  country("South Africa", "🇿🇦"),
  country("Ghana", "🇬🇭"),
  country("Ethiopia", "🇪🇹"),
];

export const northAmericanCountries: Country[] = [
  country("United States", "🇺🇸"),
  country("Canada", "🇨🇦"),
  country("Mexico", "🇲🇽"),
];

export const latinAmericanCountries: Country[] = [
  country("Brazil", "🇧🇷"),
  country("Argentina", "🇦🇷"),
  country("Colombia", "🇨🇴"),
  country("Chile", "🇨🇱"),
  country("Peru", "🇵🇪"),
  country("Guatemala", "🇬🇹"),
  country("Panama", "🇵🇦"),
  country("Costa Rica", "🇨🇷"),
];

export const caribbeanCountries: Country[] = [
  country("Jamaica", "🇯🇲"),
  country("Cuba", "🇨🇺"),
  country("Haiti", "🇭🇹"),
  country("Dominican Republic", "🇩🇴"),
  country("Trinidad and Tobago", "🇹🇹"),
];

export const oceaniaCountries: Country[] = [
  country("Australia", "🇦🇺"),
  country("New Zealand", "🇳🇿"),
  country("Papua New Guinea", "🇵🇬"),
  country("Fiji", "🇫🇯"),
  country("Samoa", "🇼🇸"),
  country("Tonga", "🇹🇴"),
];

export const countryRegions = {
  europe: { name: "Europe", countries: europeanCountries },
  "middle-east": { name: "Middle East", countries: middleEasternCountries },
  "south-asia": { name: "South Asia", countries: southAsianCountries },
  "east-asia": { name: "East Asia", countries: eastAsianCountries },
  "southeast-asia": { name: "Southeast Asia", countries: southeastAsianCountries },
  "central-asia": { name: "Central Asia", countries: centralAsianCountries },
  africa: { name: "Africa", countries: africanCountries },
  "north-america": { name: "North America", countries: northAmericanCountries },
  "latin-america": { name: "Latin America / South America", countries: latinAmericanCountries },
  caribbean: { name: "Caribbean", countries: caribbeanCountries },
  "oceania-australia": { name: "Oceania / Australia", countries: oceaniaCountries },
} as const;

export const findCountry = (countries: Country[], slug: string) =>
  countries.find((item) => item.slug === slug);