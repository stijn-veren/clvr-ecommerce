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
          header: {
            greetings: 'Hello, World!',
          },
        },
      },
      nl: {
        translation: {
          header: {
            greetings: 'Hallo Wereld!',
          },
        },
      },
    },
  })

export default i18n
