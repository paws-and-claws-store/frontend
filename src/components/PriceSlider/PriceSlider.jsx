// this component is used for filtering by price with slider effect
import {
  PriceContainer,
  PriceCurrency,
  PriceRangeStyle,
  PriceValue,
  StyledRangeSlider,
} from './PriceSlider.styled';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMaxPriceRange, selectMinPriceRange, selectPriceValue } from 'redux/selectors/selectors';
import { setPriceChange, setPriceValue } from 'redux/slice/priceRangeSlice';
import { theme } from 'styles';

export const PriceSlider = ({ active }) => {
  const minPriceRange = useSelector(selectMinPriceRange); // min price range for slider
  const maxPriceRange = useSelector(selectMaxPriceRange); // max price range for slider
  const priceValue = useSelector(selectPriceValue); // value of setted price range
  const [state, setState] = useState({
    // lowerBound: 20,
    // upperBound: 40,
    min: minPriceRange,
    max: maxPriceRange,
    value: priceValue,
  });
  const dispatch = useDispatch();

  const onSliderChange = value => {
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
        onBlur={() => {
          dispatch(setPriceValue(state.value)); // set on focus lost price value to redux state
          dispatch(setPriceChange(true)); // set to redux store that is price rnage are setted
        }}
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
