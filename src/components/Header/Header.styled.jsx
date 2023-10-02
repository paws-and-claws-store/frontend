import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const HeaderStyled = styled.header`
  /* outline: 1px solid black; */
  position: fixed;
  width: 100%;
  height: ${props => props.theme.spacing.step * 19}px;
  padding: ${props => props.theme.spacing.step * 1}px 0px;

  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;

  background-color: ${props => props.theme.colors.mainBackground};

  &.scroll {
    box-shadow: 0px 0px 4px 0px #b2ab73;
  }
  /* outline: 1px solid red; */
  /* display: flex; */
  /* justify-content: space-between; */
  /* outline: 1px solid black; */
`;

//   padding-left: ${props => props.theme.spacing.step * 20 + 1}px;
//   padding-right: ${props => props.theme.spacing.step * 20 + 1}px;

export const HeaderContainer = styled.div`
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

export const HeaderWrapper = styled.div`
  /* outline: 1px solid black; */
  padding-left: ${props => props.theme.spacing.step * 20 - 3}px;
  padding-right: ${props => props.theme.spacing.step * 21 - 1}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    /* display: block; */
  }
`;

export const NavLinksWrapper = styled.div`
  /* display: flex; */
  /* margin-left: 24%; */
  gap: ${props => props.theme.spacing.step * 5}px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeight.Regular};
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
  gap: ${theme.spacing.step * 3}px;
  /* align-items: center; */
  /* justify-content: flex-end; */
  /* gap: ${props => props.theme.spacing.step * 5}px; */

  /* margin-left: ${props => props.theme.spacing.step * 7}px; */
`;

export const CountContainer = styled.div`
  position: relative;
`;

export const Count = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 12px */

  position: absolute;
  top: 4px;
  right: 7px;
  color: ${theme.colors.orange};
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
  align-items: center;
  justify-content: space-evenly;
  width: ${props => props.theme.spacing.step * 17}px;
  gap: ${props => props.theme.spacing.step * 1}px;

  font-weight: ${props => props.theme.fontWeight.Regular};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.25;

  /* text-transform: uppercase; */
`;

export const LengLinkStyled = styled(Link)`
  color: ${props => props.theme.colors.green};
  &.accent {
    color: ${props => props.theme.colors.orange};
  }
`;

export const SearchBox = styled.div`
  display: flex;

  position: relative;

  form {
    width: ${props => props.theme.spacing.step * 157}px;
    height: ${props => props.theme.spacing.step * 11}px;
  }

  input {
    width: 100%;
    height: 100%;
    outline: 0;

    border-radius: ${props => props.theme.spacing.step * 10}px;
    border: 1px solid ${props => props.theme.colors.green};
    padding: ${props => props.theme.spacing.step * 2 + 2}px
      ${props => props.theme.spacing.step * 4}px;
    padding-left: ${props => props.theme.spacing.step * 13}px;
    background-color: ${props => props.theme.colors.beige};

    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeight.Light};
    line-height: 1.25; /* 125% */
    color: ${props => props.theme.colors.green};

    /* border-radius: ${props => props.theme.spacing.step * 10}px;
    border: 1px solid ${props => props.theme.colors.green}; */

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeight.Light};
      line-height: 1.25; /* 125% */
      color: ${props => props.theme.colors.secGreen};
    }
  }

  .searchIcon {
    position: absolute;
    left: ${props => props.theme.spacing.step * 5}px;
    top: 50%;
    transform: translateY(-50%);

    .searchIcon:active {
      transform: scale(0.95);
    }
  }

  /* #Search::-webkit-search-cancel-button {
    position: relative;
    right: 20px;

    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: red;
  } */

  .clearButton {
    display: none;
    position: absolute;
    right: ${props => props.theme.spacing.step * 5}px;
    top: 50%;
    transform: translateY(-50%);

    input:focus {
      display: block;
    }
  }
`;
