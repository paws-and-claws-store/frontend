import React from 'react';
import { Box } from './Home.styled';
import Loader from 'components/Loader/Loader';

export const PricesDrop = () => {
  return (
    <Box>
      <h1>Акції</h1>
      <Loader />
    </Box>
  );
};
