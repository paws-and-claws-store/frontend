import { Card } from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import { List, ListItem } from './CardList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortingTypeStore } from 'redux/selectors';
import { setViewedProducts } from 'redux/viewedProductsSlice';

export const CardList = ({ productsList }) => {
const [isSorted, setIsSortet]= useState([])

  const sortingType = useSelector(selectSortingTypeStore);

  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(sortingType === 'cheap'){
      const cheapProd =[ ...productsList].sort((a,b)=> a.items[0].price - b.items[0].price);
      setIsSortet(cheapProd)
    }

   else if(sortingType === 'expensive'){
      const expensiveProd =[ ...productsList].sort((a,b)=>b.items[0].price -a.items[0].price);
      setIsSortet(expensiveProd)
    }
   else
   { setIsSortet(productsList)}

  },[productsList, sortingType])

  const onCardClick = (el)=>{
    // console.log('el:',el);
    dispatch(setViewedProducts(el))
  }

  return (
    <>
      {isSorted.length !== 0 && (
        <List>
          {isSorted.map(el => { 
            return (
              <ListItem key={el._id} onClick={()=>onCardClick(el)}>
                <Card el={el} />
              </ListItem>
            );
          })}
        </List>
      )}
    </>
  );
};
