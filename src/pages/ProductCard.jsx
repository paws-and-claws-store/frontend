import React from 'react';
import { Box } from './Home.styled';
import { useParams } from 'react-router-dom';
import catalog from '../DB/catalog.json';

export const ProductCard = () => {
  const { id } = useParams();
  const obj = catalog.find(el => Number(el.id) === Number(id));

  console.table(obj);
  return (
    <Box>
      <h1>ProductCard</h1>

      <h2>{obj.foodName}</h2>
      <h3>{obj.brand}</h3>
      <img src={obj.image} alt={obj.name} width={300} />
    </Box>
  );
};
