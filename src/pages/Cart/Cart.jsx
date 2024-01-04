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
import { selectCartStore } from 'redux/selectors/selectors';
import { CartItem, VerticallyCenteredModal } from 'components';

import { ArrowLeft } from 'components/Icons';
import { calculateTotalCost, unavailableFilterProducts } from 'helpers';
import {
  useBuyProductsMutation,
  useFetchValidateCartItemsMutation,
} from 'redux/api/operations';
import { updateCartItemCount } from 'redux/slice/cartSlice';
// import { Button } from 'react-bootstrap';

export const Cart = () => {
  const [modalShow, setModalShow] = useState(false);

  const cartStore = useSelector(selectCartStore);
  const [scrollY, setScrollY] = useState(0);
  const [shouldRenderComponent, setShouldRenderComponent] = useState(false);
  const [unavailable, setUnavailable] = useState([]);
  const [totalAmount, setTotalAmount] = useState(null);

  const dispatch = useDispatch();
  const [
    validateCartItemsMutate,
    {
      data: validateCartItemsData,
      isError: validateCartItemsIsError,
      error: validateCartItemsError,
      // isLoading, isSuccess
    },
  ] = useFetchValidateCartItemsMutation();

  const [buyProductsMutate] = useBuyProductsMutation();

  useEffect(() => {
    if (validateCartItemsIsError) {
      const {
        data: { data, errors },
      } = validateCartItemsError;

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

    if (validateCartItemsData) {
      // take data from useFetchValidateCartItemsMutation
      dispatch(updateCartItemCount(validateCartItemsData));
      setUnavailable([]);
    }
  }, [
    cartStore,
    dispatch,
    validateCartItemsData,
    validateCartItemsError,
    validateCartItemsIsError,
  ]);

  // useEffect(() => {
  //   const array = cartStore.map(({ productCode, cardCount }) => ({
  //     productCode,
  //     cardCount,
  //   }));
  //   mutate(array);
  // }, [cartStore, mutate]);

  useEffect(() => {
    const array = cartStore.map(({ productCode, cardCount }) => ({
      productCode,
      cardCount,
    }));
    validateCartItemsMutate(array);
  }, [cartStore, validateCartItemsMutate]);

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

  useEffect(() => {
    setTotalAmount(calculateTotalCost(cartStore, unavailable).toFixed(2));
  }, [cartStore, unavailable]);

  const handleCheckout = async () => {
    const array2 = cartStore.map(({ productCode, cardCount }) => ({
      productCode,
      cardCount,
    }));

    const res = await buyProductsMutate(array2);
    console.log('res.data:', res.data);

    if (res.error) {
      const {
        error: {
          data: { data, errors },
        },
      } = res;

      const allData = [...data, ...errors];
      setModalShow(true);
      dispatch(updateCartItemCount(allData));
      return;
    }

    if (res.data.code === 200) {
      document.location = '/frontend/success';
    }
  };

  return shouldRenderComponent ? (
    <>
      {cartStore.length > 0 ? (
        <CartContainer>
          <TitleCart>Кошик</TitleCart>

          {/* {validateCartItemsIsError && (
            <div style={{ color: '#f55e53' }}>
              {unavailable.length > 1 ? (
                <p> На жаль, обраної кількості товарів вже немає в наявності.</p>
              ) : (
                <p> На жаль, обраної кількості товару вже немає в наявності.</p>
              )}
              <ul>
                {unavailable?.map(({ productName, productCode }) => (
                  <li key={productCode}>{productName}</li>
                ))}
              </ul>
            </div>
          )} */}
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
                      <ArrowLeft />
                    </span>
                    <span>Повернутися до каталогу</span>
                  </LinkToCatalog>

                  <Order onClick={handleCheckout}>Оформити замовлення</Order>
                </div>
              </div>
            </div>
          </ListContainer>

          {/* <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button> */}

          <VerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
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
