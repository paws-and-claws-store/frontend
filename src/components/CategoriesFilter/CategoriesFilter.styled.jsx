import styled from '@emotion/styled';
import { theme } from 'styles';

export const CategoriesFilterContainer = styled.div`
  overflow: auto;
  z-index: ${theme.zIndexes.filterSearch};
  width: 100%;
  max-height: 392px;
  transition-property: transform;
  transition-duration: ${theme.animations.transitionDuration};
  transition-timing-function: ${theme.animations.cubicBezier};
  transform: ${props => (props.active ? 'translateY(-90px)' : null)};
`;

export const CategoriesCheckBoxContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  padding-left: 24px;
`;

export const CategoriesCheckBoxStyled = styled.li`
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
  grid-column-gap: 4px;
  margin-top: 4px;

  margin-bottom: 4px;
  cursor: pointer;
`;
