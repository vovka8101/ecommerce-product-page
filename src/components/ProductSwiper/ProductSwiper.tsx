import { Navigation, Pagination, EffectFade, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import { getImageUrl } from '../../utils/getImageUrl'
import iconClose from "../../assets/images/icon-close.svg"
import type TSwiper from 'swiper';

import "./styles.css"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { useState } from 'react';

type ProductSwiperProps = {
  productImgs: string[]
  handleModalOpen: (isOpen: boolean) => void
  isModalOpen?: boolean
  isNavigation?: boolean
}

export const ProductSwiper = ({
  productImgs,
  handleModalOpen,
  isModalOpen,
  isNavigation = false,
}: ProductSwiperProps) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper | null>(null);

  const handleClick = () => {
    if (window.innerWidth <= 576) {
      return
    }

    handleModalOpen(true)
  }

  return (
    <div className={`product-swiper ${isModalOpen ? "modal" : ""}`}>
      {isModalOpen && (
        <div className="close-swiper-modal-btn" onClick={() => handleModalOpen(false)}>
          <img src={iconClose} alt="Close modal window" />
        </div>
      )}
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Thumbs]}
        effect="fade"
        pagination={{ clickable: false }}
        navigation={isNavigation}
        loop={true}
        onClick={handleClick}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="productMainSwiper"
      >
        {productImgs.map(img => (
          <SwiperSlide key={img}>
            <img className="main-img" src={getImageUrl(img)} alt="Product" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={26}
        slidesPerView={4}
        modules={[Thumbs]}
        className="productThumbSwiper"
      >
        {productImgs.map(img => (
          <SwiperSlide key={img}>
            <div className="thumb-img-container">
              <img className="thumb-img" src={getImageUrl(img)} alt="Product" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
