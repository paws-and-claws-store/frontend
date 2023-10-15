import React from 'react';
import List from './List/List';

import { ReviewsTitle } from './Reviews.styled';

const Reviews = () => {
  return (
    <div id="sect2">
      <ReviewsTitle>Відгуки</ReviewsTitle>
      <List />
    </div>
  );
};

export default Reviews;
