import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import catalog from '../../DB/catalog.json';
// import product from '../../DB/products.json';
// import { useParams } from 'react-router-dom';
// import ImageGallery from 'react-image-gallery';

import { SliderProduct } from './ProductDetailsCarusel.styled';

export const ProductDetailsCarousel = ({ id, image }) => {
  return (
    <SliderProduct className="text-white text-[20px] w-full max-w-[300px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={88}
        className="productCarousel"
        verticalSwipe="standart"
        axis="horizontal"
      >
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
        <img src={image} alt="" />
      </Carousel>
    </SliderProduct>
  );
};
