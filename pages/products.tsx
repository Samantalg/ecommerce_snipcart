import Layout from '../components/layout'
import ProductList from '../components/productList'
import { useAppContext } from '../context/state'

const Products = () => {
    const productsState = useAppContext();
    console.log('index', productsState)
    if (productsState === {}) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="app">
            <Layout>
                <ProductList products={productsState} />
            </Layout>
        </div>
    )
}

export default Products;