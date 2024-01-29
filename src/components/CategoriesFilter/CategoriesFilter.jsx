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
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export const CategoriesFilter = ({ active }) => {
  const categories = useSelector(selectCategories);
  const hierarchy = ['_categories', '_variants'];
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategories = searchParams.get('categories');
  const urlCheckboxState = urlCategories
    ? urlCategories.split(',').reduce((acc, key) => {
        // Удалить пробелы вокруг ключа, если они есть
        const trimmedKey = key.trim();
        // Установить значение ключа в true
        acc[trimmedKey] = true;
        return acc;
      }, {})
    : {};

  const [checkboxStates, setCheckboxStates] = useState(urlCheckboxState);

  function setCategories(stateParams, action) {
    const updatedCategories = new Set(stateParams);
    if (action.checked) {
      updatedCategories.add(action.name);
    } else {
      updatedCategories.delete(action.name);
    }

    setSearchParams(
      updatedCategories.size !== 0 ? { categories: [...updatedCategories].toString() } : {},
    );
  }

  const handleCheckboxChange = (name, checked) => {
    const urlCategoriesArray = urlCategories
      ? urlCategories.split(',').map(item => item.trim())
      : [];

    setCategories(urlCategoriesArray, { name, checked });
    setCheckboxStates(prevState => {
      return { ...prevState, [name]: checked };
    });
  };

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
