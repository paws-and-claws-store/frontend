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
  selectIsPriceRangeSet,
  selectPriceValueInput,
} from 'redux/selectors/selectors';
import { setBrands } from 'redux/slice/brandsFilterSlice';
import { setClearSetStatusPriceRange } from 'redux/slice/priceRangeSlice';

export const FilterSelectionLayout = renderdata => {
  const dispatch = useDispatch();
  const checkedBrands = useSelector(selectCheckedBrands);
  const checkboxStates = useSelector(selectCheckboxStates);
  const priceValue = useSelector(selectPriceValueInput);

  const isPriceRangeSet = useSelector(selectIsPriceRangeSet);
  function renderBlock(data, type) {
    return (
      <FilterSelectionOption key={data}>
        <FilterSelectionText key={data + 'text'}>
          {type === 'brand' ? `${data}` : `  ${data[0]} ₴ - ${data[1]} ₴`}
        </FilterSelectionText>
        <FilterSelectionButton
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

  // const handleClickUnsetPriceValue =
  return (
    <FilterSelectionContainer>
      {checkedBrands ? checkedBrands.map(item => renderBlock(item, 'brand')) : null}
      {isPriceRangeSet ? renderBlock(priceValue, 'price') : null}
    </FilterSelectionContainer>
  );
};
