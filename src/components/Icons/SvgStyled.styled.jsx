import styled from '@emotion/styled';
import { theme } from 'styles';

export const SvgStyled = styled.svg`
  fill: ${props => props.theme.colors.black};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.green};
  }

  &:active {
    fill: ${props => props.theme.colors.orange};
  }

  &.notEmpty {
    fill: ${theme.colors.orange};
  }
`;

export const SvgFirstGreen = styled.svg`
  fill: ${props => props.theme.colors.green};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.orange};
  }

  &:active {
    fill: ${props => props.theme.colors.orange};
  }

  &.notEmpty {
    fill: ${theme.colors.orange};
  }
`;
export const SvgFirstGreenSecGreenActOrange = styled.svg`
  fill: ${props => props.theme.colors.green};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.secGreen};
  }

  &:active {
    fill: ${props => props.theme.colors.orange};
  }

  &.notEmpty {
    fill: ${theme.colors.orange};
  }
`;

export const SvgFooterStyled = styled.svg`
  fill: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.secGreen};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
    fill: ${theme.colors.secGreen};
    cursor: pointer;
  }
`;

export const SvgVectorStyled = styled.svg`
  fill: ${props => props.theme.colors.green};
  display: block;
  height: 12px;
  width: 8px;
`;

export const SvgGoogle = styled.svg`
  display: 'block';
  width: 25px;
  margin-right: 10px;
`
