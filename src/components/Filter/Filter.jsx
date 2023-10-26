import {
  FilterPriceCurrency,
  FilterPriceRangeStyle,
  FilterPriceValue,
  PriceContainer,
  StyledRangeSlider,
} from './Filter.styled';
import React, { useState } from 'react';

export const Filter = ({ active }) => {
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
      <FilterPriceRangeStyle>
        <FilterPriceValue>{state.value[0]} </FilterPriceValue>
        <FilterPriceCurrency style={{ marginRight: '12px' }}>₴</FilterPriceCurrency>
        <span style={{ color: '#E68314', fontSize: '16px', fontWeight: '600' }}>-</span>
        <FilterPriceValue style={{ marginLeft: '12px' }}>{state.value[1]} </FilterPriceValue>
        <FilterPriceCurrency>₴</FilterPriceCurrency>
      </FilterPriceRangeStyle>
    </PriceContainer>
  );
};

function log(value) {
  console.log(value); //eslint-disable-line
}
