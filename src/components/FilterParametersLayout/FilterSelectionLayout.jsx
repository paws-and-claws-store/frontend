import { useDispatch, useSelector } from 'react-redux';
import {
  FilterSelectionButton,
  FilterSelectionContainer,
  FilterSelectionOption,
  FilterSelectionText,
} from './FilterSelectionLayout.styled';
import {
  selectCheckboxStates,
  selectCheckedBrands,
  selectIsBrandsFilterSet,
  selectIsPriceRangeSet,
  selectPriceValueInput,
} from 'redux/selectors/selectors';
import { setBrands, setBrandsSet } from 'redux/slice/brandsFilterSlice';
import { setClearSetStatusPriceRange } from 'redux/slice/priceRangeSlice';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const FilterSelectionLayout = renderdata => {
  const dispatch = useDispatch();
  const checkedBrands = useSelector(selectCheckedBrands);

  const checkboxStates = useSelector(selectCheckboxStates);
  const priceValue = useSelector(selectPriceValueInput);
  const [searchParams, setSearchParams] = useSearchParams();
  const booleanAvailability = searchParams.get('availability') === 'true';

  const isPriceRangeSet = useSelector(selectIsPriceRangeSet);
  const isBrandsSet = useSelector(selectIsBrandsFilterSet);

  useEffect(() => {
    if (checkedBrands.length === 0) {
      dispatch(setBrandsSet(false));
    }
  }, [checkedBrands, dispatch]);

  function renderBlock(data, type) {
    let renderText;
    if (type === 'brand' || type === 'availability') {
      renderText = `${data}`.toLowerCase();
    }
    if (type === 'price') {
      renderText = `${data[0]} ₴ - ${data[1]} ₴`.toLowerCase();
    }

    return (
      <FilterSelectionOption
        //  key={data}
        className="FilterSelectionOption"
        onClick={() => {
          if (type === 'brand') {
            handleClickUnset({ name: data, checked: checkboxStates[data] });
          }
          if (type === 'availability') {
            setSearchParams({ availability: false });
          }
          if (type === 'price') {
            dispatch(setClearSetStatusPriceRange(true)); // reset status to price range redux store
          }
        }}
        key={data + 'button'}
      >
        <FilterSelectionText key={data + 'text'}>
          {renderText.toLowerCase()}
        </FilterSelectionText>
        <FilterSelectionButton
          onClick={() => {
            if (type === 'brand') {
              handleClickUnset({ name: data, checked: checkboxStates[data] });
            }
            if (type === 'availability') {
              setSearchParams({ availability: false });
            }
            if (type === 'price') {
              dispatch(setClearSetStatusPriceRange(true)); // reset status to price range redux store
            }
          }}
          key={data + 'button'}
        />
      </FilterSelectionOption>
    );
  }

  const handleClickUnset = ({ name, checked }) => {
    dispatch(setBrands({ name, checked: !checked }));
  };

  return (
    <FilterSelectionContainer>
      {isBrandsSet
        ? checkedBrands.map(item => renderBlock(item, 'brand'))
        : null}
      {isPriceRangeSet ? renderBlock(priceValue, 'price') : null}
      {booleanAvailability ? renderBlock('В наявності', 'availability') : null}
    </FilterSelectionContainer>
  );
};
