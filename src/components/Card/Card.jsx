import React from 'react';
import {
  BoxCard,
  BrandNameSt,
  Button,
  Image,
  PriceSt,
  ProductNameSt,
  ShortDiscriptionSt,
  SizeSt,
  Wrapper,
} from './Card.styled';

export const Card = ({ el }) => {
  return (
    <BoxCard>
      <Image src={el.Link} alt={el.ProductName} />
      <BrandNameSt>{el.Brand}</BrandNameSt>
      <ProductNameSt>{el.ProductName}</ProductNameSt>
      <ShortDiscriptionSt>{el.ShortDiscription}</ShortDiscriptionSt>
      <SizeSt>{el.Size}</SizeSt>
      <Wrapper>
        <PriceSt>{el.Price}</PriceSt>
        <Button>Обрати</Button>
      </Wrapper>
    </BoxCard>
  );
};
