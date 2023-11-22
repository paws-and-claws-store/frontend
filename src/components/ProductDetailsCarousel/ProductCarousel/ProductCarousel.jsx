import React, { useState, useRef, useEffect } from 'react';
import { theme } from 'styles';
import { SwiperSlide } from 'swiper/react';

// import { EffectFlip, EffectCube, EffectFade } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

import {
  CarouselContainer,
  Img,
  ImgWrapper,
  Slider,
  SlidePanel,
  PrevImg,
  NextImg,
  MainImgWrapper,
  MainImg,
} from './ProductCarusel.styled';
import { CreateDownMini } from 'components/Icons/CreateDownMini';

export const ProductDetailsCarousel = ({ id, images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images);

  const mainSwiper = useRef(null);
  const thumbsSwiper = useRef(null);

  useEffect(() => {
    if (currentImage && currentImage[0] !== images[0]) {
      setCurrentImage(images);
      setImageIndex(0);
    }

    if (mainSwiper.current && mainSwiper.current.swiper) {
      mainSwiper.current.swiper.update();
      mainSwiper.current.swiper.slideTo(0);
    }

    if (thumbsSwiper.current && thumbsSwiper.current.swiper) {
      thumbsSwiper.current.swiper.update();
      thumbsSwiper.current.swiper.slideTo(0);
    }
  }, [images, currentImage]);

  const handleThumbnailClick = index => {
    if (mainSwiper.current && mainSwiper.current.swiper) {
      mainSwiper.current.swiper.slideTo(index);
      setImageIndex(index);
    }
  };

  const handlePrevThumbnail = () => {
    if (thumbsSwiper.current && thumbsSwiper.current.swiper) {
      thumbsSwiper.current.swiper.slidePrev();
      mainSwiper.current.swiper.slidePrev();
      setImageIndex(mainSwiper.current.swiper.realIndex);
    }
  };

  const handleNextThumbnail = () => {
    if (thumbsSwiper.current && thumbsSwiper.current.swiper) {
      thumbsSwiper.current.swiper.slideNext();
      mainSwiper.current.swiper.slideNext();
      setImageIndex(mainSwiper.current.swiper.realIndex);
    }
  };

  return (
    <CarouselContainer>
      <Slider>
        {images.length > 5 ? (
          <PrevImg
            onClick={() => {
              handlePrevThumbnail();
            }}
            disabled={imageIndex === 0}
          >
            <CreateDownMini />
          </PrevImg>
        ) : null}

        <SlidePanel
          key={`thumbsSwiper-${id}`}
          ref={thumbsSwiper}
          spaceBetween={20}
          direction="vertical"
          slidesPerView={currentImage.length >= 5 ? 5 : currentImage.length}
          style={{
            height:
              currentImage.length === 5
                ? '520px'
                : currentImage.length === 4
                ? '412px'
                : currentImage.length === 3
                ? '304px'
                : currentImage.length === 2
                ? '196px'
                : currentImage.length === 1 && '88px',
          }}
        >
          {currentImage?.map((img, index) => (
            <SwiperSlide key={index}>
              <ImgWrapper
                onClick={() => {
                  handleThumbnailClick(index);
                }}
                style={{
                  borderColor:
                    index === imageIndex
                      ? theme.colors.orange
                      : theme.colors.green,
                }}
              >
                <Img src={img} alt="Image" />
              </ImgWrapper>
            </SwiperSlide>
          ))}
        </SlidePanel>

        {images.length > 5 ? (
          <NextImg
            onClick={() => {
              handleNextThumbnail();
            }}
            disabled={imageIndex === currentImage.length - 1}
          >
            <CreateDownMini />
          </NextImg>
        ) : null}
      </Slider>

      <MainImgWrapper
        key={`mainSwiper-${id}`}
        ref={mainSwiper}
        id="main-carousel"
        spaceBetween={1}
        direction="vertical"
        slidesPerView={1}
      >
        {currentImage?.map((img, index) => (
          <SwiperSlide key={index}>
            <MainImg
              src={img}
              style={{ opacity: index === imageIndex ? 1 : 0 }}
              alt="img"
            />
          </SwiperSlide>
        ))}
      </MainImgWrapper>
    </CarouselContainer>
  );
};
