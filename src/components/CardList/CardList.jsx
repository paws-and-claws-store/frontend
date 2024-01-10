import { Card } from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import { List, ListItem } from './CardList.styled';
import { useDispatch } from 'react-redux';
import { setViewedProducts } from 'redux/slice/viewedProductsSlice';

export const CardList = ({ productsList }) => {
  const [isSorted, setIsSortet] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsSortet(productsList);
  }, [productsList]);

  const onCardClick = el => {
    dispatch(setViewedProducts(el));
  };
  return (
    <>
      {isSorted.length !== 0 && (
        <List>
          {isSorted.map(el => {
            return (
              <ListItem key={el._id}>
                <Card el={el} onClick={() => onCardClick(el)} />
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
