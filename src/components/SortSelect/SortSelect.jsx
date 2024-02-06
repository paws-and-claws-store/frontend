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
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSortingTypeStoreDefault } from 'redux/selectors/selectors';

export const SortSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultSortSelect = useSelector(selectSortingTypeStoreDefault);

  const sortBy = searchParams.get('sortBy') ? searchParams.get('sortBy') : defaultSortSelect;

  const [isClickBurger, setIsClickBurger] = useState(true);
  const [indicator, setIndicator] = useState(null);

  const indicatorHandler = value => {
    switch (value) {
      case 'cheap':
        setIndicator('спочатку дешеві');
        break;

      case 'expensive':
        setIndicator('спочатку дорогі');
        break;

      case 'rating':
        setIndicator('за рейтингом');
        break;

      case 'discounts':
        setIndicator('знижки та акції');
        break;

      default:
        setIndicator('знижки та акції');
    }

    // Оновлення параметра 'sortBy' у URL
    setSearchParams(prevSearchParams => {
      const updatedSearchParams = new URLSearchParams(prevSearchParams);
      updatedSearchParams.set('sortBy', value);
      return updatedSearchParams;
    });

    setIsClickBurger(!isClickBurger);
  };

  useEffect(() => {
    // Викликати indicatorHandler при монтажі компонента на основі значення sortBy з URLSearchParams
    if (sortBy) {
      indicatorHandler(sortBy);
      setIsClickBurger(true);
    } else {
      // В іншому випадку встановіть значення за замовчуванням (discounts або інше, якщо потрібно)
      indicatorHandler('discounts');
      setIsClickBurger(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  const onButtonHandler = () => setIsClickBurger(!isClickBurger);
  const onBlurHandler = () => setIsClickBurger(true);

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
            <IndicatorValue onClick={() => indicatorHandler('discounts')}>
              знижки та акції
            </IndicatorValue>
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
