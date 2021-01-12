import { IProductListProps } from '../interfaces/productListProps'
import Product from './product'

const ProductList = (props: IProductListProps) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => <Product product={product} key={index}/>)}
    </div>
  )
}
export default ProductList