import React from 'react';
import {
  BtnBackToCatalog,
  CartContainer,
  EmptyCartContainer,
  Line,
  LinkToCatalog,
  ListContainer,
  ListItems,
  Order,
  TitleCart,
  TotalAmount,
  TotalAmountContainer,
  TotalAmountNumber,
  TotalAmountSumbol,
  TotalAmountTitle,
} from './Cart.styled';
import Img from '../images/Travel_bag.png';
import { useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { CartItem } from 'components';

import { CaretLeftPagination } from 'components/Icons';

export const Cart = () => {
  const cartStore = useSelector(selectCartStore);

  // useEffect(() => {
  //   // Прокручуємо сторінку до гори після завантаження сторінки
  //   window.scrollTo(0, 0);
  // }, []);

  const calculateTotalCost = () => {
    return cartStore.reduce((total, item) => {
      const itemCost = item.sale
        ? item.sale * item.cardCount
        : item.price * item.cardCount;
      return total + itemCost;
    }, 0);
  };

  return (
    <>
      {cartStore.length > 0 ? (
        <CartContainer>
          <TitleCart>Кошик</TitleCart>
          <ListContainer>
            <ListItems>
              {cartStore.map(prod => {
                return (
                  <li key={prod.productCode}>
                    <CartItem prod={prod} />
                  </li>
                );
              })}
            </ListItems>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'sticky', top: '100px' }}>
                <TotalAmountContainer>
                  <TotalAmountTitle>Підсумки кошика:</TotalAmountTitle>
                  <Line></Line>
                  <TotalAmount>
                    <span>Загальна сума:</span>

                    <span>
                      <TotalAmountNumber>
                        {calculateTotalCost().toFixed(2)}
                      </TotalAmountNumber>
                      <TotalAmountSumbol>₴</TotalAmountSumbol>
                    </span>
                  </TotalAmount>
                </TotalAmountContainer>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <LinkToCatalog to={'/catalog'}>
                    <span>
                      <CaretLeftPagination />
                    </span>
                    <span>Повернутися до каталогу</span>
                  </LinkToCatalog>

                  <Order type="submit">Оформити замовлення</Order>
                </div>
              </div>
            </div>
          </ListContainer>
        </CartContainer>
      ) : (
        <EmptyCartContainer>
          <div>
            <TitleCart>На жаль, ваш кошик порожній</TitleCart>
            <BtnBackToCatalog to={'/catalog'}>
              Перейти до каталогу
            </BtnBackToCatalog>
          </div>
          <div>
            <img src={Img} alt="Cart img" />
          </div>
        </EmptyCartContainer>
      )}
    </>
  );
};
