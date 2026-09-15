export type PageItem = {
  title: string;
  href: string;
  description: string;
};

export const pagesData: PageItem[] = [
  { title: "Home", href: "/", description: "Homepage" },
  { title: "Popular Names", href: "/#popular", description: "Trending names right now" },
  { title: "About Us", href: "/about", description: "Learn more about NamesHub" },
  { title: "Contact", href: "/contact", description: "Get in touch with us" },
  // ...static pages
];