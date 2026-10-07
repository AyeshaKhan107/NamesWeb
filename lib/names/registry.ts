import type { Name } from "@/lib/names/types";
import { africaNames } from "@/lib/names/africa";
import { asiaNames } from "@/lib/names/asia";
import { europeNames } from "@/lib/names/europe";
import { middleEastNames } from "@/lib/names/middle-east";
import { northAmericaNames } from "@/lib/names/north-america";
import { oceaniaNames } from "@/lib/names/oceania";
import { southAmericaNames } from "@/lib/names/south-america";

const regionalNameDatasets: Record<string, Name[]> = {
  europe: europeNames,
  "middle-east": middleEastNames,
  "south-asia": asiaNames,
  "east-asia": asiaNames,
  "southeast-asia": asiaNames,
  "central-asia": asiaNames,
  africa: africaNames,
  "north-america": northAmericaNames,
  "latin-america": southAmericaNames,
  caribbean: northAmericaNames,
  "oceania-australia": oceaniaNames,
};

const toSlug = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const getNamesForCountry = (
  countrySlug: string,
  regionSlug?: string,
): Name[] => {
  const regionalNames = regionSlug ? regionalNameDatasets[regionSlug] : undefined;

  return regionalNames?.filter((name) => toSlug(name.country ?? "") === countrySlug) ?? [];
};