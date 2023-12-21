import { useDispatch, useSelector } from 'react-redux';
import {
  FilterSelectionButton,
  FilterSelectionContainer,
  FilterSelectionOption,
  FilterSelectionText,
} from './FilterSelectionLayout.styled';
import { selectCheckboxStates, selectCheckedBrands } from 'redux/selectors/selectors';
import { setBrands } from 'redux/slice/brandsFilterSlice';

export const FilterSelectionLayout = renderdata => {
  const dispatch = useDispatch();
  const checkedBrands = useSelector(selectCheckedBrands);
  const checkboxStates = useSelector(selectCheckboxStates);
  function renderBlock(data, type) {
    return (
      <FilterSelectionOption key={data}>
        <FilterSelectionText key={data + 'text'}>
          {type === 'brand' ? `${data}` : `  ${data[0]} ₴ - ${data[1]} ₴`}
        </FilterSelectionText>
        <FilterSelectionButton
          onClick={() => {
            handleClickUnset({ name: data, checked: checkboxStates[data] });
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
      {checkedBrands ? checkedBrands.map(item => renderBlock(item, 'brand')) : null}
    </FilterSelectionContainer>
  );
};
