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
      {/* TODO: create modal window component for code below
        with isModal and productImg props... */
      }
      <div className={s.topImg}>
        <img
          className={s.imgMain}
          src={getImageUrl(productImg[selectedImg])}
          alt="Product"
        />
      </div>
      <div className={s.thumbnail}>
        {productImg.map((img, idx) => (
          <button
            key={idx}
            className={`${s.thumbImgContainer} ${idx === selectedImg ? s.active : ""}`}
            onClick={() => setSelectedImg(idx)}
          >
            <img
              className={s.imgThumbnail}
              src={getImageUrl(img + '-thumbnail')}
              alt={img}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
