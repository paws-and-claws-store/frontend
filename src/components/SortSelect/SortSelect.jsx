// this component is used for sorting on product pages
import React, {
  // useEffect,
  useState,
} from 'react';

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
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { setValueSort } from 'redux/slice/sortSelectSlice';
// import { selectSortingTypeStore } from 'redux/selectors';
// import { useSearchParams } from 'react-router-dom';

export const SortSelect = () => {
  // const sortingType = useSelector(selectSortingTypeStore);
  // const [searchParams] = useSearchParams();
  // const sortingType = searchParams.get('sortBy');

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

  // useEffect(() => {
  //   // Викликати indicatorHandler при ініціалізації, якщо sortingType вже існує
  //   if (sortingType) {
  //     indicatorHandler(sortingType);
  //     setIsClickBurger(true);
  //   }
  // }, [indicatorHandler, sortingType]);

  const onButtonHandler = () => setIsClickBurger(!isClickBurger);
  const onBlurHandler = () => setIsClickBurger(true);

  return (
    <BurgerContainer>
      <SortingSpan>Сортування:</SortingSpan>
      <DropDownContainer
        onBlur={onBlurHandler}
        onClick={onButtonHandler}
        tabIndex="0"
      >
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
