import React, { useRef, useState } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// requires a loader
// import catalog from '../../DB/catalog.json';
// import product from '../../DB/products.json';
// import { useParams } from 'react-router-dom';
// import ImageGallery from 'react-image-gallery';

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

  const handleImageClick = img => {
    setCurrentImage(img);
  };

  let imageContainerRef = useRef(null);

  const prev = () => (imageContainerRef.current.scrollTop -= 109);
  const next = () => (imageContainerRef.current.scrollTop += 109);

  return (
    <CarouselContainer>
      <Slider>
        {images.length > 5 ? (
          <PrevImg onClick={prev}>
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
            onClick={() => handleImageClick(img)} 
            tabIndex={0}
            // onFocus={()=>setActiveCard(true)} 
            // onBlur={()=>setActiveCard(false)}
            // style={{borderColor: activeCard&&currentImage===index ? theme.colors.orange : theme.colors.green}}
            >
              <Img src={img} alt="Image" />
            </ImgWrapper>
          ))}
        </SlidePanel>

        {images.length > 5 ? (
          <NextImg onClick={next}>
            <CreateDownMini />
          </NextImg>
        ) : null}
      </Slider>

      <MainImgWrapper>
        <MainImg src={currentImage} alt="img" />
      </MainImgWrapper>
    </CarouselContainer>
  );
};
