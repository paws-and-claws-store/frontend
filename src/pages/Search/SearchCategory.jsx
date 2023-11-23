import { RightArrow } from 'components/Icons';
import { FoldedContainer, SearchBrands, SearchCategoryList, SearchFilter } from './Search.styled';
import { PriceSlider } from 'components/PriceSlider/PriceSlider';
import { Filter } from 'components/Filter/Filter';
import { theme } from 'styles';
import { memo, useState } from 'react';

export default memo(function SearchCategory() {
  const [active, setActive] = useState({ price: false, brands: false });

  const handleClickToggle = e => {
    active[e.currentTarget.attributes.name.value]
      ? setActive({ ...active, [e.currentTarget.attributes.name.value]: false })
      : setActive({ ...active, [e.currentTarget.attributes.name.value]: true });
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
            <Filter active={active['brands']} />
          </SearchBrands>
        </li>
      </ul>
    </SearchCategoryList>
  );
});
