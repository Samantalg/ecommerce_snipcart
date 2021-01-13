import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Product from '../../components/product'

const ProductPage = ({ params }) => {
    const index = parseInt(params) - 1

    const [product, setProduct] = useState({
        "id": 0,
        "name": "",
        "price": 0.00,
        "image": "",
        "description": ""
    })

    useEffect(() => {
        async function loadData() {
            const response = await import('../../api/data.json')
            const product = await response.products[index]
            setProduct(product)
        }

        loadData()
    }, [])

    return (
        <Layout>
            <Product product={product} />
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const params = context.params.product
    return {
        props: { params }
    };
}




export default ProductPage