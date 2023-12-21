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
import { selectDefaultPriceRange, selectIsClearSetPriceRange } from 'redux/selectors/selectors';
import { resetPriceRange, setPriceValue } from 'redux/slice/priceRangeSlice';
import { theme } from 'styles';

export const PriceSlider = ({ active, minMax }) => {
  const resetStatus = useSelector(selectIsClearSetPriceRange);
  const defaultPriceRange = useSelector(selectDefaultPriceRange);
  const [priceValueInput, setPriceValueInput] = useState({
    minValue: defaultPriceRange[0],
    maxValue: defaultPriceRange[1],
  }); // set initial data to inputs fileds

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

    const { value } = e.target;
    const dotCount = value.split('.');
    const nameField = e.target.name;
    const newCount = Number(e.target.value);

    if (e.target.value === '') {
      setPriceValueInput(prevState => ({ ...prevState, [nameField]: '' }));
      return;
    }

    if (dotCount[dotCount.length - 1] === '') {
      setPriceValueInput(prevState => ({ ...prevState, [nameField]: newCount + '.' }));
      return;
    }

    setPriceValueInput(prevState => ({ ...prevState, [nameField]: newCount }));
  };

  const handleChangeOnBlurValue = e => {
    const nameField = e.target.name;

    if (e.target.value === '' && nameField === 'minValue') {
      setPriceValueInput(prevState => ({ ...prevState, minValue: defaultPriceRange[0] }));
      return;
    }

    if (e.target.value === '' && nameField === 'maxValue') {
      setPriceValueInput(prevState => ({ ...prevState, maxValue: defaultPriceRange[1] }));
      return;
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const currentPriceValue = { ...priceValueInput };

    for (const key in currentPriceValue) {
      currentPriceValue[key] = parseFloat(currentPriceValue[key]);
    }

    if (
      currentPriceValue.maxValue === currentPriceValue.minValue ||
      currentPriceValue.minValue > currentPriceValue.maxValue
    ) {
      console.log('0');
      setPriceValueInput(prevState => ({
        ...prevState,
        minValue: defaultPriceRange[0],
        maxValue: defaultPriceRange[1],
      }));
      return;
    }

    if (isNaN(currentPriceValue.minValue)) {
      setPriceValueInput(prevState => ({ ...prevState, minValue: defaultPriceRange[0] }));
      return;
    }
    if (isNaN(currentPriceValue.maxValue)) {
      setPriceValueInput(prevState => ({ ...prevState, maxValue: defaultPriceRange[1] }));
      return;
    }

    dispatch(setPriceValue([currentPriceValue.minValue, currentPriceValue.maxValue])); // set on submit price value to redux state
    setPriceValueInput(currentPriceValue);
  };

  useEffect(() => {
    if (resetStatus === true) {
      setPriceValueInput({
        minValue: defaultPriceRange[0],
        maxValue: defaultPriceRange[1],
      });
      dispatch(resetPriceRange());
    }
  }, [defaultPriceRange, dispatch, resetStatus]);

  useEffect(() => {
    setPriceValueInput({
      minValue: defaultPriceRange[0],
      maxValue: defaultPriceRange[1],
    });
  }, [defaultPriceRange]); // update data in input fields if default price range for query is updated

  useEffect(() => {}, [priceValueInput]);

  return (
    <PriceContainer active={active}>
      <StyledRangeSlider
        allowCross={false}
        value={[priceValueInput.minValue, priceValueInput.maxValue]}
        onChange={onSliderChange}
        range
        min={defaultPriceRange[0]}
        max={defaultPriceRange[1]}
      />
      <PriceRangeStyle onSubmit={onSubmitHandler}>
        <PriceValue
          value={priceValueInput.minValue}
          pattern="[0-9]*\.?[0-9]*"
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
          pattern="[0-9]*\.?[0-9]*"
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
