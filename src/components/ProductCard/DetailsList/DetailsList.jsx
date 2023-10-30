import React, { useState, useRef } from 'react';

import ProductComments from 'components/ProductDetailsCarousel/ProductComments/ProductComments';
import ProductComposition from 'components/ProductDetailsCarousel/ProductComposition/ProductComposition';
import ProductDescription from 'components/ProductDetailsCarousel/ProductDescription/ProductDescription';

import {
  DetailsListContainer,
  InfoButtonList,
  CustomNavLink,
} from './DetailsList.styled';

const DetailsList = ({ product }) => {
  const [productDescription, setProductDescription] = useState(true);
  const [isActiveDescription, setIsActiveDescription] = useState(true);
  const [isActiveComposition, setIsActiveComposition] = useState(false);
  const [isActiveComments, setIsActiveComments] = useState(false);
  const { fullDescription, ingredients, reviews } = product;
  const commentsRef = useRef(null);

  const scrollToComments = () => {
    setIsActiveComments(true);
    setIsActiveDescription(false);
    setIsActiveComposition(false);
    if (commentsRef.current) {
      const elementPosition = commentsRef.current.getBoundingClientRect().top;
      const offset = elementPosition - 100;
      window.scrollTo({ top: window.scrollY + offset, behavior: 'smooth' });
    }
  };

  const handleDescription = () => {
    setProductDescription(true);

    setIsActiveDescription(true);
    setIsActiveComposition(false);
    setIsActiveComments(false);
  };

  const handleComposition = () => {
    setProductDescription(false);

    setIsActiveComposition(true);
    setIsActiveDescription(false);
    setIsActiveComments(false);
  };

  return (
    <DetailsListContainer>
      <InfoButtonList>
        <CustomNavLink
          onClick={handleDescription}
          isActiveDescription={isActiveDescription}
        >
          Опис товару
        </CustomNavLink>

        <CustomNavLink
          onClick={handleComposition}
          isActiveComposition={isActiveComposition}
        >
          Склад
        </CustomNavLink>

        <CustomNavLink
          onClick={scrollToComments}
          isActiveComments={isActiveComments}
        >
          Відгуки
        </CustomNavLink>
      </InfoButtonList>

      {productDescription ? (
        <ProductDescription description={fullDescription} />
      ) : (
        <ProductComposition ingredients={ingredients} />
      )}

      <ProductComments forwardedRef={commentsRef} reviews={reviews} />
    </DetailsListContainer>
  );
};

export default DetailsList;
