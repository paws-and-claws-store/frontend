import styled from '@emotion/styled';
import { theme } from 'styles';

export const FilterContainer = styled.div`
  overflow: hidden;
  overflow: scroll;
  /* z-index: 12; */
  z-index: ${theme.zIndexes.filterSearch};
  width: 100%;
  height: 500px;
  transition-property: transform;
  transition-duration: ${theme.animations.transitionDuration};
  transition-timing-function: ${theme.animations.cubicBezier};

  transform: ${props => (props.active ? 'translateY(-90px)' : null)};
`;

export const AlphabetStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-row-gap: 4px;
  padding: 0 20px 12px 20px;
`;
export const LetterStyled = styled.li`
  display: inline-block;
  text-align: center;
  color: ${theme.colors.green};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;

  /* content card */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  /* 125% */
`;

export const ButtonLetterStyled = styled.button`
  color: ${props => (props.activeLetter ? theme.colors.orange : theme.colors.green)};
  &:disabled {
    color: ${theme.colors.black};
    cursor: default;
    &:hover {
      color: ${theme.colors.black};
    }
  }
  &:hover {
    color: orange;
  }
`;
export const BrandsCheckBoxContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  padding-left: 10px;
`;
export const BrandsCheckBoxStyled = styled.li`
  /* text-align: left; */
  display: flex;
  margin-bottom: 8px;
  color: ${props => (props.disabled ? `${theme.colors.black}` : `${theme.colors.green}`)};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;

  /* content card */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 125% */
`;

export const CheckBoxStyled = styled.input`
  display: grid;
  place-content: center;
  appearance: none;
  background-color: inherit;
  margin: 0;
  color: currentColor;
  width: 17px;
  height: 17px;
  border: 1px solid ${props => (props.checked ? `${theme.colors.black}` : `${theme.colors.green}`)};
  border-radius: 0.1em;
  transform: translateY(2px);
  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    //transform: scale(0);

    transform: ${props => (props.checked ? 'scale(1)' : 'scale(0)')};
    // transition: 120ms transform ${theme.animations.cubicBezier};
    box-shadow: inset 1em 1em ${theme.colors.black};
    transform-origin: bottom left;
    // clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    clip-path: polygon(38% 68%, 94% 14%, 100% 24%, 40% 83%, 12% 59%, 19% 51%);
  }
  &:hover {
    border: 1px solid
      ${props => (props.disabled ? `${theme.colors.green}` : `${theme.colors.black}`)};
  }
`;

export const CheckBoxLabelStyled = styled.label`
  display: inline-grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 4px;

  /* gap: 10px; */
`;

export const QuantityBrands = styled.span`
  color: ${theme.colors.grey};
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'ss09' on;

  /* content card */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 125% */
`;
