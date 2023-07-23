import { Card } from 'components/Card/Card';
import catalog from '../../DB/catalog.json';
import React from 'react';
import { List, ListItem } from './CardList.styled';
import { groupBy } from 'helpers';

export const CardList = ({ uniqueObjArray }) => {
  // const filterItems = catalog.filter(
  //   el => el.sale && (el.count !== 0 || el.count !== null),
  // );

  // const uniqueObjArray = [
  //   ...new Map(filterItems.map(item => [item['foodName'], item])).values(),
  // ];

  return (
    <List>
      {uniqueObjArray.map(el => {
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
