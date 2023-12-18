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
  HeartIcon,
  LogoIcon,
  ProfileIcon,
} from 'components/Icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { LoginForm } from 'components/LoginForm/LoginForm';

// import { Search } from './Search';

export const Header = () => {
  const [scroll, setScroll] = useState('');
  const [registrMenuTogle, setRegistrMenuTogle] = useState(false);

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

  // const menuTogle = ()=>setRegistrMenuTogle(true)

  return (
    <HeaderStyled className={scroll}>
      <HeaderContainer>
        <HeaderWrapper>
          <Link to="/" className="logo">
            <LogoIcon />
          </Link>
          <SearchBar />
          <LinkWrapper>
            <button
              onClick={() => setRegistrMenuTogle(true)}
              disabled={registrMenuTogle}
            >
              <ProfileIcon />
            </button>
            <button>
              <HeartIcon />
            </button>

            <Link to={'/cart'}>
              {totalCount > 0 ? (
                <CountContainer>
                  <CartNotEmptyIcon countDigits={countDigits(totalCount)} />

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
            {registrMenuTogle ? (
              <LoginForm setRegistrMenuTogle={setRegistrMenuTogle} />
            ) : null}
          </LinkWrapper>
        </HeaderWrapper>
      </HeaderContainer>
    </HeaderStyled>
  );
};
