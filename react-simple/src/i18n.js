import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          site: {
            title: "Stijn Veren's Art",
          },
          menu: {
            abstract: 'abstract',
            landscapes: 'landscapes',
            other: 'other',
            about: 'about',
            contacts: 'contacts',
            terms: 'terms and conditions',
            privacy: 'privacy policy',
          },
        },
      },
      nl: {
        translation: {
          site: {
            title: "Stijn Veren's Kunst",
          },
          menu: {
            abstract: 'abstract',
            landscapes: 'landschappen',
            other: 'ander',
            about: 'over',
            contacts: 'contacten',
            terms: 'voorwaarden',
            privacy: 'privacybeleid',
          },
        },
      },
    },
  })

export default i18n
