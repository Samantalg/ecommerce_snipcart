import Head from 'next/Head'
import Layout from '../components/layout'
import ProductList from '../components/productList'
import { IProduct } from '../interfaces/product'
import { IProductListProps } from '../interfaces/productListProps'
import '../styless.scss'

const Index = (props: IProductListProps) => {
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
    return {
        products: [
            { id: "nextjs_halfmoon", name: "Halfmoon Betta", price: 25.00, image: "../static/halfmoon.jpg", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees." } as IProduct,
            { id: "nextjs_dragonscale", name: "Dragon Scale Betta", price: 35, image: "../static/dragonscale.jpg", description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor." } as IProduct
        ]
    }
}

export default Index