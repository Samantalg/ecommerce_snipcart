import Link from 'next/link'
import Head from 'next/head'

const Header = () => {
    return (
        <>
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MDI2OTQxOTItZTg3MS00ZGYyLWEyYjQtYmQxYWNmYzgzNzdlNjM3NDYwNDEwODgzODM3NDU4" id="snipcart"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            </Head>
            <header className="header" >

                <Link href="/">
                    <img src="/static/logo.svg" alt="" className="header__logo" />
                </Link>
                <Link href="/">
                    <h1 className="header__title">FishCastle</h1>
                </Link>
                <Link href="/products">
                    <h2 className="header__title">Products</h2>
                </Link>
                <a className="header__summary snipcart-checkout snipcart-summary" href="#" style={{ textDecoration: "none" }}>
                    <span className="header__price snipcart-total-price"></span>
                </a>
            </header>
        </>
    );
}

export default Header