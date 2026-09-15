export type NameItem = {
  name: string;
  meaning: string;
  region: string;
  gender: "boy" | "girl" | "unisex";
};

export const namesData: NameItem[] = [
  { name: "Aarav", meaning: "Peaceful", region: "Indian", gender: "boy" },
  { name: "Zara", meaning: "Blossom", region: "Arabic", gender: "girl" },
  { name: "Elena", meaning: "Bright, shining light", region: "Greek", gender: "girl" },
  { name: "Kenji", meaning: "Strong, healthy", region: "Japanese", gender: "boy" },
  { name: "Amara", meaning: "Eternal", region: "African", gender: "girl" },
  { name: "Liam", meaning: "Strong-willed warrior", region: "Irish", gender: "boy" },
  { name: "Sofia", meaning: "Wisdom", region: "Greek", gender: "girl" },
  { name: "Omar", meaning: "Flourishing, long-lived", region: "Arabic", gender: "boy" },
  { name: "Hans", meaning: "God is gracious", region: "European", gender: "boy" },
  { name: "Layla", meaning: "Night", region: "Middle Eastern", gender: "girl" },
  // ...apni poori names list yahan add karein
];