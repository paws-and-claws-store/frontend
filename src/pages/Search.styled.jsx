import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';
import TRAVEL_BAG from '../svg/Travel_bag.svg';

export const SearchContainer = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px; */
  display: flex;
  gap: 20px;
`;
export const UpsideSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 628px 1fr;
  grid-column-gap: 20px;
  margin-bottom: 20px;
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
  color: ${theme.colors.black};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;
  word-wrap: break-word;
  /* banner content */
  font-family: Inter;
  font-size: ${theme.fontSizes.s};
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const SearchQuery = styled.span`
  color: ${theme.colors.green};

  /* font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on; */

  /* headlines */
  /* font-family: Inter;
  font-size: ${theme.fontSizes.s};
  font-style: normal;
  font-weight: 500;
  line-height: 20px; */
`;
export const SearchDescriptionSpan = styled.span``;

export const SortingContainer = styled.div`
  position: relative;
  width: 304px;
  height: 40px;
  margin-top: auto;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const SearchCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SearchAsideCatalog = styled.aside`
  /* width: ${theme.spacing.step * 76}px; */
`;

export const SearchFilter = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  /* width: 100%; */
  width: ${theme.spacing.step * 76}px;
  min-height: 44px;
  max-height: ${props => (props.active ? '44px' : '116px')};
  transition-property: max-height, background-color;
  transition-duration: ${theme.animations.transitionDuration};
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  background-color: ${props => (props.active ? theme.colors.secGreen : theme.colors.beige)};

  outline: 1px solid ${theme.colors.green};
`;
export const SearchBrands = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  width: 100%;
  min-height: 44px;
  max-height: ${props => (props.activeBrands ? '44px' : '500px')};
  transition-property: max-height, background-color;
  transition-duration: ${theme.animations.transitionDuration};
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  background-color: ${props => (props.activeBrands ? theme.colors.secGreen : theme.colors.beige)};

  outline: 1px solid ${theme.colors.green};
`;

export const SearchWrapperCatalog = styled.div`
  /* display: grid; */
  width: 100%;
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
  z-index: ${theme.zIndexes.foldedContainer};
  width: 100%;
  display: flex;
  align-items: center;
  transition: background-color 0.5s;
  justify-content: space-between;
  padding: ${theme.spacing.step + 2}px ${theme.spacing.step * 2}px;
  cursor: pointer;
  &:hover {
    fill: ${theme.colors.green};
  }
`;

export const SearchTravelBag = styled.svg`
  width: 572px;
  height: 572px;
  background-image: url(${TRAVEL_BAG});
  fill: aqua;
`;
