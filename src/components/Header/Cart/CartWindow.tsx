import { TCart } from "../../../types/product.types"
import { getImageUrl } from "../../../utils/getImageUrl"
import s from "./styles.module.css"

type CartWindowProps = {
  products: TCart[]
}

export const CartWindow = ({ products }: CartWindowProps) => {
  return (
    <div className={s.cart_window}>
      <h3 className={s.cart_title}>Cart</h3>
      <div className={s.cartContent}>
        {products.map(product => (
          <div key={product.id} className={s.product}>
            <img
              className={s.productImg}
              src={getImageUrl(product.imgSrc)}
              alt={product.imgSrc}
            />
            <div>
              <h4 className={s.productTile}>{product.name}</h4>
              <p className={s.productPrice}>
                ${product.price} x {product.amount}
                <span className={s.productTotalPrice}>${product.totalPrice}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
