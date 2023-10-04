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
import { useStateContext } from 'context/StateContext';

// import { Search } from './Search';

export const Header = () => {
  const [scroll, setScroll] = useState('');
  const { cartList } = useStateContext();

  const [countOfCart, setCountOfCart] = useState(null);

  useEffect(() => {
    if (countOfCart) {
      // console.log('visible');
      // document.getElementById('cartIcon').classList.add('notEmpty');
    } else {
      // console.log('Hidden');
      // document.getElementById('cartIcon').style.visibility = 'hidden';
    }
  }, [countOfCart]);

  useEffect(() => {
    setCountOfCart(() => {
      if (cartList) {
        const countItems = cartList
          .flatMap(cart => cart.items)
          .reduce((totalCount, item) => totalCount + item.count, 0);
        return countItems;
        // return cartList.length;
      }
      return null;
    });
  }, [cartList]);

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
          <SearchBox>
            <form action="/frontend/search">
              <input type="search" placeholder="Введіть назву товару" />
              <button>
                <ClearButton />
              </button>
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </SearchBox>

          <LinkWrapper>
            <button>
              <ProfileIcon />
            </button>
            <button>
              <HeartIcon />
            </button>

            <Link to={'/cart'}>
              {countOfCart > 0 ? (
                <CountContainer>
                  <CartNotEmptyIcon />

                  <Count>{countOfCart}</Count>
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
