import React, { useEffect, useState } from 'react';
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
import Img from '../../images/Travel_bag.png';
import { useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { CartItem } from 'components';

import { CaretLeftPagination } from 'components/Icons';
import { fetchValidateCartItems } from 'services/api';

export const Cart = () => {
  const cartStore = useSelector(selectCartStore);
  const [scrollY, setScrollY] = useState(0);
  const [shouldRenderComponent, setShouldRenderComponent] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
  const [unavailable, setUnavailable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const array = cartStore.map(({ productCode, cardCount }) => ({
        productCode,
        cardCount,
      }));

      try {
        const result = await fetchValidateCartItems(array);

        if (result.code === 400) {
          setStatusCode(result.code);

          const unavailableArrayCode = result.errors.map(
            ({ productCode }) => productCode,
          );

          // Використання методу filter для отримання товарів за вказаними кодами
          const filteredProducts = cartStore.filter(function (product) {
            return unavailableArrayCode.includes(product.productCode);
          });

          // Створення нового масиву з назвами товарів
          const productNames = filteredProducts.map(function (product) {
            return product.productName;
          });
          setUnavailable(productNames);
        } else {
          setStatusCode(result.code);
        }

        // Ви можете обробити дані тут
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [cartStore]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY === 0) {
      // Якщо скрол повернувся в 0, встановити shouldRenderComponent в true
      setShouldRenderComponent(true);
    }
  }, [scrollY]);

  const calculateTotalCost = () => {
    return cartStore.reduce((total, item) => {
      const itemCost = item.sale
        ? item.sale * item.cardCount
        : item.price * item.cardCount;
      return total + itemCost;
    }, 0);
  };

  const handleCheckout = async () => {
    // Виконати перевірку товарів в кошику

    // Відправити дані на сервер
    try {
      // const response = await fetch('/api/checkout', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ items: cartItems }),
      // });

      if (true) {
        // Перенаправити на сторінку з повідомленням про успішне оформлення замовлення
        document.location = '/frontend/success';
      } else {
        // Обробити помилку
        console.error('Помилка оформлення замовлення');
      }
    } catch (error) {
      console.error('Помилка відправлення запиту');
    }
  };

  return shouldRenderComponent ? (
    <>
      {cartStore.length > 0 ? (
        <CartContainer>
          <TitleCart>Кошик</TitleCart>

          {statusCode === 400 && (
            <div style={{ backgroundColor: '#f55e53' }}>
              {unavailable.length > 1 ? (
                <p>
                  {' '}
                  На жаль, обраної кількості товарів вже немає в наявності.
                </p>
              ) : (
                <p> На жаль, обраної кількості товару вже немає в наявності.</p>
              )}
              <ul>
                {unavailable?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
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
                    <p>Загальна сума:</p>

                    <div>
                      <TotalAmountNumber>
                        {calculateTotalCost().toFixed(2)}
                      </TotalAmountNumber>
                      <TotalAmountSumbol>₴</TotalAmountSumbol>
                    </div>
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

                  <Order onClick={handleCheckout}>Оформити замовлення</Order>
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
  ) : null;
};
