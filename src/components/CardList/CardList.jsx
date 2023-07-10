import { Card } from 'components/Card/Card';
import catalog from '../DB/catalog.json';
import React from 'react';
import { List, ListItem } from './CardList.styled';

export const CardList = () => {
  return (
    <List>
      {catalog.map(el => {
        return (
          <ListItem key={el.id}>
            <Card el={el} />
          </ListItem>
        );
      })}
    </List>
  );
};
