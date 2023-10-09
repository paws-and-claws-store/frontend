import { Card } from 'components/Card/Card';

import React from 'react';
import { List, ListItem } from './CardList.styled';
import Pagination from 'components/Pagination/Pagination';

export const CardList = ({ productsList }) => {
  return (
    <>
      {productsList.length !== 0 && (
        <List>
          {productsList.map(el => {
            return (
              <ListItem key={el._id}>
                <Card el={el} />
              </ListItem>
            );
          })}
        </List>
      )}
      <Pagination />
    </>
  );
};
