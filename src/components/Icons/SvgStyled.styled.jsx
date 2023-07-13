import styled from '@emotion/styled';

export const SvgStyled = styled.svg`
  fill: ${props => props.theme.colors.black};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.green};
  }

  &:active {
    fill: ${props => props.theme.colors.secGrey};
  }
`;

export const SvgFooterStyled = styled.svg`
  fill: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.secGreen};
  }

  &:active {
    transform: scale(0.95);
    fill: ${props => props.theme.colors.secGreen};
  }
`;
