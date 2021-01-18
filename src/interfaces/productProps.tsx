import { IProduct } from './product'
import { Router } from 'next/router'

export interface IProductProps {
    product: IProduct
    router: Router
}