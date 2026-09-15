import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  Heart,
  Hash,
  Landmark,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";

const offerings = [
  {
    title: "Name Meanings",
    description: "Understand the feeling, history and story carried by every name.",
    Icon: BookOpen,
  },
  {
    title: "Urdu Meanings",
    description: "Explore names with clear, thoughtful Urdu meanings for easier discovery.",
    Icon: Sparkles,
  },
  {
    title: "Origins & Cultures",
    description: "Discover where names come from and the traditions that shaped them.",
    Icon: Compass,
  },
  {
    title: "Religion",
    description: "Find names connected to the faiths and traditions meaningful to you.",
    Icon: Landmark,
  },
  {
    title: "Lucky Numbers",
    description: "Browse an extra layer of character and symbolism behind each name.",
    Icon: Hash,
  },
  {
    title: "Rare & Popular Names",
    description: "Compare timeless favorites with distinctive names waiting to be found.",
    Icon: Heart,
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#F8FAF8] text-[#172019]">
        <section className="relative overflow-hidden border-b border-[#E3E9E4] bg-[#F5F1E8]">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#E7F0E9] opacity-80 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#93712F]">
                <Sparkles size={15} aria-hidden="true" /> About NamesHub
              </p>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#304A3A] sm:text-6xl">
                Every Name Has a Story
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6B806F] sm:text-xl">
                NamesHub helps you discover names with meaning, heritage and character. Explore names from around the world, their origins, Urdu meanings, religious connections, lucky numbers and the stories that make them memorable.
              </p>
              <Link
                href="/#search"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#304A3A] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#6B806F] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] focus-visible:ring-offset-2"
              >
                Explore Names <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24" aria-labelledby="offerings-heading">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#93712F]">A thoughtful starting point</p>
            <h2 id="offerings-heading" className="mt-3 text-3xl font-black tracking-tight text-[#304A3A] sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 leading-7 text-[#6B806F]">
              Everything you need to move from a first spark of inspiration to a name that feels truly right.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-[#E3E9E4] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9D8CC] hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E7F0E9] text-[#304A3A]">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#304A3A]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B806F]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#E3E9E4] bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#F5F1E8] text-[#304A3A]">
              <Heart size={32} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#93712F]">Our purpose</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#304A3A] sm:text-4xl">
                Helping you find a name that feels meaningful.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#6B806F]">
                Choosing a name can be personal, joyful and sometimes overwhelming. Our goal is to make that journey easier by bringing useful context together in one calm, welcoming place, so every search can lead to a name with a story worth carrying forward.
              </p>
              <Link
                href="/#search"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#304A3A] transition-colors hover:text-[#6B806F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] focus-visible:ring-offset-2"
              >
                Begin exploring <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
