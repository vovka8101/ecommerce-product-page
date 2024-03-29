import { useAppDispatch } from "../../app/hooks"
import { product } from "../../data/product"
import { addProduct } from "../../features/cart/cartSlice"
import { TCart } from "../../types/product.types"
import { ProductContent } from "./ProductContent/ProductContent"
// import { ProductSwiper } from "../ProductSwiper/ProductSwiper"
import { ProductView } from "./ProductView/ProductView"
import s from "./product.module.css"

export const Product = () => {
  const dispatch = useAppDispatch()

  const handleAddToCart = (product: Omit<TCart, "id" | "totalPrice">) => {
    dispatch(addProduct(product))
  }

  return (
    <div className={s.product}>
      <ProductView productImgs={product.imgSrc} />
      {/* <ProductSwiper productImgs={product.imgSrc} /> */}
      <ProductContent product={product} handleAddToCart={handleAddToCart} />
    </div>
  )
}
