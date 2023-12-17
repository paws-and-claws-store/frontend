// this component is used for sorting on product pages
import React, { useEffect, useState } from 'react';

import {
  BurgerContainer,
  SortingSpan,
  DropDownContainer,
  DefaultWrapper,
  DefaultValue,
  IndicatorWrapper,
  IndicatorValue,
  BurgerBtn,
} from './SortSelect.styled';
import { RightArrow } from 'components/Icons';
import { theme } from 'styles';
import { useDispatch, useSelector } from 'react-redux';
import { setValueSort } from 'redux/slice/sortSelectSlice';
import { selectSortingTypeStoreDefault } from 'redux/selectors';

export const SortSelect = () => {
  const [isClickBurger, setIsClickBurger] = useState(true);
  const [indicator, setIndicator] = useState('обрати');
  const defaultSortSelect = useSelector(selectSortingTypeStoreDefault);

  const dispatch = useDispatch();

  const indicatorHandler = value => {
    switch (value) {
      case 'cheap':
        setIndicator('спочатку дешеві');
        dispatch(setValueSort(value));
        break;

      case 'expensive':
        setIndicator('спочатку дорогі');
        dispatch(setValueSort(value));
        break;

      case 'rating':
        setIndicator('за рейтингом');
        // dispatch(setValueSort(value));
        break;

      default:
        setIndicator('rating');
      // dispatch(setValueSort(value));
    }

    setIsClickBurger(!isClickBurger);
  };

  const onButtonHandler = () => setIsClickBurger(!isClickBurger);
  const onBlurHandler = () => setIsClickBurger(true);

  useEffect(() => {
    if (defaultSortSelect === 'cheap') {
      setIndicator('спочатку дешеві');
    }
    if (defaultSortSelect === 'expensive') {
      setIndicator('спочатку дорогі');
    }
    if (defaultSortSelect === 'rating') {
      setIndicator('за рейтингом');
    }
  }, [defaultSortSelect]); // setting default value for layout

  return (
    <BurgerContainer>
      <SortingSpan>Сортування:</SortingSpan>
      <DropDownContainer onBlur={onBlurHandler} onClick={onButtonHandler} tabIndex="0">
        {isClickBurger ? (
          <DefaultWrapper>
            <DefaultValue
              style={{
                color: indicator === 'обрати' ? theme.colors.green : theme.colors.black,
              }}
            >
              {indicator}
            </DefaultValue>
          </DefaultWrapper>
        ) : (
          <IndicatorWrapper>
            <IndicatorValue onClick={() => indicatorHandler('cheap')}>
              спочатку дешеві
            </IndicatorValue>
            <IndicatorValue onClick={() => indicatorHandler('expensive')}>
              спочатку дорогі
            </IndicatorValue>
            <IndicatorValue onClick={() => indicatorHandler('rating')}>за рейтингом</IndicatorValue>
          </IndicatorWrapper>
        )}
        <BurgerBtn
          style={{
            transform: isClickBurger ? 'rotate(90deg)' : 'rotate(-90deg)',
          }}
        >
          <RightArrow />
        </BurgerBtn>
      </DropDownContainer>
    </BurgerContainer>
  );
};
