"use client";

import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

export default function LocalDateTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setNow(new Date());
    updateTime();
    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (!now) {
    return <div aria-hidden="true" className="mt-7 h-[92px] w-full max-w-xs rounded-2xl border border-[#D8D9C8] bg-white/60" />;
  }

  return (
    <section className="mt-7 w-full max-w-xs rounded-2xl border border-[#D8D9C8] bg-white/70 p-4 text-left shadow-sm backdrop-blur-sm" aria-label="Your local date and time">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E7F0E9] text-[#304A3A]">
          <CalendarDays size={17} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6B806F]">
            {now.toLocaleDateString(undefined, { weekday: "long" })}
          </p>
          <p className="mt-1 text-sm font-semibold text-[#304A3A]">
            {now.toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })}
          </p>
          <p className="mt-1 font-mono text-sm tabular-nums text-[#6B806F]">
            {now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
          </p>
        </div>
      </div>
    </section>
  );
}