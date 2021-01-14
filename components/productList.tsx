import { IProductListProps } from '../interfaces/productListProps'
import Product from './product'

const ProductList = (props: IProductListProps) => {
  const { products } = props
  return (
    <div className="product-list">
      {products.map((product, index) => <Product product={product} key={index} />)}
    </div>
  )
}
export default ProductList