import { Link, Outlet } from 'react-router-dom';
// import { useTheme } from '@emotion/react';

import {
  HeaderWrapper,
  Leng,
  LengLinkStyled,
  LinkItemWrapper,
  LinkWrapper,
  LogoWrapper,
  NavBar,
  NavLinkStyled,
  NavLinksWrapper,
} from './Header.styled';
import LogoIcon from 'components/Icons/Logo';
import SerachIcon from 'components/Icons/Search';
import SignInIcon from 'components/Icons/SignIn';
import CartIcon from 'components/Icons/Cart';
// import { Search } from './Search';

export const Header = () => {
  // const theme = useTheme();

  return (
    <>
      <NavBar>
        <>
          <HeaderWrapper>
            {/* <FaFlagUsa size="40px" color={theme.colors.light} /> */}
            <Link to="/">
              <LogoIcon />
            </Link>

            <LinkWrapper>
              <NavLinkStyled to="/catalog">Каталог</NavLinkStyled>
              <NavLinkStyled to="/brands">Бренди</NavLinkStyled>
            </LinkWrapper>

            <LinkWrapper>
              <Leng>
                <LengLinkStyled>Eng</LengLinkStyled>
                <LengLinkStyled className="accent">Укр</LengLinkStyled>
              </Leng>
              <button>
                <SerachIcon />
              </button>
              <Link to={'/cart'}>
                <CartIcon />
              </Link>
              <button>
                <SignInIcon />
              </button>
            </LinkWrapper>
          </HeaderWrapper>
        </>
      </NavBar>

      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
