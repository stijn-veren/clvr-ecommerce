import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { lngs } from '../../data/lngs'

export default function Header() {
  const { t, i18n } = useTranslation()

  return (
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
  )
}

Header.propTypes = {
  lngs: PropTypes.object,
}
