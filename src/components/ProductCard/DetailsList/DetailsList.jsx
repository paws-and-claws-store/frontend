import React, { useState, useRef} from 'react';

import ProductComments from 'components/ProductDetailsCarousel/ProductComments/ProductComments';
import ProductComposition from 'components/ProductDetailsCarousel/ProductComposition/ProductComposition';
import ProductDescription from 'components/ProductDetailsCarousel/ProductDescription/ProductDescription';

import {
  DetailsListContainer,
  InfoLinkList,
  CustomNavLink,
  Text,
} from './DetailsList.styled';

const DetailsList = ({ product }) => {
  const [productDescription, setProductDescription] = useState(true);
  const [isActive, setIsActive]= useState(true)
  const {  fullDescription, ingredients, reviews} = product;
const commentsRef = useRef(null);

  const scrollToComments = () => {
    setIsActive(false);
    if(commentsRef.current){
      const elementPosition = commentsRef.current.getBoundingClientRect().top;
      const offset = elementPosition - 100;
      window.scrollTo({top: window.scrollY+ offset, behavior: 'smooth'})
    }
  };
  const handleDescription = () => {
    setProductDescription(true);
    setIsActive(true)
  };
  const handleComposition = () => {
    setProductDescription(false);
    setIsActive(false);
  };

  return (
    <DetailsListContainer>
      <InfoLinkList>
        <CustomNavLink 
        onClick={handleDescription} 
        isActive={isActive}
        >
          <Text>Опис товару</Text>
        </CustomNavLink>
        <CustomNavLink onClick={handleComposition}>
          <Text>Склад</Text>
        </CustomNavLink>
        <CustomNavLink onClick={scrollToComments}>
          <Text>Відгуки</Text>
        </CustomNavLink>
      </InfoLinkList>
      {productDescription
      ?<ProductDescription description={fullDescription}/>
      :<ProductComposition ingredients={ingredients}/>}
      <ProductComments forwardedRef = {commentsRef} reviews={reviews}/>
    </DetailsListContainer>
  );
};

export default DetailsList;
