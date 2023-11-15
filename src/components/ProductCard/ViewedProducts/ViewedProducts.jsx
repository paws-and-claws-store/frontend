import React, { useEffect, useState } from 'react';
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
  const [productsList, setProductsList] = useState(null);  
  const viewedProducts = useSelector(selectViewedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (productsList !== viewedProducts) {
      setProductsList(viewedProducts)
    }
},[productsList, viewedProducts])

  const onCardClick = (el)=>{
    dispatch(setViewedProducts(el))
  };

  return (
    <ViewedProductsContainer>
      <ViewedProductsTitel>Переглянуті товари</ViewedProductsTitel>
      <ViewedProductsList >
        {productsList
          ? productsList
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
