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
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from 'redux/cartSlice';
import { theme } from 'styles';
import { TotalQuantity } from './CartItem.styled';
import { CrossToDelete } from 'components/Icons';

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
  console.log('prod:', prod);

  const dispatch = useDispatch();

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
    if (newCount < 1) {
      return;
    }

    // setCardCount(newCount);
    dispatch(updateCartItem({ productCode, newCount }));
  };

  return (
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
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
        </div>
      </div>
      <QTYBox
        style={{ marginLeft: '200px' }}

        // onSubmit={onSubmitCardHandler}
      >
        <BTNDec name="decrement" onClick={handleDecrement} type="button">
          <span>-</span>
        </BTNDec>
        <input
          // id={el._id}
          type="text"
          minLength={1}
          maxLength={3}
          size={3}
          pattern="[0-9]*"
          onChange={handleChange}
          // onBlur={handleChange}
          value={cardCount}
        />
        <BTNInc name="increment" onClick={handleIncrement} type="button">
          <span>+</span>
        </BTNInc>
        <button type="submit" style={{ display: 'none' }}></button>
      </QTYBox>
      <TotalQuantity>{itemTotal.toFixed(2)} ₴</TotalQuantity>
      <button onClick={handleDelete}>
        <CrossToDelete />
      </button>
    </div>
  );
};
