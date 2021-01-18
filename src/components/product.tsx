import { withRouter } from 'next/router'
import { IProductProps } from '../interfaces/productProps'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Product = (props: IProductProps) => {
    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const isEng = !(i18n.language == 'es')

    return (
        <div className="product">
            <Link href={`/product/${props.product.id}`}>
                <h2 className="product__title">{isEng ? props.product.name : props.product.nameEs}</h2>
            </Link>
            <p className="product__description">{isEng ? props.product.description : props.product.descriptionEs}</p>
            <img src={props.product.image} alt="" className="product__image" />
            <div className="product__price-button-container">
                <div className="product__price">${props.product.price}</div>
                <button
                    className="snipcart-add-item product__button"
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-price={props.product.price}
                    data-item-url={props.router.pathname}
                    data-item-image={props.product.image}>
                    {t('add_cart')}
                </button>
            </div>
        </div>
    )
}
export default withRouter(Product)
// withRouter?