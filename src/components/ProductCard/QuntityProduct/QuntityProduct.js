import React, { useState } from 'react';
import {
  QuntityContainer,
  QuintityInputWrapper,
  QuintityInput,
  BtnDecrement,
  BtnIncrement,
  CountContainer,
  CountSum,
  SubmitButton,
  ChangeQuntityLabel,
} from './QuntityProduct.styled';

const QuntityProduct = () => {
  const [quintity, setQuintity] = useState(0);
  const increment = () => setQuintity(prev => (prev += 1));
  const decrement = () => setQuintity(prev => (prev -= 1));

  return (
    <form>
      <QuntityContainer>
        <ChangeQuntityLabel htmlFor="calc">
          Змінити кількість
        </ChangeQuntityLabel>
        <QuintityInputWrapper>
          <QuintityInput readOnly value={quintity} type="text" id="calc" />
          <BtnDecrement
            onClick={decrement}
            type="button"
            aria-label="decrement"
            disabled={quintity < 1}
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
      <CountContainer>
        <CountSum></CountSum>
        <SubmitButton type="button">Купити</SubmitButton>
      </CountContainer>
    </form>
  );
};

export default QuntityProduct;
