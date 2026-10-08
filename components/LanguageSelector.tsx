"use client";

import { Languages } from "lucide-react";
import { localeOptions } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function LanguageSelector() {
  const { locale, setLocale, t } = useLocale();

  return (
    <label className="flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-2 text-sm font-semibold text-ink">
      <Languages size={16} className="shrink-0 text-sage" aria-hidden="true" />
      <span className="sr-only">{t("language")}</span>
      <select
        aria-label={t("language")}
        value={locale}
        onChange={(event) => setLocale(event.target.value as (typeof localeOptions)[number]["code"])}
        className="max-w-[6.5rem] cursor-pointer appearance-none bg-transparent text-inherit outline-none"
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.flag} {option.nativeName}
          </option>
        ))}
      </select>
    </label>
  );
}
