// import Header from "@/components/Header";
// import Countries from "@/components/Countries";
// import HomeSearch from "@/components/HomeSearch";
// import { categories, featured, regions } from "@/lib/data";
// import { ArrowRight, Heart, Sparkles } from "lucide-react";

// const searchItems = [
//   ...featured.map(([name, region, gender, origin]) => ({
//     label: name,
//     type: "Name" as const,
//     href: "#popular",
//     detail: `${gender} name from ${origin}`,
//   })),
//   ...Object.entries(regions).flatMap(([region, countries]) =>
//     countries.map((country) => ({
//       label: country,
//       type: "Country" as const,
//       href: `/countries/${region === "Europe" ? "europe" : "middle-east"}/${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
//       detail: region,
//     })),
//   ),
//   ...Object.keys(regions).map((region) => ({
//     label: region,
//     type: "Region" as const,
//     href: `/countries/${region === "Europe" ? "europe" : "middle-east"}`,
//     detail: "Explore countries and names",
//   })),
//   ...categories.map((category) => ({
//     label: category,
//     type: "Category" as const,
//     href: "#categories",
//     detail: "Browse collection",
//   })),
// ];

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <main>
//         <section className="relative overflow-hidden border-b border-[#e2ebe4] bg-gradient-to-b from-white via-[#f8fbf8] to-[#f1f7f2]">
//           <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 text-center md:pb-24 md:pt-28">
//             <div className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-semibold text-sage shadow-sm">
//               <Sparkles size={16} /> Discover the story behind every name
//             </div>
//             <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-ink md:text-7xl">
//               Find a name that
//               <br />
//               <span className="text-sage">means something.</span>
//             </h1>
//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
//               Explore names from every corner of the world by country, region, gender, religion, origin, meaning and lucky number.
//             </p>
//             <HomeSearch items={searchItems} />
//             <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
//               <span>Try “France”</span>
//               <span>Try “Arabic”</span>
//               <span>Try “Popular Names”</span>
//             </div>
//           </div>
//         </section>

//         <Countries />

//         <section id="categories" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
//           <p className="text-sm font-bold tracking-wider text-sage">BROWSE THE COLLECTION</p>
//           <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="text-3xl font-black text-ink md:text-4xl">Find exactly what you need</h2>
//             <p className="max-w-sm text-sm leading-6 text-slate-500">A thoughtful starting point for finding a name with history, meaning and character.</p>
//           </div>
//           <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
//             {categories.map((category) => (
//               <a key={category} href="#search" className="card group p-5 transition duration-300 hover:-translate-y-1 hover:border-[#b9cdbd] hover:shadow-lg">
//                 <Heart size={19} className="mb-8 text-sage transition group-hover:fill-current" />
//                 <h3 className="font-bold text-ink">{category}</h3>
//                 <p className="mt-1 text-xs text-slate-500">Explore collection</p>
//               </a>
//             ))}
//           </div>
//         </section>

//         <section id="popular" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
//           <div className="flex items-end justify-between gap-4 border-b border-[#e2ebe4] pb-5">
//             <div>
//               <p className="text-sm font-bold tracking-wider text-sage">TRENDING NOW</p>
//               <h2 className="mt-2 text-3xl font-black text-ink md:text-4xl">Popular names</h2>
//             </div>
//             <a className="hidden items-center gap-1 text-sm font-bold text-sage transition hover:text-ink sm:flex" href="#search">
//               Search names <ArrowRight size={16} />
//             </a>
//           </div>
//           <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//             {featured.map(([name, region, gender, origin, religion]) => (
//               <article className="card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg" key={name}>
//                 <div className="flex justify-between gap-4">
//                   <div>
//                     <h3 className="text-2xl font-black text-ink">{name}</h3>
//                     <p className="mt-1 text-sm text-slate-500">{gender} · {region}</p>
//                   </div>
//                   <span className="text-2xl text-sage transition group-hover:scale-110">♡</span>
//                 </div>
//                 <div className="mt-5 flex flex-wrap gap-2">
//                   <span className="rounded-full bg-mint px-3 py-1 text-xs font-semibold text-sage">{origin}</span>
//                   <span className="rounded-full border bg-cream px-3 py-1 text-xs font-semibold text-slate-600">{religion}</span>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>
//       </main>
//       <footer className="mt-12 border-t border-[#e2ebe4] bg-white">
//         <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:justify-between">
//           <span>© 2026 Names.</span>
//           <span>Explore names. Discover meanings.</span>
//         </div>
//       </footer>
//     </>
//   );
// }




