import React from 'react';
import { SvgStyled } from './SvgStyled.styled';

export const CartIcon = () => {
  return (
    <SvgStyled
      id="cartIcon"
      className="cartIcon"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill=""
        d="M17.491 30.035a1.596 1.596 0 11-3.191 0 1.596 1.596 0 013.191 0zm10.264-1.596a1.596 1.596 0 100 3.191 1.596 1.596 0 000-3.191zm5.215-14.624l-3.252 10.572a2.495 2.495 0 01-2.395 1.771H16.359a2.52 2.52 0 01-2.413-1.825L9.822 9.902a.228.228 0 00-.22-.165H7.684a.684.684 0 110-1.369h1.918a1.602 1.602 0 011.535 1.158l.973 3.404h20.206a.684.684 0 01.654.885zm-1.58.483H12.502l2.761 9.665a1.14 1.14 0 001.097.827h10.96a1.14 1.14 0 001.09-.805l2.982-9.687z"
      ></path>
    </SvgStyled>
  );
};
