import { TCart, TProduct } from "../../../types/product.types"
import s from "./productContent.module.css"
import iconMinus from "../../../assets/images/icon-minus.svg"
import iconPlus from "../../../assets/images/icon-plus.svg"
import iconCart from "../../../assets/images/icon-cart.svg"
import { useState } from "react"

type ProductContentProps = {
  product: TProduct
  handleAddToCart: (product: Omit<TCart, "id" | "totalPrice">) => void
}

export const ProductContent = ({ product, handleAddToCart }: ProductContentProps) => {
  const [amount, setAmount] = useState(0)

  const handleAdd = () => {
    handleAddToCart({
      name: product.name,
      price: product.price,
      imgSrc: product.imgSrc[0],
      amount,
    })

    setAmount(0)
  }

  return (
    <div className={s.content}>
      <p className={s.company}>{product.company}</p>
      <h1 className={s.title}>{product.name}</h1>
      <p className={s.description}>{product.description}</p>
      <div className={s.priceContainer}>
        <span className={s.price}>${product.price.toFixed(2)}</span>
        <span className={s.discount}>{product.discount}%</span>
      </div>
      <p className={s.oldPrice}>${product.oldPrice.toFixed(2)}</p>
      <div className={s.buttons}>
        <div className={s.amountButtons}>
          <button
            className={s.amountBtn}
            onClick={() => setAmount(amount - 1)}
            disabled={amount === 0}
          >
            <img src={iconMinus} alt="Minus icon" />
          </button>
          <p className={s.amount}>{amount}</p>
          <button
            className={s.amountBtn}
            onClick={() => setAmount(amount + 1)}
          >
            <img src={iconPlus} alt="Plus icon" />
          </button>
        </div>
        <button
          className={s.addToCart}
          onClick={handleAdd}
          disabled={!amount}
        >
          <img
            className={s.cartIcon}
            src={iconCart}
            alt="Cart icon"
          />
          <span className={s.addToCartText}>Add to cart</span>
        </button>
      </div>
    </div>
  )
}
