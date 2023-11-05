import React, { useState } from 'react';
// import { components } from 'react-select';

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
import { useDispatch } from 'react-redux';
import { setValueSort } from 'redux/sortSelectSlice';

export const SortSelect = () => {
  const [isClickBurger, setIsClickBurger] = useState(true);
  const [indicator, setIndicator] = useState('обрати');
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

  return (
    <BurgerContainer>
      <SortingSpan>Сортування:</SortingSpan>
      <DropDownContainer>
        {isClickBurger ? (
          <DefaultWrapper>
            <DefaultValue
              style={{
                color:
                  indicator === 'обрати'
                    ? theme.colors.green
                    : theme.colors.black,
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
            <IndicatorValue onClick={() => indicatorHandler('rating')}>
              за рейтингом
            </IndicatorValue>
          </IndicatorWrapper>
        )}
        <BurgerBtn
          onClick={onButtonHandler}
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
