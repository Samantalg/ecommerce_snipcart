import Layout from '../../components/layout'
import Product from '../../components/product'
import { useAppContext } from '../../context/state'

const ProductPage = ({ params }) => {
    const productsState = useAppContext()
    const index = parseInt(params) - 1
    const product = productsState[index]
    return (
        <div className="app">
            <Layout>
                <Product product={product} />
            </Layout>
        </div>
    )
}

export async function getServerSideProps(context) {
    const params = context.params.product
    return {
        props: { params }
    };
}




export default ProductPage