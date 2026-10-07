export type NameGender = "girl" | "boy" | "both";

export type NameReligion =
  | "Islamic"
  | "Christian"
  | "Jewish"
  | "Hindu"
  | "Sikh"
  | "Buddhist"
  | "Other"
  | "None";

export type NamePopularity =
  | "Rare"
  | "Uncommon"
  | "Popular"
  | "Very Popular";

export type Name = {
  name: string;
  gender: NameGender;
  meanings?: {
    english?: string;
    urdu?: string;
    arabic?: string;
    chinese?: string;
    french?: string;
    german?: string;
    spanish?: string;
    italian?: string;
    turkish?: string;
    [language: string]: string | undefined;
  };
  urduMeaning: string;
  englishMeaning: string;
  origin: string;
  religion?: NameReligion;
  religiousReference?: string;
  historicalFigure?: string;
  luckyNumber?: number;
  country?: string;
  state?: string;
  city?: string;
  alternativeSpellings?: string[];
  popularity?: NamePopularity;
};