// import Header from "@/components/Header";
// import Countries from "@/components/Countries";
// import HomeSearch from "@/components/HomeSearch";
// import { categories, featured, regions } from "@/lib/data";
// import { ArrowRight, BookMarked, Heart } from "lucide-react";

// const searchItems = [
//   ...featured.map(([name, region, gender, origin]) => ({
//     label: name,
//     type: "Name" as const,
//     href: "#popular",
//     detail: `${gender} name from ${origin}`,
//   })),
//   ...Object.entries(regions).flatMap(([region, countries]) =>
//     countries.map((country) => ({
//       label: country,
//       type: "Country" as const,
//       href: `/countries/${region === "Europe" ? "europe" : "middle-east"}/${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
//       detail: region,
//     })),
//   ),
//   ...Object.keys(regions).map((region) => ({
//     label: region,
//     type: "Region" as const,
//     href: `/countries/${region === "Europe" ? "europe" : "middle-east"}`,
//     detail: "Explore countries and names",
//   })),
//   ...categories.map((category) => ({
//     label: category,
//     type: "Category" as const,
//     href: "#categories",
//     detail: "Browse collection",
//   })),
// ];

// // The hero uses one real entry from the catalogue as its centerpiece —
// // a small "dictionary card" that shows, rather than tells, what the site does.

// export default function Home() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
//         :root {
//           --ink: #1B241D;
//           --paper: #F2F1E7;
//           --forest: #24473A;
//           --forest-deep: #163026;
//           --sage-line: #D8D9C8;
//           --brass: #93712F;
//           --clay: #A8604A;
//         }
//         .font-display { font-family: 'Fraunces', Georgia, serif; }
//         .font-body { font-family: 'Inter', system-ui, sans-serif; }
//       `}</style>

//       <Header />

//       <main className="font-body" style={{ color: "var(--ink)" }}>
//         {/* HERO */}
//         <section
//           className="relative overflow-hidden border-b"
//           style={{ background: "var(--paper)", borderColor: "var(--sage-line)" }}
//         >
//           <span
//             aria-hidden
//             className="font-display pointer-events-none absolute -left-10 -top-16 select-none text-[280px] leading-none md:text-[380px]"
//             style={{ color: "var(--forest)", opacity: 0.05 }}
//           >
//             &amp;
//           </span>

//           <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-24 md:pt-24">
//             <div>
//               <h1 className="font-display max-w-xl text-[2.75rem] font-medium leading-[1.08] tracking-tight md:text-[3.6rem]">
//                 Every name carries a story.
//               </h1>
//               <p className="mt-6 max-w-md text-[17px] leading-7" style={{ color: "#4B564C" }}>
//                 Search thousands of names by country, region, gender, religion, origin and
//                 meaning — and find the one that fits yours.
//               </p>

//               <div className="mt-8">
//                 <HomeSearch items={searchItems} />
//               </div>

//               <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm" style={{ color: "#6B7568" }}>
//                 <span>Try &ldquo;France&rdquo;</span>
//                 <span>Try &ldquo;Arabic&rdquo;</span>
//                 <span>Try &ldquo;Popular Names&rdquo;</span>
//               </div>
//             </div>

//           </div>
//         </section>

//         <Countries />

//         {/* CATEGORIES */}
//         <section id="categories" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
//           <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
//             <h2 className="font-display text-3xl md:text-4xl" style={{ color: "var(--forest-deep)" }}>
//               Find exactly what you need
//             </h2>
//             <p className="max-w-sm text-[15px] leading-6" style={{ color: "#6B7568" }}>
//               A thoughtful starting point for finding a name with history, meaning and
//               character.
//             </p>
//           </div>

