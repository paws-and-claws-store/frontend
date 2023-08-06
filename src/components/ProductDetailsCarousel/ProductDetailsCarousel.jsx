import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import catalog from '../../DB/catalog.json';
import { useParams } from 'react-router-dom';

export const ProductDetailsCarousel = ({ id }) => {
  // const { id } = useParams;
  console.log('id:', id);
  console.log('catalog:', catalog);
  const obj = catalog.find(el => Number(el.id) === Number(id));

  return (
    <div className="text-white text-[20px] w-full max-w-[300px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={88}
        className="productCarousel"
        verticalSwipe="standart"
      >
        <img src={obj.image} alt="" />
        <img src={obj.image} alt="" />
        <img src={obj.image} alt="" />
        <img src={obj.image} alt="" />
        <img src={obj.image} alt="" />
        <img src={obj.image} alt="" />
      </Carousel>
    </div>
  );
};
