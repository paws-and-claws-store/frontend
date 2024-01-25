import styled from '@emotion/styled';
import { theme } from 'styles';

export const CategoriesCheckBoxContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  padding-left: 10px;
`;

export const CategoriesCheckBoxStyled = styled.li`
  /* text-align: left; */
  //display: flex;
  margin-bottom: 8px;
  /* color: ${props => (props.disabled ? `${theme.colors.black}` : `${theme.colors.green}`)}; */
  color: ${theme.colors.black};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;

  /* content card */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 125% */
`;

export const CategoriesCheckBoxLabelStyled = styled.label`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 6px;

  /* gap: 10px; */
  // text-transform: capitalize;
  cursor: pointer;
`;
