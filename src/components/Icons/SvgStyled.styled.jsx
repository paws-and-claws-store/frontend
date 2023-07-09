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