//           <div className="mt-10 border-t" style={{ borderColor: "var(--sage-line)" }}>
//             {categories.map((category) => (
//               <a
//                 key={category}
//                 href="#search"
//                 className="group flex items-center justify-between border-b py-5 transition-colors hover:bg-[#EAEBDF]"
//                 style={{ borderColor: "var(--sage-line)" }}
//               >
//                 <span className="font-display px-1 text-xl" style={{ color: "var(--ink)" }}>
//                   {category}
//                 </span>
//                 <ArrowRight
//                   size={18}
//                   className="mr-1 shrink-0 transition-transform group-hover:translate-x-1"
//                   style={{ color: "var(--forest)" }}
//                 />
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* POPULAR NAMES */}
//         <section id="popular" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
//           <div className="flex items-end justify-between gap-4 border-b pb-5" style={{ borderColor: "var(--sage-line)" }}>
//             <div>
//               <p className="text-sm font-medium" style={{ color: "var(--brass)" }}>
//                 Trending now
//               </p>
//               <h2 className="font-display mt-1 text-3xl md:text-4xl" style={{ color: "var(--forest-deep)" }}>
//                 Popular names
//               </h2>
//             </div>
//             <a
//               className="hidden items-center gap-1 text-sm font-medium transition sm:flex"
//               style={{ color: "var(--forest)" }}
//               href="#search"
//             >
//               Search names <ArrowRight size={16} />
//             </a>
//           </div>

//           <div className="mt-2 divide-y" style={{ borderColor: "var(--sage-line)" }}>
//             {featured.map(([name, region, gender, origin, religion], i) => (
//               <article
//                 key={name}
//                 className="group flex items-start gap-6 border-b py-6"
//                 style={{ borderColor: "var(--sage-line)" }}
//               >
//                 <span
//                   className="font-display mt-1 w-8 shrink-0 text-lg"
//                   style={{ color: "var(--brass)" }}
//                 >
//                   {String(i + 1).padStart(2, "0")}
//                 </span>

//                 <div className="flex-1">
//                   <div className="flex items-baseline justify-between gap-4">
//                     <h3 className="font-display text-2xl" style={{ color: "var(--ink)" }}>
//                       {name}
//                     </h3>
//                     <button
//                       aria-label={`Save ${name}`}
//                       className="shrink-0 transition-opacity md:opacity-0 md:group-hover:opacity-100"
//                       style={{ color: "var(--clay)" }}
//                     >
//                       <Heart size={18} />
//                     </button>
//                   </div>
//                   <p className="mt-1 text-sm" style={{ color: "#6B7568" }}>
//                     {gender} · {region}
//                   </p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     <span
//                       className="rounded-sm px-2.5 py-1 text-xs font-medium"
//                       style={{ background: "#E4E9DF", color: "var(--forest-deep)" }}
//                     >
//                       {origin}
//                     </span>
//                     <span
//                       className="rounded-sm border px-2.5 py-1 text-xs font-medium"
//                       style={{ borderColor: "var(--sage-line)", color: "#5B655C" }}
//                     >
//                       {religion}
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* NEWSLETTER / CLOSING STRIP */}
//         <section className="border-t" style={{ background: "var(--forest-deep)", borderColor: "var(--forest-deep)" }}>
//           <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-14 md:flex-row md:items-center md:justify-between md:py-16">
//             <div className="flex items-center gap-3 text-white">
//               <BookMarked size={22} style={{ color: "var(--brass)" }} />
//               <p className="font-display text-2xl">Keep a shortlist as you browse.</p>
//             </div>
//             <a
//               href="#search"
//               className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
//               style={{ background: "var(--brass)" }}
//             >
//               Start searching <ArrowRight size={16} />
//             </a>
//           </div>
//         </section>
//       </main>

//       <footer style={{ background: "var(--paper)" }}>
//         <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm sm:flex-row sm:justify-between" style={{ color: "#6B7568" }}>
//           <span>© 2026 Names.</span>
//           <span>Explore names. Discover meanings.</span>
//         </div>
//       </footer>
//     </>
//   );
// }









