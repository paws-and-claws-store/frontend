import { RightArrow } from 'components/Icons';
import {
  FoldedContainer,
  SearchBrands,
  SearchCategoryList,
  SearchCheckBoxLabelStyled,
  SearchCheckBoxStyled,
  SearchClearFilter,
  SearchFilter,
} from './Search.styled';
import { PriceSlider } from 'components/PriceSlider/PriceSlider';
import { BrandsFilter } from 'components/BrandsFilter/BrandsFilter';
import { theme } from 'styles';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClearSetStatusPriceRange } from 'redux/slice/priceRangeSlice';
import { setClearSetStatusBrandsFilter } from 'redux/slice/brandsFilterSlice';
import { selectIsBrandsFilterSet, selectIsPriceRangeSet } from 'redux/selectors/selectors';
import { FilterSelectionLayout } from 'components/FilterParametersLayout/FilterSelectionLayout';
import { useSearchParams } from 'react-router-dom';

export default memo(function SearchCategory() {
  const [active, setActive] = useState({ price: false, brands: false });
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const isPriceRangeSet = useSelector(selectIsPriceRangeSet);
  const isBrandsFilterSet = useSelector(selectIsBrandsFilterSet);

  const handleClickToggle = e => {
    active[e.currentTarget.attributes.name.value]
      ? setActive({ ...active, [e.currentTarget.attributes.name.value]: false })
      : setActive({ ...active, [e.currentTarget.attributes.name.value]: true });
  };

  const handleClickClearFilters = () => {
    dispatch(setClearSetStatusPriceRange(true)); // reset status to price range redux store
    dispatch(setClearSetStatusBrandsFilter(true)); // reset status to Brands filter redux store
  };

  const handleCheckboxChange = e => {
    setSearchParams({ availability: e.target.checked });
  };

  return (
    <SearchCategoryList>
      {(isBrandsFilterSet || isPriceRangeSet) && <FilterSelectionLayout />}
      {(isBrandsFilterSet || isPriceRangeSet) && (
        <SearchClearFilter
          onClick={() => {
            handleClickClearFilters();
          }}
        >
          Очистити все
        </SearchClearFilter>
      )}
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <li key={1}>
          <SearchFilter className="searchFilter" active={active['price']}>
            <FoldedContainer
              className="FoolderContainer"
              active={active['price']}
              style={{
                backgroundColor: active['price'] ? theme.colors.secGreen : theme.colors.beige,
              }}
              onClick={handleClickToggle}
              name="price"
            >
              <span>Ціна</span>
              <button name="price">
                <RightArrow direction={active['price'] ? 'rotate(90)' : 'rotate(-90)'} />
              </button>
            </FoldedContainer>

            <PriceSlider active={active['price']} />
          </SearchFilter>
        </li>
        <li key={2}>
          <SearchCheckBoxLabelStyled>
            <SearchCheckBoxStyled
              type="checkbox"
              name="availability"
              onChange={handleCheckboxChange}
              checked={searchParams.get('availability') === 'true'}
            />
            В наявності
          </SearchCheckBoxLabelStyled>
        </li>
        <li key={3}>
          <SearchBrands activeBrands={active['brands']}>
            <FoldedContainer
              className="brand"
              style={{
                backgroundColor: active['brands'] ? theme.colors.secGreen : theme.colors.beige,
              }}
              onClick={handleClickToggle}
              name="brands"
            >
              <span>Бренди</span>
              <button name="brands">
                <RightArrow direction={active['brands'] ? 'rotate(90)' : 'rotate(-90)'} />
              </button>
            </FoldedContainer>

            <BrandsFilter active={active['brands']} />
          </SearchBrands>
        </li>
      </ul>
    </SearchCategoryList>
  );
});
