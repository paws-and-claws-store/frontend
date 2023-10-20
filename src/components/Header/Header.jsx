import { Link } from 'react-router-dom';

import {
  Count,
  CountContainer,
  HeaderContainer,
  HeaderStyled,
  HeaderWrapper,
  Leng,
  LengLinkStyled,
  LinkWrapper,
  SearchBox,
} from './Header.styled';
import {
  CartIcon,
  CartNotEmptyIcon,
  ClearButton,
  HeartIcon,
  LogoIcon,
  ProfileIcon,
  SearchIcon,
} from 'components/Icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { Search } from 'components/SearchBar/SearchBar';

// import { Search } from './Search';

export const Header = () => {
  const [scroll, setScroll] = useState('');

  const cartStore = useSelector(selectCartStore);
  const countOfObject = Object.values(cartStore);
  const totalCount = countOfObject.reduce((previousValue, item) => {
    return previousValue + item;
  }, 0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setScroll('scroll');
      } else {
        setScroll('');
      }
    });
  }, []);

  return (
    <HeaderStyled className={scroll}>
      <HeaderContainer>
        <HeaderWrapper>
          <Link to="/" className="logo">
            <LogoIcon />
          </Link>

          {/* <LinkWrapper>
              <NavLinkStyled to="/catalog">Каталог</NavLinkStyled>
              <NavLinkStyled to="/brands">Бренди</NavLinkStyled>
            </LinkWrapper> */}
          {/* <SearchBox>
            <form action="/frontend/search">
              <input type="search" placeholder="Введіть назву товару" />
              <button>
                <ClearButton />
              </button>
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </SearchBox> */}
          <Search />
          <LinkWrapper>
            <button>
              <ProfileIcon />
            </button>
            <button>
              <HeartIcon />
            </button>

            <Link to={'/cart'}>
              {totalCount > 0 ? (
                <CountContainer>
                  <CartNotEmptyIcon />

                  <Count>{totalCount}</Count>
                </CountContainer>
              ) : (
                <CartIcon />
              )}
            </Link>
            <Leng>
              <LengLinkStyled>Eng</LengLinkStyled>
              <LengLinkStyled className="accent">Укр</LengLinkStyled>
            </Leng>
          </LinkWrapper>
        </HeaderWrapper>
      </HeaderContainer>
    </HeaderStyled>
  );
};