// import Header from "@/components/Header";
// import Countries from "@/components/Countries";
// import HomeSearch from "@/components/HomeSearch";
// import AnimatedFeaturedNames from "@/components/AnimatedFeaturedNames";
// import LocalDateTime from "@/components/LocalDateTime";
// import { categories, regions } from "@/lib/data";
// import { namesData } from "@/lib/data/names";
// import { countryRegions } from "@/lib/countries";
// import type { Name } from "@/lib/names/types";
// import { africaNames } from "@/lib/names/africa";
// import { asiaNames } from "@/lib/names/asia";
// import { europeNames } from "@/lib/names/europe";
// import { middleEastNames } from "@/lib/names/middle-east";
// import { northAmericaNames } from "@/lib/names/north-america";
// import { oceaniaNames } from "@/lib/names/oceania";
// import { southAmericaNames } from "@/lib/names/south-america";
// import { getServerMessages } from "@/lib/i18n/server";
// import { getText } from "@/lib/i18n";
// import { ArrowRight, BookMarked, Heart, Search, SlidersHorizontal } from "lucide-react";

// const regionalDatasets: { regionSlug: string; names: Name[] }[] = [
//   { regionSlug: "europe", names: europeNames },
//   { regionSlug: "middle-east", names: middleEastNames },
//   { regionSlug: "south-asia", names: asiaNames },
//   { regionSlug: "africa", names: africaNames },
//   { regionSlug: "north-america", names: northAmericaNames },
//   { regionSlug: "latin-america", names: southAmericaNames },
//   { regionSlug: "oceania-australia", names: oceaniaNames },
// ];

// const toSlug = (value: string) =>
//   value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// const countryRegionLookup = Object.entries(countryRegions).flatMap(
//   ([regionSlug, region]) =>
//     region.countries.map((country) => ({
//       country: country.name,
//       region: region.name,
//       regionSlug,
//       countrySlug: country.slug,
//     })),
// );

// const regionalSearchItems = regionalDatasets.flatMap(({ regionSlug, names }) =>
//   names.map((item, index) => {
//     const country = item.country ?? "";
//     const countryEntry =
//       countryRegionLookup.find(
//         (entry) => entry.country === country && entry.regionSlug === regionSlug,
//       ) ??
//       (regionSlug === "south-asia"
//         ? countryRegionLookup.find((entry) => entry.country === country)
//         : undefined);
//     const region = countryEntry?.region ?? regionSlug.replace(/-/g, " ");

//     return {
//       key: `${regionSlug}-${toSlug(country)}-${toSlug(item.name)}-${item.gender}-${index}`,
//       label: item.name,
//       gender: item.gender,
//       meaning: item.englishMeaning,
//       category: item.religion,
//       country,
//       region,
//       origin: item.origin,
//       href: countryEntry
//         ? `/countries/${countryEntry.regionSlug}/${countryEntry.countrySlug}`
//         : `/name/${toSlug(item.name)}`,
//     };
//   }),
// );

// const legacySearchItems = namesData.map((item, index) => ({
//   key: `catalogue-${toSlug(item.name)}-${index}`,
//   label: item.name,
//   gender: item.gender,
//   meaning: item.meaning,
//   category: undefined,
//   country: "",
//   region: item.region,
//   origin: item.region,
//   href: `/name/${toSlug(item.name)}`,
// }));

// const allNameItems = [...regionalSearchItems, ...legacySearchItems];
// const searchItems = [
//   ...allNameItems,
//   ...Object.entries(regions).flatMap(([region, countries]) =>
//     countries.map((country) => ({
//       key: `country-${toSlug(country)}`,
//       label: country,
//       type: "Country" as const,
//       href: `/countries/${region === "Europe" ? "europe" : "middle-east"}/${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
//       detail: region,
//     })),
//   ),
//   ...Object.keys(regions).map((region) => ({
//     key: `region-${toSlug(region)}`,
//     label: region,
//     type: "Region" as const,
//     href: `/countries/${region === "Europe" ? "europe" : "middle-east"}`,
//     detail: "Explore countries and names",
//   })),
//   ...categories.map((category) => ({
//     key: `category-${toSlug(category)}`,
//     label: category,
//     type: "Category" as const,
//     href: "#categories",
//     detail: "Browse collection",
//   })),
// ];

