import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {
  ViewedProductsContainer,
  ViewedProductsTitel,
  // ViewedProductsList,
  ViewedProductsItem,
} from './ViewedProducts.styled';
import { selectViewedProducts } from 'redux/selectors';
import { Card } from 'components/Card/Card';
import { setViewedProducts } from 'redux/viewedProductsSlice';

export const ViewedProducts = () => {
  const [productsList, setProductsList] = useState(null);
  const viewedProducts = useSelector(selectViewedProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsList !== viewedProducts) {
      setProductsList(viewedProducts);
    }
  }, [productsList, viewedProducts]);

  const onCardClick = el => {
    dispatch(setViewedProducts(el));
  };

  return (
    <ViewedProductsContainer>
      <ViewedProductsTitel>Переглянуті товари</ViewedProductsTitel>
      <Splide
        options={{
          perPage: 4,
          perMove: 1,
          pagination: false,
          arrows: productsList && productsList.length <= 4 ? false : true, // включаем кнопки переключения
          gap: 20,
          speed: 800,
        }}
      >
        {/* <ViewedProductsList> */}
        {productsList
          ? productsList.map(el => (
              <SplideSlide key={el._id}>
                <ViewedProductsItem onClick={() => onCardClick(el)}>
                  <Card el={el} />
                </ViewedProductsItem>
              </SplideSlide>
            ))
          : null}
        {/* </ViewedProductsList> */}
      </Splide>
    </ViewedProductsContainer>
  );
};
