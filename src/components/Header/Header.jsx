import { Link, Outlet } from 'react-router-dom';
// import { useTheme } from '@emotion/react';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';
import Logo from './Logo';

export const Header = () => {
  // const theme = useTheme();

  return (
    <>
      <NavBar>
        <>
          <HeaderWrapper>
            {/* <FaFlagUsa size="40px" color={theme.colors.light} /> */}

            <LinkWrapper>
              <Link to="/">
                <Logo />
              </Link>
              <NavLinkStyled to="/catalog">Каталог</NavLinkStyled>
              <NavLinkStyled to="/brands">Бренди</NavLinkStyled>
              {/* <NavLinkStyled to="/AboutUs">Про нас</NavLinkStyled> */}
            </LinkWrapper>
          </HeaderWrapper>
        </>
      </NavBar>

      <Outlet />
    </>
  );
};