// const featuredNames = allNameItems
//   .filter((item, index, items) => items.findIndex((candidate) => candidate.label === item.label) === index)
//   .slice(0, 5)
//   .map((item) => ({
//     name: item.label,
//     gender: item.gender === "both" || item.gender === "unisex" ? "Unisex name" : `${item.gender} name`,
//     origin: item.origin,
//     region: item.country || item.region,
//     meaning: item.meaning,
//     href: item.href,
//   }));

// export default function Home() {
//   const messages = getServerMessages();
//   const t = (key: string, values?: Record<string, string | number>) => getText(messages, key, values);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
//         :root {
//           --ink: #1B241D;
//           --paper: #F2F1E7;
//           --forest: #24473A;
//           --forest-deep: #163026;
//           --sage-line: #D8D9C8;
//           --brass: #93712F;
//           --clay: #A8604A;
//         }
//         .font-display { font-family: 'Fraunces', Georgia, serif; }
//         .font-body { font-family: 'Inter', system-ui, sans-serif; }
//       `}</style>

//       <Header />

//       <main className="font-body" style={{ color: "var(--ink)" }}>
//         {/* HERO */}
//         <section
//           className="relative overflow-hidden border-b"
//           style={{ background: "var(--paper)", borderColor: "var(--sage-line)" }}
//         >
//           <span
//             aria-hidden
//             className="font-display pointer-events-none absolute -left-10 -top-16 select-none text-[280px] leading-none md:text-[380px]"
//             style={{ color: "var(--forest)", opacity: 0.05 }}
//           >
//             &amp;
//           </span>

//           <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-24 md:pt-24">
//             <div className="min-w-0">
//               <h1 className="font-display max-w-xl text-[2.75rem] font-medium leading-[1.08] tracking-tight md:text-[3.6rem]">
//                 {t("home.title")}
//               </h1>
//               <p className="mt-6 max-w-md text-[17px] leading-7" style={{ color: "#4B564C" }}>
//                 {t("home.description")}
//               </p>

//               <div className="mt-8">
//                 <HomeSearch items={searchItems} />
//               </div>

//               <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm" style={{ color: "#6B7568" }}>
//                 <span>{t("search.tryCountry")}</span>
//                 <span>{t("search.tryOrigin")}</span>
//                 <span>{t("search.tryCategory")}</span>
//               </div>
//               <LocalDateTime />
//             </div>

//             <AnimatedFeaturedNames names={featuredNames} />
//           </div>
//         </section>

//         <Countries />

//         {/* SEARCH BY MEANING */}
//         <section id="categories" className="border-y" style={{ background: "var(--forest-deep)", borderColor: "var(--forest-deep)" }}>
//           <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
//             <h2 className="font-display max-w-lg text-3xl leading-tight text-white md:text-4xl">
//               {t("home.meaningTitle")}
//             </h2>
//             <p className="mt-4 max-w-md text-[15px] leading-6" style={{ color: "#B9C4B8" }}>
//               {t("home.meaningDescription")}
//             </p>

//             <div className="mt-10 flex flex-wrap gap-3">
//               {categories.map((category) => (
//                 <a
//                   key={category}
//                   href="#search"
//                   className="font-display rounded-full border px-6 py-3 text-lg text-white transition-colors hover:bg-white hover:text-[var(--forest-deep)]"
//                   style={{ borderColor: "#4A6459" }}
//                 >
//                   {category}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* HOW IT WORKS */}
//         <section id="popular" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
//           <h2 className="font-display max-w-lg text-3xl md:text-4xl" style={{ color: "var(--forest-deep)" }}>
//             {t("home.howTitle")}
//           </h2>

