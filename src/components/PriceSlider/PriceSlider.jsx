// this component is used for filtering by price with slider effect
import {
  PriceContainer,
  PriceCurrency,
  PriceRangeStyle,
  PriceValue,
  StyledRangeSlider,
} from './PriceSlider.styled';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsClearSetPriceRange,
  selectMaxPriceRange,
  selectMinPriceRange,
  selectPriceValue,
} from 'redux/selectors/selectors';
import { resetPriceRange, setPriceChange, setPriceValue } from 'redux/slice/priceRangeSlice';
import { theme } from 'styles';

export const PriceSlider = ({ active }) => {
  const minPriceRange = useSelector(selectMinPriceRange); // min price range for slider
  const maxPriceRange = useSelector(selectMaxPriceRange); // max price range for slider
  const priceValue = useSelector(selectPriceValue); // value of setted price range
  const resetStatus = useSelector(selectIsClearSetPriceRange);
  const [priceValueInput, setPriceValueInput] = useState({
    minValue: priceValue[0],
    maxValue: priceValue[1],
  });

  const dispatch = useDispatch();

  const onSliderChange = value => {
    if (value[0] < value[1]) {
      setPriceValueInput({
        minValue: value[0],
        maxValue: value[1],
      });
    }
  };

  const handleChangePriceValue = e => {
    if (!e.target.validity.valid) {
      return;
    }
    const nameField = e.target.name;
    if (e.target.value === '' && nameField === 'maxValue') {
      setPriceValueInput(prevState => ({ ...prevState, maxValue: '' }));
      return;
    }

    if (e.target.value === '' && nameField === 'minValue') {
      setPriceValueInput(prevState => ({ ...prevState, minValue: '' }));
      return;
    }
    const newCount = Number(e.target.value);

    if (nameField === 'maxValue') {
      setPriceValueInput(prevState => ({ ...prevState, maxValue: newCount }));
      return;
    }

    if (nameField === 'minValue') {
      setPriceValueInput(prevState => ({ ...prevState, minValue: newCount }));
      return;
    }
  };

  const handleChangeOnBlurValue = e => {
    const nameField = e.target.name;

    if (e.target.value === '' && nameField === 'minValue') {
      setPriceValueInput(prevState => ({ ...prevState, minValue: minPriceRange }));
      return;
    }

    if (e.target.value === '' && nameField === 'maxValue') {
      setPriceValueInput(prevState => ({ ...prevState, maxValue: maxPriceRange }));
      return;
    }
  };
  const onSubmitHandler = e => {
    e.preventDefault();

    if (priceValueInput.maxValue === priceValueInput.minValue) {
      setPriceValueInput(prevState => ({
        ...prevState,
        minValue: minPriceRange,
        maxValue: maxPriceRange,
      }));
    }

    if (priceValueInput.maxValue === '' || priceValueInput.minValue > priceValueInput.maxValue) {
      setPriceValueInput(prevState => ({ ...prevState, maxValue: maxPriceRange }));
      return;
    }
    if (priceValueInput.minValue === '' || priceValueInput.maxValue < priceValueInput.minValue) {
      setPriceValueInput(prevState => ({ ...prevState, minValue: minPriceRange }));
      return;
    }

    dispatch(setPriceValue([priceValueInput.minValue, priceValueInput.maxValue])); // set on focus lost price value to redux state
    // dispatch(setPriceChange(true)); // set to redux store that is price range are setted
  };

  useEffect(() => {
    if (resetStatus === true) {
      setPriceValueInput({
        minValue: minPriceRange,
        maxValue: maxPriceRange,
      });
      dispatch(resetPriceRange());
    }
  }, [dispatch, maxPriceRange, minPriceRange, resetStatus]);

  return (
    <PriceContainer active={active}>
      <StyledRangeSlider
        allowCross={false}
        value={[priceValueInput.minValue, priceValueInput.maxValue]}
        onChange={onSliderChange}
        // onBlur={onSubmitHandler}
        range
        min={minPriceRange}
        max={maxPriceRange}
      />
      <PriceRangeStyle onSubmit={onSubmitHandler}>
        <PriceValue
          value={priceValueInput.minValue}
          pattern="[0-9]*"
          onChange={handleChangePriceValue}
          name="minValue"
          onBlur={handleChangeOnBlurValue}
        />

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
        <PriceValue
          style={{ marginLeft: '12px' }}
          value={priceValueInput.maxValue}
          pattern="[0-9]*"
          onChange={handleChangePriceValue}
          name="maxValue"
          onBlur={handleChangeOnBlurValue}
        />

        <PriceCurrency>₴</PriceCurrency>
        <button type="submit">OK</button>
      </PriceRangeStyle>
    </PriceContainer>
  );
};
