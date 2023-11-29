import React, { useEffect, useState } from 'react';
import { EmptyCartContainer } from '../Cart.styled';
import { useDispatch } from 'react-redux';
import { clearCartItems } from 'redux/slice/cartSlice';
import { image6 } from 'images';
import { TitleContainer } from './OrderSuccessful.styled';
import { CheckCircle } from 'components/Icons';

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
        <TitleContainer>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>Ваше замовлення оформлене</span>
            <span style={{ margin: '2px' }}>
              <CheckCircle />
            </span>
          </p>
          <p style={{ marginTop: '8px' }}>
            Дякуємо за те, що обрали наш магазин!
          </p>
          {/* <BtnBackToCatalog to={'/catalog'}>Перейти до каталогу</BtnBackToCatalog> */}
        </TitleContainer>
        <div>
          <img src={image6} alt="Cart img" />
        </div>
      </EmptyCartContainer>
    </>
  ) : null;
};
