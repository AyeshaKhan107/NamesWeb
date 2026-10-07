"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

type FeaturedName = {
  name: string;
  gender: string;
  origin: string;
  region: string;
  meaning: string;
  href: string;
};

export default function AnimatedFeaturedNames({ names }: { names: FeaturedName[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeName = names[activeIndex];

  function moveSlide(direction: number) {
    setActiveIndex((currentIndex) => (currentIndex + direction + names.length) % names.length);
  }

  useEffect(() => {
    const timer = window.setInterval(() => moveSlide(1), 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative ml-auto min-w-0 w-full max-w-sm py-4 md:py-8"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") moveSlide(-1);
        if (event.key === "ArrowRight") moveSlide(1);
      }}
      tabIndex={0}
      aria-label="Featured names slider"
    >
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em]" style={{ color: "var(--brass)" }}>
            <Sparkles size={14} /> Featured names
          </p>
          <span className="text-xs font-medium" style={{ color: "#6B7568" }}>
            {String(activeIndex + 1).padStart(2, "0")} / {String(names.length).padStart(2, "0")}
          </span>
        </div>

        <div key={activeName.name} className="animate-[name-fade_600ms_ease-out]">
          <h2 className="font-display mt-8 text-5xl" style={{ color: "var(--forest-deep)" }}>
            {activeName.name}
          </h2>
          <p className="mt-2 text-sm" style={{ color: "#6B7568" }}>
            {activeName.gender} · {activeName.origin} · {activeName.region}
          </p>
          <div className="mt-6 h-px w-full" style={{ background: "var(--sage-line)" }} />
          <p className="mt-5 text-[15px] leading-6" style={{ color: "#3C453D" }}>
            Means <span className="font-semibold">{activeName.meaning}</span> — one story, carried across generations.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => moveSlide(-1)}
              aria-label="Previous featured name"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8D9C8] text-[#6B806F] transition hover:border-[#304A3A] hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F]"
            >
              <ArrowLeft size={14} />
            </button>
            <div className="flex gap-1.5" aria-label="Featured name slides">
            {names.map((item, index) => (
              <button
                key={item.name}
                aria-label={`Show ${item.name}`}
                aria-current={index === activeIndex}
                className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex ? "w-8 bg-[#93712F]" : "w-1.5 bg-[#D8D9C8]"}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            ))}
            </div>
            <button
              type="button"
              onClick={() => moveSlide(1)}
              aria-label="Next featured name"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8D9C8] text-[#6B806F] transition hover:border-[#304A3A] hover:text-[#304A3A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93712F]"
            >
              <ArrowRight size={14} />
            </button>
          </div>
          <Link href={activeName.href} className="inline-flex items-center gap-1 text-sm font-medium transition hover:gap-2" style={{ color: "var(--forest)" }}>
            Explore <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
