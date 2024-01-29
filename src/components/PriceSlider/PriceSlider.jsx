// this component is used for filtering by price with slider effect
import {
  PriceContainer,
  PriceCurrency,
  PriceRangeStyle,
  PriceValue,
  StyledRangeSlider,
  SubmitBtnPriceSlider,
} from './PriceSlider.styled';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDefaultPriceRange, selectIsClearSetPriceRange } from 'redux/selectors/selectors';
import { resetPriceRange, setPriceValue } from 'redux/slice/priceRangeSlice';
import { theme } from 'styles';

export const PriceSlider = ({ active }) => {
  const resetStatus = useSelector(selectIsClearSetPriceRange);
  const defaultPriceRange = useSelector(selectDefaultPriceRange);
  const [priceValueInput, setPriceValueInput] = useState({
    minValue: defaultPriceRange[0],
    maxValue: defaultPriceRange[1],
  }); // set initial data to inputs fields

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
    const newCount = Number(e.target.value);

    if (e.target.value === '') {
      setPriceValueInput(prevState => {
        return { ...prevState, [nameField]: '' };
      });
      return;
    }

    setPriceValueInput(prevState => ({ ...prevState, [nameField]: newCount }));
  };

  const handleChangeOnBlurValue = e => {
    const nameField = e.target.name;

    if (e.target.value === '' && nameField === 'minValue') {
      setPriceValueInput(prevState => ({
        ...prevState,
        [nameField]: defaultPriceRange[0],
      }));
      return;
    }
    if (e.target.value === '' && nameField === 'maxValue') {
      setPriceValueInput(prevState => ({
        ...prevState,
        [nameField]: defaultPriceRange[1],
      }));
      return;
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const currentPriceValue = { ...priceValueInput };

    for (const key in currentPriceValue) {
      if (currentPriceValue[key] !== '') {
        currentPriceValue[key] = parseFloat(currentPriceValue[key]);
      }
    }

    if (
      currentPriceValue.maxValue === currentPriceValue.minValue ||
      currentPriceValue.minValue > currentPriceValue.maxValue ||
      currentPriceValue.maxValue === '' ||
      currentPriceValue.minValue === '' ||
      currentPriceValue.maxValue > defaultPriceRange[1] ||
      currentPriceValue.maxValue < defaultPriceRange[0]
    ) {
      setPriceValueInput(prevState => ({
        ...prevState,
        minValue: defaultPriceRange[0],
        maxValue: defaultPriceRange[1],
      }));
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
        allowCross={true} // allow to move nearby slider control by other slider control
        value={[priceValueInput.minValue, priceValueInput.maxValue]}
        onChange={onSliderChange}
        range
        min={defaultPriceRange[0]}
        max={defaultPriceRange[1]}
        pushable={100} // minimal range between slider controls
      />
      <PriceRangeStyle onSubmit={onSubmitHandler}>
        <div>
          <PriceValue
            className="PriceValue"
            value={priceValueInput.minValue}
            pattern="[0-9]*"
            onChange={handleChangePriceValue}
            name="minValue"
            onBlur={handleChangeOnBlurValue}
            maxLength={String(defaultPriceRange[0]).length}
          />
          <PriceCurrency style={{ marginRight: '8px' }}>₴</PriceCurrency>
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
            style={{ marginLeft: '8px' }}
            value={priceValueInput.maxValue}
            pattern="[0-9]*"
            onChange={handleChangePriceValue}
            name="maxValue"
            onBlur={handleChangeOnBlurValue}
            maxLength={String(defaultPriceRange[1]).length}
          />
          <PriceCurrency>₴</PriceCurrency>
        </div>
        <SubmitBtnPriceSlider type="submit">Застосувати</SubmitBtnPriceSlider>
      </PriceRangeStyle>
    </PriceContainer>
  );
};
