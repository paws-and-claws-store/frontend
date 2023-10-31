import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;
`;
export const UpsideSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: 20px;
  margin-bottom: 24px;
`;

export const TitleSearch = styled.h2`
  width: 304px;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.Medium};
  font-size: ${theme.lineHeight.xxl};
  margin-top: ${theme.spacing.step * 12}px;
  margin-bottom: 52px;
`;

export const SearchDesriptionResults = styled.div`
  margin-top: auto;
  color: ${theme.colors.black};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;

  /* banner content */
  font-family: Inter;
  font-size: ${theme.fontSizes.s};
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const SearchQuery = styled.span`
  color: ${theme.colors.green};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;

  /* headlines */
  font-family: Inter;
  font-size: ${theme.fontSizes.s};
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const SearchDescriptionSpan = styled.span``;

export const SortingContainer = styled.div`
  width: 304px;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const SortingSpan = styled.span`
  margin-bottom: 10px;
  color: ${theme.colors.green};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;
  /* banner content */
  font-family: Inter;
  font-size: ${theme.fontSizes.s};
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const SearchCardList = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const SearchCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SearchAsideCatalog = styled.aside`
  width: ${theme.spacing.step * 76}px;
`;

export const SearchFilter = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  width: 100%;
  max-height: ${props => (props.active ? '44px' : '116px')};
  transition-property: max-height, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  background-color: ${props => (props.active ? theme.colors.secGreen : theme.colors.beige)};

  outline: 1px solid ${theme.colors.green};

  &.active {
    position: relative;
    z-index: 10;
    background-color: ${theme.colors.beige};
  }
`;
export const SearchBrands = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  width: 100%;
  max-height: ${props => (props.activeBrands ? '44px' : '500px')};
  transition-property: max-height, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  background-color: ${props => (props.activeBrands ? theme.colors.secGreen : theme.colors.beige)};

  outline: 1px solid ${theme.colors.green};

  &.active {
    position: relative;
    z-index: 10;
    background-color: ${theme.colors.beige};
  }
`;

export const SearchWrapperCatalog = styled.div``;

export const SearchBoxHiden = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  background-color: ${theme.colors.beige};
  border: 1px solid ${theme.colors.green};

  width: ${theme.spacing.step * 76}px;
  /* width: 100%; */
  padding: ${theme.spacing.step * 5}px;

  &.active {
    display: block;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.step * 3}px;
  }

  a:hover,
  a:focus {
    color: ${theme.colors.green};
  }

  a:active {
    color: ${theme.colors.orange};
  }
`;

export const SearchCategory = styled(Link)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l}; /* 125% */
`;

export const SearchFoodTypeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.step * 2}px;
`;

export const SearchFoodType = styled(Link)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.l};
`;

export const FoldedContainer = styled.div`
  z-index: 778;
  width: 100%;
  display: flex;
  align-items: center;
  transition: background-color 0.5s;
  justify-content: space-between;
  padding: ${theme.spacing.step + 2}px ${theme.spacing.step * 2}px;
`;
