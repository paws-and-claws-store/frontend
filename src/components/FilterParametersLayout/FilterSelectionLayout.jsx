import { useSelector } from 'react-redux';
import {
  FilterSelectionButton,
  FilterSelectionContainer,
  FilterSelectionOption,
  FilterSelectionText,
} from './FilterSelectionLayout.styled';
import { selectCategories } from 'redux/selectors/selectors';
import { useSearchParams } from 'react-router-dom';

export const FilterSelectionLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const booleanAvailability = searchParams.get('availability') === 'true';
  const checkedCategoriesArray = searchParams
    .get('categories')
    ?.split(',')
    .map(item => item.trim());
  const checkedBrandsArray = searchParams
    .get('brands')
    ?.split(',')
    .map(item => item.trim());

  const priceRangeArray = searchParams
    .get('price')
    ?.split('-')
    .map(item => item.trim());

  const hierarchyArray = ['_categories', '_variants'];
  const categories = useSelector(selectCategories);

  const findUaByCode = (obj, code, hierarchy = hierarchyArray, uaObject = {}) => {
    if (obj.code === code) {
      uaObject[obj.code] = obj.ua;
    }

    hierarchy.forEach(categoryType => {
      const items = obj[categoryType] || [];
      items.forEach(item => findUaByCode(item, code, hierarchy, uaObject));
    });

    return uaObject;
  };

  const uaObject = {};

  if (categories && checkedCategoriesArray) {
    checkedCategoriesArray.forEach(code => {
      categories.forEach(obj => {
        findUaByCode(obj, code, hierarchyArray, uaObject);
      });
    });
  }

  function renderBlock(data, type, localization) {
    let renderText;
    if (type === 'brand' || type === 'availability') {
      renderText = `${data}`.toLowerCase();
    }
    if (type === 'price') {
      renderText = `${data[0]} ₴ - ${data[1]} ₴`.toLowerCase();
    }

    if (type === 'category') {
      renderText = `${localization}`.toLowerCase();
    }

    if (type === 'availability') {
      renderText = `${data}`.toLowerCase();
    }

    return (
      <FilterSelectionOption
        className="FilterSelectionOption"
        onClick={() => {
          if (type === 'brand') {
            const updateParams = checkedBrandsArray.filter(item => item !== data).join(',');

            updateParams.length > 0
              ? setSearchParams({ brands: updateParams })
              : setSearchParams(prevSearchParams => {
                  const updatedSearchParams = new URLSearchParams(prevSearchParams);
                  updatedSearchParams.delete('brands');
                  return updatedSearchParams;
                });
          }
          if (type === 'availability') {
            // setSearchParams({ availability: false });
            setSearchParams(prevSearchParams => {
              const updatedSearchParams = new URLSearchParams(prevSearchParams);
              updatedSearchParams.set('availability', 'false');
              return updatedSearchParams;
            });
          }
          if (type === 'price') {
            setSearchParams(prevSearchParams => {
              const updatedSearchParams = new URLSearchParams(prevSearchParams);
              updatedSearchParams.delete('price');
              return updatedSearchParams;
            });
          }
          if (type === 'category') {
            const updateParams = checkedCategoriesArray.filter(item => item !== data).join(',');

            updateParams.length > 0
              ? setSearchParams({ categories: updateParams })
              : setSearchParams(prevSearchParams => {
                  const updatedSearchParams = new URLSearchParams(prevSearchParams);
                  updatedSearchParams.delete('categories');
                  return updatedSearchParams;
                });
          }
        }}
        key={data + 'button'}
      >
        <FilterSelectionText key={data + 'text'}>{renderText.toLowerCase()}</FilterSelectionText>
        <FilterSelectionButton key={data + 'button'} />
      </FilterSelectionOption>
    );
  }

  return (
    <FilterSelectionContainer>
      {checkedBrandsArray ? checkedBrandsArray.map(item => renderBlock(item, 'brand')) : null}
      {priceRangeArray ? renderBlock(priceRangeArray, 'price') : null}
      {booleanAvailability ? renderBlock('В наявності', 'availability') : null}
      {checkedCategoriesArray
        ? checkedCategoriesArray.map(item => renderBlock(item, 'category', uaObject[item]))
        : null}
    </FilterSelectionContainer>
  );
};
