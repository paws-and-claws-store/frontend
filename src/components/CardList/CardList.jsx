import { Card } from 'components/Card/Card';
import catalog from '../DB/catalog.json';
import React from 'react';
import { List, ListItem } from './CardList.styled';

export const CardList = () => {
  return (
    <List>
      {catalog.slice(-12).map((el, index) => {
        console.log(index);
        console.log(el);
        return (
          <ListItem key={index}>
            <Card el={el} />
          </ListItem>
        );
      })}
    </List>
  );
};
