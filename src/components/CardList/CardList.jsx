import { Card } from 'components/Card/Card';
import catalog from '../../DB/catalog.json';
import React, { useState } from 'react';
import { List, ListItem } from './CardList.styled';
import { groupBy } from 'helpers';

export const CardList = ({ productsList }) => {
  // const filterItems = catalog.filter(
  //   el => el.sale && (el.count !== 0 || el.count !== null),
  // );

  // const uniqueObjArray = [
  //   ...new Map(filterItems.map(item => [item['foodName'], item])).values(),
  // ];

  // const [cartList, setCartList] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('cartList')) || [];
  // });

  return (
    <List>
      {productsList.map((el, index) => {
        return (
          <ListItem key={index}>
            <Card
              el={el}
              // groupItems={groupBy(catalog, 'foodName')[el.foodName]}
              // cartList={cartList}
              // setCartList={setCartList}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
