import { useDispatch, useSelector } from 'react-redux';
import {
  FilterSelectionButton,
  FilterSelectionContainer,
  FilterSelectionOption,
  FilterSelectionText,
} from './FilterSelectionLayout.styled';
import {
  selectCategories,
  selectIsPriceRangeSet,
  selectPriceValueInput,
} from 'redux/selectors/selectors';
import { setClearSetStatusPriceRange } from 'redux/slice/priceRangeSlice';
import { useSearchParams } from 'react-router-dom';

export const FilterSelectionLayout = () => {
  const dispatch = useDispatch();
  const priceValue = useSelector(selectPriceValueInput);
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

  const isPriceRangeSet = useSelector(selectIsPriceRangeSet);

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
            setSearchParams({ availability: false });
          }
          if (type === 'price') {
            dispatch(setClearSetStatusPriceRange(true)); // reset status to price range redux store
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
      {isPriceRangeSet ? renderBlock(priceValue, 'price') : null}
      {booleanAvailability ? renderBlock('В наявності', 'availability') : null}
      {checkedCategoriesArray
        ? checkedCategoriesArray.map(item => renderBlock(item, 'category', uaObject[item]))
        : null}
    </FilterSelectionContainer>
  );
};
