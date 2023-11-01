import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from 'redux/cartSlice';
import { displaySize } from 'helpers';

import {
  Brand,
  BtnDecrement,
  BtnIncrement,
  ImgWrapper,
  PriceBox,
  PriceSt,
  ProdTitle,
  QuintityInput,
  QuintityInputWrapper,
  ShortDesc,
  SymbolCurrency,
  TotalQuantity,
} from './CartItem.styled';
import { CrossToDelete } from 'components/Icons';
import { Link } from 'react-router-dom';
import { Notify } from 'notiflix';

export const CartItem = ({ prod }) => {
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
    if (cardCount > 1) {
      setCardCount(cardCount - 1);
      dispatch(updateCartItem({ productCode, newCount: cardCount - 1 }));
    } else {
      setCardCount(null);
      Notify.info('Товар видалено з кошика');
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
    Notify.info('Товар  видалено з кошика');
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
    if (cardCount === '')
      Notify.warning('Мінімальна кількість для замовлення - 1 шт');

    setIsFocused(false);
  };

  const handleKeyPres = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsFocused(false);
    }
  };

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
          // outline: '2px solid pink',
          //  width: '736px'
        }}
      >
        <ImgWrapper>
          <img
            style={{ objectFit: 'cover' }}
            src={mainImage}
            alt={productName}
          />
        </ImgWrapper>
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
            <Brand>{brand}</Brand>
            <Link>
              <ProdTitle>{productName}</ProdTitle>
            </Link>
            <ShortDesc>{shortDescription}</ShortDesc>
            <p>{displaySize(size)}</p>
          </div>

          <div style={{ marginTop: 'auto' }}>
            {sale ? (
              <PriceBox>
                <PriceSt>
                  {sale.toFixed(2)}
                  <SymbolCurrency>₴</SymbolCurrency>
                </PriceSt>
                <PriceSt className="line-through-text">
                  <span className="line-through-text ">{price.toFixed(2)}</span>
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

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
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
                  // disabled={cardCount < 2}
                >
                  -
                </BtnDecrement>

                <BtnIncrement
                  onClick={handleIncrement}
                  type="button"
                  aria-label="increment"
                >
                  +
                </BtnIncrement>
              </QuintityInputWrapper>

              <TotalQuantity>
                {itemTotal.toFixed(2)}
                <span>₴</span>
              </TotalQuantity>
            </div>
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
