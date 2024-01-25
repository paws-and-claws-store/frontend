import {
  CheckBoxStyled,
  FilterContainer,
  QuantityBrands,
} from 'components/BrandsFilter/BrandsFilter.styled';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/selectors/selectors';
import {
  CategoriesCheckBoxContainer,
  CategoriesCheckBoxLabelStyled,
  CategoriesCheckBoxStyled,
} from './CategoriesFilter.styled';

export const CategoriesFilter = ({ active }) => {
  const categories = useSelector(selectCategories);
  const hierarchy = ['_categories', '_variants'];

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
                <CheckBoxStyled type="checkbox" />
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
