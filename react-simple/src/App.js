import './App.css'
import { useTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'EN' },
  nl: { nativeName: 'NL' },
}

function App() {
  const { t, i18n } = useTranslation()

  return (
    <div className="clvr-ecommerce">
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <header>{t('header.greetings')}</header>
    </div>
  )
}

export default App
