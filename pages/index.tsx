import Layout from '../components/layout'
import ProductList from '../components/productList'
import { useAppContext } from '../context/state'
import { useEffect } from 'react'
import { IProduct } from '../interfaces/product'
import { IProductListProps } from '../interfaces/productListProps'
import '../styless.scss'

const Index = () => {
    const productsState = useAppContext();
    console.log('index', productsState)
    if (productsState.length === 1) {
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

/* Index.getInitialProps = async () => {
    const data = await import('../api/data.json')
    return {
        products: data.products
    }
} */

export default Index