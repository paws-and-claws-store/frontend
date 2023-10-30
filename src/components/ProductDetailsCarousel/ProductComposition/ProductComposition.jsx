import React from 'react';
import { CompositionContainer, CompositionWrapper, CompositionText } from './ProductComposition.styled';

const ProductComposition = ({ ingredients }) => {
  console.log('ingredients:', ingredients);

  return (
    <CompositionContainer>
      <CompositionWrapper>
        <CompositionText>{ingredients}</CompositionText>
      </CompositionWrapper>
    </CompositionContainer>
  );
};

export default ProductComposition;
