import cartIcon from "../../../assets/images/icon-cart.svg"
import s from "./styles.module.css"
import { CartWindow } from "./CartWindow"
import { useState } from "react"
import { useAppSelector } from "../../../app/hooks"

export const Cart = () => {
  const [isOpened, setIsOpened] = useState(false)
  const products = useAppSelector(state => state.cart)

  return (
    <>
      <div onClick={() => setIsOpened(true)} className={s.cart}>
        {!!products.length && <span className={s.productsInCart}>{products.length}</span>}
        <img className={s.cartIcon} src={cartIcon} alt="Cart icon" />
        {isOpened && <CartWindow products={products} />}
      </div>
      {isOpened &&
        <div className={s.close_cart_window} onClick={() => setIsOpened(false)}></div>
      }
    </>
  )
}