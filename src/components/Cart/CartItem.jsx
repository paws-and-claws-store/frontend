import { PriceBox, PriceSt, SymbolCurrency } from 'components';
import { displaySize } from 'helpers';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from 'redux/cartSlice';
import { theme } from 'styles';
import {
  BtnIncrement,
  ProdTitle,
  QuintityInput,
  QuintityInputWrapper,
  QuntityContainer,
  ShortDesc,
  TotalQuantity,
} from './CartItem.styled';
import { CrossToDelete } from 'components/Icons';
import { Link } from 'react-router-dom';
import { BtnDecrement } from 'components/ProductCard/QuntityProduct/QuntityProduct.styled';

export const CartItem = ({ prod }) => {
  const {
    productCode,
    brand,
    cardCount,
    count,
    mainImage,
    price,
    productName,
    sale,
    shortDescription,
    size,
  } = prod;

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
      // setCardCount(cardCount - 1);
      dispatch(updateCartItem({ productCode, newCount: cardCount - 1 }));
    } else {
      // setCardCount(null);
      dispatch(removeCartItem(productCode));
    }
  };
  const handleIncrement = () => {
    if (cardCount < count) {
      // setCardCount(cardCount - 1);
      dispatch(updateCartItem({ productCode, newCount: cardCount + 1 }));
    } else {
      // setCardCount(null);
      dispatch(updateCartItem({ productCode, newCount: count }));
    }
  };

  const handleDelete = () => {
    dispatch(removeCartItem(productCode));
  };

  const handleChange = e => {
    if (!e.target.validity.valid) {
      return;
    }

    const newCount = Number(e.target.value);

    if (newCount > count)
      return dispatch(updateCartItem({ productCode, newCount: count }));

    if (newCount < 1) {
      return;
    }

    // setCardCount(newCount);
    dispatch(updateCartItem({ productCode, newCount }));
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleKeyPres = e => {
    console.log('e.key', e.key);
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsFocused(true);
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
      <div style={{ display: 'flex' }}>
        <div
          style={{
            outline: '1px solid black',
            width: '196px',
          }}
        >
          <img
            style={{ objectFit: 'cover' }}
            src={mainImage}
            alt={productName}
          />
        </div>
        <div
          style={{
            width: '512px',
            marginLeft: '20px',
            outline: '1px solid green',
          }}
          className="prodname"
        >
          <Link>
            <ProdTitle>{productName}</ProdTitle>
          </Link>
          <p>{productCode}</p>
          <p
            style={{
              fontSize: '20px',
              color: `${theme.colors.orange}`,
            }}
          >
            {brand}
          </p>
          <ShortDesc>{shortDescription}</ShortDesc>
          <p>{displaySize(size)}</p>
          {sale ? (
            <PriceBox>
              <PriceSt>
                {sale.toFixed(2)}
                <SymbolCurrency>₴</SymbolCurrency>
              </PriceSt>
              <PriceSt className="line-through-text">
                {price.toFixed(2)}
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
        </div>
      </div>

      <QuntityContainer>
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
      </QuntityContainer>

      <TotalQuantity>{itemTotal.toFixed(2)} ₴</TotalQuantity>
      <button onClick={handleDelete}>
        <CrossToDelete />
      </button>
    </div>
  );
};
