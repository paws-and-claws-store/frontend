import {
  AlphabetStyled,
  BrandsCheckBoxContainer,
  BrandsCheckBoxStyled,
  CheckBoxLabelStyled,
  CheckBoxStyled,
  FilterContainer,
  LetterStyled,
  QuantityBrands,
} from './Filter.styled';
import React from 'react';

export const Filter = ({ active }) => {
  // Generates an alphabet array
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  const brands = [
    'Royal Canin',
    'Royal Canin',
    'Royal Canin',
    'Canagan',
    'Canagan',
    'Royal Canin',
    'Royal Canin',
    'Royal Canin',
    'Canagan',
    'Canagan',
    'Royal Canin',
    'Royal Canin',
    'Royal Canin',
    'Canagan',
    'Canagan',
    'Royal Canin',
    'Royal Canin',
    'Royal Canin',
    'Canagan',
    'Canagan',
  ];

  return (
    <FilterContainer active={active}>
      <AlphabetStyled>
        {alphabet.map(item => {
          return <LetterStyled key={item}>{item.toUpperCase()}</LetterStyled>;
        })}
      </AlphabetStyled>
      <BrandsCheckBoxContainer>
        {brands.map(item => {
          return (
            <BrandsCheckBoxStyled key={item + Math.random()}>
              <CheckBoxLabelStyled>
                <CheckBoxStyled
                  type="checkbox"
                  name={item}
                  onChange={e => {
                    console.log(e.currentTarget.name);
                  }}
                />
                {item}
                <QuantityBrands>(0)</QuantityBrands>
              </CheckBoxLabelStyled>
            </BrandsCheckBoxStyled>
          );
        })}
      </BrandsCheckBoxContainer>
    </FilterContainer>
  );
};
