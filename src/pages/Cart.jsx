import React from 'react';
import { BtnBackToCatalog, CartContainer, TitleCart } from './Cart.styled';
import Img from '../images/Travel_bag.png';

export const Cart = () => {
  return (
    <CartContainer>
      <div>
        <TitleCart>На жаль, ваш кошик порожній</TitleCart>
        <BtnBackToCatalog to={'/catalog'}>Перейти в каталог</BtnBackToCatalog>
      </div>
      <div>
        <img src={Img} alt="Cart img" />
      </div>
    </CartContainer>
  );
};
