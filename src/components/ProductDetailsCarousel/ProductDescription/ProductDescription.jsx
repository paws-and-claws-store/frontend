import React, { useState } from 'react';
// import products from '../../DB/products.json';
import { DescriptionContainer, ReadAllBtn, DescriptionWrapper, DescriptionText } from './ProductDescription.styled';

const ProductDescription = ({description}) => {
  const [readAll, setReadAll] = useState(false);
  return (
    <DescriptionContainer>

      <DescriptionWrapper
        style={
          readAll
            ? { overflow: 'auto' }
            : { overflow: 'hidden', height: '120px' }
        }
      >
        <DescriptionText>
          {description}
        </DescriptionText>
      </DescriptionWrapper>

      <ReadAllBtn type="button" onClick={() => setReadAll(prev => !prev)}>
        {readAll ? 'Згорнути' : 'Читати повністю'}
      </ReadAllBtn>
      
    </DescriptionContainer>
  );
};

export default ProductDescription;
