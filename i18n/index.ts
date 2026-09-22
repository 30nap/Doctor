import { fa } from "./dictionaries/fa";
import { defaultLocale, localeMeta } from "./config";

/** Active dictionary. With more locales this becomes getDictionary(locale). */
export const t = fa;
export const locale = defaultLocale;
export const meta = localeMeta[defaultLocale];
