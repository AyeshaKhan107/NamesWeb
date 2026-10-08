"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Locale, MessageTree, getText, localeOptions, messagesFor } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  t: (key: string, values?: Record<string, string | number>) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export default function LocaleProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setCurrentLocale] = useState(initialLocale);
  const router = useRouter();
  const messages = useMemo(() => messagesFor(locale), [locale]);
  const direction = localeOptions.find((item) => item.code === locale)?.dir ?? "ltr";

  function setLocale(nextLocale: Locale) {
    setCurrentLocale(nextLocale);
    document.cookie = `nameworlds-locale=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax`;
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === "ur" || nextLocale === "ar" ? "rtl" : "ltr";
    router.refresh();
  }

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir: direction,
      setLocale,
      t: (key, values) => getText(messages as MessageTree, key, values),
    }),
    [locale, direction, messages],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
};
