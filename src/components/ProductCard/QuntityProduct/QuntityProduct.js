import React, { useState } from 'react';
import {
  QuntityContainer,
  QuintityInputWrapper,
  QuintityInput,
  BtnDecrement,
  BtnIncrement,
  CountContainer,
  SubmitButton,
  ChangeQuntityLabel,
  PriceBox,
  PriceSt,
  SymbolCurrency,
  TextOutOfStock,
} from './QuntityProduct.styled';

const QuntityProduct = ({ inStock, prodType }) => {
  const [quintity, setQuintity] = useState(1);
  const increment = () => setQuintity(prev => (prev += 1));
  const decrement = () => setQuintity(prev => (prev -= 1));

  return (
    <form>
      {inStock && (
        <QuntityContainer>
          <ChangeQuntityLabel>Змінити кількість</ChangeQuntityLabel>
          <QuintityInputWrapper>
            <QuintityInput readOnly value={quintity} type="text" id="calc" />
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

        <SubmitButton disabled={inStock ? false : true} type="button">
          Купити
        </SubmitButton>
      </CountContainer>
    </form>
  );
};

export default QuntityProduct;
