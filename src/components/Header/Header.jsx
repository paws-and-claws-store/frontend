import { Link } from 'react-router-dom';

import {
  Count,
  CountContainer,
  CountWrapper,
  HeaderContainer,
  HeaderStyled,
  HeaderWrapper,
  Leng,
  LengLinkStyled,
  LinkWrapper,
  // SearchBox,
} from './Header.styled';
import {
  CartIcon,
  CartNotEmptyIcon,
  // ClearButton,
  HeartIcon,
  LogoIcon,
  ProfileIcon,
  // SearchIcon,
} from 'components/Icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { SearchBar } from 'components/SearchBar/SearchBar';

// import { Search } from './Search';

export const Header = () => {
  const [scroll, setScroll] = useState('');

  const cartStore = useSelector(selectCartStore);
  const totalCount = cartStore.reduce((previousValue, { cardCount }) => {
    return previousValue + cardCount;
  }, 0);

  const countDigits = number => {
    return number.toString().length;
  };

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
          <SearchBar />
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

                  <CountWrapper>
                    <Count countDigits={countDigits(totalCount)}>
                      {totalCount}
                    </Count>
                  </CountWrapper>
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
