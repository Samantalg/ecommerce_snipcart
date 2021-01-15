import { withTranslation } from 'react-i18next/'
import Layout from '../components/layout'
import ProductList from '../components/productList'
import { useAppContext } from '../context/state'

const Products = ({ t }) => {
    const productsState = useAppContext()
    if (productsState === {}) {
        return <h1>{t('loading')}</h1>
    }
    return (
        <div className="app">
            <Layout>
                <ProductList products={productsState} />
            </Layout>
        </div>
    )
}

export default withTranslation()(Products)