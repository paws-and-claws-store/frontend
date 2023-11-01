import React, { useEffect, useRef, useState } from 'react';
import { theme } from 'styles';

import {
  CarouselContainer,
  Img,
  ImgWrapper,
  Slider,
  SlidePanel,
  PrevImg,
  NextImg,
  MainImg,
  MainImgWrapper,
} from './ProductCarusel.styled';
import { CreateDownMini } from 'components/Icons/CreateDownMini';

export const ProductDetailsCarousel = ({ id, mainImage, images }) => {

  const [currentImage, setCurrentImage] = useState(mainImage);
  const [isTopButtonDisabled, setIsTopButtonDisabled] = useState(false);
const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

useEffect(() => {
  const container = imageContainerRef.current;

  const handleScroll = () => {
    if (container.scrollTop > 0) {
      setIsTopButtonDisabled(false); // Снимаем disabled с верхней кнопки
    } else {
      setIsTopButtonDisabled(true); // Включаем disabled на верхней кнопке
    }

    if (container.scrollTop + container.clientHeight < container.scrollHeight) {
      setIsNextButtonDisabled(false); // Снимаем disabled с нижней кнопки
    } else {
      setIsNextButtonDisabled(true); // Включаем disabled на нижней кнопке
    }
  };

  container.addEventListener('scroll', handleScroll);

  return () => {
    container.removeEventListener('scroll', handleScroll);
  };
}, []);
  
  const handleImageClick = (img, indx) => {
    setCurrentImage(img);
    // setIsLastImage(images.indexOf(img)===images.length-1)
    // console.log("images.indexOf(img):", images.indexOf(img))
    // console.log("images.length-1:", images.length-1)
  };

  let imageContainerRef = useRef(null);

  const prev = () => {
    if (imageContainerRef.current.scrollTop === 0) { 
      setIsTopButtonDisabled(true);
    } 
    imageContainerRef.current.scrollTop -= 109;

    if (imageContainerRef.current.scrollTop + imageContainerRef.current.clientHeight < imageContainerRef.current.scrollHeight) {
      setIsNextButtonDisabled(false);
    }
   
  };
  
  const next = () => {
    if (imageContainerRef.current.scrollTop + imageContainerRef.current.clientHeight >= imageContainerRef.current.scrollHeight) {
      setIsNextButtonDisabled(true);
    }
    imageContainerRef.current.scrollTop += 109;
    if (imageContainerRef.current.scrollTop !== 0) {
      
      setIsTopButtonDisabled(false);
    } 
  };

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
          style={images.length > 5 ? null : { justifyContent: 'center' }}
        >
          {images.map((img, index) => (
            <ImgWrapper 
            key={index} 
            onClick={() => handleImageClick(img, index)} 
            style={{borderColor: currentImage===img ? theme.colors.orange : theme.colors.green}}
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
      
       <MainImg 
       src={currentImage} 
       alt="img" 
       style={{opacity: 1}}
       />
      
      </MainImgWrapper>
    </CarouselContainer>
  );
};
