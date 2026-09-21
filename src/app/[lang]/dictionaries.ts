import { lang } from "next/root-params";
import { notFound } from "next/navigation";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async () => {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
};

export const getDictionaryForLocale = async (locale: Locale) => {
  if (!hasLocale(locale)) notFound();
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
