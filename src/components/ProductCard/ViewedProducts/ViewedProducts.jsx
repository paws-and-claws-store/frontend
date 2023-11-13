import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ViewedProductsContainer,
  ViewedProductsTitel,
  ViewedProductsList,
  ViewedProductsItem
} from './ViewedProducts.styled';
import { selectViewedProducts } from 'redux/selectors';
import { Card } from 'components/Card/Card';
import { setViewedProducts } from 'redux/viewedProductsSlice';

export const ViewedProducts = () => {
    
  const viewedProducts = useSelector(selectViewedProducts);
  const dispatch = useDispatch();

  const onCardClick = (el)=>{
    dispatch(setViewedProducts(el))
  };

  return (
    <ViewedProductsContainer>
      <ViewedProductsTitel>Переглянуті товари</ViewedProductsTitel>
      <ViewedProductsList >
        {viewedProducts.length > 0
          ? viewedProducts
              .map(el => (
                <ViewedProductsItem key={el._id} onClick={()=>onCardClick(el)}>
                  <Card el={el} />
                </ViewedProductsItem>
              ))
              .slice(0, 4)
          : null}
      </ViewedProductsList>
    </ViewedProductsContainer>
  );
};
