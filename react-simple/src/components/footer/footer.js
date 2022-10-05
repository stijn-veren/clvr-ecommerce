import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
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
  )
}
