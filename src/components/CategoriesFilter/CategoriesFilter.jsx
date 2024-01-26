import {
  CheckBoxStyled,
  FilterContainer,
  QuantityBrands,
} from 'components/BrandsFilter/BrandsFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories, selectCheckboxStatesCategories } from 'redux/selectors/selectors';
import {
  CategoriesCheckBoxContainer,
  CategoriesCheckBoxLabelStyled,
  CategoriesCheckBoxStyled,
} from './CategoriesFilter.styled';
import { setCategories } from 'redux/slice/categoriesFilterSlice';

export const CategoriesFilter = ({ active }) => {
  const categories = useSelector(selectCategories);
  const checkboxStates = useSelector(selectCheckboxStatesCategories);
  const hierarchy = ['_categories', '_variants'];
  const dispatch = useDispatch();

  const handleCheckboxChange = (name, checked) => {
    dispatch(setCategories({ name, checked }));
  };

  //console.log('categories :>> ', categories);

  const capitalizeFirstLetter = string => {
    const firstLetter = string.charAt(0).toUpperCase();
    const otherLetters = string.slice(1);
    return firstLetter + otherLetters;
  };

  function renderCheckBoxes(data, types) {
    return (
      <CategoriesCheckBoxContainer key={Math.random()}>
        {data.map(item => {
          return (
            <CategoriesCheckBoxStyled key={Math.random()}>
              <CategoriesCheckBoxLabelStyled key={Math.random()}>
                {/* Render checkboxes for each category */}
                <CheckBoxStyled
                  type="checkbox"
                  name={item.code}
                  onChange={e => {
                    handleCheckboxChange(e.target.name, e.target.checked);
                  }}
                  checked={!!checkboxStates[item.code]} // Check if checkbox is checked
                />
                {capitalizeFirstLetter(item.ua.toLowerCase())}
              </CategoriesCheckBoxLabelStyled>
              <QuantityBrands>{item ? `(${item.count})` : '(0)'}</QuantityBrands>
              {hierarchy.map(itemHierarchy => {
                return Array.isArray(item[itemHierarchy]) && item[itemHierarchy].length > 0
                  ? renderCheckBoxes(item[itemHierarchy], types)
                  : null;
              })}
            </CategoriesCheckBoxStyled>
          );
        })}
      </CategoriesCheckBoxContainer>
    );
  }

  if (categories) {
    return (
      <FilterContainer active={active} className="custom-scrollbar">
        {/* Render categories checkboxes */}
        {Array.isArray(categories) && categories.length > 0
          ? renderCheckBoxes(categories, hierarchy)
          : null}
      </FilterContainer>
    );
  }
};
