import { useState } from "react"
import { ProductSwiper } from "../../ProductSwiper/ProductSwiper"

type ProductViewProps = {
  productImgs: string[]
}

export const ProductView = ({ productImgs }: ProductViewProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = (isOpen: boolean) => {
    setIsModalOpen(isOpen)
  }

  return (
    <>
      <ProductSwiper productImgs={productImgs} handleModalOpen={handleModalOpen} />
      {isModalOpen && (
        <>
          <div
            className="modal-container images-modal"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <ProductSwiper
            productImgs={productImgs}
            handleModalOpen={handleModalOpen}
            isModalOpen
          />
        </>
      )}
    </>
  )
}
