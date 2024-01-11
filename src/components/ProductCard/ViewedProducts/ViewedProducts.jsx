import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  ViewedProductsContainer,
  ViewedProductsTitel,
  // ViewedProductsItem,
  PrevBtn,
  NextBtn,
} from './ViewedProducts.styled';
import { selectViewedProducts } from 'redux/selectors/selectors';
import { Card } from 'components/Card/Card';

import { setViewedProducts } from 'redux/slice/viewedProductsSlice';
import { ArrowLeftViewedProducts } from 'components/Icons';
import { ArrowRightViewedProducts } from 'components/Icons';

export const ViewedProducts = () => {
  // const [productsList, setProductsList] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [offScale] = useState(true);

  const viewedProducts = useSelector(selectViewedProducts);
  const dispatch = useDispatch();

  const viewedSwiper = useRef(null);

  // useEffect(() => {
  //   if (productsList !== viewedProducts) {
  //     setProductsList(viewedProducts);
  //   }
  // }, [productsList, viewedProducts]);

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
      <div style={{ display: 'flex' }}>
        <ViewedProductsTitel>Переглянуті товари</ViewedProductsTitel>
        {viewedProducts?.length > 4 ? (
          <PrevBtn
            onClick={() => {
              handlePrevBtn();
            }}
            disabled={imageIndex === 0}
          >
            <ArrowLeftViewedProducts />
          </PrevBtn>
        ) : null}

        {viewedProducts?.length > 4 ? (
          <NextBtn
            onClick={() => {
              handleNextBtn();
            }}
            disabled={imageIndex === viewedProducts.length - 4}
          >
            <ArrowRightViewedProducts />
          </NextBtn>
        ) : null}
      </div>

      <Swiper
        ref={viewedSwiper}
        slidesPerView={4}
        spaceBetween={20}
        style={{ padding: '24px 2px' }}
      >
        {/* <ul> */}
        {viewedProducts
          ? viewedProducts.map(el => (
              <SwiperSlide key={el._id}>
                {/* <ViewedProductsItem > */}
                <>
                  <Card
                    el={el}
                    offScale={offScale}
                    onClick={() => onCardClick(el)}
                  />
                </>
                {/* </ViewedProductsItem> */}
              </SwiperSlide>
            ))
          : null}
        {/* </ul> */}
      </Swiper>
    </ViewedProductsContainer>
  );
};
