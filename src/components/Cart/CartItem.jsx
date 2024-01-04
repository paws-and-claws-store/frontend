import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from 'redux/slice/cartSlice';
import { displaySize, getQuantityString } from 'helpers';

import {
  Availability,
  Brand,
  BtnDecrement,
  BtnIncrement,
  ImgWrapper,
  MessageContainer,
  MessageText,
  PriceBox,
  PriceSt,
  ProdTitle,
  QuintityInput,
  QuintityInputWrapper,
  ShortDesc,
  Size,
  SymbolCurrency,
  TotalQuantity,
} from './CartItem.styled';
import { AttantionCicleLight, CrossToDelete } from 'components/Icons';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix';
// import { fetchProductsByOnePetCopy } from 'services/api';

export const CartItem = ({ prod, unavailable }) => {
  const {
    productCode,
    brand,
    // cardCount,
    count,
    mainImage,
    price,
    productName,
    sale,
    shortDescription,
    size,
  } = prod;

  const isUnavailable = unavailable
    ?.map(unavailableItem => unavailableItem.productCode)
    .includes(productCode);

  const [cardCount, setCardCount] = useState(prod.cardCount);
  const dispatch = useDispatch();
  const [isFocused, setIsFocused] = useState(false);

  // Функція для розрахунку суми по товару
  const calculateItemTotal = item => {
    return item.sale ? item.cardCount * item.sale : item.cardCount * item.price;
  };

  const itemTotal = calculateItemTotal({
    sale,
    cardCount,
    price,
  });

  const handleDecrement = () => {
    if (count === 0) {
      setCardCount(null);
      dispatch(removeCartItem(productCode));
    }

    if (cardCount > count) {
      setCardCount(count);
      dispatch(updateCartItem({ productCode, newCount: count }));
    } else if (cardCount > count && count === 0) {
      setCardCount(null);
      dispatch(removeCartItem(productCode));
    } else if (cardCount > 1) {
      setCardCount(cardCount - 1);
      dispatch(updateCartItem({ productCode, newCount: cardCount - 1 }));
    } else {
      setCardCount(null);
      // Notify.info('Товар видалено з кошика');
      dispatch(removeCartItem(productCode));
    }
  };
  const handleIncrement = () => {
    if (cardCount < count) {
      setCardCount(Number(cardCount) + 1);

      dispatch(
        updateCartItem({ productCode, newCount: Number(cardCount) + 1 }),
      );
    } else {
      setCardCount(count);
      Notify.info('На жаль, на складі відсутня необхідна кількість товару.');
      dispatch(updateCartItem({ productCode, newCount: count }));
    }
  };

  const handleDelete = () => {
    // Notify.info('Товар  видалено з кошика');
    setCardCount(null);
    dispatch(removeCartItem(productCode));
  };

  const handleChange = e => {
    if (!e.target.validity.valid) {
      return;
    }

    if (e.target.value === '') {
      setCardCount('');
    }

    const newCount = Number(e.target.value);

    if (newCount > count) {
      setCardCount(count);
      Notify.info('На жаль, на складі відсутня необхідна кількість товару.');
      return dispatch(updateCartItem({ productCode, newCount: count }));
    }

    if (newCount < 1) {
      return;
    }

    setCardCount(newCount);
    dispatch(updateCartItem({ productCode, newCount }));
  };

  const handleBlur = () => {
    if (count === 0 && cardCount === '') {
      Notify.warning('Товар буде видалено з кошика');
      setTimeout(() => {
        setCardCount(null);
        dispatch(removeCartItem(productCode));
      }, 3000);
      setIsFocused(false);
      return;
    }

    if (cardCount === '') {
      Notify.warning('Мінімальна кількість для замовлення - 1 шт.');
      setCardCount(1);
      dispatch(updateCartItem({ productCode, newCount: 1 }));
    }

    setIsFocused(false);
  };

  const handleKeyPres = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsFocused(false);
    }
  };

  // const handleClick = async () => {
  //   try {
  //     const obj = await fetchProductsByOnePetCopy(productCode);
  //     console.log('obj:', obj);
  //   } catch (error) {
  //     console.log('error:', error);
  //   }
  // };

  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'relative',
          // outline: '2px solid pink',
          //  width: '736px'
        }}
      >
        <Link
          to={`/catalog/${prod.pet._id}/${prod.category._id}/${prod.variant._id}/${prod.id}`}
        >
          <ImgWrapper className="imgContainer" count={count}>
            {isUnavailable && count !== 0 && (
              <Availability>
                <span>{getQuantityString(count)}</span>
              </Availability>
            )}

            <img
              style={{ objectFit: 'cover' }}
              src={mainImage}
              alt={productName}
            />
          </ImgWrapper>
        </Link>
        <div
          style={{
            width: '520px',
            marginLeft: '20px',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="prodname"
        >
          <div
            style={{
              maxWidth: '412px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <span>
              <Brand to={'/brands'}>{brand}</Brand>
            </span>
            <Link
              to={`/catalog/${prod.pet._id}/${prod.category._id}/${prod.variant._id}/${prod.id}`}
            >
              <ProdTitle>{productName}</ProdTitle>
            </Link>
            <Link
              to={`/catalog/${prod.pet._id}/${prod.category._id}/${prod.variant._id}/${prod.id}`}
            >
              <ShortDesc>{shortDescription}</ShortDesc>
            </Link>
            <Size>{displaySize(size)}</Size>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 'auto',
            }}
          >
            <div>
              {sale ? (
                <PriceBox>
                  <PriceSt>
                    {sale.toFixed(2)}
                    <SymbolCurrency>₴</SymbolCurrency>
                  </PriceSt>
                  <PriceSt className="line-through-text">
                    <span className="line-through-text ">
                      {price.toFixed(2)}
                    </span>
                    <SymbolCurrency>₴</SymbolCurrency>
                  </PriceSt>
                </PriceBox>
              ) : (
                <PriceBox>
                  <PriceSt>
                    {price.toFixed(2)}
                    <SymbolCurrency>₴</SymbolCurrency>
                  </PriceSt>
                </PriceBox>
              )}

              <QuintityInputWrapper>
                <QuintityInput
                  value={cardCount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => setIsFocused(true)}
                  style={{ borderColor: isFocused ? '#e68314' : '#cac299' }}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  id="calc"
                  onKeyDown={handleKeyPres}
                />

                <BtnDecrement
                  onClick={handleDecrement}
                  type="button"
                  aria-label="decrement"
                  // disabled={isDisabled}
                >
                  -
                </BtnDecrement>

                <BtnIncrement
                  onClick={handleIncrement}
                  type="button"
                  aria-label="increment"
                  disabled={cardCount >= count}
                >
                  +
                </BtnIncrement>
              </QuintityInputWrapper>
            </div>

            {!isUnavailable && (
              <TotalQuantity>
                {itemTotal.toFixed(2)}
                <span>₴</span>
              </TotalQuantity>
            )}

            {isUnavailable && (
              <MessageContainer count={count}>
                <span>
                  {' '}
                  <AttantionCicleLight />
                </span>
                {count === 0 ? (
                  <MessageText>
                    На жаль, цього товару вже немає в наявності
                  </MessageText>
                ) : (
                  <MessageText>
                    На жаль, обраної кількості товару немає на складі
                  </MessageText>
                )}
              </MessageContainer>
            )}
          </div>
          <button
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            onClick={handleDelete}
          >
            <CrossToDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
