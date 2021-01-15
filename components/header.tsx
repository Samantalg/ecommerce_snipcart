import Link from 'next/link'
import Head from 'next/head'
import { withTranslation } from 'react-i18next'

const Header = ({ t }) => {
    return (
        <>
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                <script hidden src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MDI2OTQxOTItZTg3MS00ZGYyLWEyYjQtYmQxYWNmYzgzNzdlNjM3NDYwNDEwODgzODM3NDU4" id="snipcart"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            </Head>
            <header className="header" >
                <Link href="/">
                    <img src="/static/logo.svg" alt="" className="header__logo" />
                </Link>
                <Link href="/">
                    <h2 className="header__title">{t('home')}</h2>
                </Link>
                <Link href="/products">
                    <h2 className="header__title">{t('products')}</h2>
                </Link>
                <a className="header__summary snipcart-checkout snipcart-summary" href="#" style={{ textDecoration: "none" }}>
                    <span className="header__price snipcart-total-price"></span>
                </a>
            </header>
        </>
    );
}

export default withTranslation()(Header)