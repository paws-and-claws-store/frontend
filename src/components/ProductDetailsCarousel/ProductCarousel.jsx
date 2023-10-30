import React, { useRef, useState } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// requires a loader
// import { Carousel } from 'react-responsive-carousel';
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

export const ProductDetailsCarousel = ({ id, image }) => {
  const imgArray = [image, image, image, image, image, image, image];

  const [currentImage, setCurrentImage] = useState(0);
  console.log('currentImage:', currentImage);

  const handleImageClick = ind => {
    setCurrentImage(ind);
  };

  let imageContainerRef = useRef(null);

  const prev = () => (imageContainerRef.current.scrollTop -= 109);
  const next = () => (imageContainerRef.current.scrollTop += 109);

  return (
    <CarouselContainer>
      <Slider>
        {imgArray.length > 5 ? (
          <PrevImg onClick={prev}>
            <CreateDownMini />
          </PrevImg>
        ) : null}

        <SlidePanel
          ref={imageContainerRef}
          style={imgArray.length > 5 ? null : { justifyContent: 'center' }}
        >
          {imgArray.map((img, index) => (
            <ImgWrapper key={index} onClick={() => handleImageClick(index)}>
              <Img src={img} alt="Image" />
            </ImgWrapper>
          ))}
        </SlidePanel>

        {imgArray.length > 5 ? (
          <NextImg onClick={next}>
            <CreateDownMini />
          </NextImg>
        ) : null}
      </Slider>

      <MainImgWrapper>
        <MainImg src={imgArray[currentImage]} alt="img" />
      </MainImgWrapper>
    </CarouselContainer>
  );
};
