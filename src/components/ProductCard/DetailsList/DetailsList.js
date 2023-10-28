import React, { useState, useRef} from 'react';

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

const commentsRef = useRef(null);

  const scrollToComments = () => {
    if(commentsRef.current){
      const elementPosition = commentsRef.current.getBoundingClientRect().top;
      const offset = elementPosition -100;
      window.scrollTo({top: window.scrollY+ offset, behavior: 'smooth'})
    }
    // commentsRef.current.scrollIntoView({behavior: 'smooth', block: 'start', blockOffset: 200,})
  };
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
        <CustomNavLink onClick={scrollToComments}>
          <p>Відгуки</p>
        </CustomNavLink>
      </InfoLinkList>
      {productDescription
      ?<ProductDescription/>
      :<ProductComposition/>}
      <ProductComments forwardedRef = {commentsRef}/>
    </DetailsListContainer>
  );
};

export default DetailsList;
