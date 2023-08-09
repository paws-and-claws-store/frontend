import { Card } from 'components/Card/Card';

import React from 'react';
import { List, ListItem } from './CardList.styled';

export const CardList = ({ productsList }) => {
  return (
    <List>
      {productsList.map((el, index) => {
        return (
          <ListItem key={index}>
            <Card el={el} />
          </ListItem>
        );
      })}
    </List>
  );
};
