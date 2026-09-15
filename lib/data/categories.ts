export type CategoryItem = {
  name: string;
  slug: string;
  description: string;
};

export const categoriesData: CategoryItem[] = [
  { name: "Baby Boy Names", slug: "boy", description: "Names for boys" },
  { name: "Baby Girl Names", slug: "girl", description: "Names for girls" },
  { name: "Unisex Names", slug: "unisex", description: "Names for any gender" },
  { name: "Modern Names", slug: "modern", description: "Contemporary and trending names" },
  { name: "Traditional Names", slug: "traditional", description: "Classic and traditional names" },
  // ...apni poori categories yahan
];