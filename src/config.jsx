import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
    },
    detection: {
      caches: ['localStorage'],
      lookupLocalStorage: 'locale',
      lookupQuerystring: 'locale',
      order: ['querystring', 'localStorage', 'navigator']
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // JSX escapes by default
    },
    load: 'languageOnly',
    ns: ['wet-boew'],
    whitelist: ['en', 'fr']
  });
