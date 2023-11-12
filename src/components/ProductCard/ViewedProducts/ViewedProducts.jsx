import React from //  { useEffect, useState }
'react';
import { useSelector } from 'react-redux';
import { ViewedProductsContainer } from './ViewedProducts.styled';
import { selectViewedProducts } from 'redux/selectors';
import { Card } from 'components/Card/Card';

export const ViewedProducts = () => {
  const viewedProducts = useSelector(selectViewedProducts);
  console.log('viewedProducts:', viewedProducts);

  return (
    <ViewedProductsContainer>
      <h3>Переглянуті товари</h3>
      <ul style={{ display: 'flex', gap: '20px' }}>
        {viewedProducts.length > 0
          ? viewedProducts
              .map((el, indx) => {
                return (
                  <li key={indx}>
                    <Card el={el} />
                  </li>
                );
              })
              .slice(0, 4)
          : null}
      </ul>
    </ViewedProductsContainer>
  );
};
