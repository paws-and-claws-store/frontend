import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const SearchContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.step * 5}px;
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchCardList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchCategoryList = styled.div`
  width: ${theme.spacing.step * 76}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${theme.spacing.step}px;
`;

export const SearchAsideCatalog = styled.aside`
  /* outline: 1px solid black; */
  display: block;
  flex-grow: 25%;

  width: ${theme.spacing.step * 76}px;

  /* .check-with-label:checked + .label-for-check {
    font-weight: bold;
    color: red;
  } */
`;

export const WrapperCatalog = styled.div`
  position: relative;

  ._categories-item {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.step * 3}px;
  }

  ._variants {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.step * 2}px;
  }
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
  /* transition: max-height 0.5s; */
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

export const SearchWrapperCatalog = styled.div`
  position: relative;

  ._categories-item {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.step * 3}px;
  }

  ._variants {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.step * 2}px;
  }
`;

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
  /* background-color: #d8d4b8; */
  /* background-color: ${props => (props.active ? theme.colors.beige : theme.colors.secGreen)}; */
  background-color: ${props => (props.active ? theme.colors.secGreen : theme.colors.beige)};
  transition: background-color 0.5s;
  justify-content: space-between;
  padding: ${theme.spacing.step + 2}px ${theme.spacing.step * 2}px;
`;
