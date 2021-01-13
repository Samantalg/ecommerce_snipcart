import Head from 'next/head'
import Layout from '../components/layout'
import ProductList from '../components/productList'
import { IProduct } from '../interfaces/product'
import { IProductListProps } from '../interfaces/productListProps'
import '../styless.scss'

const Index = (props: IProductListProps) => {
    console.log(props.products)
    return (
        <div className="app">
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="MDI2OTQxOTItZTg3MS00ZGYyLWEyYjQtYmQxYWNmYzgzNzdlNjM3NDYwNDEwODgzODM3NDU4" id="snipcart"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            </Head>

            <Layout>
                <ProductList products={props.products} />
            </Layout>
        </div>
    )
}

Index.getInitialProps = async () => {
    const data = await import('../api/data.json')
    return {
        products:  data.products
    }
}

export default Index