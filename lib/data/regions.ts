export type RegionItem = {
  name: string;
  slug: string;
  description: string;
};

export const regionsData: RegionItem[] = [
  { name: "European Names", slug: "european", description: "Names originating from Europe" },
  { name: "Middle Eastern Names", slug: "middle-eastern", description: "Names originating from the Middle East" },
  { name: "Indian Names", slug: "indian", description: "Names originating from India" },
  { name: "Arabic Names", slug: "arabic", description: "Names originating from Arabic-speaking regions" },
  { name: "African Names", slug: "african", description: "Names originating from Africa" },
  { name: "Asian Names", slug: "asian", description: "Names originating from Asia" },
  { name: "Latin American Names", slug: "latin-american", description: "Names originating from Latin America" },
  { name: "Scandinavian Names", slug: "scandinavian", description: "Names originating from Scandinavia" },
  // ...jitni regions website mein hain, sab yahan
];