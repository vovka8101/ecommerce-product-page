import s from "./styles.module.css"

export const CartWindow = () => {
  return (
    <div className={s.cart_window}>
      <h3 className={s.cart_title}>Cart</h3>
      <div className={s.cartContent}>
        {/* TODO: map cart items; if cart empty show message */}
      </div>
    </div>
  )
}
