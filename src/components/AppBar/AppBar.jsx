import React from 'react';
import { Header, Nav, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      AppBar
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Каталог</StyledLink>
        <StyledLink to="/brands">Бренди</StyledLink>
      </Nav>
    </Header>
  );
};
