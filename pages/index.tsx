import Layout from '../components/layout'
import Link from 'next/link'
import { withTranslation } from 'react-i18next/'

const Index = ({ t }) => {
    return (
        <div className="app">
            <Layout>
                <main className="main">
                    <h1 className="title">{t('aquarium')}</h1>
                    <img src="static/aquarium.jpg" alt={t('aquarium')} className="image" />
                    <Link href="/products">{ }
                        <h2>{t('home_message')}</h2>
                    </Link>

                </main>
            </Layout>
        </div>
    )
}

export default withTranslation()(Index)