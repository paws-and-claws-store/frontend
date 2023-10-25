import React from 'react';
import {
  BtnBackToCatalog,
  CartContainer,
  ListItems,
  TitleCart,
} from './Cart.styled';
import Img from '../images/Travel_bag.png';
import { useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { CartItem } from 'components';

export const Cart = () => {
  const cartStore = useSelector(selectCartStore);

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
