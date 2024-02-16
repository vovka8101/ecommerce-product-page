import cartIcon from "../../../assets/images/icon-cart.svg"
import s from "./styles.module.css"
import { CartWindow } from "./CartWindow"
import { useState } from "react"

export const Cart = () => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpened(true)} className={s.cart}>
        <img className={s.cartIcon} src={cartIcon} alt="Cart icon" />
        {isOpened && <CartWindow />}
      </div>
      {isOpened &&
        <div className={s.close_cart_window} onClick={() => setIsOpened(false)}></div>
      }
    </>
  )
}