import Link from "next/link";
import { ArrowRight, Compass, Home, Search, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { getServerMessages } from "@/lib/i18n/server";
import { getText } from "@/lib/i18n";

const quickLinks = [
  { label: "notFound.girls", href: "/#categories" },
  { label: "notFound.boys", href: "/#categories" },
  { label: "notFound.unisex", href: "/#categories" },
  { label: "Countries", href: "/countries/europe" },
];

export default function NotFound() {
  const messages = getServerMessages();
  const t = (key: string) => getText(messages, key);

  return (
    <>
      <Header />
      <main className="relative isolate overflow-hidden bg-[#F8FAF8]">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-14 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E7F0E9] opacity-70 blur-3xl" />
        <div className="mx-auto flex min-h-[calc(100vh-81px)] max-w-4xl flex-col items-center px-5 py-16 text-center sm:px-8 sm:py-24">
          <div className="relative inline-flex items-center justify-center">
            <span aria-hidden="true" className="absolute -left-7 top-1 h-2 w-2 rounded-full bg-[#93712F] opacity-70 animate-pulse" />
            <span aria-hidden="true" className="absolute -right-8 bottom-2 h-1.5 w-1.5 rounded-full bg-[#6B806F] opacity-70 animate-pulse" />
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E3E9E4] bg-white text-[#304A3A] shadow-sm">
              <Compass size={27} strokeWidth={1.6} aria-hidden="true" />
            </div>
          </div>

          <p className="mt-8 text-[clamp(5rem,18vw,11rem)] font-black leading-[0.8] tracking-[-0.06em] text-[#304A3A]">
            404
          </p>
          <p className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#93712F]">
            <Sparkles size={15} aria-hidden="true" /> {t("notFound.eyebrow")}
          </p>
          <h1 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#172019] sm:text-5xl">
            {t("notFound.title")}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#6B806F] sm:text-lg">
            {t("notFound.description")}
          </p>

          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/#search"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#304A3A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#6B806F] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] focus-visible:ring-offset-2"
            >
              <Search size={17} aria-hidden="true" />
              {t("notFound.explore")}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E0D7] bg-white px-6 py-3.5 text-sm font-semibold text-[#304A3A] transition-all hover:-translate-y-0.5 hover:border-[#6B806F] hover:bg-[#E7F0E9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] focus-visible:ring-offset-2"
            >
              <Home size={17} aria-hidden="true" />
              {t("notFound.home")}
            </Link>
          </div>

          <section className="mt-16 w-full max-w-2xl rounded-3xl border border-[#E3E9E4] bg-white p-6 text-left shadow-[0_12px_36px_rgba(48,74,58,0.06)] sm:mt-20 sm:p-8" aria-labelledby="discovery-heading">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6B806F]">{t("notFound.keep")}</p>
                <h2 id="discovery-heading" className="mt-2 text-xl font-bold tracking-tight text-[#304A3A]">
                  {t("notFound.looking")}
                </h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-[#6B806F]">
                  {t("notFound.suggestions")}
                </p>
              </div>
              <Link
                href="/countries/europe"
                className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-bold text-[#304A3A] transition-colors hover:text-[#6B806F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F] focus-visible:ring-offset-2 sm:self-center"
              >
                {t("notFound.discover")} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <nav className="mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#E3E9E4] pt-5" aria-label="Quick name links">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#6B806F] underline decoration-[#D5E0D7] underline-offset-4 transition-colors hover:text-[#304A3A] hover:decoration-[#6B806F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F]"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
          </section>
        </div>
      </main>
    </>
  );
}