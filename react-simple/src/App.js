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
      <header>
        <div className="wrapper lang">
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
        <div className="wrapper">
          <div className="left-col">
            <h1>
              <a href="index.html">{t('site.title')}</a>
            </h1>
          </div>

          <div className="right-col">
            <ul className="menu">
              <li>
                <a href="abstract.html">{t('menu.abstract')}</a>
              </li>
              <li>
                <a href="landscapes.html">{t('menu.landscapes')}</a>
              </li>
              <li>
                <a href="other.html">{t('menu.other')}</a>
              </li>
              <li>
                <a href="about.html">{t('menu.about')}</a>
              </li>
              <li>
                <a href="contacts.html">{t('menu.contacts')}</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <div className="wrapper">
          <div className="main-image">
            <img
              src="https://picsum.photos/id/279/1000/1000?grayscale&blur=2"
              alt="l'essence de la maison"
              className="img"
            />
          </div>
        </div>
      </main>

      <footer>
        <div className="wrapper">
          <div className="row">
            <ul className="menu">
              <li>
                <a href="terms">{t('menu.terms')}</a>
              </li>
              <li>
                <a href="privacy">{t('menu.privacy')}</a>
              </li>
            </ul>
          </div>

          <div className="row">
            <p className="copyright">&copy; 2022 {t('site.title')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
