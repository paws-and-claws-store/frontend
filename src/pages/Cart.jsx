import React from 'react';
import {
  BtnBackToCatalog,
  CartContainer,
  LinkToCatalog,
  ListItems,
  TitleCart,
  TotalAmount,
  TotalAmountContainer,
  TotalAmountNumber,
  TotalAmountSumbol,
} from './Cart.styled';
import Img from '../images/Travel_bag.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { CartItem } from 'components';

import { CaretLeftPagination, CrossToDelete } from 'components/Icons';
import { clearCartItems } from 'redux/cartSlice';

export const Cart = () => {
  const cartStore = useSelector(selectCartStore);
  const dispatch = useDispatch();

  const calculateTotalCost = () => {
    return cartStore.reduce((total, item) => {
      const itemCost = item.sale
        ? item.sale * item.cardCount
        : item.price * item.cardCount;
      return total + itemCost;
    }, 0);
  };

  const handleDelete = () => {
    dispatch(clearCartItems());
  };

  return (
    <>
      {cartStore.length > 0 ? (
        <div>
          <TitleCart>Кошик</TitleCart>
          <ListItems>
            {cartStore.map(prod => {
              return (
                <li key={prod.productCode}>
                  <CartItem prod={prod} />
                </li>
              );
            })}
          </ListItems>
          <TotalAmountContainer>
            <TotalAmount>
              Загальна сума:{' '}
              <span>
                <TotalAmountNumber>
                  {calculateTotalCost().toFixed(2)}
                </TotalAmountNumber>
                <TotalAmountSumbol>₴</TotalAmountSumbol>
              </span>
              <button onClick={handleDelete}>
                <CrossToDelete />
              </button>
            </TotalAmount>
            <LinkToCatalog to={'/catalog'}>
              <span>
                <CaretLeftPagination />
              </span>{' '}
              <span>Повернутись до каталогу</span>
            </LinkToCatalog>
          </TotalAmountContainer>
        </div>
      ) : (
        <CartContainer>
          <div>
            <TitleCart>На жаль, ваш кошик порожній</TitleCart>
            <BtnBackToCatalog to={'/catalog'}>
              Перейти в каталог
            </BtnBackToCatalog>
          </div>
          <div>
            <img src={Img} alt="Cart img" />
          </div>
        </CartContainer>
      )}
    </>
  );
};
