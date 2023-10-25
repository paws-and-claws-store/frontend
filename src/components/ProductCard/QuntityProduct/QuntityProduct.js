import React, { useEffect, useState } from 'react';
import {
  QuntityContainer,
  QuintityInputWrapper,
  QuintityInput,
  BtnDecrement,
  BtnIncrement,
  CountContainer,
  SubmitButton,
  InCartButton,
  ChangeQuntityLabel,
  PriceBox,
  PriceSt,
  SymbolCurrency,
  TextOutOfStock,
} from './QuntityProduct.styled';
import { addCartItem, updateCartItem } from 'redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';

const QuntityProduct = ({ inStock, prodType, prodDescription }) => {
  const [quintity, setQuintity] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const [inCart, setInCart] = useState(false);
  const cardCountRedux = useSelector(selectCartStore);

  const dispatch = useDispatch();
  const productCode = prodType.productCode;

  useEffect(() => {
    const productCount = cardCountRedux?.find(
      item => item.productCode === productCode,
    );
    if (productCount) {
      setQuintity(productCount.cardCount);
      setInCart(true);
    } else {
      setQuintity(1);
      setInCart(false)
    }

    setIsFocused(false);
  }, [productCode, cardCountRedux]);

  const increment = () => {
    setQuintity(prev => (prev = parseInt(prev) + 1));
    if (inCart) {
      dispatch(updateCartItem({ productCode, newCount: Number(quintity) + 1 }));
    }
  };

  const decrement = () => {
    setQuintity(prev => (prev = parseInt(prev) - 1));
    if (inCart) {
      dispatch(updateCartItem({ productCode, newCount: Number(quintity) - 1 }));
    }
  };

  const hendleInputChange = e => {
    const newQuintity = isNaN(e.currentTarget.value)
      ? 1
      : e.currentTarget.value;

    setQuintity(newQuintity);
  };

  const handleBlur = () => {
    if (Number(quintity) === 0) {
      setQuintity(1);
      setIsFocused(true);
    }
  };

  const handleKeyPres = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsFocused(true);
    }
  };

  const handleClickBuy = () => {
    dispatch(
      addCartItem({
        brand: prodDescription.brand,
        mainImage: prodDescription.mainImage,
        productName: prodDescription.productName,
        shortDescription: prodDescription.shortDescription,
        count: prodType.count,
        productCode: prodType.productCode,
        price: prodType.price,
        sale: prodType.sale,
        size: prodType.size,
        cardCount: quintity,
      }),
    );
  };

  const handleClickInCart = () => {};

  return (
    <form>
      {inStock && (
        <QuntityContainer>
          <ChangeQuntityLabel>Змінити кількість</ChangeQuntityLabel>
          <QuintityInputWrapper>
            <QuintityInput
              value={quintity}
              onChange={hendleInputChange}
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
              onClick={decrement}
              type="button"
              aria-label="decrement"
              disabled={quintity < 2}
            >
              -
            </BtnDecrement>

            <BtnIncrement
              onClick={increment}
              type="button"
              aria-label="increment"
            >
              +
            </BtnIncrement>
          </QuintityInputWrapper>
        </QuntityContainer>
      )}
      <CountContainer>
        {/* <CountSum inStock={inStock}>
          {inStock ? prodType.price.toFixed(2) : 'Товар відсутній'}
        </CountSum> */}

        {!inStock ? (
          <TextOutOfStock>Товар відсутній</TextOutOfStock>
        ) : prodType.sale ? (
          <PriceBox>
            <PriceSt>
              {prodType.sale.toFixed(2)}

              <SymbolCurrency>₴</SymbolCurrency>
            </PriceSt>
            <PriceSt className="line-through-text">
              {prodType.price.toFixed(2)}

              <SymbolCurrency
                style={{ fontSize: '18px', lineHeight: 'normal' }}
              >
                ₴
              </SymbolCurrency>
            </PriceSt>
          </PriceBox>
        ) : (
          <PriceBox>
            <PriceSt>
              {prodType.price.toFixed(2)}

              <SymbolCurrency>₴</SymbolCurrency>
            </PriceSt>
          </PriceBox>
        )}

        {inCart ? (
          <InCartButton type="button" onClick={handleClickInCart}>
            У кошику
          </InCartButton>
        ) : (
          <SubmitButton
            disabled={inStock ? false : true}
            type="button"
            onClick={handleClickBuy}
          >
            Купити
          </SubmitButton>
        )}
      </CountContainer>
    </form>
  );
};

export default QuntityProduct;
