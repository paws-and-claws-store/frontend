import {
  PriceContainer,
  PriceCurrency,
  PriceRangeStyle,
  PriceValue,
  StyledRangeSlider,
} from './PriceSlider.styled';
import React, { useState } from 'react';
import { theme } from 'styles';

export const PriceSlider = ({ active }) => {
  const [state, setState] = useState({
    lowerBound: 20,
    upperBound: 40,
    min: 0,
    max: 500,
    value: [10, 50],
  });

  const onSliderChange = value => {
    log(value);
    setState(prevState => {
      return { ...prevState, value };
    });
  };

  return (
    <PriceContainer active={active}>
      <StyledRangeSlider
        allowCross={false}
        value={state.value}
        onChange={onSliderChange}
        range
        min={state.min}
        max={state.max}
      />
      <PriceRangeStyle>
        <PriceValue>{state.value[0]} </PriceValue>
        <PriceCurrency style={{ marginRight: '12px' }}>₴</PriceCurrency>
        <span
          style={{
            color: theme.colors.orange,
            fontSize: theme.fontSizes.s,
            fontWeight: theme.fontWeight.SemiBold,
          }}
        >
          -
        </span>
        <PriceValue style={{ marginLeft: '12px' }}>{state.value[1]} </PriceValue>
        <PriceCurrency>₴</PriceCurrency>
      </PriceRangeStyle>
    </PriceContainer>
  );
};

function log(value) {
  console.log(value); //eslint-disable-line
}
