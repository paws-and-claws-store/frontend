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
import { Footer } from 'components/Footer/Footer';
// import { Search } from './Search';

export const Header = () => {
  // const theme = useTheme();

  return (
    <>
      <NavBar>
        <>
          <HeaderWrapper>
            {/* <FaFlagUsa size="40px" color={theme.colors.light} /> */}

            <LinkWrapper>
              <LogoWrapper>
                <Link to="/">
                  <LogoIcon />
                </Link>
              </LogoWrapper>

              <NavLinksWrapper>
                <NavLinkStyled to="/catalog">Каталог</NavLinkStyled>
                <NavLinkStyled to="/brands">Бренди</NavLinkStyled>
              </NavLinksWrapper>
              <Leng>
                <LengLinkStyled>Eng</LengLinkStyled>
                <LengLinkStyled className="accent">Укр</LengLinkStyled>
              </Leng>

              <LinkItemWrapper>
                <li>
                  {/* <Search /> */}

                  <button>
                    <SerachIcon />
                  </button>
                </li>
                <li>
                  <Link to={'/cart'}>
                    <CartIcon />
                  </Link>
                </li>
                <li>
                  <button>
                    <SignInIcon />
                  </button>
                </li>
              </LinkItemWrapper>
            </LinkWrapper>
          </HeaderWrapper>
        </>
      </NavBar>

      <Outlet />
      <Footer />
    </>
  );
};
