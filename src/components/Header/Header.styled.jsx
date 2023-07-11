import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  /* outline: 1px solid black; */

  background-color: ${props => props.theme.colors.mainBackground};

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
`;

//   padding-left: ${props => props.theme.spacing.step * 20 + 1}px;
//   padding-right: ${props => props.theme.spacing.step * 20 + 1}px;

export const HeaderWrapper = styled.div`
  padding-left: ${props => props.theme.spacing.step * 19 - 2}px;
  padding-right: ${props => props.theme.spacing.step * 19 - 1}px;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  margin-right: 24%;
  gap: ${props => props.theme.spacing.step * 5}px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeight.SemiBold};
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
    color: ${props => props.theme.colors.green};
  }

  &.active {
    color: ${props => props.theme.colors.green};
    /* background-color: ${props => props.theme.colors.accent}; */

    /* padding: 6px 12px; */
    /* border-radius: 4px; */

    /* transform: scale(1); */
    pointer-events: none;
  }
`;
export const LogoWrapper = styled.div`
  margin-right: auto;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* gap: ${props => props.theme.spacing.step * 5}px; */

  /* margin-left: ${props => props.theme.spacing.step * 7}px; */
`;

export const LinkItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${props => props.theme.spacing.step * 5}px;

  margin-left: ${props => props.theme.spacing.step * 5 + 4}px;
`;

export const Leng = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.step * 2}px;

  font-weight: ${props => props.theme.fontWeight.Medium};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeight.xl};

  text-transform: uppercase;
`;

export const LengLinkStyled = styled(Link)`
  color: ${props => props.theme.colors.green};
  &.accent {
    color: ${props => props.theme.colors.orange};
  }
`;
