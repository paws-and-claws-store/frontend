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
              <NavLinkStyled to="/Catalogs">Каталог</NavLinkStyled>
              <NavLinkStyled to="/Brands">Бренди</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </>
      </NavBar>

      <Outlet />
    </>
  );
};
