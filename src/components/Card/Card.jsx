import React, { useState } from 'react';
import {
  BoxCard,
  BrandNameSt,
  Button,
  Image,
  PriceSt,
  ProductNameSt,
  ShortDiscriptionSt,
  SizeSt,
  SymbolCurrency,
  Wrapper,
} from './Card.styled';
import { Link } from 'react-router-dom';

export const Card = ({ el }) => {
  const [
    count,
    // setCount
  ] = useState(null);

  return (
    <BoxCard>
      <Link to={'/productCard'}>
        <Image src={el.image} alt={el.foodName} />
      </Link>
      <div>
        <div>
          <div>
            <Link to={'/brands'}>
              <BrandNameSt>{el.brand}</BrandNameSt>
            </Link>
            <Link to={'/productCard'}>
              <div>
                <ProductNameSt>{el.foodName}</ProductNameSt>
              </div>
              <ShortDiscriptionSt>{el.shortDescription}</ShortDiscriptionSt>
            </Link>
          </div>
          <SizeSt>{el.weight}</SizeSt>
        </div>
        <Wrapper>
          <PriceSt>
            {el.price.toFixed(2)}
            <SymbolCurrency>₴</SymbolCurrency>
          </PriceSt>
          {!count ? (
            <Button>Обрати</Button>
          ) : (
            <div>
              <button>
                <span>-</span>
              </button>
              <input type="text" value={1} />
              <button>
                <span>+</span>
              </button>
            </div>
          )}
        </Wrapper>
      </div>
    </BoxCard>
  );
};
