import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  ViewedProductsContainer,
  ViewedProductsTitel,
  ViewedProductsItem,
  PrevBtn,
  NextBtn,
} from './ViewedProducts.styled';
import { selectViewedProducts } from 'redux/selectors';
import { Card } from 'components/Card/Card';
import { setViewedProducts } from 'redux/viewedProductsSlice';
import { ArrowLeftViewedProducts } from 'components/Icons';
import { ArrowRightViewedProducts } from 'components/Icons';

export const ViewedProducts = () => {
  const [productsList, setProductsList] = useState(null);
  console.log("productsList:", productsList?.length-1)
  const [imageIndex, setImageIndex] = useState(0);
  console.log("imageIndex:", imageIndex)

  const viewedProducts = useSelector(selectViewedProducts);
  console.log("viewedProducts:", viewedProducts)
  const dispatch = useDispatch();

  const viewedSwiper = useRef(null);

  useEffect(() => {
    if (productsList !== viewedProducts) {
      setProductsList(viewedProducts);
    }
  }, [productsList, viewedProducts]);

  const onCardClick = el => {
    dispatch(setViewedProducts(el));
  };

  const handlePrevBtn = () => {
    if (viewedSwiper.current && viewedSwiper.current.swiper) {
      viewedSwiper.current.swiper.slidePrev();
      setImageIndex(viewedSwiper.current.swiper.realIndex);
    }
  };

  const handleNextBtn = () => {
    if (viewedSwiper.current && viewedSwiper.current.swiper) {
      viewedSwiper.current.swiper.slideNext();
      setImageIndex(viewedSwiper.current.swiper.realIndex);
    }
  };

  return (
    <ViewedProductsContainer>
      <div style={{display:'flex'}}>
      <ViewedProductsTitel>Переглянуті товари</ViewedProductsTitel>
      {productsList?.length > 4 ? (
          <PrevBtn
            onClick={() => {
              handlePrevBtn();
            }}
            disabled={imageIndex === 0}
          >
            <ArrowLeftViewedProducts />
          </PrevBtn>
        ) : null}

      {productsList?.length > 4 ? (
          <NextBtn
            onClick={() => {
              handleNextBtn();
            }}
            disabled={imageIndex === productsList.length - 4}
          >
            <ArrowRightViewedProducts />
          </NextBtn>
        ) : null}
        </div>

      <Swiper
      ref={viewedSwiper}
      slidesPerView={4}
      spaceBetween={20}
        // options={{
        //   perPage: 4,
        //   perMove: 4,
        //   pagination: false,
        //   arrows: productsList && productsList.length <= 4 ? false : true, // включаем кнопки переключения
        //   gap: 20,
        //   speed: 800,
        // }}
      >
        {productsList
          ? productsList.map(el => (
              <SwiperSlide key={el._id}>
                <ViewedProductsItem onClick={() => onCardClick(el)}>
                  <Card el={el} />
                </ViewedProductsItem>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </ViewedProductsContainer>
  );
};
