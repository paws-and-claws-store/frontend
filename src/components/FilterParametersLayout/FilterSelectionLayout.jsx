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

export const FilterSelectionLayout = renderdata => {
  const dispatch = useDispatch();
  const checkedBrands = useSelector(selectCheckedBrands);
  const checkboxStates = useSelector(selectCheckboxStates);
  const priceValue = useSelector(selectPriceValueInput);

  const isPriceRangeSet = useSelector(selectIsPriceRangeSet);
  const isBrandsSet = useSelector(selectIsBrandsFilterSet);

  useEffect(() => {
    if (checkedBrands.length === 0) {
      dispatch(setBrandsSet(false));
    }
  }, [checkedBrands, dispatch]);

  function renderBlock(data, type) {
    return (
      <FilterSelectionOption key={data}>
        <FilterSelectionText key={data + 'text'}>
          {type === 'brand' ? `${data}` : `  ${data[0]} ₴ - ${data[1]} ₴`}
        </FilterSelectionText>
        <FilterSelectionButton
          className="111"
          onClick={() => {
            if (type === 'brand') {
              handleClickUnset({ name: data, checked: checkboxStates[data] });
            } else {
              dispatch(setClearSetStatusPriceRange(true)); // reset status to price range ewdux store
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
      {/* {isBrandsSet ? checkedBrands.map(item => renderBlock(item.toLowerCase(), 'brand')) : null} */}
      {isBrandsSet
        ? checkedBrands.map(item => (
            <FilterSelectionOption key={item}>
              <FilterSelectionText key={item + 'text'}>
                {item.toLowerCase()}
              </FilterSelectionText>
              <FilterSelectionButton
                onClick={() => {
                  handleClickUnset({
                    name: item,
                    checked: checkboxStates[item],
                  });
                }}
                key={item + 'button'}
              />
            </FilterSelectionOption>
          ))
        : null}
      {isPriceRangeSet ? renderBlock(priceValue, 'price') : null}
    </FilterSelectionContainer>
  );
};
