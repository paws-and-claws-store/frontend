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
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    // При изменении данных снова устанавливаем checkboxStates
    setCheckboxStates(urlCheckboxState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlCategories]);

  const handleCheckboxChange = (name, checked, data) => {
    const urlCategoriesArray = urlCategories
      ? urlCategories.split(',').map(item => item.trim())
      : [];

    const updatedCategories = new Set(urlCategoriesArray);

    const handleChildCategories = (category, isChecked, parentCategory = null) => {
      updatedCategories[isChecked ? 'add' : 'delete'](category.code);

      hierarchy.forEach((itemHierarchy, index) => {
        if (Array.isArray(category[itemHierarchy])) {
          category[itemHierarchy].forEach(child => {
            handleChildCategories(child, isChecked);
          });
        }
      });

      // Если снимается чекбокс с дочерней категории, снимаем также с родительской
      if (!isChecked && category.code) {
        categories.forEach((cat, index) => {
          const parentCategory = cat[hierarchy[0]].find(parent =>
            parent[hierarchy[1]].some(item => item.code === category.code),
          );

          if (parentCategory) {
            updatedCategories.delete(parentCategory.code);
            updatedCategories.delete(categories[index].code);
          }
        });
      }
    };

    // Обновление дочерних чекбоксов при снятии/установке родительского чекбокса
    handleChildCategories(data, checked);

    updatedCategories.size !== 0
      ? setSearchParams(prevSearchParams => {
          const updatedSearchParams = new URLSearchParams(prevSearchParams);
          updatedSearchParams.set('categories', [...updatedCategories].join(','));
          return updatedSearchParams;
        })
      : setSearchParams(prevSearchParams => {
          const updatedSearchParams = new URLSearchParams(prevSearchParams);
          updatedSearchParams.delete('categories');
          return updatedSearchParams;
        });

    setCheckboxStates(prevState => {
      const newState = { ...prevState, [name]: checked };

      return newState;
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
          if (item.count !== 0) {
            return (
              <CategoriesCheckBoxStyled key={Math.random()}>
                <CategoriesCheckBoxLabelStyled key={Math.random()}>
                  {/* Render checkboxes for each category */}
                  <CheckBoxStyled
                    type="checkbox"
                    name={item.code}
                    onChange={e => {
                      handleCheckboxChange(e.target.name, e.target.checked, item);
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
          }
          return null;
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
