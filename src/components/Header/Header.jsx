import { Link } from 'react-router-dom';

import {
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
  ClearButton,
  HeartIcon,
  LogoIcon,
  ProfileIcon,
  SearchIcon,
} from 'components/Icons';

// import { Search } from './Search';

export const Header = () => {
  return (
    <HeaderStyled>
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
              <CartIcon />
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
