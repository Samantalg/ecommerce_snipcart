import Layout from '../components/layout'
import Link from 'next/link'
import { withTranslation } from 'react-i18next/'

const Index = ({ t }) => {

    return (
        <div className="app">
            <Layout>
                <main className="main">
                    <h1 className="title">{t('shop')}</h1>
                    <img src="static/home.jpg" alt={t('shop')} className="image" />
                    <Link href="/products">{ }
                        <h2>{t('home_message')}</h2>
                    </Link>

                </main>
            </Layout>
        </div>
    )
}

export default withTranslation()(Index)