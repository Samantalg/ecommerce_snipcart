import { IProduct } from '../interfaces/product'
import Product from './product'

const ProductList = (props) => {
  const { products } = props
  return (
    <div className="product-list">
      {products.map((product: IProduct) => <Product product={product} key={product.id} />)}
    </div>
  )
}
export default ProductList