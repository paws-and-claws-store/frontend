import React from 'react';
import { BtnBackToCatalog, CartContainer, TitleCart } from './Cart.styled';
import Img from '../images/Travel_bag.png';
import { useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { CartItem } from 'components';

export const Cart = () => {
  const cartStore = useSelector(selectCartStore);
  console.log('cardCountRedux:', cartStore);

  return (
    <>
      {cartStore.length > 0 ? (
        <div>
          <TitleCart>Кошик</TitleCart>
          <ul>
            {cartStore.map(prod => {
              return (
                <li key={prod.productCode}>
                  <CartItem prod={prod} />
                </li>
              );
            })}
          </ul>
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
