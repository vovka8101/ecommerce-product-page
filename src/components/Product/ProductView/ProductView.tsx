import { useState } from "react"
import { getImageUrl } from "../../../utils/getImageUrl"
import s from "./productView.module.css"

type ProductViewProps = {
  productImg: string[]
}

export const ProductView = ({ productImg }: ProductViewProps) => {
  const [selectedImg, setSelectedImg] = useState(0)

  return (
    <div className={s.imgContainer}>
      <div className={s.topImg}>
        <img
          className={s.imgMain}
          src={getImageUrl(productImg[selectedImg])}
          alt="Product"
        />
      </div>
      <div className={s.thumbnail}>
        {productImg.map((img, idx) => (
          <img
            key={idx}
            className={s.imgThumbnail}
            src={getImageUrl(img + '-thumbnail')}
            onClick={() => setSelectedImg(idx)}
            alt={img}
          />
        ))}
      </div>
    </div>
  )
}
