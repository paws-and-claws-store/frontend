import React, { useState, useRef, useEffect } from 'react';
import { theme } from 'styles';

import {
  CarouselContainer,
  Img,
  ImgWrapper,
  Slider,
  SlidePanel,
  PrevImg,
  NextImg,
  MainImgWrapper,
  MainImgAnimated,
} from './ProductCarusel.styled';
import { CreateDownMini } from 'components/Icons/CreateDownMini';

export const ProductDetailsCarousel = ({ mainImage, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainerRef = useRef(null);

  const prev = () => {
    if (!isTopButtonDisabled) {
      imageContainerRef.current.scrollTop -= 109; // Уменьшьте значение, если необходимо большее смещение
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const next = () => {
    if (!isNextButtonDisabled) {
      imageContainerRef.current.scrollTop += 109; // Увеличьте значение, если необходимо большее смещение
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const isTopButtonDisabled = currentImageIndex === 0;
  const isNextButtonDisabled = currentImageIndex === images.length - 1;

  useEffect(() => {
    // Найдем индекс главной картинки и установим его как начальный индекс
    const initialIndex = images.indexOf(mainImage);
    if (initialIndex !== -1) {
      setCurrentImageIndex(initialIndex);
    }
  }, [mainImage, images]);

  const currentImage = images[currentImageIndex];

  return (
    <CarouselContainer>
      <Slider>
      {images.length > 5 ? (
        <PrevImg onClick={prev} disabled={isTopButtonDisabled}>
          <CreateDownMini />
        </PrevImg>
         ) : null}

        <SlidePanel
          ref={imageContainerRef}
          style={{ height: `${images.length * 108}px` }} 
        >
          {images.map((img, index) => (
            <ImgWrapper
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              style={{
                borderColor: index === currentImageIndex ? theme.colors.orange : theme.colors.green,
              }}
              tabIndex={0}
            >
              <Img src={img} alt="Image" />
            </ImgWrapper>
          ))}
        </SlidePanel>
        {images.length > 5 ? (
        <NextImg onClick={next} disabled={isNextButtonDisabled}>
          <CreateDownMini />
        </NextImg>
        ) : null}
      </Slider>

      <MainImgWrapper>
        <MainImgAnimated src={currentImage} alt="img" style={{ opacity: 1 }} />
      </MainImgWrapper>
    </CarouselContainer>
  );
};
