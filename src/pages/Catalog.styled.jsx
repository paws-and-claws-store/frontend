import styled from '@emotion/styled';
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

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
  }
`;

export const CategoryList = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;

  .toggleButton {
    display: flex;
    border-radius: 0;
    border: 1px solid ${theme.colors.green};
    background-color: ${theme.colors.secGreen};
    color: ${theme.colors.black};
    justify-content: space-between;

    .check-with-label:checked + .label-for-check {
      font-weight: bold;
      color: red;
      background-color: ${theme.colors.beige};
    }
  }
`;

export const AsideCatalog = styled.aside`
  /* outline: 1px solid black; */
  display: block;
  flex-grow: 25%;

  width: ${theme.spacing.step * 76}px;

  .check-with-label:checked + .label-for-check {
    font-weight: bold;
    color: red;
  }
`;

export const PetButton = styled.button`
  padding: 6px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${theme.colors.secGreen};

  border: 1px solid ${theme.colors.green};

  &.active {
    background-color: ${theme.colors.beige};
  }
`;

export const WrapperCatalog = styled.div`
  position: relative;
`;

export const BoxHiden = styled.div`
  display: none;
  position: absolute;
  z-index: 2;
  background-color: ${theme.colors.beige};
  border: 1px solid ${theme.colors.green};

  width: 304px;
  padding: 20px;

  &.active {
    display: block;
  }
`;
