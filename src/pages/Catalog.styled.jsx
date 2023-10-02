import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from 'styles';

export const CatalogContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 20px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: center;
  }
`;

export const CategoryList = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
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
  z-index: 10;
  padding: 6px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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

  ._categories-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  ._variants {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const BoxHiden = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  background-color: ${theme.colors.beige};
  border: 1px solid ${theme.colors.green};

  width: 304px;
  /* width: 100%; */
  padding: 20px;

  &.active {
    display: block;
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 20px; /* 125% */
`;

export const FoodTypeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FoodType = styled(Link)`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px; /* 125% */
`;