//           <div className="mt-12 grid gap-10 border-t pt-10 md:grid-cols-3 md:gap-8" style={{ borderColor: "var(--sage-line)" }}>
//             {[
//               {
//                 step: "01",
//                 icon: Search,
//                 title: t("home.searchHow"),
//                 body: t("home.searchHowText"),
//               },
//               {
//                 step: "02",
//                 icon: SlidersHorizontal,
//                 title: t("home.narrow"),
//                 body: t("home.narrowText"),
//               },
//               {
//                 step: "03",
//                 icon: Heart,
//                 title: t("home.save"),
//                 body: t("home.saveText"),
//               },
//             ].map(({ step, icon: Icon, title, body }) => (
//               <div key={step}>
//                 <div className="flex items-center gap-3">
//                   <Icon size={20} style={{ color: "var(--brass)" }} />
//                   <span className="font-display text-sm" style={{ color: "var(--brass)" }}>
//                     {step}
//                   </span>
//                 </div>
//                 <h3 className="font-display mt-4 text-xl" style={{ color: "var(--ink)" }}>
//                   {title}
//                 </h3>
//                 <p className="mt-2 text-[15px] leading-6" style={{ color: "#6B7568" }}>
//                   {body}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* NEWSLETTER / CLOSING STRIP */}
//         <section className="border-t" style={{ background: "var(--forest-deep)", borderColor: "var(--forest-deep)" }}>
//           <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-14 md:flex-row md:items-center md:justify-between md:py-16">
//             <div className="flex items-center gap-3 text-white">
//               <BookMarked size={22} style={{ color: "var(--brass)" }} />
//               <p className="font-display text-2xl">{t("home.shortlist")}</p>
//             </div>
//             <a
//               href="#search"
//               className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
//               style={{ background: "var(--brass)" }}
//             >
//               {t("home.startSearch")} <ArrowRight size={16} />
//             </a>
//           </div>
//         </section>
//       </main>

//     </>
//   );
// }











import Header from "../components/Header";
import Countries from "@/components/Countries";
import HomeSearch from "@/components/HomeSearch";
import AnimatedFeaturedNames from "@/components/AnimatedFeaturedNames";
import LocalDateTime from "@/components/LocalDateTime";
import { categories, regions } from "@/lib/data";
import { namesData } from "@/lib/data/names";
import { countryRegions } from "@/lib/countries";
import type { Name } from "@/lib/names/types";
import { africaNames } from "@/lib/names/africa";
import { asiaNames } from "@/lib/names/asia";
import { europeNames } from "@/lib/names/europe";
import { middleEastNames } from "@/lib/names/middle-east";
import { northAmericaNames } from "@/lib/names/north-america";
import { oceaniaNames } from "@/lib/names/oceania";
import { southAmericaNames } from "@/lib/names/south-america";
import { getServerMessages } from "@/lib/i18n/server";
import { getText } from "@/lib/i18n";
import {
  ArrowRight,
  BookMarked,
  Globe2,
  Heart,
  Languages,
  Search,
  SlidersHorizontal,
} from "lucide-react";

const regionalDatasets: { regionSlug: string; names: Name[] }[] = [
  { regionSlug: "europe", names: europeNames },
  { regionSlug: "middle-east", names: middleEastNames },
  { regionSlug: "south-asia", names: asiaNames },
  { regionSlug: "africa", names: africaNames },
  { regionSlug: "north-america", names: northAmericaNames },
  { regionSlug: "latin-america", names: southAmericaNames },
  { regionSlug: "oceania-australia", names: oceaniaNames },
];

const toSlug = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const countryRegionLookup = Object.entries(countryRegions).flatMap(
  ([regionSlug, region]) =>
    region.countries.map((country) => ({
      country: country.name,
      region: region.name,
      regionSlug,
      countrySlug: country.slug,
    })),
);

const regionalSearchItems = regionalDatasets.flatMap(({ regionSlug, names }) =>
  names.map((item, index) => {
    const country = item.country ?? "";
    const countryEntry =
      countryRegionLookup.find(
        (entry) => entry.country === country && entry.regionSlug === regionSlug,
      ) ??
      (regionSlug === "south-asia"
        ? countryRegionLookup.find((entry) => entry.country === country)
        : undefined);
    const region = countryEntry?.region ?? regionSlug.replace(/-/g, " ");

    return {
      key: `${regionSlug}-${toSlug(country)}-${toSlug(item.name)}-${item.gender}-${index}`,
      label: item.name,
      gender: item.gender,
      meaning: item.englishMeaning,
      category: item.religion,
      country,
      region,
      origin: item.origin,
      href: countryEntry
        ? `/countries/${countryEntry.regionSlug}/${countryEntry.countrySlug}`
        : `/name/${toSlug(item.name)}`,
    };
  }),
);

