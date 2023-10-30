import React from 'react';
import ReviewsItem from '../ItemComments/ReviewsItem';
import { ReviewsList } from './List.styled';

export const List = ({reviews}) => {
  return (
    <ReviewsList>
      <ReviewsItem />
    </ReviewsList>
  );
};

