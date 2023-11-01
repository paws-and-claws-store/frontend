import { Card } from 'components/Card/Card';
import React from 'react';
import { List, ListItem } from './CardList.styled';
import { useLocation } from 'react-router-dom';

export const CardList = ({ productsList }) => {
  const location = useLocation();
  return (
    <>
      {productsList.length !== 0 && (
        <List gridColumns={location?.pathname === '/' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'}>
          {productsList.map(el => {
            return (
              <ListItem key={el._id}>
                <Card el={el} />
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
