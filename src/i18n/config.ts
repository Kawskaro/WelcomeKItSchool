import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { ht } from "./locales/ht";

const storedLanguage = localStorage.getItem("language");
const fallbackLanguage = "es";
const supportedLanguages = ["es", "en", "ht"];
const initialLanguage = supportedLanguages.includes(storedLanguage ?? "")
  ? storedLanguage!
  : fallbackLanguage;

void i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    ht: { translation: ht },
  },
  lng: initialLanguage,
  fallbackLng: fallbackLanguage,
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
