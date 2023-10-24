import {
  BTNDec,
  BTNInc,
  PriceBox,
  PriceSt,
  QTYBox,
  SymbolCurrency,
} from 'components';
import { displaySize } from 'helpers';
import React from 'react';
import { theme } from 'styles';

export const CartItem = ({ prod }) => {
  const {
    productCode,
    brand,
    cardCount,
    // count,
    mainImage,
    price,
    productName,
    sale,
    shortDescription,
    size,
  } = prod;
  console.log('prod:', prod);

  // Функція для розрахунку суми по товару
  const calculateItemTotal = item => {
    return item.sale ? item.cardCount * item.sale : item.cardCount * item.price;
  };

  const itemTotal = calculateItemTotal({
    sale,
    cardCount,
    price,
  });
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '196px' }}>
        <img src={mainImage} alt={productName} />
      </div>
      <div>
        <h2>{productName}</h2>
        <p>{productCode}</p>
        <p
          style={{
            fontSize: '20px',
            color: `${theme.colors.orange}`,
          }}
        >
          {brand}
        </p>
        <p>{shortDescription}</p>
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

        <QTYBox
        // onSubmit={onSubmitCardHandler}
        >
          <BTNDec
            name="decrement"
            // onClick={handleDecrement}
            type="button"
          >
            <span>-</span>
          </BTNDec>
          <input
            // id={el._id}
            type="text"
            minLength={1}
            maxLength={3}
            size={3}
            pattern="[0-9]*"
            // onChange={handleChange}
            // onBlur={handleChange}
            value={cardCount}
          />
          <BTNInc
            name="increment"
            // onClick={handleIncrement}
            type="button"
          >
            <span>+</span>
          </BTNInc>
          <button type="submit" style={{ display: 'none' }}></button>
        </QTYBox>
        <p>{itemTotal.toFixed(2)} ₴</p>
      </div>
    </div>
  );
};
