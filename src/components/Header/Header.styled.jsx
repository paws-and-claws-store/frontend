import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  width: ${props => props.theme.breakpoints.xl};
  margin: 0 auto;
  outline: 1px solid black;

  background-color: ${props => props.theme.colors.mainBackground};

  /* height: 90px; */
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.spacing.step * 19 - 3}px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;

  text-transform: uppercase;

  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier};

  transform: scale(0.9);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.green};
  }

  &.active {
    color: ${props => props.theme.colors.green};
    /* background-color: ${props => props.theme.colors.accent}; */

    padding: 6px 12px;
    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.step * 5}px;

  /* margin-left: ${props => props.theme.spacing.step * 7}px; */
`;
