import "server-only";
import type { Locale } from "./config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  de: () => import("./de.json").then((module) => module.default),
  tr: () => import("./tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
