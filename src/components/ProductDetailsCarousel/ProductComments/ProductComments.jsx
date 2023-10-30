import React from 'react';
import { ReviewsTitle } from './ProductComments.styled';
import { List } from '../Reviews/ListComments/List';

const ProductComments = ({forwardedRef, reviews}) => {
  return (
    <div ref={forwardedRef}>
      <ReviewsTitle>Відгуки</ReviewsTitle>
      <List reviews={reviews}/>
    </div>
  );
};

export default ProductComments;
