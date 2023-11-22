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
import { useDispatch, useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { CartItem } from 'components';

import { CaretLeftPagination } from 'components/Icons';
import { BuyProducts } from 'services/api';
import { calculateTotalCost, unavailableFilterProducts } from 'helpers';
import { useFetchValidateCartItemsMutation } from 'redux/operations';
import { updateCartItemCount } from 'redux/cartSlice';

export const Cart = () => {
  const cartStore = useSelector(selectCartStore);
  const [scrollY, setScrollY] = useState(0);
  const [shouldRenderComponent, setShouldRenderComponent] = useState(false);
  const [unavailable, setUnavailable] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);

  const dispatch = useDispatch();

  // const array = cartStore.map(({ productCode, cardCount }) => ({
  //   productCode,
  //   cardCount,
  // }));

  const [
    mutate,
    {
      data,
      isError,
      error,
      // isLoading, isSuccess
    },
  ] = useFetchValidateCartItemsMutation();

  useEffect(() => {
    if (isError) {
      const {
        data: { data, errors },
      } = error;

      const unavailableArrayCode = errors.map(({ productCode }) => productCode);
      const productNames = unavailableFilterProducts(
        cartStore,
        unavailableArrayCode,
      );

      setUnavailable(productNames);
      // take data from error and spray it into an array
      const allData = [...data, ...errors];

      dispatch(updateCartItemCount(allData));
      return;
    }

    if (data) {
      // take data from useFetchValidateCartItemsMutation
      dispatch(updateCartItemCount(data));
      setUnavailable([]);
    }
  }, [isError, error, cartStore, dispatch, data]);

  useEffect(() => {
    const array = cartStore.map(({ productCode, cardCount }) => ({
      productCode,
      cardCount,
    }));
    mutate(array);
  }, [cartStore, mutate]);

  //   // При необхідності ви можете очищати ресурси або виконувати інші завдання при виході з компонента
  //   return () => {
  //     // Очищення ресурсів або інші завдання
  //   };

  // useEffect(() => {
  //   // Тут ви викликаєте мутацію при завантаженні сторінки кошика
  //   const validateCart = async array => {
  //     try {
  //       // Використовуйте `array` у мутації
  //       const result = await mutate(array);
  //       // Обробка результату
  //       console.log('Mutation result:', result);
  //     } catch (error) {
  //       // Обробка помилок
  //       console.error('Mutation error:', error);
  //     }
  //   };
  //   // Запустіть мутацію при завантаженні сторінки
  //   validateCart(array);

  //   // При необхідності ви можете очищати ресурси або виконувати інші завдання при виході з компонента
  //   return () => {
  //     // Очищення ресурсів або інші завдання
  //   };
  // }, [array, mutate]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const array = cartStore.map(({ productCode, cardCount }) => ({
  //       productCode,
  //       cardCount,
  //     }));

  //     try {
  //       const result = await fetchValidateCartItems(array);

  //       const allData = result.errors
  //         ? [...result?.data, ...result?.errors]
  //         : [...result.data];

  //       allData.forEach(item => {
  //         // const { productCode, count } = item;
  //         // console.log('item:', item);
  //         // console.log('productCode, count:', productCode, count);
  //         // dispatch(updateCartItemCount({ productCode, count }));
  //       });

  //       if (result.code === 400) {
  //         setStatusCode(result.code);

  //         const unavailableArrayCode = result.errors.map(
  //           ({ productCode }) => productCode,
  //         );

  //         const productNames = unavailableFilterProducts(
  //           cartStore,
  //           unavailableArrayCode,
  //         );

  //         setUnavailable(productNames);
  //       } else {
  //         setStatusCode(result.code);
  //       }

  //       // Ви можете обробити дані тут
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, [cartStore, dispatch]);

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

  // const calculateTotalCost = () => {
  //   return cartStore.reduce((total, item) => {
  //     const itemCost = item.sale
  //       ? item.sale * item.cardCount
  //       : item.price * item.cardCount;
  //     return total + itemCost;
  //   }, 0);
  // };

  // const totalAmount = calculateTotalCost(cartStore, unavailable).toFixed(2);

  useEffect(() => {
    setTotalAmount(calculateTotalCost(cartStore, unavailable).toFixed(2));
  }, [cartStore, unavailable]);

  const handleCheckout = async () => {
    // Виконати перевірку товарів в кошику
    const array = cartStore.map(({ productCode, cardCount }) => ({
      productCode,
      cardCount,
    }));
    // Відправити дані на сервер
    try {
      console.log('Click');
      // console.log('await BuyProducts(array):', BuyProducts(array));

      const result = await BuyProducts(array);
      console.log('array:', array);
      console.log('result:', result);
      // const response = await fetch('/api/checkout', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ items: cartItems }),
      // });

      if (true) {
        // Перенаправити на сторінку з повідомленням про успішне оформлення замовлення
        // document.location = '/frontend/success';
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

          {isError && (
            <div style={{ color: '#f55e53' }}>
              {unavailable.length > 1 ? (
                <p>
                  {' '}
                  На жаль, обраної кількості товарів вже немає в наявності.
                </p>
              ) : (
                <p> На жаль, обраної кількості товару вже немає в наявності.</p>
              )}
              <ul>
                {unavailable?.map(({ productName, productCode }) => (
                  <li key={productCode}>{productName}</li>
                ))}
              </ul>
            </div>
          )}
          <ListContainer>
            <ListItems>
              {cartStore.map(prod => {
                return (
                  <li key={prod.productCode}>
                    <CartItem prod={prod} unavailable={unavailable} />
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
                      <TotalAmountNumber>{totalAmount}</TotalAmountNumber>
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
