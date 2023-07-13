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
          <SizeSt>
            <span>{el.weight}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                fill="none"
                viewBox="0 0 19 18"
              >
                <path
                  fill="#B2AB73"
                  d="M15.387 6.496l-5.59 5.59a.42.42 0 01-.593 0l-5.591-5.59a.42.42 0 01.592-.593L9.5 11.197l5.295-5.294a.42.42 0 01.592.593z"
                ></path>
              </svg>
            </span>
          </SizeSt>
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
