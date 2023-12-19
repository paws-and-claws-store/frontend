import { RightArrow } from 'components/Icons';
import {
  FoldedContainer,
  SearchBrands,
  SearchCategoryList,
  SearchClearFilter,
  SearchFilter,
} from './Search.styled';
import { PriceSlider } from 'components/PriceSlider/PriceSlider';
import { Filter } from 'components/Filter/Filter';
import { theme } from 'styles';
import { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClearSetStatusPriceRange } from 'redux/slice/priceRangeSlice';
import { setClearSetStatusBrandsFilter } from 'redux/slice/brandsFilterSlice';
import { selectIsBrandsFilterSet, selectIsPriceRangeSet } from 'redux/selectors/selectors';

export default memo(function SearchCategory({ brandsCount }) {
  const [active, setActive] = useState({ price: false, brands: false });
  const dispatch = useDispatch();
  const isPriceRangeSet = useSelector(selectIsPriceRangeSet);
  const isBrandsFilterSet = useSelector(selectIsBrandsFilterSet);

  const handleClickToggle = e => {
    active[e.currentTarget.attributes.name.value]
      ? setActive({ ...active, [e.currentTarget.attributes.name.value]: false })
      : setActive({ ...active, [e.currentTarget.attributes.name.value]: true });
  };

  const handleClickClearFilters = () => {
    dispatch(setClearSetStatusPriceRange(true)); // reset status to price range ewdux store
    dispatch(setClearSetStatusBrandsFilter(true)); // reset status to Brands filter redux store
  };
  return (
    <SearchCategoryList>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {isBrandsFilterSet || isPriceRangeSet ? (
          <li key={0}>
            <SearchClearFilter
              onClick={() => {
                handleClickClearFilters();
              }}
            >
              Очистити все
            </SearchClearFilter>
          </li>
        ) : null}
        <li key={1}>
          <SearchFilter active={active['price']}>
            <FoldedContainer
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
          <SearchBrands activeBrands={active['brands']}>
            <FoldedContainer
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
            <Filter active={active['brands']} brandsCount={brandsCount} />
          </SearchBrands>
        </li>
      </ul>
    </SearchCategoryList>
  );
});
