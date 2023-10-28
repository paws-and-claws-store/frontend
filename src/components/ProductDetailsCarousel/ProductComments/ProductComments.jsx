import React from 'react';
import { ReviewsTitle } from './ProductComments.styled';
import { List } from '../Reviews/ListComments/List';

const ProductComments = ({forwardedRef}) => {
  return (
    <div ref={forwardedRef}>
      <ReviewsTitle>Відгуки</ReviewsTitle>
      <List />
    </div>
  );
};

export default ProductComments;
