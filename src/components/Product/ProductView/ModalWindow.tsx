import { useState } from "react"
import { getImageUrl } from "../../../utils/getImageUrl"
import iconClose from "../../../assets/images/icon-close.svg"
import iconPrevious from "../../../assets/images/icon-previous.svg"
import iconNext from "../../../assets/images/icon-next.svg"
import s from "./productView.module.css"

type ModalWindowProps = {
  productImg: string[]
  currentImg: number
  handleCloseModal: () => void
}

export const ModalWindow = ({ productImg, currentImg, handleCloseModal }: ModalWindowProps) => {
  const [selectedImg, setSelectedImg] = useState(currentImg)

  const handleSwitchImg = (step: number) => {
    const newSelectedImg = (selectedImg + step) < 0 ? 3 : (selectedImg + step)
    setSelectedImg(newSelectedImg % 4)
  }

  return (
    <div className={s.modalContent}>
      <div className={`${s.topImg} ${s.topImgModal}`}>
        <img
          className={s.iconClose}
          src={iconClose}
          onClick={() => handleCloseModal()}
          alt="Icon Close"
        />
        <button
          className={`${s.prevBtn} ${s.switchBtn}`}
          onClick={() => handleSwitchImg(-1)}
        >
          <img src={iconPrevious} alt="Previous Image" />
        </button>
        <img
          className={s.imgMain}
          src={getImageUrl(productImg[selectedImg])}
          alt="Product"
        />
        <button
          className={`${s.nextBtn} ${s.switchBtn}`}
          onClick={() => handleSwitchImg(1)}
        >
          <img src={iconNext} alt="Next Image" />
        </button>
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