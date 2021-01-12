import Layout from "../components/layout";
import ProductList from "../components/productList";
import { IProduct } from "../interfaces/product";
import { IProductListProps } from "../interfaces/productListProps";

const Products = (props: IProductListProps) => {
    return (
        <Layout>
            <ProductList products={props.products} />
        </Layout>
    );
}


Products.getInitialProps = async () => {
    return {
        products: [
            { id: "nextjs_halfmoon", name: "Halfmoon Betta", price: 25.00, image: "../static/halfmoon.jpg", description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees." } as IProduct,
            { id: "nextjs_dragonscale", name: "Dragon Scale Betta", price: 35, image: "../static/dragonscale.jpg", description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor." } as IProduct
        ]
    }
}

export default Products;