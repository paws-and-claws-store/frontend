import React, { useEffect, useState } from 'react';
import { BtnBackToCatalog, EmptyCartContainer } from './Cart/Cart.styled';
import Img from '../images/Travel_bag.png';
import { useDispatch } from 'react-redux';
import { clearCartItems } from 'redux/cartSlice';

export const OrderSuccessful = () => {
  const [scrollY, setScrollY] = useState(0);
  const [shouldRenderComponent, setShouldRenderComponent] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCartItems());
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  useEffect(() => {
    if (scrollY === 0) {
      // Якщо скрол повернувся в 0, встановити shouldRenderComponent в true
      setShouldRenderComponent(true);
    }
  }, [scrollY]);

  return shouldRenderComponent ? (
    <>
      <EmptyCartContainer>
        <div>
          <h2 style={{ fontSize: '32px' }}>
            Ваше замовлення оформлене. Дякуємо за покупку!
          </h2>
          <BtnBackToCatalog to={'/catalog'}>
            Перейти до каталогу
          </BtnBackToCatalog>
        </div>
        <div>
          <img src={Img} alt="Cart img" />
        </div>
      </EmptyCartContainer>
    </>
  ) : null;
};
