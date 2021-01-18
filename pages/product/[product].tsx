import Layout from '../../components/layout'
import Product from '../../components/product'
import { useAppContext } from '../../context/state'

const ProductPage = ({ params }) => {
    const context = useAppContext()
    const index = parseInt(params) - 1
    const product = context[index]
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