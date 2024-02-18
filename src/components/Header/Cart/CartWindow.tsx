import { TCart } from "../../../types/product.types"
import { getImageUrl } from "../../../utils/getImageUrl"
import s from "./styles.module.css"
import trashIcon from "../../../assets/images/icon-delete.svg"
import { useAppDispatch } from "../../../app/hooks"
import { removeProduct } from "../../../features/cart/cartSlice"

type CartWindowProps = {
  products: TCart[]
}

export const CartWindow = ({ products }: CartWindowProps) => {
  const dispatch = useAppDispatch()

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
            <div className={s.productInfo}>
              <h4 className={s.productTile}>{product.name}</h4>
              <p className={s.productPrice}>
                ${product.price.toFixed(2)} x {product.amount}
                <span className={s.productTotalPrice}>${product.totalPrice.toFixed(2)}</span>
              </p>
            </div>
            <button
              className={s.deleteProductBtn}
              onClick={() => dispatch(removeProduct(product.id))}
            >
              <img src={trashIcon} alt="Trash icon" />
            </button>
          </div>
        ))}
        {!products.length ? (
          <p className={s.emptyCartMsg}>Your cart is empty.</p>
        ) : (
          <button className={s.checkoutBtn}>Checkout</button>
        )}
      </div>
    </div>
  )
}
