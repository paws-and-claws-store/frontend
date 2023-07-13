import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterStyled = styled.footer`
  /* position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;*/

  /* outline: 1px solid black; */
  display: flex;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.green};

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    width: ${props => props.theme.breakpoints.xl};
  }
  padding-left: ${props => props.theme.spacing.step * 19 - 2}px;
  padding-right: ${props => props.theme.spacing.step * 19 - 1}px;
`;
export const FooterLinkStyled = styled(Link)`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeight.Medium};
  line-height: ${props => props.theme.lineHeight.l};
  /* transition-property: color, background-color, transform; */

  /* transform: scale(1);
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier}; */

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green};
  }

  &:active {
    color: ${props => props.theme.colors.white};
  }

  &.active {
    color: ${props => props.theme.colors.white};
    /* background-color: ${props => props.theme.colors.accent}; */

    /* padding: 6px 12px; */
    /* border-radius: 4px; */

    /* transform: scale(1); */
    pointer-events: none;
  }
`;

export const FooterH2Styled = styled.h2`
  color: ${props => props.theme.colors.secGreen};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.Medium};
  line-height: ${props => props.theme.lineHeight.xl};
`;

export const FooterAStyled = styled.a`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeight.Medium};
  line-height: ${props => props.theme.lineHeight.l};
  /* transition-property: color, background-color, transform; */

  /* transform: scale(1);
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier}; */

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green};
  }

  &:active {
    color: ${props => props.theme.colors.white};
  }

  &.active {
    color: ${props => props.theme.colors.white};
    /* background-color: ${props => props.theme.colors.accent}; */

    /* padding: 6px 12px; */
    /* border-radius: 4px; */

    /* transform: scale(1); */
    pointer-events: none;
  }
`;

export const SocialListStyled = styled.ul`
  display: flex;
  ${'' /* flex-column: row; */}
`;

export const SocialLinkStyled = styled.a`
  padding: 8px;
`;
