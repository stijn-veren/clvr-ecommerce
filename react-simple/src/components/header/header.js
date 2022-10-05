import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { lngs } from '../../data/lngs'

import './header.css'

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
            <Link to={`/`}>{t('site.title')}</Link>
          </h1>
        </div>

        <div className="right-col">
          <ul className="menu">
            <li>
              <Link to={`abstract`}>{t('menu.abstract')}</Link>
            </li>
            <li>
              <Link to={`landscapes`}>{t('menu.landscapes')}</Link>
            </li>
            <li>
              <Link to={`other`}>{t('menu.other')}</Link>
            </li>
            <li>
              <Link to={`about`}>{t('menu.about')}</Link>
            </li>
            <li>
              <Link to={`contacts`}>{t('menu.contacts')}</Link>
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
