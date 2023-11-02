import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const CatalogContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* gap: 20px; */
  gap: ${theme.spacing.step * 5}px;

  span {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.step * 2}px;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const CategoryList = styled.div`
  width: ${theme.spacing.step * 76}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${theme.spacing.step}px;
  /* position: relative; */
`;

export const AsideCatalog = styled.aside`
  /* outline: 1px solid black; */
  display: block;
  flex-grow: 25%;

  width: ${theme.spacing.step * 76}px;

  /* .check-with-label:checked + .label-for-check {
    font-weight: bold;
    color: red;
  } */
`;

export const PetButton = styled.button`
  position: relative;
  ${props => props.active && 'z-index: 10;'}
  padding: ${theme.spacing.step + 2}px ${theme.spacing.step * 2}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  width: 304px;
  background-color: ${theme.colors.secGreen};

  border: 1px solid ${theme.colors.green};

  &.active {
    position: relative;
    z-index: 10;
    background-color: ${theme.colors.beige};
  }
`;

export const WrapperCatalog = styled.div`
  position: relative;
  width: 100%;

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

export const BoxHiden = styled.div`
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

export const Category = styled(Link)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Medium};
  line-height: ${theme.lineHeight.l}; /* 125% */
`;

export const FoodTypeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.step * 2}px;
`;

export const FoodType = styled(Link)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.Light};
  line-height: ${theme.lineHeight.l};
`;
