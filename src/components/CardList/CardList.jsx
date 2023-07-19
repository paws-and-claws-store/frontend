import { Card } from 'components/Card/Card';
import catalog from '../DB/catalog.json';
import React from 'react';
import { List, ListItem } from './CardList.styled';

export const CardList = () => {
  const groupBy = function (arr, key) {
    return arr.reduce(function (acc, x) {
      (acc[x[key]] = acc[x[key]] || []).push(x);
      return acc;
    }, {});
  };

  const filterItems = catalog.filter(
    el => el.sale && (el.count !== 0 || el.count !== null),
  );

  const uniqueObjArray = [
    ...new Map(filterItems.map(item => [item['foodName'], item])).values(),
  ];

  return (
    <List>
      {uniqueObjArray.slice(0, 12).map(el => {
        return (
          <ListItem key={el.id}>
            <Card
              el={el}
              groupItems={groupBy(catalog, 'foodName')[el.foodName]}
            />
          </ListItem>
        );
      })}
    </List>
  );
};
