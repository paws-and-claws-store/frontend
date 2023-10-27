import React, { useState, useEffect } from 'react';

import ProductComments from 'components/ProductDetailsCarousel/ProductComments/ProductComments';
import ProductComposition from 'components/ProductDetailsCarousel/ProductComposition/ProductComposition';
import ProductDescription from 'components/ProductDetailsCarousel/ProductDescription/ProductDescription';

import {
  DetailsListContainer,
  InfoLinkList,
  CustomNavLink,
} from './DetailsList.styled';

const DetailsList = () => {
  const [productDescription, setProductDescription] = useState(true);
  const handleDescription = () => setProductDescription(true);
  const handleComposition = () => setProductDescription(false);

  return (
    <DetailsListContainer>
      <InfoLinkList>
        <CustomNavLink onClick={handleDescription}>
          <p>Опис товару</p>
        </CustomNavLink>
        <CustomNavLink onClick={handleComposition}>
          <p>Склад</p>
        </CustomNavLink>
        <CustomNavLink>
          <p>Відгуки</p>
        </CustomNavLink>
      </InfoLinkList>
      {productDescription
      ?<ProductDescription/>
      :<ProductComposition/>}
      {/* <ProductComments/> */}
    </DetailsListContainer>
  );
};

export default DetailsList;
