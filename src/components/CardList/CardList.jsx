import { Card } from 'components/Card/Card';

import React from 'react';
import { List, ListItem } from './CardList.styled';

export const CardList = ({ productsList }) => {
  console.log('productsList in Cardlist:', productsList);

  return (
    <List>
      {productsList.map((el, index) => {
        // console.log('el:', el);
        return (
          <ListItem key={index}>
            <Card el={el} />
          </ListItem>
        );
      })}
    </List>
  );
};