const legacySearchItems = namesData.map((item, index) => ({
  key: `catalogue-${toSlug(item.name)}-${index}`,
  label: item.name,
  gender: item.gender,
  meaning: item.meaning,
  category: undefined,
  country: "",
  region: item.region,
  origin: item.region,
  href: `/name/${toSlug(item.name)}`,
}));

const allNameItems = [...regionalSearchItems, ...legacySearchItems];
const searchItems = [
  ...allNameItems,
  ...Object.entries(regions).flatMap(([region, countries]) =>
    countries.map((country) => ({
      key: `country-${toSlug(country)}`,
      label: country,
      type: "Country" as const,
      href: `/countries/${region === "Europe" ? "europe" : "middle-east"}/${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      detail: region,
    })),
  ),
  ...Object.keys(regions).map((region) => ({
    key: `region-${toSlug(region)}`,
    label: region,
    type: "Region" as const,
    href: `/countries/${region === "Europe" ? "europe" : "middle-east"}`,
    detail: "Explore countries and names",
  })),
  ...categories.map((category) => ({
    key: `category-${toSlug(category)}`,
    label: category,
    type: "Category" as const,
    href: "#categories",
    detail: "Browse collection",
  })),
];

const featuredNames = allNameItems
  .filter((item, index, items) => items.findIndex((candidate) => candidate.label === item.label) === index)
  .slice(0, 5)
  .map((item) => ({
    name: item.label,
    gender: item.gender === "both" || item.gender === "unisex" ? "Unisex name" : `${item.gender} name`,
    origin: item.origin,
    region: item.country || item.region,
    meaning: item.meaning,
    href: item.href,
  }));

const stats = [
  { icon: Languages, value: `${allNameItems.length.toLocaleString()}+`, label: "Names with meanings" },
  { icon: Globe2, value: `${regionalDatasets.length}`, label: "World regions covered" },
  { icon: SlidersHorizontal, value: `${categories.length}`, label: "Meaning categories" },
];

const steps = [
  {
    icon: Search,
    title: "Search your way",
    body: "Type a name, a country or a meaning. The search understands all three.",
  },
  {
    icon: SlidersHorizontal,
    title: "Narrow it down",
    body: "Filter by origin, religion, region or gender until the list feels like yours.",
  },
  {
    icon: Heart,
    title: "Save your favourites",
    body: "Keep a running shortlist as you browse so nothing good gets lost.",
  },
];

export default function Home() {
  const messages = getServerMessages();
  const t = (key: string) => getText(messages, key);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600;700&display=swap');
        :root {
          --ink: #14202B;
          --muted: #5B6B78;
          --canvas: #F6F8FA;
          --surface: #FFFFFF;
          --line: #E1E7ED;
          --navy: #0F2A43;
          --navy-deep: #0A1D30;
          --teal: #1C7C7D;
          --teal-soft: #E3F1F1;
          --saffron: #E0A526;
        }
        .font-display { font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; }
        .font-body { font-family: 'DM Sans', system-ui, sans-serif; }
        .chip:focus-visible, .cta:focus-visible { outline: 2px solid var(--saffron); outline-offset: 2px; }
      `}</style>

      <Header />

      <main className="font-body" style={{ color: "var(--ink)", background: "var(--canvas)" }}>
        {/* HERO */}
        <section
          className="relative overflow-hidden border-b"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, var(--canvas) 100%)",
            borderColor: "var(--line)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
            style={{ background: "var(--teal-soft)", opacity: 0.7 }}
          />

          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-14 md:pb-20 md:pt-16">
            <div className="min-w-0">
              <h1
                className="font-display max-w-lg text-[1.9rem] leading-[1.15] tracking-tight md:text-[2.4rem]"
                style={{ color: "var(--navy)" }}
              >
                Every name carries a story.
              </h1>
              <p className="mt-4 max-w-md text-[15px] leading-7" style={{ color: "var(--muted)" }}>
                Search thousands of names by country, region, gender, religion, origin and
                meaning, and find the one that fits.
              </p>

              <div
                className="mt-7 rounded-xl border p-2"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--line)",
                  boxShadow: "0 8px 24px -12px rgba(15, 42, 67, 0.18)",
                }}
              >
                <HomeSearch items={searchItems} />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px]" style={{ color: "var(--muted)" }}>
                <span>Popular searches:</span>
                {["France", "Arabic", "Popular Names"].map((term) => (
                  <span
                    key={term}
                    className="rounded-full border px-3 py-1"
                    style={{ borderColor: "var(--line)", background: "var(--surface)" }}
                  >
                    {term}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-[13px]" style={{ color: "var(--muted)" }}>
                <LocalDateTime />
              </div>
            </div>

            <div className="min-w-0">
                <AnimatedFeaturedNames names={featuredNames.map((item) => ({
                  ...item,
                  gender: t(item.gender === "girl name" ? "gender.girlName" : item.gender === "boy name" ? "gender.boyName" : "gender.unisexName"),
                }))} />
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="mx-auto max-w-6xl px-5">
          <div
            className="-mt-0 grid grid-cols-1 divide-y rounded-xl border sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            style={{
              background: "var(--surface)",
              borderColor: "var(--line)",
              marginTop: "2rem",
            }}
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4 px-6 py-5" style={{ borderColor: "var(--line)" }}>
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--teal-soft)", color: "var(--teal)" }}
                >
                  <Icon size={19} />
                </span>
                <div>
                  <div className="text-xl font-semibold leading-none" style={{ color: "var(--navy)" }}>
                    {value}
                  </div>
                  <div className="mt-1 text-[13px]" style={{ color: "var(--muted)" }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-6 md:pt-10">
          <Countries />
        </div>

        {/* SEARCH BY MEANING */}
        <section id="categories" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div
            className="rounded-2xl px-6 py-10 md:px-12 md:py-14"
            style={{ background: "var(--navy)" }}
          >
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-12">
              <div>
                <h2 className="font-display text-2xl leading-tight text-white md:text-[1.75rem]">
                  Browse names by what they mean.
                </h2>
                <p className="mt-3 max-w-sm text-[14px] leading-6" style={{ color: "#AEBFCE" }}>
                  Start from a feeling instead of a spelling. Pick a theme and see the names
                  that carry it.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#search"
                    className="chip rounded-full border px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-white hover:text-[var(--navy)]"
                    style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)" }}
                  >
                    {t(({ Names: "common.names", "Boy Names": "footer.boys", "Girl Names": "footer.girls", "Unisex Names": "footer.unisex", Religion: "detail.religion", "Lucky Numbers": "about.lucky", "Name Meanings": "about.meanings", "Name Origins": "about.origins", "Popular Names": "nav.popular" } as Record<string, string>)[category] ?? "common.explore")}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="popular" className="mx-auto max-w-6xl px-5 pb-14 md:pb-20">
          <h2 className="font-display text-2xl md:text-[1.75rem]" style={{ color: "var(--navy)" }}>
            How it works
          </h2>
          <p className="mt-2 max-w-md text-[14px] leading-6" style={{ color: "var(--muted)" }}>
            Three simple steps from first search to the right name.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="rounded-xl border p-6"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: "var(--teal-soft)", color: "var(--teal)" }}
                  >
                    <Icon size={19} />
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "var(--saffron)" }}>
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-[16px] font-semibold" style={{ color: "var(--navy)" }}>
                  {title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-6" style={{ color: "var(--muted)" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING STRIP */}
        <section style={{ background: "var(--navy-deep)" }}>
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-white">
              <BookMarked size={20} style={{ color: "var(--saffron)" }} />
              <p className="font-display text-xl">Keep a shortlist as you browse.</p>
            </div>
            <a
              href="#search"
              className="cta inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition hover:brightness-95"
              style={{ background: "var(--saffron)", color: "var(--navy-deep)" }}
            >
              Start searching <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}