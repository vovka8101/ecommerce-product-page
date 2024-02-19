import { useState } from "react"
import { getImageUrl } from "../../../utils/getImageUrl"
import s from "./productView.module.css"
import { ModalWindow } from "./ModalWindow"

type ProductViewProps = {
  productImg: string[]
}

export const ProductView = ({ productImg }: ProductViewProps) => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className={s.imgContainer}>
        <div className={s.topImg} onClick={() => setIsModalOpen(true)}>
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
      {isModalOpen &&
        <>
          <ModalWindow productImg={productImg} currentImg={selectedImg} />
          <div
            className={`modal-container ${s.slider}`}
            onClick={() => setIsModalOpen(false)}
          ></div>
        </>
      }
    </>
  )
}
