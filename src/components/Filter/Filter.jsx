// this component is used for filtering by brands

import { useFetchBrandsQuery } from 'redux/operations';
import {
  AlphabetStyled,
  BrandsCheckBoxContainer,
  BrandsCheckBoxStyled,
  ButtonLetterStyled,
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

  const { data: brands } = useFetchBrandsQuery();

  return (
    <FilterContainer active={active}>
      <AlphabetStyled>
        {alphabet.map(item => {
          const enabledLetter = brands?.find(i => i[0].toUpperCase() === item.toUpperCase());

          return (
            <LetterStyled key={item}>
              <ButtonLetterStyled
                disabled={!enabledLetter}
                onClick={() => {
                  console.log('click');
                }}
              >
                {item.toUpperCase()}
              </ButtonLetterStyled>
            </LetterStyled>
          );
        })}
      </AlphabetStyled>
      <BrandsCheckBoxContainer>
        {brands?.map(item => {
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
