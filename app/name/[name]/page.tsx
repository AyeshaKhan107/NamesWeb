import Link from "next/link";
import { ArrowLeft, Compass, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { namesData } from "@/lib/data/names";

export function generateStaticParams() {
  return namesData.map(({ name }) => ({ name: name.toLowerCase() }));
}

export default function NamePage({ params }: { params: { name: string } }) {
  const name = namesData.find((item) => item.name.toLowerCase() === params.name.toLowerCase());

  if (!name) notFound();

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-81px)] bg-[#F8FAF8] px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Link href="/#search" className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B806F] transition hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F]">
            <ArrowLeft size={16} /> Back to search
          </Link>
          <section className="mt-10 overflow-hidden rounded-3xl border border-[#E3E9E4] bg-white shadow-[0_16px_45px_rgba(48,74,58,0.07)]">
            <div className="border-b border-[#E3E9E4] bg-[#E7F0E9] px-6 py-10 sm:px-10 sm:py-14">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6B806F]"><Sparkles size={15} /> Name discovery</p>
              <h1 className="mt-5 text-5xl font-black tracking-tight text-[#172019] sm:text-7xl">{name.name}</h1>
              <p className="mt-3 text-lg text-[#6B806F]">{name.gender} name · {name.region}</p>
            </div>
            <div className="grid gap-8 px-6 py-8 sm:grid-cols-[1fr_auto] sm:px-10 sm:py-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#93712F]">Meaning</p>
                <p className="mt-3 text-2xl font-semibold text-[#304A3A]">{name.meaning}</p>
                <p className="mt-4 max-w-xl leading-7 text-[#6B806F]">Explore the story, origin, and character behind this beautiful name.</p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F1E8] text-[#304A3A]"><Compass size={28} strokeWidth={1.6} /></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
