import { useState } from "react"
import { getImageUrl } from "../../../utils/getImageUrl"
import s from "./productView.module.css"

type ModalWindowProps = {
  productImg: string[]
  currentImg: number
}

export const ModalWindow = ({ productImg, currentImg }: ModalWindowProps) => {
  const [selectedImg, setSelectedImg] = useState(currentImg)

  return (
    <div className={s.modalContent}>
      <div className={`${s.topImg} ${s.topImgModal}`}>
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