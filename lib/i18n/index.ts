// import en from "./messages/en";
// import ur from "./messages/ur";
// import ar from "./messages/ar";
// import zh from "./messages/zh";
// import es from "./messages/es";
// import fr from "./messages/fr";
// import de from "./messages/de";
// import ru from "./messages/ru";
// import hi from "./messages/hi";
// import tr from "./messages/tr";

// export const localeOptions = [
//   { code: "en", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
//   { code: "ur", nativeName: "اردو", flag: "🇵🇰", dir: "rtl" },
//   { code: "ar", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
//   { code: "zh", nativeName: "中文", flag: "🇨🇳", dir: "ltr" },
//   { code: "es", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
//   { code: "fr", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
//   { code: "de", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
//   { code: "ru", nativeName: "Русский", flag: "🇷🇺", dir: "ltr" },
//   { code: "hi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
//   { code: "tr", nativeName: "Türkçe", flag: "🇹🇷", dir: "ltr" },
// ] as const;

// export type Locale = (typeof localeOptions)[number]["code"];
// export type MessageTree = { [key: string]: string | MessageTree };
// export const defaultMessages = en as unknown as MessageTree;
// const localizedMessages: Record<Locale, MessageTree> = {
//   en: defaultMessages,
//   ur: ur as MessageTree,
//   ar: ar as MessageTree,
//   zh: zh as MessageTree,
//   es: es as MessageTree,
//   fr: fr as MessageTree,
//   de: de as MessageTree,
//   ru: ru as MessageTree,
//   hi: hi as MessageTree,
//   tr: tr as MessageTree,
// };

// export const isLocale = (value: string | undefined): value is Locale =>
//   localeOptions.some(({ code }) => code === value);

// export const messagesFor = (locale: Locale): MessageTree => {
//   const merge = (base: MessageTree, translation: MessageTree): MessageTree =>
//     Object.fromEntries(
//       Object.entries(base).map(([key, value]) => {
//         const translated = translation[key];
//         return [
//           key,
//           typeof value === "object" && value !== null
//             ? merge(value, typeof translated === "object" && translated !== null ? translated : {})
//             : typeof translated === "string"
//               ? translated
//               : value,
//         ];
//       }),
//     );
//   return locale === "en" ? defaultMessages : merge(defaultMessages, localizedMessages[locale]);
// };

// export const getText = (
//   messages: MessageTree,
//   key: string,
//   values: Record<string, string | number> = {},
// ): string => {
//   const value = key.split(".").reduce<MessageTree | string | undefined>(
//     (current, part) => typeof current === "object" && current !== null ? current[part] : undefined,
//     messages,
//   );
//   if (typeof value !== "string") return key;
//   return value.replace(/\{(\w+)\}/g, (_, name: string) => String(values[name] ?? ""));
// };

// export const displayCountry = (country: string, locale: Locale, flag?: string) => {
//   const alphaCode = flag?.match(/[\u{1F1E6}-\u{1F1FF}]{2}/u)?.[0];
//   if (!alphaCode) return country;
//   const code = Array.from(alphaCode, (character) =>
//     String.fromCharCode(character.codePointAt(0)! - 0x1f1e6 + 65),
//   ).join("");
//   return new Intl.DisplayNames([locale], { type: "region" }).of(code) ?? country;
// };



import en from "./messages/en";
import ur from "./messages/ur";
import ar from "./messages/ar";
import zh from "./messages/zh";
import es from "./messages/es";
import fr from "./messages/fr";
import de from "./messages/de";
import ru from "./messages/ru";
import hi from "./messages/hi";
import tr from "./messages/tr";

export const localeOptions = [
  { code: "en", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "ur", nativeName: "اردو", flag: "🇵🇰", dir: "rtl" },
  { code: "ar", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
  { code: "zh", nativeName: "中文", flag: "🇨🇳", dir: "ltr" },
  { code: "es", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "fr", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "de", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  { code: "ru", nativeName: "Русский", flag: "🇷🇺", dir: "ltr" },
  { code: "hi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
  { code: "tr", nativeName: "Türkçe", flag: "🇹🇷", dir: "ltr" },
] as const;

export type Locale = (typeof localeOptions)[number]["code"];

export type MessageTree = {
  [key: string]: string | MessageTree;
};

export const defaultMessages = en as unknown as MessageTree;

const localizedMessages: Record<Locale, MessageTree> = {
  en: defaultMessages,
  ur: ur as MessageTree,
  ar: ar as MessageTree,
  zh: zh as MessageTree,
  es: es as MessageTree,
  fr: fr as MessageTree,
  de: de as MessageTree,
  ru: ru as MessageTree,
  hi: hi as MessageTree,
  tr: tr as MessageTree,
};

export const isLocale = (
  value: string | undefined,
): value is Locale =>
  localeOptions.some(({ code }) => code === value);

export const messagesFor = (locale: Locale): MessageTree => {
  const merge = (
    base: MessageTree,
    translation: MessageTree,
  ): MessageTree =>
    Object.fromEntries(
      Object.entries(base).map(([key, value]) => {
        const translated = translation[key];

        return [
          key,
          typeof value === "object" && value !== null
            ? merge(
                value,
                typeof translated === "object" && translated !== null
                  ? translated
                  : {},
              )
            : typeof translated === "string"
              ? translated
              : value,
        ];
      }),
    );

  return locale === "en"
    ? defaultMessages
    : merge(defaultMessages, localizedMessages[locale]);
};

export const getText = (
  messages: MessageTree,
  key: string,
  values: Record<string, string | number> = {},
): string => {
  const value = key.split(".").reduce<
    MessageTree | string | undefined
  >(
    (current, part) =>
      typeof current === "object" && current !== null
        ? current[part]
        : undefined,
    messages,
  );

  if (typeof value !== "string") return key;

  return value.replace(
    /\{(\w+)\}/g,
    (_, name: string) => String(values[name] ?? ""),
  );
};

export const displayCountry = (
  country: string,
  locale: Locale,
  flag?: string,
) => {
  const alphaCode = flag?.match(
    /[\u{1F1E6}-\u{1F1FF}]{2}/u,
  )?.[0];

  if (!alphaCode) return country;

  const code = Array.from(alphaCode, (character) =>
    String.fromCharCode(
      character.codePointAt(0)! - 0x1f1e6 + 65,
    ),
  ).join("");

  return (
    new Intl.DisplayNames([locale], {
      type: "region",
    }).of(code) ?? country
  );
};