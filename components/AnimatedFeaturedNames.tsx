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
};

const featuredNames: FeaturedName[] = [
  { name: "Sofia", gender: "Girl name", origin: "Greek", region: "Europe", meaning: "Wisdom and grace" },
  { name: "Omar", gender: "Boy name", origin: "Arabic", region: "Middle East", meaning: "Flourishing and long-lived" },
  { name: "Layla", gender: "Girl name", origin: "Arabic", region: "Middle East", meaning: "Night and quiet beauty" },
  { name: "Amara", gender: "Girl name", origin: "African", region: "Africa", meaning: "Eternal and graceful" },
];

export default function AnimatedFeaturedNames() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeName = featuredNames[activeIndex];

  function moveSlide(direction: number) {
    setActiveIndex((currentIndex) => (currentIndex + direction + featuredNames.length) % featuredNames.length);
  }

  useEffect(() => {
    const timer = window.setInterval(() => moveSlide(1), 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      className="relative ml-auto w-full max-w-sm overflow-hidden rounded-sm border bg-white p-8 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
      style={{ borderColor: "var(--sage-line)" }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") moveSlide(-1);
        if (event.key === "ArrowRight") moveSlide(1);
      }}
      tabIndex={0}
      aria-label="Featured names slider"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E4E9DF] opacity-60 blur-2xl animate-pulse" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em]" style={{ color: "var(--brass)" }}>
            <Sparkles size={14} /> Featured names
          </p>
          <span className="text-xs font-medium" style={{ color: "#6B7568" }}>
            0{activeIndex + 1} / 0{featuredNames.length}
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

        <div className="mt-8 flex items-center justify-between gap-4">
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
            {featuredNames.map((item, index) => (
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
          <Link href={`/name/${activeName.name.toLowerCase()}`} className="inline-flex items-center gap-1 text-sm font-medium transition hover:gap-2" style={{ color: "var(--forest)" }}>
            Explore <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
