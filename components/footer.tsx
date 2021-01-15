import { useTranslation, withTranslation } from 'react-i18next'

const Footer = ({ t }) => {
    const { i18n } = useTranslation()

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }
    return (
        <footer className="footer">
            <p>
                {t('footer')} <a href="https://snipcart.com">Snipcart</a>
            </p>
            <div className="footer__right">
                <a onClick={() => changeLanguage('es')}>ES</a>
                <a onClick={() => changeLanguage('en')}>EN</a>
            </div>

        </footer>
    );
}

export default withTranslation()(Footer)