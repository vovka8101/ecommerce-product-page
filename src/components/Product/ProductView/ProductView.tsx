import { useState } from "react"
import { getImageUrl } from "../../../utils/getImageUrl"
import iconPrevious from "../../../assets/images/icon-previous.svg"
import iconNext from "../../../assets/images/icon-next.svg"
import s from "./productView.module.css"
import { ModalWindow } from "./ModalWindow"
import { useWindowWidth } from "../../../hooks/useWindowWidth"

type ProductViewProps = {
  productImg: string[]
}

export const ProductView = ({ productImg }: ProductViewProps) => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const windowWidth = useWindowWidth()

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOpenModal = () => {
    if (windowWidth > 576) setIsModalOpen(true)
  }

  return (
    <>
      <div className={s.imgContainer}>
        <div
          className={s.topImg}
          onClick={handleOpenModal}
        >
          <img
            className={s.imgMain}
            src={getImageUrl(productImg[selectedImg])}
            alt="Product"
          />
          <button
            disabled={!selectedImg}
            className={`${s.prevBtn} ${s.switchBtn} ${s.containerBtn}`}
            onClick={() => setSelectedImg(selectedImg - 1)}
          >
            <img src={iconPrevious} alt="Previous Image" />
          </button>
          <button
            disabled={selectedImg === (productImg.length - 1)}
            className={`${s.nextBtn} ${s.switchBtn} ${s.containerBtn}`}
            onClick={() => setSelectedImg(selectedImg + 1)}
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
      {isModalOpen &&
        <>
          <ModalWindow
            productImg={productImg}
            currentImg={selectedImg}
            handleCloseModal={handleCloseModal}
          />
          <div
            className={`modal-container ${s.slider}`}
            onClick={() => setIsModalOpen(false)}
          ></div>
        </>
      }
    </>
  )
}
