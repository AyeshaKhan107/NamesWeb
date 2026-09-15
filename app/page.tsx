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









import Header from "@/components/Header";
import Countries from "@/components/Countries";
import HomeSearch from "@/components/HomeSearch";
import AnimatedFeaturedNames from "@/components/AnimatedFeaturedNames";
import LocalDateTime from "@/components/LocalDateTime";
import { categories, regions } from "@/lib/data";
import { namesData } from "@/lib/data/names";
import { ArrowRight, BookMarked, Heart, Search, SlidersHorizontal } from "lucide-react";

const searchItems = [
  ...namesData.filter((item) => item.name !== "Alexander").map((item) => ({
    label: item.name,
    type: "Name" as const,
    href: `/name/${item.name.toLowerCase()}`,
    detail: `${item.meaning} · ${item.region}`,
  })),
  ...Object.entries(regions).flatMap(([region, countries]) =>
    countries.map((country) => ({
      label: country,
      type: "Country" as const,
      href: `/countries/${region === "Europe" ? "europe" : "middle-east"}/${country.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      detail: region,
    })),
  ),
  ...Object.keys(regions).map((region) => ({
    label: region,
    type: "Region" as const,
    href: `/countries/${region === "Europe" ? "europe" : "middle-east"}`,
    detail: "Explore countries and names",
  })),
  ...categories.map((category) => ({
    label: category,
    type: "Category" as const,
    href: "#categories",
    detail: "Browse collection",
  })),
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
        :root {
          --ink: #1B241D;
          --paper: #F2F1E7;
          --forest: #24473A;
          --forest-deep: #163026;
          --sage-line: #D8D9C8;
          --brass: #93712F;
          --clay: #A8604A;
        }
        .font-display { font-family: 'Fraunces', Georgia, serif; }
        .font-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>

      <Header />

      <main className="font-body" style={{ color: "var(--ink)" }}>
        {/* HERO */}
        <section
          className="relative overflow-hidden border-b"
          style={{ background: "var(--paper)", borderColor: "var(--sage-line)" }}
        >
          <span
            aria-hidden
            className="font-display pointer-events-none absolute -left-10 -top-16 select-none text-[280px] leading-none md:text-[380px]"
            style={{ color: "var(--forest)", opacity: 0.05 }}
          >
            &amp;
          </span>

          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-16 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-24 md:pt-24">
            <div>
              <h1 className="font-display max-w-xl text-[2.75rem] font-medium leading-[1.08] tracking-tight md:text-[3.6rem]">
                Every name carries a story.
              </h1>
              <p className="mt-6 max-w-md text-[17px] leading-7" style={{ color: "#4B564C" }}>
                Search thousands of names by country, region, gender, religion, origin and
                meaning — and find the one that fits yours.
              </p>

              <div className="mt-8">
                <HomeSearch items={searchItems} />
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-sm" style={{ color: "#6B7568" }}>
                <span>Try &ldquo;France&rdquo;</span>
                <span>Try &ldquo;Arabic&rdquo;</span>
                <span>Try &ldquo;Popular Names&rdquo;</span>
              </div>
              <LocalDateTime />
            </div>

            <AnimatedFeaturedNames />
          </div>
        </section>

        <Countries />

        {/* SEARCH BY MEANING */}
        <section id="categories" className="border-y" style={{ background: "var(--forest-deep)", borderColor: "var(--forest-deep)" }}>
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <h2 className="font-display max-w-lg text-3xl leading-tight text-white md:text-4xl">
              Names carry meaning long before they carry a person.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-6" style={{ color: "#B9C4B8" }}>
              Start from a feeling instead of a spelling — browse names grouped by what
              they mean.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#search"
                  className="font-display rounded-full border px-6 py-3 text-lg text-white transition-colors hover:bg-white hover:text-[var(--forest-deep)]"
                  style={{ borderColor: "#4A6459" }}
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="popular" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="font-display max-w-lg text-3xl md:text-4xl" style={{ color: "var(--forest-deep)" }}>
            Three ways in, one good name out.
          </h2>

          <div className="mt-12 grid gap-10 border-t pt-10 md:grid-cols-3 md:gap-8" style={{ borderColor: "var(--sage-line)" }}>
            {[
              {
                step: "01",
                icon: Search,
                title: "Search however you think",
                body: "Type a name, a sound, a country or a meaning — the search understands all of them.",
              },
              {
                step: "02",
                icon: SlidersHorizontal,
                title: "Narrow it down",
                body: "Filter by origin, religion, region or gender until the list feels like it's actually yours.",
              },
              {
                step: "03",
                icon: Heart,
                title: "Save the ones you love",
                body: "Keep a running shortlist as you browse, so nothing good gets lost in the search.",
              },
            ].map(({ step, icon: Icon, title, body }) => (
              <div key={step}>
                <div className="flex items-center gap-3">
                  <Icon size={20} style={{ color: "var(--brass)" }} />
                  <span className="font-display text-sm" style={{ color: "var(--brass)" }}>
                    {step}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-xl" style={{ color: "var(--ink)" }}>
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-6" style={{ color: "#6B7568" }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER / CLOSING STRIP */}
        <section className="border-t" style={{ background: "var(--forest-deep)", borderColor: "var(--forest-deep)" }}>
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-14 md:flex-row md:items-center md:justify-between md:py-16">
            <div className="flex items-center gap-3 text-white">
              <BookMarked size={22} style={{ color: "var(--brass)" }} />
              <p className="font-display text-2xl">Keep a shortlist as you browse.</p>
            </div>
            <a
              href="#search"
              className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: "var(--brass)" }}
            >
              Start searching <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

    </>
  );
}