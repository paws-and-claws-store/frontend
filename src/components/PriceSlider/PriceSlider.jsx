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
import { selectDefaultPriceRange, selectIsClearSetPriceRange } from 'redux/selectors';
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

    if (priceValueInput.maxValue === priceValueInput.minValue) {
      setPriceValueInput(prevState => ({
        ...prevState,
        minValue: defaultPriceRange[0],
        maxValue: defaultPriceRange[1],
      }));
    }

    if (priceValueInput.maxValue === '' || priceValueInput.minValue > priceValueInput.maxValue) {
      setPriceValueInput(prevState => ({ ...prevState, maxValue: defaultPriceRange[1] }));
      return;
    }
    if (priceValueInput.minValue === '' || priceValueInput.maxValue < priceValueInput.minValue) {
      setPriceValueInput(prevState => ({ ...prevState, minValue: defaultPriceRange[0] }));
      return;
    }

    dispatch(setPriceValue([priceValueInput.minValue, priceValueInput.maxValue])); // set on focus lost price value to redux state
    // dispatch(setPriceChange(true)); // set to redux store that is price range are setted
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

  return (
    <PriceContainer active={active}>
      <StyledRangeSlider
        allowCross={false}
        value={[priceValueInput.minValue, priceValueInput.maxValue]}
        onChange={onSliderChange}
        // onBlur={onSubmitHandler}
        range
        min={defaultPriceRange[0]}
        max={defaultPriceRange[1]}
      />
      <PriceRangeStyle onSubmit={onSubmitHandler}>
        <PriceValue
          value={priceValueInput.minValue}
          // pattern="[0-9]*"
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
          //pattern="[0-9]*"
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
