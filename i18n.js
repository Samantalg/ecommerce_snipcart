import translationEN from './public/locales/en/common.json'
import translationES from './public/locales/es/common.json'
import { initReactI18next } from 'react-i18next'
import i18n from "i18next"

i18n.use(initReactI18next)

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;